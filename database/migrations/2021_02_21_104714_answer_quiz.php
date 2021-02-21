<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AnswerQuiz extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('answer_quiz', function (Blueprint $table) {
            $table->id();
            $table->dateTime('answered_at');
            $table->foreignId('user_id')->constrained()->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('quiz_id')->constrained()->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('question_id')->constrained()->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('answer_id')->constrained()->cascadeOnUpdate()->cascadeOnDelete();
            $table->boolean('correct')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
