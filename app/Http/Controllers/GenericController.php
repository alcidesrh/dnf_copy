<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\GenericResourceCollection;

class GenericController
{
    function list(Request $request) {

        $query = DB::table($request->table);

        return ($perPage = $request->get('per_page'))
        ? new GenericResourceCollection($query->paginate($perPage), $request->fields)
        : new GenericResourceCollection($query->get(), $request->fields);

    }
}
