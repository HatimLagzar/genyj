<?php

namespace App\Http\Controllers\Api\Order;

use App\Http\Controllers\Api\BaseController;
use App\Models\Order;
use App\Models\Product;
use App\Services\Core\Order\OrderService;
use App\Transformers\Order\OrderTransformer;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

class GetOrderController extends BaseController
{
    private OrderService $orderService;
    private OrderTransformer $orderTransformer;

    public function __construct(OrderService $orderService, OrderTransformer $orderTransformer)
    {
        $this->orderService = $orderService;
        $this->orderTransformer = $orderTransformer;
    }

    public function __invoke(string $id)
    {
        try {
            $order = $this->orderService->findById($id);
            if (!$order instanceof Order) {
                return $this->withError('Order not found!', Response::HTTP_NOT_FOUND);
            }

            $product = $order->getProduct();
            if (!$product instanceof Product) {
                return $this->withError('Product not found!', Response::HTTP_NOT_FOUND);
            }

            return $this->withSuccess([
                'order'        => $this->orderTransformer->transform($order),
            ]);
        } catch (Throwable $e) {
            Log::error($e->getMessage());

            return $this->withError('Internal error occurred, please retry later.');
        }
    }
}