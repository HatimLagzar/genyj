<?php

namespace App\Http\Controllers\Products;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Services\Core\Product\ProductService;
use App\Services\Domain\Product\DeleteProductService;
use Throwable;

class DestroyController extends Controller
{
    private DeleteProductService $deleteProductService;
    private ProductService $productService;

    public function __construct(ProductService $productService, DeleteProductService $deleteProductService)
    {
        $this->deleteProductService = $deleteProductService;
        $this->productService = $productService;
    }

    public function __invoke(string $id)
    {
        try {
            $product = $this->productService->findById($id);
            if (!$product instanceof Product) {
                return redirect()
                    ->route('products.list')
                    ->with('error', 'Product not found!');
            }

            $this->deleteProductService->delete($product);

            return redirect()
                ->route('products.list')
                ->with('success', 'Product deleted successfully.');
        } catch (Throwable $e) {
            return redirect('/')
                ->withInput()
                ->with('error', $e->getMessage());
        }
    }
}
