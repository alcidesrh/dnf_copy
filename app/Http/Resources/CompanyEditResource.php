<?php

namespace App\Http\Resources;

use App\Models\User;
use App\Http\Resources\GenericResource;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\GenericResourceCollection;

class CompanyEditResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
         $admin = $this->owner();
         $image = $this->image;

        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'address' => $this->address,
            'phone' => $this->phone,
            'active' => $this->active,
            'owner' => $admin instanceof User ? new GenericResource($admin, ['id', 'name', 'image']) : null,
            'image' => $image ? new GenericResource($image, ['id', 'name', 'url']) : null,
            'personal' => new GenericResourceCollection(User::where('role_id', '!=', User::getRole('agency'))->where('company_id', $this->id)->get(), ['id', 'name', 'image']),

        ];
    }
}
