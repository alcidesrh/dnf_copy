<?php

namespace App\Http\Resources;

use App\Http\Resources\GenericCollection;
use Illuminate\Http\Resources\Json\JsonResource;

class GenericResource extends JsonResource
{
    private $fields;

    public function __construct($query, $fields = [])
    {
        $this->fields = $fields;
        parent::__construct($query);
    }

    public function setFields(array $fields){
        $this->fields = $fields;
        return $this;
    }
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $return = [];
        
        foreach ($this->fields as $key => $value) {
            
            if($value == 'image'){
                $data = new GenericResource($this->{$value},['id', 'url']);
            }
            else $data = $this->{$value};

            if(\is_numeric($key))
             $return[$value] = $data;
            else 
             $return[$key] = $data; 
        }
        return $return ?? null;
    }
}
