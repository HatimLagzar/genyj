<?php

namespace App\Http\Controllers\Api\Products;

use App\Http\Controllers\Api\BaseController;
use App\Services\Core\Product\ProductService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Throwable;

class IndexController extends BaseController
{
    private ProductService $productService;

    public function __construct(ProductService $productService)
    {
        $this->productService = $productService;
    }

    public function __invoke(Request $request): JsonResponse
    {
        try {
            $products = $this->productService->getPaginated();

            return $this->withSuccess([
                'products' => $products
            ]);
        } catch (Throwable $e) {
            Log::error($e->getMessage());

            return $this->withError('Failed to fetch products!');
        }
    }
}
