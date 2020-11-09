<?php

namespace App\Toolbelt\DataStructure\LinkedList;

use App\Toolbelt\DataStructure\LinkedList\Node;

Class LinkedList
{
    protected $head = null;

    public function append($data)
    {
        // First Node added
        if ($this->head == null) {
            $this->head = new Node($data);
            return;
        }

        $current = $this->head;

        while ($current->next !== null) {
            $current = $current->next;
        }

        $current->next = new Node($data);
    }

    public function prepend($data)
    {
        $newHead = new Node($data);

        $newHead->next = $this->head;

        $this->head = $newHead;

    }

    public function deleteNode($data)
    {
        if($this->head == null) return;

        $current = $this->head;

        while($current->next != null) {
            if($current->next->data == $data) {
                $current->next = $current->next->next;
                return;
            }
            $current  = $current->next;
        }
    }
}