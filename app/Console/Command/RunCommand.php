<?php

namespace App\Console\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use App\Toolbelt\DataStructure\LinkedList\Node;
use App\Toolbelt\DataStructure\LinkedList\LinkedList;

class RunCommand extends Command
{
    // the name of the command (the part after "bin/console")
    protected static $defaultName = 'app:run';

    protected function configure()
    {
        // ...
    }

    /**
     * @param InputInterface $input
     * @param OutputInterface $output
     * @return int|void
     */
    protected function execute(InputInterface $input, OutputInterface $output)
    {

        $list = new LinkedList();

        $list->append("1");

        $list->append("2");

        $list->append("3");

        $list->deleteNode("2");

        dd($list);
    }
}