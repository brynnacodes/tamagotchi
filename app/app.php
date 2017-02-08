<?php
    date_default_timezone_set('America/Los_Angeles');
    require_once __DIR__."/../vendor/autoload.php";
    require_once __DIR__."/../src/tamagotchi.php";

    session_start();
    if (empty($_SESSION['tamagotchi_list'])) {
      $_SESSION['tamagotchi_list'] = [];
    }

    $app = new Silex\Application();

    $app->register(new Silex\Provider\TwigServiceProvider(), ['twig.path' => __DIR__.'/../views']);

    $app->get("/", function() use ($app) {
        return $app['twig']->render('newtama.html.twig');
    });

    $app->post("/home", function() use ($app) {
        $tamagotchi = new Tamagotchi($_POST['name']);
        $tamagotchi->save();
        return $app["twig"]->render("tamahome.html.twig", ["tamagotchi" => $tamagotchi]);
    });

    $app->post("/feed", function() use ($app) {
        $tamagotchi = Tamagotchi::getActiveTama();
        $tamagotchi->feed();
        return $app["twig"]->render("tamahome.html.twig", ["tamagotchi" => $tamagotchi]);
    });

    $app->post("/nap", function() use ($app) {
        $tamagotchi = Tamagotchi::getActiveTama();
        $tamagotchi->nap();
        return $app["twig"]->render("tamahome.html.twig", ["tamagotchi" => $tamagotchi]);
    });

    $app->post("/play", function() use ($app) {
        $tamagotchi = Tamagotchi::getActiveTama();
        $tamagotchi->play();
        return $app["twig"]->render("tamahome.html.twig", ["tamagotchi" => $tamagotchi]);
    });

    $app->get("/increment", function() use ($app) {
        $tamagotchi = Tamagotchi::getActiveTama();
        if ($tamagotchi->isDead()) {
            return $app["twig"]->render("dead.html.twig", ["tamagotchi" => $tamagotchi]);
        } else {
            $tamagotchi->increment();
            return $app["twig"]->render("bars.html.twig", ["tamagotchi" => $tamagotchi]);
        }
    });

    return $app;
 ?>
