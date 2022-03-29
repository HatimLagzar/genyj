<?php

namespace App\Http\Controllers\Products;

use App\Http\Controllers\Controller;
use App\Services\Core\Product\ProductService;
use Throwable;

class EditController extends Controller
{
    private ProductService $productService;

    public function __construct(ProductService $productService)
    {
        $this->productService = $productService;
    }

    public function __invoke(string $id)
    {
        try {
            $product = $this->productService->findById($id);

            return view('products.edit')
                ->with('product', $product);
        } catch (Throwable $e) {
            return redirect('/')
                ->with('error', $e->getMessage());
        }
    }
}
