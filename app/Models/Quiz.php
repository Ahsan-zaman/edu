<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Quiz extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'time_limit', 'desc', 'user_id', 'quiz_type', 'difficulty'];

    public function questions()
    {
        return $this->belongsToMany(Question::class);
    }
    public function answers()
    {
        return $this->belongsToMany(Answer::class)->where('user_id', Auth::user()->id);
    }
    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}
