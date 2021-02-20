<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;

    protected $fillable = ['question', 'details', 'answer', 'difficulty', 'topic_id'];

    public function answers()
    {
        return $this->belongsToMany(Answer::class);
    }
    public function answer()
    {
        return $this->belongsToMany(Answer::class, 'right_answer_question');
    }

    public function quizes()
    {
        return $this->belongsToMany(Quiz::class);
    }
}
