<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        return response($request->all(), 200);
    }


    public function signup(Request $request)
    {
        return response($request->all(), 200);
    }
}
