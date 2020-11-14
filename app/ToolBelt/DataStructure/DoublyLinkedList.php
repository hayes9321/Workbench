<?php

namespace App\Toolbelt\DataStructure;

class DoublyLinkedList
{
    public $head;

    public function __construct()
    {
        $this->head = null;
    }

    public function append($data)
    {
        if ($this->head == null) {
            $this->head = new Node($data);
            return;
        }

        $current = $this->head;

        while ($current->next != null) {
            $current = $current->next;
        }

        $current->next = new Node($data);
        $current->next->previous = $current;
    }

    /**
     * @return null
     */
    public function prepend($data)
    {
        $newHead = new Node($data);

        $newHead->next = $this->head;

        $newHead->next->previous = $newHead;

        $this->head = $newHead;
    }

    /**
     * @return null
     */
    public function deleteNode($data)
    {
        if ($this->head == null) return;

        if ($this->head->data == $data) {
            $this->head = $this->head->next;
            $this->head->previous = null;
            return;
        }
        
        $current = $this->head;

        while ($current->next != null) {
            if ($current->data == $data) {
                $current->next = $current->next->next;
                return;
            }
            $current = $current->next;
        }
    }

}

class Node
{
    public $data;
    public $next;
    public $previous;

    public function __construct($data)
    {
        $this->data = $data;
        $this->next = null;
        $this->previous = null;
    }
}

$doublyLinkedList = new DoublyLinkedList();

dd($doublyLinkedList);