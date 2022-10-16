<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class userController extends Controller
{
    public function user (){
        $query = DB::table('dbo.Table_1')->get();
        return $query;
    }
}
