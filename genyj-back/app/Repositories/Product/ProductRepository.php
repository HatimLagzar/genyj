<?php

namespace App\Repositories\Product;

use App\Models\Product;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;

class ProductRepository
{
    /**
     * @return Collection|Product[]
     */
    public function getAll(): Collection
    {
        return Product::query()
            ->orderBy(Product::CREATED_AT_COLUMN, 'DESC')
            ->get();
    }

    /**
     * @return LengthAwarePaginator|Product[]
     */
    public function getPaginated(): LengthAwarePaginator
    {
        return Product::query()
            ->orderBy(Product::CREATED_AT_COLUMN, 'DESC')
            ->paginate(1);
    }

    public function delete(string $id): bool
    {
        return Product::query()
            ->where(Product::ID_COLUMN, $id)
            ->delete() > 0;
    }

    public function findById(string $id): ?Product
    {
        return Product::query()
            ->where(Product::ID_COLUMN, $id)
            ->first();
    }

    public function create(array $attributes): Product
    {
        return Product::query()
            ->create($attributes);
    }

    public function update(string $id, array $attributes): bool
    {
        return Product::query()
            ->where(Product::ID_COLUMN, $id)
            ->update($attributes) > 0;
    }

    public function getFeatured()
    {
        return Product::query()
            ->orderBy(Product::VIEWS_COLUMN)
            ->limit(3)
            ->get();
    }
}
