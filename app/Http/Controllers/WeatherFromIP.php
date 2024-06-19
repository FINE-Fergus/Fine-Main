<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WeatherFromIP extends Controller
{
    public function GetWeather()
    {
        $ip = '';

        if(!empty($_SERVER['HTTP_CLIENT_IP'])) {  
            $ip = $_SERVER['HTTP_CLIENT_IP'];  
        }  
        elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {  
            $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];  
        }
        else{  
            $ip = $_SERVER['REMOTE_ADDR'];  
        } 
        
        if($ip == '127.0.0.1') {
            $ip = '208.67.222.222';
        }

        $latlong = explode(",", file_get_contents('https://ipapi.co/' . strval($ip) . '/latlong/'));
        $weather = file_get_contents('https://api.openweathermap.org/data/2.5/weather?lat=' . $latlong[0] . '&lon=' . $latlong[1] . '&units=metric&appid=b8fe248991eab024d62d7dd73eb0f19e');

        return $weather;
    }
}