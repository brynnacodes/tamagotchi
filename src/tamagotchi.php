<?php

class Tamagotchi
{
    private $name;
    private $hunger = 50;
    private $sleep = 50;
    private $attention = 50;

    function __construct($name)
    {
        $this->name = $name;
    }

    function get($property) {
      return $this->$property;
    }

    function save() {
      $_SESSION['tamagotchi_list'] = [];
      array_push($_SESSION["tamagotchi_list"], $this);
    }

    function feed()
    {
        $this->hunger -= 10;
    }

    function nap()
    {
        $this->sleep -= 10;
    }

    function play()
    {
        $this->attention -= 10;
    }

    function increment()
    {
        $this->hunger++;
        $this->sleep++;
        $this->attention++;
    }

    function isDead()
    {
      return ($this->hunger >= 100 || $this->sleep >= 100 || $this->attention >= 100);
    }

    static function getActiveTama() {
        $tamagotchi_list = $_SESSION["tamagotchi_list"];
        return $tamagotchi_list[0];
    }
}

?>
