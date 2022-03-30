<?php

namespace App\Services\Domain\Order;

use App\Models\Order;
use App\Services\Core\Order\OrderService;
use App\Services\Domain\Order\Exceptions\InvalidPayloadException;
use Illuminate\Support\Arr;

class CreateOrderService
{
    private OrderService $orderService;

    public function __construct(OrderService $orderService)
    {
        $this->orderService = $orderService;
    }

    /**
     * @throws InvalidPayloadException
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

        return $this->orderService->create($attributes);
    }
}