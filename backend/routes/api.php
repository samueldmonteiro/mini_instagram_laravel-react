<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', function (Request $request) {
    return response()->json(User::find(1));
});


Route::get('/ping', function () {
    return response()->json(['pong' => true]);
});
