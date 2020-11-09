<?php

namespace App\Training;

class Test
{
    protected $register = [
        'name' => 'test'
    ];

    public function __construct()
    {
        // ..
    }

    /*
    *  The description of the problem we are working on.
    */
    public function describe()
    {
        return [
            'description' => 'this'
        ];
    }

    public function run()
    {
        var_dump("here");exit;
    }

    public function unit()
    {

    }
}
