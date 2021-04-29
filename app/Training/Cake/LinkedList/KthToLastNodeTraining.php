<?php

namespace App\Training\Cake\LinkedList;

use App\Toolbelt\DataStructure\LinkedListNode;

class KthToLastNodeTraining
{
    /*
    |--------------------------------------------------------------------------
    | Training Description
    |--------------------------------------------------------------------------
    |
    | You have a linked list ↴ and want to find the kth to last node.
    |
    | Write a function kthToLastNode() that takes an integer k and the $head node of a singly-linked list,
    | and returns the kth to last node in the list.
    |
    */
    public function handle()
    {
        $a = new LinkedListNode("Angel Food");
        $b = new LinkedListNode("Bundt");
        $c = new LinkedListNode("Cheese");
        $d = new LinkedListNode("Devil's Food");
        $e = new LinkedListNode("Eccles");

        $a->setNext($b);
        $b->setNext($c);
        $c->setNext($d);
        $d->setNext($e);

        $listOne = $this->kthToLastNode(2, $a);

        dd($listOne);
    }

    /**
     * @param $k
     * @param $headNode
     */
    public function kthToLastNode($k, $headNode)
    {
        $currentNode = $headNode;
        $listLength = 0;

        while ($currentNode->getNext()) {
            $currentNode = $currentNode->getNext();
            $listLength++;
        }
        
        $targetSpot = $listLength - $k;

        $currentNode = $headNode;

        for ($i = 0; $i <= $targetSpot; $i++) {
            $currentNode = $currentNode->getNext();
        }
        return $currentNode;
    }
}
