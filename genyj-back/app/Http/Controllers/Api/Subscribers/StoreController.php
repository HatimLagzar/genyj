<?php

namespace App\Http\Controllers\Api\Subscribers;

use App\Http\Controllers\Api\BaseController;
use App\Http\Requests\CreateSubscriberRequest;
use App\Services\Core\Subscriber\SubscriberService;
use Illuminate\Support\Facades\Log;
use Throwable;

class StoreController extends BaseController
{
    private SubscriberService $subscriberService;

    public function __construct(SubscriberService $subscriberService)
    {
        $this->subscriberService = $subscriberService;
    }

    public function __invoke(CreateSubscriberRequest $request)
    {
        try {
            $this->subscriberService->create($request->all());

            return $this->withSuccess([
                'message' => 'You have been subscribed to our newsletter.'
            ]);
        } catch (Throwable $e) {
            Log::error($e->getMessage());

            return $this->withError('Internal error occurred, please retry later.');
        }
    }
}