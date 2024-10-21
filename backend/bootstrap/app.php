<?php

use App\Http\Middleware\ForceReceiveJson;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        api: __DIR__ . '/../routes/api.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->append(ForceReceiveJson::class);

    })
    ->withExceptions(function (Exceptions $exceptions) {

        // Auth exception
        $exceptions->render(function (AuthenticationException $e, Request $request) {
            if ($request->is('api/*'))
                return jsonError('Acesso não autorizado', [], 401);
        });


        // Not found route
        $exceptions->render(function (NotFoundHttpException $e, Request $request) {
            if ($request->is('api/*'))
                return jsonError('Endpoint não encontrado', [], 404);
        });
    })->create();
