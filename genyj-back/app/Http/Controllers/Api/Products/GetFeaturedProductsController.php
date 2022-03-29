<?php

namespace App\Http\Controllers\Api\Products;

use App\Http\Controllers\Api\BaseController;
use App\Services\Core\Product\ProductService;
use Illuminate\Support\Facades\Log;
use Throwable;

class GetFeaturedProductsController extends BaseController
{
    private ProductService $productService;

    public function __construct(ProductService $productService)
    {
        $this->productService = $productService;
    }

    public function __invoke()
    {
        try {
            $products = $this->productService->getFeatured();

            return $this->withSuccess([
                'message' => 'Featured products fetched successfully.',
                'products' => $products
            ]);
        } catch (Throwable $e) {
            Log::error($e->getMessage());

            return $this->withError('Internal error while getting featured products, please retry later!');
        }
    }
}