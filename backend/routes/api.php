<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', function (Request $request) {

    return response()->json(['name' => "Samuel Davi", 'email' => "samueldavi@protonmail.com"]);
});


Route::get('/ping', function () {
    return response()->json(['pong' => true]);
});
