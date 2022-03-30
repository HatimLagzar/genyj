<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Order extends ModelUuid
{
    use HasFactory;

    public const TABLE = 'orders';

    public const ID_COLUMN = 'id';
    public const PRODUCT_ID_COLUMN = 'product_id';
    public const SIZE_COLUMN = 'size';
    public const LENGTH_COLUMN = 'length';
    public const SLIM_COLUMN = 'slim';

    protected $fillable = [
        self::PRODUCT_ID_COLUMN,
        self::SIZE_COLUMN,
        self::LENGTH_COLUMN,
        self::SLIM_COLUMN
    ];

    public function getId(): string
    {
        return $this->getAttribute(self::ID_COLUMN);
    }

    public function getProductId(): string
    {
        return $this->getAttribute(self::PRODUCT_ID_COLUMN);
    }

    public function getSize(): int
    {
        return $this->getAttribute(self::SIZE_COLUMN);
    }

    public function getLength(): int
    {
        return $this->getAttribute(self::LENGTH_COLUMN);
    }

    public function getSlim(): int
    {
        return $this->getAttribute(self::SLIM_COLUMN);
    }
}
