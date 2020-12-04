<?php
use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;
date_default_timezone_set('America/Lima');
require_once "vendor/autoload.php";
$isDevMode = true;
$config = Setup::createYAMLMetadataConfiguration(array(__DIR__ . "/config/yaml"), $isDevMode);
$conn = array(
'host' => 'ec2-54-76-215-139.eu-west-1.compute.amazonaws.com',
'driver' => 'pdo_pgsql',
'user' => 'ruqpwocendgcek',
'password' => '1b92aa286e3fb3ddaabd88df511e9587ac3540931b594bb628ba8ef1795de039',
'dbname' => 'drfveo1ll66vf',
'port' => '5432'
);
$entityManager = EntityManager::create($conn, $config);
