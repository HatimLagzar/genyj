<?php

namespace App\Http\Controllers\Api\Order;

use App\Http\Controllers\Api\BaseController;
use App\Http\Requests\UpdatePaymentTypeRequest;
use App\Models\Order;
use App\Services\Core\Order\OrderService;
use Illuminate\Support\Facades\Log;
use Stripe\PaymentIntent;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

class UpdatePaymentTypeController extends BaseController
{
    private OrderService $orderService;

    public function __construct(OrderService $orderService)
    {
        $this->orderService = $orderService;
    }

    public function __invoke(UpdatePaymentTypeRequest $request, string $id)
    {
        try {
            $order = $this->orderService->findById($id);
            if (!$order instanceof Order) {
                return $this->withError('Order not found!', Response::HTTP_NOT_FOUND);
            }

            $this->orderService->update($order, [
                Order::PAYMENT_TYPE_COLUMN => $request->get('type')
            ]);

            return $this->withSuccess([
                'message' => 'Order status updated successfully.'
            ]);
        } catch (Throwable $e) {
            Log::error($e->getMessage());

            return $this->withError('Internal error occurred, please retry later!');
        }
    }

    public function isPaid(PaymentIntent $paymentIntent): bool
    {
        return $paymentIntent->status === 'succeeded';
    }
}