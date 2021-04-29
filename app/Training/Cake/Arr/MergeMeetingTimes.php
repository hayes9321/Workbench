<?php

namespace App\Training\Cake\Arr;

class MergeMeetingTimes
{
    /**
    * Write a function mergeRanges() that takes an array of multiple meeting
    * time ranges and returns an array of condensed ranges.
    * Do not assume the meetings are in order. The meeting times are coming from multiple teams.
    *
    * Write a solution that's efficient even when we can't put a nice upper bound on the numbers representing our time ranges.
    * Here we've simplified our times down to the number of 30-minute slots past 9:00 am.
    * But we want the function to work even for very large numbers, like Unix timestamps.
    * In any case, the spirit of the challenge is to merge meetings where startTime and endTime don't have an upper bound.
    */
    public function handle()
    {
        $meetings = [
            new Meeting(0, 1),
            new Meeting(4, 8),
            new Meeting(3, 5),
            new Meeting(10, 12),
            new Meeting(9, 10)
        ];

        dd($this->mergeRanges($meetings));
    }

   /**
    * Return the time ranges and returns an array of condensed ranges.
    */
    protected function mergeRanges($meetings)
    {
        // Need to have meetings
        if (count($meetings) < 1) return [];

        //return [new Meeting(0, 1), new Meeting(3, 8), new Meeting(9, 12)]
        usort($meetings, function($a, $b) {
            return $a->getStartTime() > $b->getStartTime();
        });

        $mergedMeetings = [$meetings[0]];

        for ($i = 1; $i < count($meetings); $i++) {
            $currentMeeting = $meetings[$i];
            $lastMergedMeeting = $mergedMeetings[count($mergedMeetings) - 1];

            if ($lastMergedMeeting->getEndTime() >= $currentMeeting->getStartTime()) {
              $latestEndTime = max($lastMergedMeeting->getEndTime(), $currentMeeting->getEndTime());
              $lastMergedMeeting->setEndTime($latestEndTime);
            } else {
                $mergedMeetings[] = $currentMeeting;
            }
        }

        return $mergedMeetings;
    }
}

class Meeting
{
    private $startTime;
    private $endTime;

    public function __construct($startTime, $endTime)
    {
        // number of 30 min blocks past 9:00 am
        $this->startTime = $startTime;
        $this->endTime = $endTime;
    }

    public function getStartTime()
    {
        return $this->startTime;
    }

    public function setStartTime($startTime)
    {
        $this->startTime = $startTime;
    }

    public function getEndTime()
    {
        return $this->endTime;
    }

    public function setEndTime($endTime)
    {
        $this->endTime = $endTime;
    }

    public function __toString()
    {
        return "($this->startTime, $this->endTime)";
    }
}
