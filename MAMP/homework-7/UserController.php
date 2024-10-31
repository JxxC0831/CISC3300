<?php
require_once 'UserModel.php';

class UserController {
    private $model;

    public function __construct() {
        $this->model = new UserModel();
    }

    public function displayHtmlPage() {
        include 'views/index.html';
    }

    public function getJsonData() {
        $users = $this->model->getAllUsers();
        header('Content-Type: application/json');
        echo json_encode($users);
    }
}
