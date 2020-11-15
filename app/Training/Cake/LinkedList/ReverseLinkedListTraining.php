<?php
namespace App\Training\Cake\LinkedList;

use App\Toolbelt\DataStructure\LinkedListNode;

class ReverseLinkedListTraining
{
    /*
    |--------------------------------------------------------------------------
    | Training Description
    |--------------------------------------------------------------------------
    |
    |   Write a function for reversing a linked list. ↴ Do it in place. ↴
    |
    |   Your function will have one input: the head of the list.
    |
    |   Your function should return the new head of the list.
    |
    |  Included is a sample linked list node class:
    |
    */
    public function handle()
    {
        // Setup
        $a = new LinkedListNode('A');
        $b = new LinkedListNode('B');
        $c = new LinkedListNode('C');
        $d = new LinkedListNode('D');
        $e = new LinkedListNode('E');

        $a->setNext($b);
        $b->setNext($c);
        $c->setNext($d);
        $d->setNext($e);

        // Execute
        $reversedList = $this->reverseList($a);
        dd($reversedList);
    }

    // Space complexity is O(1) and runtime is O(n)
    public function reverseList($headNode)
    {
        $currentNode = $headNode;
        $nextNode = null;
        $previousNode = null;

        while ($currentNode) {
            // set a reference to the next node to prevent a cycle
            $nextNode = $currentNode->getNext();

            // Set the current nodes next pointer to point the the previous node.
            $currentNode->setNext($previousNode);

            // move the pointers
            $previousNode = $currentNode;
            $currentNode = $nextNode;
        }
        return $previousNode;
    }
}