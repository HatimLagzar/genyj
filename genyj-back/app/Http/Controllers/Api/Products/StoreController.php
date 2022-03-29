<?php

namespace App\Http\Controllers\Api\Products;

use App\Http\Controllers\Api\BaseController;
use App\Services\Domain\Product\CreateProductService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

class StoreController extends BaseController
{
    private CreateProductService $createProductService;

    public function __construct(CreateProductService $createProductService)
    {
        $this->createProductService = $createProductService;
    }

    public function __invoke(Request $request)
    {
        try {
            $validation = Validator::make($request->all(), [
                'title'         => 'string|required',
                'price'         => 'numeric|required',
                'discount'      => 'numeric',
                'description'   => 'string|required',
                'thumbnail'     => 'image|required',
                'variants'     => 'required',
                'extraImages.*' => 'file|required'
            ]);

            if ($validation->fails()) {
                return $this->withError($validation->errors()->first(), Response::HTTP_UNPROCESSABLE_ENTITY);
            }

            $product = $this->createProductService->create($request->all());

            return response([
                'status'      => 200,
                'msg'         => 'Your product has been created successfully.',
                'product'     => $product,
                'variants'    => $product->getVariants(),
                'extraImages' => $product->getExtraImages()
            ]);
        } catch (Throwable $e) {
            return $this->withError('Failed to create product!');
        }
    }
}
