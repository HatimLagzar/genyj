<?php

namespace App\Http\Controllers\Api\Contact;

use App\Http\Controllers\Api\BaseController;
use App\Http\Requests\SendMailRequest;
use App\Services\Domain\Contact\ContactUsService;
use Illuminate\Support\Facades\Log;
use Throwable;

class ContactUsController extends BaseController
{

    private ContactUsService $contactUsService;

    public function __construct(ContactUsService $contactUsService)
    {
        $this->contactUsService = $contactUsService;
    }

    public function __invoke(SendMailRequest $request)
    {
        try {
            $this->contactUsService->send(
                $request->get('name'),
                $request->get('email'),
                $request->get('subject'),
                $request->get('message'),
            );

            return $this->withSuccess([
                'message' => 'Your message has been sent successfully.'
            ]);
        } catch (Throwable $e) {
            Log::error($e->getMessage());

            return $this->withError('Internal error occurred, please retry later!');
        }
    }
}