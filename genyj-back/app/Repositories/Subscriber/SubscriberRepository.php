<?php

namespace App\Repositories\Subscriber;

use App\Models\Subscriber;

class SubscriberRepository
{
    public function create(array $attributes): Subscriber
    {
        return Subscriber::query()
            ->create($attributes);
    }
}