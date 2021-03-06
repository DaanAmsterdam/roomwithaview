<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Room with a View</title>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}" type="text/css">
    <link rel="stylesheet" href="{{ asset('css/vue-style.css') }}" type="text/css">
    <script type="text/javascript">
        window.roomwav_listing_model = "{!! addslashes(json_encode($model)) !!}";
    </script>
</head>

<body>
    <div id="app">
    </div>

    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>