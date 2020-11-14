<?php

namespace App\Console\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Input\InputArgument;

class RunCommand extends Command
{
    protected static $defaultName = 'app:run:class';

    protected $classMap = [
        'LinkedListNodeTraining' => 'App\Training\Cake\LinkedList\LinkedListNodeTraining',
        'LinkedList' => 'App\Toolbelt\DataStructure\LinkedList',
        'DoublyLinkedList' => 'App\Toolbelt\DataStructure\DoublyLinkedList'
    ];

    protected function configure()
    {
        $this->addArgument('class', InputArgument::REQUIRED, 'Enter the class you would like to run. This command will call the classes handle method');
    }

    /**
     * @param InputInterface $input
     * @param OutputInterface $output
     * @return int|void
     */
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $className = $input->getArgument("class");

        $class = $this->aliasLookup($className);

        return (new $class())->handle();
    }

    private function aliasLookup($className)
    {
        return (array_key_exists($className, $this->classMap)) ? $this->classMap[$className] : dd("Class Not Found");
    }
}