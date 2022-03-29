<?php

namespace App\Http\Controllers\Api\Products;

use App\Http\Controllers\Api\BaseController;
use App\Models\Product;
use App\Services\Core\Product\ProductService;
use App\Services\Domain\Product\UpdateProductService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

class UpdateController extends BaseController
{
    private UpdateProductService $updateProductService;
    private ProductService $productService;

    public function __construct(UpdateProductService $updateProductService, ProductService $productService)
    {
        $this->updateProductService = $updateProductService;
        $this->productService = $productService;
    }

    public function __invoke(Request $request, string $id)
    {
        try {
            $validation = Validator::make($request->all(), [
                'title' => 'string|required',
                'price' => 'numeric|required',
                'discount' => 'numeric',
                'description' => 'string|required',
                'thumbnail' => 'image',
                'variants' => 'required',
                'extraImages.*' => 'file'
            ]);

            if ($validation->fails()) {
                return $this->withError($validation->errors()->first(), Response::HTTP_UNPROCESSABLE_ENTITY);
            }

            $product = $this->productService->findById($id);
            if (!$product instanceof Product) {
                return $this->withError('Product not found!', Response::HTTP_NOT_FOUND);
            }

            $product = $this->updateProductService->update($product, $request->all());

            return $this->withSuccess([
                'message' => 'Your product has been updated successfully.',
                'product' => $product,
                'variants' => $product->getVariants(),
                'extraImages' => $product->getExtraImages()
            ]);
        } catch (Throwable $e) {
            throw $e;
            return $this->withError('Failed to update product!');
        }
    }
}
