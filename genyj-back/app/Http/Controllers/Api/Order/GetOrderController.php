<?php

namespace App\Http\Controllers\Api\Order;

use App\Http\Controllers\Api\BaseController;
use App\Models\Order;
use App\Models\Product;
use App\Services\Core\Order\OrderService;
use App\Transformers\Order\OrderTransformer;
use Illuminate\Support\Facades\Log;
use Stripe\Stripe;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

class GetOrderController extends BaseController
{
    private OrderService $orderService;
    private OrderTransformer $orderTransformer;

    public function __construct(OrderService $orderService, OrderTransformer $orderTransformer)
    {
        $this->orderService = $orderService;
        $this->orderTransformer = $orderTransformer;
    }

    public function __invoke(string $id)
    {
        try {
            $order = $this->orderService->findById($id);
            if (!$order instanceof Order) {
                return $this->withError('Order not found!', Response::HTTP_NOT_FOUND);
            }

            $product = $order->getProduct();
            if (!$product instanceof Product) {
                return $this->withError('Product not found!', Response::HTTP_NOT_FOUND);
            }

            // This is your test secret API key.
            Stripe::setApiKey('sk_test_UgISPYubqAmVMgBaeCFQy2uc00U855Xkfe');

            $paymentIntent = \Stripe\PaymentIntent::create([
                'amount'                    => $this->calculateAmount($product),
                'currency'                  => 'MAD',
                'automatic_payment_methods' => [
                    'enabled' => true,
                ],
            ]);

            return $this->withSuccess([
                'order'        => $this->orderTransformer->transform($order),
                'clientSecret' => $paymentIntent->client_secret
            ]);
        } catch (Throwable $e) {
            Log::error($e->getMessage());

            return $this->withError('Internal error occurred, please retry later.');
        }
    }

    /**
     * @param Product|null $product
     * @return int
     */
    private function calculateAmount(Product $product): int
    {
        return $product->getDiscount() === 0
            ? $product->getPrice()
            : intval($product->getPrice() - ($product->getPrice() * ($product->getDiscount() / 100)));
    }
}