<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WeatherFromIP;

Route::get('/getweather', [WeatherFromIP::class, 'GetWeather']);
