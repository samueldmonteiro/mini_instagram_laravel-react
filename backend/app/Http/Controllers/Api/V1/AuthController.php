<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{

    public function login(LoginRequest $request)
    {
        $credentials = request(['email', 'password']);

        $token = Auth::attempt($credentials);
        if (!$token) return jsonError('Email e/ou Senha Incorreto(s)', [], 401);

        return json($this->respondWithToken($token), 'Login efetuado com sucesso');
    }

    public function me()
    {
        return json(Auth::user());
    }

    protected function respondWithToken($token)
    {
        return [
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => Auth::factory()->getTTL() * 60
        ];
    }
}
