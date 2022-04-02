<?php

namespace App\Http\Controllers\Api\Order;

use App\Http\Controllers\Api\BaseController;
use App\Models\Order;
use App\Services\Core\Order\OrderService;
use Illuminate\Support\Facades\Log;
use Stripe\PaymentIntent;
use Stripe\Stripe;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

class UpdateStatusController extends BaseController
{
    private OrderService $orderService;

    public function __construct(OrderService $orderService)
    {
        $this->orderService = $orderService;
    }

    public function __invoke(string $id)
    {
        try {
            $order = $this->orderService->findById($id);
            if (!$order instanceof Order) {
                return $this->withError('Order not found!', Response::HTTP_NOT_FOUND);
            }

            Stripe::setApiKey('sk_test_UgISPYubqAmVMgBaeCFQy2uc00U855Xkfe');

            $paymentIntent = PaymentIntent::retrieve($order->getStripePaymentId());

            $this->orderService->update($order, [
                Order::IS_PAID_COLUMN => $this->isPaid($paymentIntent)
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