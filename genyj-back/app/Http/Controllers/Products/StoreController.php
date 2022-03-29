<?php

namespace App\Http\Controllers\Products;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProductRequest;
use App\Services\Domain\Product\CreateProductService;
use App\Services\Domain\Product\Exceptions\FailedToSaveThumbnailException;
use App\Services\Domain\Product\Exceptions\InvalidPayloadException;
use Throwable;

class StoreController extends Controller
{
    private CreateProductService $createProductService;

    public function __construct(CreateProductService $createProductService)
    {
        $this->createProductService = $createProductService;
    }

    public function __invoke(StoreProductRequest $request)
    {
        try {
            $this->createProductService->create($request->all());

            return redirect()
                ->route('products.list')
                ->with('success', 'Product created successfully.');
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
