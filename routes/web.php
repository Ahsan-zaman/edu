<?php

use App\Http\Controllers\QuizController;
use App\Models\Exam;
use App\Models\Subject;
use App\Models\Topic;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// SEO Pages
Route::get('/', function () {
    return view('home', ['exams' => Exam::limit(9)->get()]);
});
Route::get('/exams/{id}', function ($examId) {
    return view('exam', ['exam' => Exam::whereId($examId)->first()]);
});
Route::get('/exams/{exam}/subjects/{subject}', function ($examId, $subjectId) {
    return view('subject', ['subject' => Subject::whereId($subjectId)->first(), 'exam' => $examId]);
});
Route::get('/exams/{exam}/subjects/{subject}/topics/{topic}', function ($examId, $subjectId, $topicId) {
    return view('topic', ['subject' => $subjectId, 'exam' => $examId, 'topic' => Topic::whereId($topicId)->first()]);
});
Route::get('/quizes/random', [QuizController::class, 'random']);
Route::get('/logout', function () {
    Auth::logout();
    return redirect('/login');
});

// SPA Pages
Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');
