<?php
class Person {
    private $name;
    private $lastname;
    private $age;
    private $hp;
    private $mother;
    private $father;

  function __construct($name, $lastname, $age, $mother = null, $father = null)
  {
    $this -> name = $name;
    $this -> lastname = $lastname;
    $this -> age = $age;
    $this -> mother = $mother;
    $this -> father = $father;
    $this -> hp = 100;
  }
  function sayHi($name) {
    return "Hi, $name, I`m ".$this->name;
  }
  function setHp($hp) {
    if ($this->hp + $hp >= 100) $this->hp = 100;
    else $this->hp = $this->hp + $hp;
  }
  function getHp() {
    return $this->hp;
  }
  function getName() {
    return $this -> name;
  }
  function getMother() {
    return $this -> mother;
  }
  function getFather() {
    return $this -> father;
  }
  function getLastname() {
    return $this -> lastname;
  }

  function getInfo() {
    return
    "<h3>A few words about myself:</h3><br>".
    "My Name is: ".$this->getName().
    "<br>My Lastname is: ".$this->getLastname().
    "<br>My Father is: ".$this->getFather()->getName().
    "<br>My Mother is: ".$this->getMother()->getName().
    "<br>My Grandmother is: ".$this->getMother()->getMother()->getName().", ".$this->getFather()->getMother()->getName().
    "<br>My Grandfather is: ".$this->getFather()->getFather()->getName().", ".$this->getMother()->getFather()->getName();
  }
}

$timur = new Person("Timur", "Ivanov", 63); 
$asya = new Person("Asya", "Bash", 71); 

$alex = new Person("Aleksandra", "Ivanova", 71); 
$anna = new Person("Anna", "Ryabova", 73); 



$alex = new Person("Alex", "Ivanov", 42, $asya, $timur);
$olga = new Person("Olga", "Ivanova", 42, $alex, $anna); 
$valera = new Person("Valera", "Ivanov", 15, $olga, $alex);


echo $valera->getInfo();