<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Note extends Model
{
    public static $rules = [
        'title' => 'required',
        'text' => 'required',
    ];

    protected $guarded = [];

    protected $casts = [
        'id' => 'integer',
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }

}
