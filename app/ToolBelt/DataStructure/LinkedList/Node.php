<?php

namespace App\Toolbelt\DataStructure\LinkedList;

class Node
{
    public $next;

    public $data;

    /**
     * Node constructor.
     * @param $data
     */
    public function __construct($data)
    {
        $this->data = $data;
        $this->next = null;
    }
}