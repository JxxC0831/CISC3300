<?php

// in the index file: 
// i. reference the controllers\UserController; namespace and instantiate an object of the UserController class, call the index method 
// ii. make sure to require your classes in the correct order, remember we need to 
//have already required any code that we are trying to make use of in a file before we require that file. You should see the contents of the 
// users associative array at the local host url.
require 'models/User.php';
require 'controllers/UserController.php';

use controllers\UserController;

$userController = new UserController();
$userController->index();


