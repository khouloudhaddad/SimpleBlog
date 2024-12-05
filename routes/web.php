<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return inertia('Home', ['name'=>'John']);
// });

Route::inertia('/', 'Home', ['name'=>'John']);

Route::get('/about', function(){
    return Inertia::render('About/About');
});
