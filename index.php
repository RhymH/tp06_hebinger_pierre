<?php
require './vendor/autoload.php';

use \Firebase\JWT\JWT;


// // Create and configure Slim app
$config = ['settings' => [
    'addContentLengthHeader' => false,
]];


$app = new \Slim\App($config);

// Define app routes
$app->post('/client', 'addClient');
$app->post('/login', 'loginClient');
$app->get('/catalogue', 'getCatalogue');

const JWT_SECRET = "MessageSecret";

$app->add(new Tuupola\Middleware\JwtAuthentication([
    "path" => "/",
    "secure" => false,
    "secret" => JWT_SECRET,
    "ignore" => ["/login", "/client"],
    "attribute" => "decoded_token_data",
    "algorithm" => ["HS256"],
    "error" => function ($response, $arguments) {
        $data = array('ERREUR' => 'ERREUR', 'ERREUR' => 'Auth Needed !');
        return $response->withHeader("Content-Type", "application/json")->getBody()->write(json_encode($data));
    }

]));

// Run app
$app->run();





function addClient($request,$response,$args) {
    $body = $request->getParsedBody();
    //$body['nom'] = "C'est passé";
    /*header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');*/

    return $response->withHeader("Content-Type", "application/json")->withJson ($body);
}


function getCatalogue($request,$response,$args) {
    $body = $request->getParsedBody();

    $token_jwt = $request->getAttribute("decoded_token_data");

    JWT::decode($token_jwt, JWT_SECRET, array('HS256'));


    //TODO
    return $response;
}

function loginClient($request,$response,$args) {

    $body = $request->getParsedBody();
    $body['nom'] = "Hebinger";
    $body['prenom'] = "Pierre";
    //TODO get in database

    $body['passwd'] = '';

    $useridentity = $body['mail'];

    $issuedAt = time();
    $expirationTime = $issuedAt + 65; // jwt valid for 65 seconds from the issued time
    $session = array(
    'useridentity' => $useridentity,
    'iat' => $issuedAt,

    'exp' => $expirationTime
    );
    $token_jwt = JWT::encode($session, JWT_SECRET, "HS256");

    $response = $response->withHeader("Authorization", "Bearer {$token_jwt}");

    return $response->withHeader("Content-Type", "application/json")->withJson ($body);
}




?>

