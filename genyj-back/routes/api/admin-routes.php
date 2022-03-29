<?php

use App\Http\Controllers\Api\Products\DestroyController as DeleteProductController;
use App\Http\Controllers\Api\Products\StoreController as CreateProductController;
use App\Http\Controllers\Api\Products\UpdateController as UpdateProductController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('products')
    ->group(function () {
        Route::post('/', CreateProductController::class);
        Route::put('{product}', UpdateProductController::class);
        Route::delete('{product}', DeleteProductController::class);
    });
