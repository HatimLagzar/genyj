<?php

use App\Http\Controllers\Api\Auth\VerifyController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\Products\CreateController as ShowCreateProductController;
use App\Http\Controllers\Products\DestroyController as DestroyProductController;
use App\Http\Controllers\Products\EditController as ShowEditProductController;
use App\Http\Controllers\Products\IndexController as ShowProductsController;
use App\Http\Controllers\Products\StoreController as StoreProductController;
use App\Http\Controllers\Products\UpdateController as UpdateProductController;
use App\Http\Controllers\ShowLoginPageController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/email/verify/{id}/{hash}', VerifyController::class)
	->name('verification.verify');

Route::middleware('auth')->group(function () {
    Route::get('/', function () {
        return view('dashboard');
    });

    Route::prefix('products')
        ->name('products.')
        ->group(function () {
            Route::get('/', ShowProductsController::class)->name('list');
            Route::get('create', ShowCreateProductController::class)->name('create');
            Route::post('/', StoreProductController::class)->name('store');
            Route::get('{product}/edit', ShowEditProductController::class)->name('edit');
            Route::put('{product}', UpdateProductController::class)->name('update');
            Route::delete('{product}', DestroyProductController::class)->name('delete');
        });
});

Route::get('login', ShowLoginPageController::class)->name('login');
Route::post('login', LoginController::class)->name('authenticate');
