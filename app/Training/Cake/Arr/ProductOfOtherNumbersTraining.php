<?php

namespace App\Training\Cake\Arr;

class ProductOfOtherNumbersTraining
{
    /*
    |--------------------------------------------------------------------------
    | Training Description
    |--------------------------------------------------------------------------
    |
    | You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.
    |
    | Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.
    |
    | For example, given:
    |
    |    [1, 7, 3, 4]
    |
    | your function would return:
    |
    |    [84, 12, 28, 21]
    |
    | by calculating:
    |
    |    [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]
    |
    | Here's the catch: You can't use division in your solution!
    |
    */


    public function handle()
    {
        $ints = [1, 7, 3, 4];

        $result = $this->getProductsOfAllIntsExceptAtIndex($ints);

        dd($result);
    }

    public function getProductsOfAllIntsExceptAtIndex($numbers)
    {
        $productsArray = [];

        for ($i = 0; $i < count($numbers); $i++) {
            $filterArray = $numbers; // new array, do not want to modify existing array.

            unset($filterArray[$i]); // remove the current value from the newly created array

            $calculatedProduct = array_product($filterArray); // calculate the product of the new array

            array_push($productsArray, $calculatedProduct); // push to the array that will be return.
        }

        return $productsArray;
    }
}