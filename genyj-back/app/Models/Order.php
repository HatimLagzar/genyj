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
    public const PHONE_COLUMN = 'phone';
    public const CITY_COLUMN = 'city';
    public const ADDRESS_L1_COLUMN = 'address_l1';
    public const ADDRESS_L2_COLUMN = 'address_l2';
    public const USER_ID_COLUMN = 'user_id';
    public const STRIPE_PAYMENT_ID_COLUMN = 'stripe_payment_id';
    public const IS_PAID_COLUMN = 'is_paid';

    protected $fillable = [
        self::PRODUCT_ID_COLUMN,
        self::SIZE_COLUMN,
        self::LENGTH_COLUMN,
        self::SLIM_COLUMN,
        self::USER_ID_COLUMN,
        self::STRIPE_PAYMENT_ID_COLUMN
    ];

    private ?Product $product = null;

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

    public function setProduct(Product $product): self
    {
        $this->product = $product;

        return $this;
    }

    public function getProduct(): ?Product
    {
        return $this->product;
    }

    public function getUserId(): ?string
    {
        return $this->getAttribute(self::USER_ID_COLUMN);
    }

    public function getStripePaymentId(): ?string
    {
        return $this->getAttribute(self::STRIPE_PAYMENT_ID_COLUMN);
    }
}
