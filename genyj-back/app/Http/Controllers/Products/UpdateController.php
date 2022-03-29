<?php

namespace App\Http\Controllers\Products;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateProductRequest;
use App\Models\Product;
use App\Services\Core\Product\ProductService;
use App\Services\Domain\Product\Exceptions\FailedToSaveThumbnailException;
use App\Services\Domain\Product\Exceptions\InvalidPayloadException;
use App\Services\Domain\Product\UpdateProductService;
use Throwable;

class UpdateController extends Controller
{
    private UpdateProductService $updateProductService;
    private ProductService $productService;

    public function __construct(UpdateProductService $updateProductService, ProductService $productService)
    {
        $this->updateProductService = $updateProductService;
        $this->productService = $productService;
    }

    public function __invoke(UpdateProductRequest $request, string $id)
    {
        try {
            $product = $this->productService->findById($id);
            if (!$product instanceof Product) {
                return redirect()
                    ->route('products.list')
                    ->with('error', 'Product not found!');
            }

            $this->updateProductService->update($product, $request->all());

            return redirect()
                ->route('products.list')
                ->with('success', 'Product updated successfully.');
        } catch (InvalidPayloadException|FailedToSaveThumbnailException $e) {
            return redirect()
                ->back()
                ->withInput()
                ->with('error', $e->getMessage());
        } catch (Throwable $e) {
            return redirect('/')
                ->withInput()
                ->with('error', $e->getMessage());
        }
    }
}
