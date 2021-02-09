<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email|exists:users,email|max:3',
            'password' => 'required|string'
        ]);
        return response($request->all(), 200);
    }


    public function signup(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string',
            'role' => 'required|string|in:student,parent,teacher',
            'email' => 'required|email',
            'password' => 'required|string|confirmed'
        ]);
        return response($request->all(), 200);
    }
}
