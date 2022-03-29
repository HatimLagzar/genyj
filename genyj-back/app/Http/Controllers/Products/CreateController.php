<?php

namespace App\Http\Controllers\Products;

use App\Http\Controllers\Controller;
use App\Services\Core\Product\ProductService;
use Throwable;

class CreateController extends Controller
{
    private ProductService $productService;

    public function __construct(ProductService $productService)
    {
        $this->productService = $productService;
    }

    public function __invoke()
    {
        try {
            $products = $this->productService->getPaginated();

            return view('products.create')
                ->with('products', $products);
        } catch (Throwable $e) {
            return redirect('/')
                ->with('error', $e->getMessage());
        }
    }
}
