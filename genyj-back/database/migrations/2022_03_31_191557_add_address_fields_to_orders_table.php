<?php

use App\Models\Order;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddAddressFieldsToOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->string(Order::PHONE_COLUMN)->nullable();
            $table->string(Order::CITY_COLUMN)->nullable();
            $table->string(Order::ADDRESS_L1_COLUMN)->nullable();
            $table->string(Order::ADDRESS_L2_COLUMN)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->removeColumn(Order::PHONE_COLUMN);
            $table->removeColumn(Order::CITY_COLUMN);
            $table->removeColumn(Order::ADDRESS_L1_COLUMN);
            $table->removeColumn(Order::ADDRESS_L2_COLUMN);
        });
    }
}
