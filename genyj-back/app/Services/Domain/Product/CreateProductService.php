<?php

namespace App\Services\Domain\Product;

use App\Models\Product;
use App\Services\Core\Product\ProductService;
use App\Services\Domain\Product\Exceptions\FailedToSaveThumbnailException;
use App\Services\Domain\Product\Exceptions\InvalidPayloadException;
use App\Services\Domain\Product\Exceptions\InvalidProductVariantsException;
use App\Services\Domain\ProductImage\CreateProductImagesService;
use App\Services\Domain\ProductVariant\CreateProductVariantsService;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;

class CreateProductService
{
    private ProductService $productService;
    private CreateProductVariantsService $createProductVariantsService;
    private CreateProductImagesService $uploadProductImagesService;

    public function __construct(
        ProductService $productService,
        CreateProductVariantsService $createProductVariantsService,
        CreateProductImagesService $uploadProductImagesService
    ) {
        $this->productService = $productService;
        $this->createProductVariantsService = $createProductVariantsService;
        $this->uploadProductImagesService = $uploadProductImagesService;
    }

    /**
     * @throws InvalidPayloadException
     * @throws FailedToSaveThumbnailException
     * @throws InvalidProductVariantsException
     */
    public function create(array $attributes): Product
    {
        if (Arr::has($attributes, [
                'title',
                'price',
                'discount',
                'description',
                'thumbnail',
                'variants'
            ]) === false) {
            throw new InvalidPayloadException();
        }

        $attributes = Arr::only($attributes, [
            'title',
            'price',
            'discount',
            'description',
            'thumbnail',
            'variants',
            'extraImages'
        ]);

        $title = filter_var($attributes['title'], FILTER_SANITIZE_STRING);
        $price = filter_var($attributes['price'], FILTER_SANITIZE_NUMBER_FLOAT);
        $discount = filter_var($attributes['discount'], FILTER_SANITIZE_NUMBER_FLOAT);
        $description = filter_var($attributes['description'], FILTER_SANITIZE_STRING);
        $thumbnail = $attributes['thumbnail'];
        $thumbnailFileName = $thumbnail->hashName();

        $variants = json_decode($attributes['variants']);
        if ($variants === false) {
            throw new InvalidProductVariantsException();
        }

        if (!Storage::exists('public/products_thumbnails')) {
            Storage::makeDirectory('public/products_thumbnails');
        }

        if (!$thumbnail->storeAs('public/products_thumbnails', $thumbnailFileName)) {
            throw new FailedToSaveThumbnailException();
        }

        $product = $this->productService->create([
            Product::TITLE_COLUMN => $title,
            Product::PRICE_COLUMN => $price,
            Product::DISCOUNT_COLUMN => $discount,
            Product::DESCRIPTION_COLUMN => $description,
            Product::THUMBNAIL_COLUMN => $thumbnailFileName,
        ]);

        $this->createProductVariantsService->create($product, $variants);

        if (Arr::has($attributes, 'extraImages')) {
            $extraImages = $attributes['extraImages'];
            $this->uploadProductImagesService->upload($product, $extraImages);
        }

        return $this->productService->findById($product->getId());
    }
}