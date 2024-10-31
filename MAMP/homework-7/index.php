<?php
require_once 'UserController.php';

$controller = new UserController();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (strpos($uri, '/index.php/users') !== false) {  
        header('Access-Control-Allow-Origin: *'); 
        $controller->getJsonData(); 
    } 
    else {
        $controller->displayHtmlPage();
    }
}