<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\CategoryListResource;
use App\Http\Resources\GenericResourceCollection;

class ProductController
{
    function listCategories(Request $request) {
 
        return CategoryListResource::collection(Category::where('parent_id', null)->get());

    }

    function category(Request $request) {
 
        return new CategoryListResource(Category::find($request->id));

    }
}
