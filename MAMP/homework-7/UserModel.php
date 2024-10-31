<?php

class UserModel {
    public function getAllUsers() {
        return [
            ['id' => 1, 'name' => 'Alice', 'grade' => 'A'],
            ['id' => 2, 'name' => 'Bob', 'grade' => 'B'],
            ['id' => 3, 'name' => 'Charlie', 'grade' => 'C'],
        ];
    }
}
