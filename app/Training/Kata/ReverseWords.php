<?php

/*
|--------------------------------------------------------------------------
| Description
|--------------------------------------------------------------------------
|
| Complete the function that accepts a string parameter, and reverses each word in the string.
| All spaces in the string should be retained.
|
| Examples
|
| "This is an example!" ==> "sihT si na !elpmaxe"
| "double  spaces"      ==> "elbuod  secaps"
|
*/

// My solution
function reverseString($str) {
    $newStr = [];
    $str = explode(" ", $str);
    foreach ($str as $s) {
        array_push($newStr, strrev($s));
    }
    return implode(" ", $newStr);
}

//optimized
function reverseWords($str) {
    return implode(' ', array_reverse(explode(' ', strrev($str)))) ;
}
var_dump(reverseWords('hello world'));exit;


class MyTestCases extends TestCase
{
    public function testBasicTests() {
      $this->assertEquals('ehT kciuq nworb xof spmuj revo eht yzal .god', reverseWords('The quick brown fox jumps over the lazy dog.'));
      $this->assertEquals('elppa', reverseWords('apple'));
      $this->assertEquals('a b c d', reverseWords('a b c d'));
      $this->assertEquals('elbuod  decaps  sdrow', reverseWords('double  spaced  words'));
      $this->assertEquals('desserts stressed', reverseWords('stressed desserts'));
      $this->assertEquals('olleh olleh', reverseWords('hello hello'));
    }

    private function sol($str) {
      return implode(' ', array_map(function($item) {
        return strrev($item);
      }, explode(' ', $str)));
    }

    public function testRandomTests() {
      $words = ["Kata", "should", "always", "have", "random", "tests", "case", "to", "avoid", "hardocoded", "solution.", "This", "is", "a", "rule!", 'Sure', 'it', 'is!', 'Why', 'would', 'it', 'not', 'be?'];
      shuffle($words);

      for ($i = 0; $i < 100; $i++) {
        $str = implode(str_repeat(" ", rand(1, 2)), array_slice($words, 0, rand(1, count($words))));
        $this->assertEquals($this->sol($str), reverseWords($str));
      }
    }
}
