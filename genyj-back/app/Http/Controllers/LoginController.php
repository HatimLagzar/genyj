<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use App\Services\Domain\Auth\AuthService;

class LoginController extends Controller
{
    private AuthService $authService;

    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;
    }

    public function __invoke(LoginRequest $request)
    {
        try {
            $isLoggedIn = $this->authService->login($request->get('email'), $request->get('password'));
            if ($isLoggedIn === false) {
                return redirect()
                    ->route('login')
                    ->with('error', 'Incorrect creds!');
            }

            return redirect('/')
                ->with('success', 'Logged in successfully.');
        } catch (\Throwable $e) {
            return redirect()
                ->route('login')
                ->with('error', $e->getMessage());
        }
    }
}
