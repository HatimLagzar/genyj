<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckUserIsAdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param Request $request
     * @param Closure $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $user = auth('api')->user();

        if (!($user instanceof User) || $user->getRole() !== User::ADMIN_USER_ROLE) {
            return response(
                [
                    'message' => 'Unauthorized'
                ],
                Response::HTTP_UNAUTHORIZED
            );
        }

        return $next($request);
    }
}
