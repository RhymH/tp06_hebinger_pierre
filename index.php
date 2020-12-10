<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;


use Tuupola\Middleware\HttpBasicAuthentication;
use \Firebase\JWT\JWT;

require __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/bootstrap.php';

$app = AppFactory::create();

function  addHeaders (Response $response) : Response {
    $response = $response
    ->withHeader("Content-Type", "application/json");

    return $response;
}


function createJwt (Response $response) : Response {
    $userid = "emma";
    $email = "emma@emma.fr";
    $issuedAt = time();
    $expirationTime = $issuedAt + 3600; // jwt valid for 3600 seconds from the issued time
    $payload = array(
        'userid' => $userid,
        'iat' => $issuedAt,
        'exp' => $expirationTime
    );
    $token_jwt = JWT::encode($payload,JWT_SECRET, "HS256");
    $response = $response->withHeader("Authorization", "Bearer {$token_jwt}");
    return $response;
}

const JWT_SECRET = "MET02-CNAM-HEBINGER";

// API Nécessitant un Jwt valide
$app->get('/auth/{login}', function (Request $request, Response $response, $args) {
    global $entityManager;

    $login = $args['login'];

    $utilisateurRepository = $entityManager->getRepository('Utilisateur');
    $utilisateur = $utilisateurRepository->findOneBy(array('login' => $login));
    if ($utilisateur) {
        $data = array('nom' => $utilisateur->getNom(), 'prenom' => $utilisateur->getPrenom());
        $response = addHeaders ($response);
        $response = createJwT ($response);
        $response->getBody()->write(json_encode($data));
    } else {
        $response = $response->withStatus(401);
    }

    return $response;
});

// API Nécessitant un Jwt valide
$app->post('/register', function (Request $request, Response $response, $args) {
    global $entityManager;

    $err=false;

    $body = $request->getParsedBody();
    $login = $body ['login'] ?? "";
    $pass = $body ['pass'] ?? "";
    $nom = $body ['nom'] ?? "";
    $prenom = $body ['prenom'] ?? "";
    $adresse = $body ['adresse'] ?? "";
    $ville = $body ['ville'] ?? "";
    $pays = $body ['pays'] ?? "";
    $tel = $body ['tel'] ?? "";
    $mail = $body ['mail'] ?? "";
    $civilite = $body ['civilite'] ?? "";



    if (!$err) {

        $utilisateurRepository = $entityManager->getRepository('Utilisateur');
        $utilisateur = $utilisateurRepository->findOneBy(array('login' => $login, 'password' => $pass));
        //existe deja ?
        if($utilisateur and $login == $utilisateur->getLogin()){
            $response->getBody()->write(json_encode($body));
            $response = $response->withStatus(401);
        }else{

            $client = new Utilisateur();
            $client->setNom($nom);
            $client->setPrenom($prenom);
            $client->setPassword($pass);
            $client->setLogin($login);

            $client->setAdresse($adresse);
            $client->setVille($ville);
            $client->setPays($pays);
            $client->setTel($tel);
            $client->setMail($mail);
            $client->setCivilite($civilite);

            $entityManager->persist($client);
            $entityManager->flush();

            $response->getBody()->write(json_encode($body));
        }

    }else {
        $response->getBody()->write(json_encode($body));
        $response = $response->withStatus(400);
    }

    return $response;
});


// APi d'authentification générant un JWT
$app->post('/login', function (Request $request, Response $response, $args) {
    global $entityManager;
    $err=false;
    $body = $request->getParsedBody();
    $login = $body ['login'] ?? "";
    $pass = $body ['pass'] ?? "";

    if (!preg_match("/[a-zA-Z0-9]{1,20}/",$login))   {
        $err = true;
    }
    if (!preg_match("/[a-zA-Z0-9]{1,20}/",$pass))  {
        $err=true;
    }
    if (!$err) {
        $utilisateurRepository = $entityManager->getRepository('Utilisateur');
        $utilisateur = $utilisateurRepository->findOneBy(array('login' => $login, 'password' => $pass));
        if ($utilisateur and $login == $utilisateur->getLogin() and $pass == $utilisateur->getPassword()) {
            $response = addHeaders ($response);
            $response = createJwT ($response);
            $data = array(
              'nom' => $utilisateur->getNom(),
              'prenom' => $utilisateur->getPrenom(),
              'adresse' => $utilisateur->getAdresse(),
              'ville' => $utilisateur->getVille(),
              'pays' => $utilisateur->getPays(),
              'tel' => $utilisateur->getTel(),
              'mail' => $utilisateur->getMail(),
              'civilite' => $utilisateur->getCivilite()
            );


            $response->getBody()->write(json_encode($data));
        } else {
            $response->getBody()->write(json_encode($body));
            $response = $response->withStatus(401);
        }
    } else {
        $response->getBody()->write(json_encode($body));
        $response = $response->withStatus(400);
    }

    return $response;
});


$app->get('/all', function (Request $request, Response $response, $args) {
  //permet d'afficher le nombre de comptes
    global $entityManager;

    $utilisateurRepository = $entityManager->getRepository('Utilisateur');
    $utilisateur = $utilisateurRepository->findAll();

    $response->getBody()->write(json_encode($utilisateur));

    return $response;
});

// Middleware de validation du Jwt
$app->add(new Tuupola\Middleware\JwtAuthentication([
    "path" => "/",
    "secure" => false,
    "secret" => JWT_SECRET,
    "ignore" => ["/login", "/register", "/all"],
    "attribute" => "decoded_token_data",
    "algorithm" => ["HS256"],
    "error" => function ($response, $arguments) {
        $data = array('ERREUR' => 'ERREUR', 'ERREUR' => 'Auth Needed !');
        return $response->withHeader("Content-Type", "application/json")->getBody()->write(json_encode($data));
    }

]));

// Run app
$app->run();
