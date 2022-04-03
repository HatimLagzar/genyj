@php
/** @var \App\Models\User $user */
@endphp

@component('mail::message')
# Message from a {{$name}} (email: {{$email}}) (subject: {{$subject}})

{{$message}}

Thanks,<br>
{{ config('app.name') }}
@endcomponent
