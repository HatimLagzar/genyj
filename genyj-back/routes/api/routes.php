<?php

use App\Http\Controllers\Api\Auth\LoginController;
use App\Http\Controllers\Api\Auth\RefreshController;
use App\Http\Controllers\Api\Auth\RegisterController;
use App\Http\Controllers\Api\Products\GetFeaturedProductsController;
use App\Http\Controllers\Api\Products\GetProductController;
use App\Http\Controllers\Api\Products\IndexController as ProductsIndexController;
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

Route::post('register', RegisterController::class);
Route::post('login', LoginController::class);
Route::middleware(['auth:api'])
    ->group(function () {
        Route::post('refresh', RefreshController::class);
    });

Route::prefix('products')
    ->group(function () {
        Route::get('/', ProductsIndexController::class);
        Route::get('featured', GetFeaturedProductsController::class);
        Route::get('{product}', GetProductController::class);
    });
