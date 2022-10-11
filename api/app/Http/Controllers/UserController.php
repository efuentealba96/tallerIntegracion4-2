<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class UserController extends Controller
{
    public function viewUser(){
        $query = DB::table('dbo.usuario')->get();
        return $query;
    }
}
