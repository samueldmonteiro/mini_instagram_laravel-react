<?php

use App\Http\Controllers\Api\V1\AuthController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', function (Request $request) {

    return response()->json(['name' => "Samuel Davi", 'email' => "samueldavi@protonmail.com"]);
});


Route::get('/ping', function () {
    return response()->json(['pong' => true]);
});


Route::prefix('v1')->name('api.v1.')->group(function () {

    Route::controller(AuthController::class)->prefix('auth')->name('auth.')->group(function () {

        Route::post('/login', 'login')->name('login');
        Route::get('/me', 'me')->name('me')->middleware('auth:api');
    });
});
