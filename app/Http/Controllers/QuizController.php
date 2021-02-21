<?php

namespace App\Http\Controllers;

use App\Http\Resources\QuestionResource;
use App\Http\Resources\QuizFullResource;
use App\Http\Resources\QuizResource;
use App\Models\Answer;
use App\Models\Question;
use App\Models\Quiz;
use App\Models\Topic;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class QuizController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response(QuizResource::collection(Auth::user()->quizes), 200);
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
     * @param  \App\Models\Quiz  $quiz
     * @return \Illuminate\Http\Response
     */
    public function show(Quiz $quize)
    {
        return response(new QuizFullResource($quize), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Quiz  $quiz
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Quiz $quiz)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Quiz  $quiz
     * @return \Illuminate\Http\Response
     */
    public function destroy(Quiz $quiz)
    {
        //
    }

    /**
     * Generate a random quiz for the user
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function random(Request $request)
    {
        // return response($request->all());
        $topic = Topic::whereId($request->topic)->withCount('questions')->first();
        $q = $topic->questions()->inRandomOrder()->where('difficulty', $request->difficulty)->limit(10)->get();

        $quiz = Quiz::create([
            'name' => 'Random '. $topic->name,
            'time_limit' => null,
            'desc' =>
            '<ul class="list-disc list-inside">
                <li>
                    You should complete this quiz in one session — However you can leaveand start from where you left.
                </li>
                <li>
                    This is a random quiz generated with AI.
                </li>
                <li>
                    You can find your progress and results in "My Quizes" section. 
                </li>
            </ul>',
            'user_id' => Auth::user()->id,
            'quiz_type' => 'Random',
            'difficulty' => $request->difficulty
        ]);
        $quiz->questions()->sync($q);
        $quiz->users()->attach(Auth::user()->id);
        return redirect('/quiz/'.$quiz->id);
    }
    /**
     * Save user answer for the quiz question
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Quiz  $quiz
     * @return \Illuminate\Http\Response
     */
    public function answer(Request $request, Quiz $quiz)
    {
        $this->validate($request, [
            'question_id' => 'required|integer|exists:questions,id',
            'answer_id' => 'required|integer|exists:answers,id'
        ]);
        $question = $quiz->questions()->where('questions.id', $request->question_id)->first();
        // return \response($question->answer);
        DB::table('answer_quiz')->updateOrInsert(
            [
                'user_id' => Auth::user()->id,
                'quiz_id' => $quiz->id,
                'question_id' => $request->question_id
            ],
            [
                'answer_id' => $request->answer_id,
                'correct' => $request->answer_id == $question->answer->first()->pivot->answer_id
            ]
        );
        
        return response('', 200);
    }
}
