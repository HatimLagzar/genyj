<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'title'             => ['required', 'string', 'max:255'],
            'price'             => ['required', 'numeric'],
            'discount'          => ['required', 'numeric'],
            'description'       => ['required', 'string'],
            'variants'          => ['required'],
            'thumbnail'         => ['required', 'image'],
            'extraImages.*'     => ['nullable', 'image'],
        ];
    }
}
