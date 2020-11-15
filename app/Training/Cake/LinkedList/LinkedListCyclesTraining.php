<?php

namespace App\Training\Cake\LinkedList;

use App\Toolbelt\DataStructure\LinkedListNode;

class LinkedListCyclesTraining
{
    /*
    |--------------------------------------------------------------------------
    | Training Description
    |--------------------------------------------------------------------------
    |
    | You have a singly-linked list ↴ and want to check if it contains a cycle.
    |
    | A cycle occurs when a node’s next points back to a previous node in the list.
    | The linked list is no longer linear with a beginning and end—instead, it cycles through a loop of nodes.
    |
    | Write a function containsCycle() that takes the first node in a singly-linked list
    | and returns a boolean indicating whether the list contains a cycle.
    |
    */
    public function handle()
    {
        $a = new LinkedListNode('A');
        $b = new LinkedListNode('B');
        $c = new LinkedListNode('C');
        $d = new LinkedListNode('D');
        $e = new LinkedListNode('E');

        // CycleSet
        $a->setNext($b);
        $b->setNext($c);
        $c->setNext($d);
        $d->setNext($e);
        $e->setNext($c);

        $listOne = $this->containsCycle($a);

        $aa = new LinkedListNode('AA');
        $bb = new LinkedListNode('BB');
        $cc = new LinkedListNode('CC');
        $dd = new LinkedListNode('DD');
        $ee = new LinkedListNode('EE');

        // No Cycle
        $aa->setNext($bb);
        $bb->setNext($cc);
        $cc->setNext($dd);
        $dd->setNext($ee);

        $listTwo = $this->containsCycle($aa);

        dd($listOne, $listTwo);
    }

    /*
    | We keep two pointers to nodes (we'll call these “runners”), both starting at the first node.
    | Every time $slowRunner moves one node ahead, $fastRunner moves two nodes ahead.
    |
    | If the linked list has a cycle, $fastRunner will "lap" (catch up with) $slowRunner, and they will momentarily equal each other.
    | If the list does not have a cycle, $fastRunner will reach the end.
    */
    public function containsCycle($firstNode)
    {
        $pointerOne = $firstNode;
        $pointerTwo = $firstNode;

        while ($pointerOne && $pointerTwo->getNext()) {

            $pointerOne = $pointerOne->getNext();
            $pointerTwo = $pointerTwo->getNext()->getNext();

            if ($pointerOne === $pointerTwo) {
                return true;
            }
        }
        return false;
    }
}