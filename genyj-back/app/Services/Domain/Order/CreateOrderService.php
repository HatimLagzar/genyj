<?php

namespace App\Services\Domain\Order;

use App\Models\Order;
use App\Models\Product;
use App\Services\Core\Order\OrderService;
use App\Services\Core\Product\ProductService;
use App\Services\Domain\Order\Exceptions\InvalidPayloadException;
use App\Services\Domain\Product\Exceptions\ProductNotFoundException;
use Illuminate\Support\Arr;
use Stripe\Exception\ApiErrorException;

class CreateOrderService
{
    private OrderService $orderService;
    private ProductService $productService;

    public function __construct(OrderService $orderService, ProductService $productService)
    {
        $this->orderService = $orderService;
        $this->productService = $productService;
    }

    /**
     * @throws InvalidPayloadException
     * @throws ProductNotFoundException
     * @throws ApiErrorException
     */
    public function create(array $attributes): Order
    {
        if (
            Arr::has(
                $attributes,
                [
                    Order::PRODUCT_ID_COLUMN,
                    Order::SIZE_COLUMN,
                    Order::LENGTH_COLUMN,
                    Order::SLIM_COLUMN,
                ]
            ) === false
        ) {
            throw new InvalidPayloadException();
        }

        $product = $this->productService->findById($attributes[Order::PRODUCT_ID_COLUMN]);
        if (!$product instanceof Product) {
            throw new ProductNotFoundException();
        }

        return $this->orderService->create($attributes);
    }
}