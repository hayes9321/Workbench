<?php

namespace App\Training\Cake\Arr;

class AppleStockTraining
{
    /*
    |--------------------------------------------------------------------------
    | Training Description
    |--------------------------------------------------------------------------
    |
    | First, I wanna know how much money I could have made yesterday if I'd been trading Apple stocks all day.
    |
    | So I grabbed Apple's stock prices from yesterday and put them in an array called $stockPrices, where:
    |
    | The indices are the time (in minutes) past trade opening time, which was 9:30am local time.
    | The values are the price (in US dollars) of one share of Apple stock at that time.
    | So if the stock cost $500 at 10:30am, that means $stockPrices[60] = 500.
    |
    | Write an efficient function that takes $stockPrices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.
    |
    | For example:
    |
    |   $stockPrices = [10, 7, 5, 8, 11, 9];
    |
    |   getMaxProfit($stockPrices);
    |   // returns 6 (buying for $5 and selling for $11)
    |
    | No "shorting"—you need to buy before you can sell. Also, you can't buy and sell in the same time step—at least 1 minute has to pass.
    |
    */
    public function handle()
    {
        $stockPrices = [10, 7, 5, 8, 11, 9];

        $maxProfit = $this->getMaxProfit($stockPrices);

        dd($maxProfit);
    }

    public function getMaxProfit($stockPrices)
    {
        if (count($stockPrices) < 2) {
            dd("Need more than 2 prices");
        }

        $minPrice = $stockPrices[0];
        $maxProfit = $stockPrices[1] - $stockPrices[0];

        for ($i = 1; $i < count($stockPrices); $i++) {
            $current = $stockPrices[$i];

            $potentialProfit = $current - $minPrice;

            $maxProfit = max($maxProfit, $potentialProfit);

            $minPrice = min($minPrice, $current);
        }
        return $maxProfit;
    }
}
