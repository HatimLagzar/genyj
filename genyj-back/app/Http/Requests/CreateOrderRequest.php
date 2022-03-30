<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateOrderRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'product_id' => ['required', 'string'],
            'size'       => ['required', 'numeric'],
            'length'     => ['required', 'numeric'],
            'slim'       => ['required', 'numeric'],
        ];
    }
}
