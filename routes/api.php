<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ExamController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\SubjectController;
use App\Http\Controllers\TopicController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', [AuthController::class,'login']);
Route::post('/signup', [AuthController::class,'signup']);

Route::apiResources([
    'subjects' => SubjectController::class
]);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/quiz/answer/{quiz}', [QuizController::class,'answer']);
    Route::apiResources([
        'exams' => ExamController::class,
        'topics' => TopicController::class,
        'quizes' => QuizController::class
    ]);


    // Added Teacher only middleware later
    Route::apiResource('question', QuestionController::class);
});
