<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Role;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index() {
        $users = User::with('role')
        ->where('id', '!=', Auth::id())
        ->paginate(10);
        return Inertia::render('Users/Index', [
            'users' => $users,
        ]);
    }
}
