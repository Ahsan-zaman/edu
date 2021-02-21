<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class QuizResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $answers = $this->answers;
        $correct = $this->answers()->wherePivot('correct', 1)->get();
        $questions = $this->questions;
        return [
            'progress' => floor(($answers->count()/$questions->count())*100),
            'name' => $this->name,
            'marks' => $correct->count(),
            'questions' => QuestionResource::collection($this->questions),
            'count' => $this->questions->count(),
            'time_limit' => $this->time_limit,
            'completed_in' => 0,
            'difficulty' => ucfirst($this->difficulty),
            'id' => $this->id,
        ];
    }
}
