<?php

namespace App\Training\Cake\LinkedList;

class LinkedListNodeTraining
{
    /*
    |--------------------------------------------------------------------------
    | Description
    |--------------------------------------------------------------------------
    |
    | Delete a node from a singly-linked list, ↴ given only a variable pointing to that node.
    |
    | Use the class below
    |
    */
    public function handle()
    {
        // SETUP
        $a = new LinkedListNode('A');
        $b = new LinkedListNode('B');
        $c = new LinkedListNode('C');

        $a->setNext($b);
        $b->setNext($c);

        // RUN
        $this->deleteNode($b);

        dd($a);
    }

    // Solution: space and time complexity o(1)
    public function deleteNode($node)
    {
        // get the input node's next node, the one we want to skip to
        $nextNode = $node->getNext();

        if ($nextNode) {
            // replace the input node's value and pointer with the next
            // node's value and pointer. the previous node now effectively
            // skips over the input node
            $node->setValue($nextNode->getValue());
            $node->setNext($nextNode->getNext());
        } else {
            // eep, we're trying to delete the last node!
            throw new Exception("Can't delete the last node with this technique!");
        }
    }
}

class LinkedListNode
{
    private $value;
    private $next = null;

    public function __construct($value)
    {
        $this->value = $value;
    }

    public function getNext()
    {
        return $this->next;
    }

    public function setNext($next)
    {
        $this->next = $next;
    }

    public function getValue()
    {
        return $this->value;
    }

    public function setValue($value)
    {
        $this->value = $value;
    }
}