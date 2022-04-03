<?php

use App\Http\Controllers\Api\Auth\LoginController;
use App\Http\Controllers\Api\Auth\RefreshController;
use App\Http\Controllers\Api\Auth\RegisterController;
use App\Http\Controllers\Api\Contact\ContactUsController;
use App\Http\Controllers\Api\Order\CreateOrderController;
use App\Http\Controllers\Api\Order\GetOrderController;
use App\Http\Controllers\Api\Order\GetOrderWithPaymentIntentController;
use App\Http\Controllers\Api\Order\SaveAddressController;
use App\Http\Controllers\Api\Order\UpdatePaymentTypeController;
use App\Http\Controllers\Api\Order\UpdateStatusController;
use App\Http\Controllers\Api\Products\GetFeaturedProductsController;
use App\Http\Controllers\Api\Products\GetProductController;
use App\Http\Controllers\Api\Products\IndexController as ProductsIndexController;
use App\Http\Controllers\Api\Subscribers\StoreController as SubscribeNewsletterController;
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

Route::prefix('order')
    ->group(function () {
        Route::post('/', CreateOrderController::class);
        Route::get('{order}', GetOrderController::class);
        Route::get('{order}/paymentIntent', GetOrderWithPaymentIntentController::class);
        Route::post('{order}/address', SaveAddressController::class);
        Route::put('{order}/status', UpdateStatusController::class);
        Route::post('{order}/paymentType', UpdatePaymentTypeController::class);
    });

Route::post('contact-us', ContactUsController::class);
Route::post('subscribe', SubscribeNewsletterController::class);