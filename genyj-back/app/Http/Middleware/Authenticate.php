<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Auth\Middleware\Authenticate as Middleware;

class Authenticate extends Middleware
{
	public function handle($request, Closure $next, ...$guards)
	{
		try {
			$this->authenticate($request, $guards);
		} catch (\Exception $exception) {
			if ($request->expectsJson()) {
				return response([
					'status' => 401,
					'msg' => $exception->getMessage()
				]);
			}
		}

		return $next($request);
	}

	/**
	 * Get the path the user should be redirected to when they are not authenticated.
	 *
	 * @param \Illuminate\Http\Request $request
	 * @return string|null
	 */
	protected function redirectTo($request)
	{
		if (! $request->expectsJson()) {
			return '/login';
		}
	}
}
