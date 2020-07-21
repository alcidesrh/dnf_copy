<?php

namespace App\Http\Resources;

use App\Http\Resources\GenericResource;
use App\Http\Resources\UserChildrenResource;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\GenericResourceCollection;

class UserEditResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'last_name' => $this->last_name,
            'email' => $this->email,
            'phone'=> $this->phone,
            'image' => $this->image ? new GenericResource($this->image, ['id', 'name', 'url']) : null,
            'children' => $this->children ? new GenericResourceCollection($this->children, ['id', 'name', 'image']) : null,
            'parent' => $this->parent ? new GenericResource($this->parent, ['id', 'name', 'image']) : null,
            'address' => $this->address,
            'birthday' => $this->birthday,
            'title' => $this->title,
            'active' => $this->active,
            'licensed' => $this->licensed,
            'commission_rate' => $this->commission_rate,
            'role' => new GenericResource($this->role, ['id', 'name', 'slug']),
            'company_id' => $this->company->id ?? null, 

        ];
    }
}
