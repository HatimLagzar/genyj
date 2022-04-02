<?php

namespace App\Http\Controllers\Api\Order;

use App\Http\Controllers\Api\BaseController;
use App\Http\Requests\CreateOrderRequest;
use App\Models\User;
use App\Services\Domain\Order\CreateOrderService;
use Illuminate\Support\Facades\Log;
use Throwable;

class CreateOrderController extends BaseController
{
    private CreateOrderService $createOrderService;

    public function __construct(CreateOrderService $createOrderService)
    {
        $this->createOrderService = $createOrderService;
    }

    public function __invoke(CreateOrderRequest $request)
    {
        try {
            $authenticatedUser = auth()->guard('api')->user();
            if ($authenticatedUser instanceof User) {
                $order = $this->createOrderService->create($request->all(), $authenticatedUser);
            } else {
                $order = $this->createOrderService->create($request->all());
            }

            return $this->withSuccess([
                'message' => 'Order created successfully.',
                'order' => $order,
            ]);
        } catch (Throwable $e) {
            Log::error($e->getMessage());

            return $this->withError('Internal error occurred, please retry later.');
        }
    }
}