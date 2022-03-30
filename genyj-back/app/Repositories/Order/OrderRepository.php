<?php

namespace App\Repositories\Order;

use App\Models\Order;

class OrderRepository
{
    public function create(array $attributes): Order
    {
        return Order::query()
            ->create($attributes);
    }
}
