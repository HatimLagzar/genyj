<?php

namespace App\Http\Controllers\Api\Order;

use App\Http\Controllers\Api\BaseController;
use App\Http\Requests\SaveAddressRequest;
use App\Models\Order;
use App\Services\Core\Order\OrderService;
use App\Services\Core\User\UserService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
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
                Order::PHONE_COLUMN => $request->get('phone'),
                Order::CITY_COLUMN => $request->get('city'),
                Order::ADDRESS_L1_COLUMN => $request->get('address'),
                Order::ADDRESS_L2_COLUMN => $request->get('address2'),
            ]);

            return $this->withSuccess([
                'message' => 'Address saved to order successfully!'
            ]);
        } catch (Throwable $e) {
            Log::error($e->getMessage());

            return $this->withError('Internal error occurred, please retry later.');
        }
    }
}