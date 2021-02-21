<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class QuizFullResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $q = $this->questions;
        return [
            [
                'topic' => $this->name,
                'q_count' => $q->count(),
                'time_limit' => $this->time_limit,
                'desc' => $this->desc
            ],
            QuestionResource::collection($q)
        ];
    }
}
