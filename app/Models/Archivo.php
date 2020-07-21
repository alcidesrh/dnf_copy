<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class Archivo extends Model
{
    protected $fillable = [
        'nombre', 'ext', 'path'
    ];
    protected $hidden = ["created_at", "updated_at", "fileable_id", "fileable_id_type"];

    public function fileable()
    {
        return $this->morphTo();
    }

    public function setData(UploadedFile $file)
    {

        $this->nombre = $file->getClientOriginalName();
        $this->ext = $file->extension();
        $this->path = $file->store('/', ['disk' => 'files']);
        return $this;
    }

    public function delete(array $data = [])
    {

        if ($path = $this->path) {
            try {
                Storage::disk('files')->delete($path);
            } catch (\Exception $exception) {

            }
        }
        return parent::delete();
    }
}
