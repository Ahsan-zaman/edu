<?php

namespace App\Http\Controllers;

use App\Http\Resources\QuestionResource;
use App\Models\Topic;
use Illuminate\Http\Request;

class TopicController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Topic  $topic
     * @return \Illuminate\Http\Response
     */
    public function show(Topic $topic)
    {
        // return response(QuestionResource::collection($topic->questions()->inRandomOrder()->get()), 200);
        $q = $topic->questions()->inRandomOrder()->get();
        $q_count = $q->count();
        $time_limit = [
            $q_count*1*60,
            $q_count*1.5*60,
            $q_count*2*60,
            null
        ];
        return response([[
            'topic' => $topic->name,
            'q_count' => $q_count,
            'time_limit' => $time_limit[random_int(0, 3)]
        ],QuestionResource::collection($q)], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Topic  $topic
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Topic $topic)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Topic  $topic
     * @return \Illuminate\Http\Response
     */
    public function destroy(Topic $topic)
    {
        //
    }
}
