<?php

namespace App\Http\Controllers\Api\Products;

use App\Http\Controllers\Api\BaseController;
use App\Models\Product;
use App\Services\Core\Product\ProductService;
use App\Services\Domain\Product\DeleteProductService;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

class DestroyController extends BaseController
{
    private DeleteProductService $deleteProductService;
    private ProductService $productService;

    public function __construct(DeleteProductService $deleteProductService, ProductService $productService)
    {
        $this->deleteProductService = $deleteProductService;
        $this->productService = $productService;
    }

    public function __invoke(Request $request, string $id)
    {
        try {
            $product = $this->productService->findById($id);
            if (!$product instanceof Product) {
                return $this->withError('Product not found!', Response::HTTP_NOT_FOUND);
            }

            $this->deleteProductService->delete($product);

            return $this->withSuccess([
                'message' => 'Your product has been deleted successfully.'
            ]);
        } catch (Throwable $e) {
            return $this->withError('Failed to delete product!');
        }
    }
}
