@extends('layout.app-noauth')
@section('content')
  <form action="{{ route('authenticate') }}" method="POST" class="d-block mx-auto"
    style="max-width: 500px; margin-top: 15%">
    @csrf
    <div class="form-group mb-2">
      <label for="emailInput">Email Address</label>
      <input type="email" name="email" class="form-control" id="emailInput">
    </div>
    <div class="form-group mb-2">
      <label for="passwordInput">Password</label>
      <input type="password" name="password" class="form-control" id="passwordInput">
    </div>
    <button type="submit" class="btn btn-primary">Login</button>
  </form>
@endsection
