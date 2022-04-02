<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SaveAddressRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'phone'    => ['required', 'regex:/^(0|\+212)[5-8]\d{8}$/'],
            'city'     => ['required', 'string'],
            'address'  => ['required', 'string'],
            'address2' => ['nullable', 'string'],
        ];
    }
}
