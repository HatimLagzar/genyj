<?php

namespace App\Transformers\Order;

use App\Models\Order;
use App\Models\Product;
use App\Transformers\Product\ProductTransformer;

class OrderTransformer
{
    private ProductTransformer $productTransformer;

    public function __construct(ProductTransformer $productTransformer)
    {
        $this->productTransformer = $productTransformer;
    }

    public function transform(Order $order): array
    {
        return [
            'id'      => $order->getId(),
            'product' => $order->getProduct() instanceof Product
                ? $this->productTransformer->transform($order->getProduct())
                : null,
            'size'    => $order->getSize(),
            'length'  => $order->getLength(),
            'slim'    => $order->getSlim()
        ];
    }
}