<?php

namespace App\Http\Controllers\Api\Order;

use App\Http\Controllers\Api\BaseController;
use App\Http\Requests\SaveAddressRequest;
use App\Models\Order;
use App\Services\Core\Order\OrderService;
use App\Services\Core\User\UserService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Stripe\Customer;
use Stripe\PaymentIntent;
use Stripe\Stripe;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

class SaveAddressController extends BaseController
{
    private OrderService $orderService;
    private UserService $userService;

    public function __construct(OrderService $orderService, UserService $userService)
    {
        $this->orderService = $orderService;
        $this->userService = $userService;
    }

    public function __invoke(SaveAddressRequest $request, string $id)
    {
        try {
            $order = $this->orderService->findById($id);
            if (!$order instanceof Order) {
                return $this->withError('Order not found!', Response::HTTP_NOT_FOUND);
            }

            $this->orderService->update($order, [
                Order::PHONE_COLUMN      => $request->get('phone'),
                Order::CITY_COLUMN       => $request->get('city'),
                Order::ADDRESS_L1_COLUMN => $request->get('address'),
                Order::ADDRESS_L2_COLUMN => $request->get('address2'),
            ]);

            if ($order->getStripePaymentId() !== null) {
                // This is your test secret API key.
                Stripe::setApiKey('sk_test_UgISPYubqAmVMgBaeCFQy2uc00U855Xkfe');

                PaymentIntent::update($order->getStripePaymentId(), [
                    'customer' => Customer::create([
                        'email'   => $request->get('email'),
                        'phone'   => $request->get('phone'),
                        'address' => [
                            'line1' => $request->get('address'),
                            'line2' => $request->get('address2'),
                            'city'  => $request->get('city'),
                        ],
                    ])
                ]);
            }

            return $this->withSuccess([
                'message' => 'Address saved to order successfully!'
            ]);
        } catch (Throwable $e) {
            Log::error($e->getMessage());

            return $this->withError('Internal error occurred, please retry later.');
        }
    }
}