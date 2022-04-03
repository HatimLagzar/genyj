<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Subscriber extends ModelUuid
{
    use HasFactory;

    public const ID_COLUMN = 'id';
    public const EMAIL_COLUMN = 'email';

    protected $fillable = [
        self::EMAIL_COLUMN
    ];
}
