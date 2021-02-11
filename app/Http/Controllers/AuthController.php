<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email|exists:users,email',
            'password' => 'required|string'
        ]);

        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            return response($request->all(), 200);
        }

        return response([
            'message' => 'The provided credentials do not match our records.',
        ], 404);
    }


    public function signup(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string',
            'role' => 'required|string|in:student,parent,teacher',
            'email' => 'required|email|unique:users,email',
            'password' => [
                'required',
                'string',
                'confirmed',
                'min:8',// must be at least 8 characters in length
                'regex:/[a-zA-Z]/',// must contain at least one letter
                // 'regex:/[A-Z]/',// must contain at least one uppercase letter
                'regex:/[0-9]/',// must contain at least one digit
                // 'regex:/[@$!%*#?&]/',// must contain a special character
                'confirmed'
            ],
        ]);
        $user = User::create([
            'name'=> $request->name,
            'role'=> $request->role,
            'email'=> $request->email,
            'password'=> bcrypt($request->password)
        ]);
        return response($user, 200);
    }
}
