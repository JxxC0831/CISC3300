<?php
namespace models;

class User{
    public function getAllUsers() {
        return [
            ['id' => 1, 'name' => 'AA'],
            ['id' => 2, 'name' =>'BB'],
            ['id' => 3, 'name' =>'CC'],
        ];
    }
}