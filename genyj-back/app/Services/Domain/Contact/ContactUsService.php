<?php

namespace App\Services\Domain\Contact;

use Illuminate\Support\Facades\Mail;

class ContactUsService
{
    public function send(string $name, string $email, string $subject, string $message): bool
    {
        $subject = $name . ' || ' . $email . ' || ' . $subject;

        return \mail(env('MAIL_FROM_ADDRESS'), $subject, htmlentities($message));
    }
}