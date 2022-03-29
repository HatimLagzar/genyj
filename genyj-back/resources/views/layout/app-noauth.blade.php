<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport"
    content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>@yield('GenYJ Administration')</title>
  <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>

<body>
  <div class="container">
    @if (session('success'))
      <div class="alert alert-success my-5" role="alert">
        {{ session('success') }}
      </div>
    @endif

    @if (session('error'))
      <div class="alert alert-danger my-5" role="alert">
        {{ session('error') }}
      </div>
    @endif

    @yield('content')
  </div>
  <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>
