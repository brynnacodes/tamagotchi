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
        if ($this->hunger >= 10) {
            $this->hunger -= 10;
        } else {
            $this->hunger = 0;
        }
    }

    function nap()
    {
      if ($this->sleep >= 10) {
          $this->sleep -= 10;
      } else {
          $this->sleep = 0;
      }
    }

    function play()
    {
      if ($this->attention >= 10) {
          $this->attention -= 10;
      } else {
          $this->attention = 0;
      }
    }

    function increment()
    {
        $this->hunger++;
        $this->sleep++;
        $this->attention++;
    }

    function isDead()
    {
      return (($this->hunger == 100) || ($this->sleep == 100) || ($this->attention == 100));
    }

    static function getActiveTama() {
        $tamagotchi_list = $_SESSION["tamagotchi_list"];
        return $tamagotchi_list[0];
    }
}

?>
