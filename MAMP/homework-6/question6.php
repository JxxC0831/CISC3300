<?php

$associativeArray = [
    "key1" => "First Value",
    "key2" => "Second Value",
    "key3" =>"Third Value",
    "key4" => "Fourth Value",
    "key5" => "Fifth Value",
];

foreach($associativeArray as $key => $value) {
    echo $key . " : " . $value;
    echo '<br>';
}

function myFunction(string $title, string $description = "none") : String {
    return $title . " : " . $description;
}

echo myFunction("My Title", "My Description");
echo '<br>';
echo myFunction("Dr.","Hello! PHD student");


