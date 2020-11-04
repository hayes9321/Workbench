<?php

namespace App\Concept\Recursion\ConvertLinkedListToString;

class Node {
    public $data, $next;
    public function __construct($data, $next = NULL) {
        $this->data = $data;
        $this->next = $next;
    }
}
