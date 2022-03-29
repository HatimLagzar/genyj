<?php

namespace App\Http\Controllers\Api\Products;

use App\Http\Controllers\Api\BaseController;
use App\Models\Product;
use App\Services\Core\Product\ProductService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

class GetProductController extends BaseController
{
    private ProductService $productService;

    public function __construct(ProductService $productService)
    {
        $this->productService = $productService;
    }

    public function __invoke(Request $request, string $id): JsonResponse
    {
        try {
            $product = $this->productService->findById($id);
            if (!$product instanceof Product) {
                return $this->withError('Product not found!', Response::HTTP_NOT_FOUND);
            }

            return $this->withSuccess([
                'message' => 'Product fetched successfully.',
                'product' => $product
            ]);
        } catch (Throwable $e) {
            Log::error($e->getMessage());

            return $this->withError('Failed to fetch product!');
        }
    }
}
