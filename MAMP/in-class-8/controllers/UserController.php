<?php

namespace controllers;

use models\User;

class UserController{
    public function index(){
        $user = new User();
        $users = $user->getAllUsers();
        var_dump($users);
    }
}