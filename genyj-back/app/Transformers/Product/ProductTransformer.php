<?php

namespace App\Transformers\Product;

use App\Models\Product;

class ProductTransformer
{
    public function transform(Product $product): array
    {
        return [
            'id'                       => $product->getId(),
            'title'                    => $product->getTitle(),
            'description'              => $product->getDescription(),
            'thumbnail'                => env('APP_URL') . '/storage/products_thumbnails/' . $product->getThumbnail(),
            'price'                    => $product->getPrice(),
            'priceFormatted'           => $product->getPriceFormatted() . ' MAD',
            'discount'                 => $product->getDiscount(),
            'priceDiscountedFormatted' => ($product->getPriceFormatted() - ($product->getPriceFormatted() * $product->getDiscount()) / 100) . ' MAD',
            'variants'                 => $product->getVariants(),
            'extraImages'              => $product->getExtraImages(),
        ];
    }
}