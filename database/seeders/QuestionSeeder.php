<?php

namespace Database\Seeders;

use App\Models\Question;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class QuestionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $questions = [
            [
                'details' => '
                    <code>
                        <p>set1 = set([\'apples\', \'bananas\', \'pears\', \'apples\'])</p>
                        <p>set2 = {\'apples\', \'oranges\', \'limes\'}</p>
                        <p>print(set2 - set1)</p>
                    </code>
                ',
                'q' => 'What is the output for the following Python code ?',
                'answer' => Str::slug("{'oranges', 'limes'}"),
                'answers' => [
                    "{'bananas', 'pears'}",
                    "{'oranges', 'limes'}",
                    "{'apples', 'oranges', 'limes'}",
                    "None of them"
                ],
                'topic' => 2
            ],
            [
                'details' => '
                    <code>
                        <p>set1 = set([\'apples\', \'bananas\', \'pears\', \'apples\'])</p>
                        <p>set2 = {\'apples\', \'oranges\', \'limes\'}</p>
                        <p>print(set1 ^ set2)</p>
                    </code>
                ',
                'q' => 'What is the output of the above code ?',
                'answer' => Str::slug("{'pears', 'bananas', 'limes', 'oranges'}"),
                'answers' => [
                    "{'limes', 'bananas'}",
                    "{'limes', 'oranges'}",
                    "{'bananas', 'pears'}",
                    "{'pears', 'bananas', 'limes', 'oranges'}"
                ],
                'topic' => 2
            ],
            [
                'details' => '
                <img src="https://res.cloudinary.com/ahsan-zaman/image/upload/v1613220636/Screenshot_2021-02-13_155022_iggfub.png" width="100%">
                ',
                'q' => 'Which type of data transmission encoding is given below ?',
                'answer' => Str::slug("XML"),
                'answers' => [
                    "XML",
                    "JSON",
                    "CSV",
                    "YAML"
                ],
                'topic' => 2
            ],
            [
                'details' => '
                <img src="https://res.cloudinary.com/ahsan-zaman/image/upload/v1613221271/Screenshot_2021-02-13_160059_m8bvgr.png" width="100%">
                ',
                'q' => 'What is the output of the above code ?',
                'answer' => Str::slug("['ab', 'cd', 8, 'pq', 'mn']"),
                'answers' => [
                    "['mn']",
                    "['ab', 'cd', 8, 'pq', 'mn']",
                    "['ab', 'cd', 8, 'pq]",
                    "None of these"
                ],
                'topic' => 2
            ],
            [
                'details' => '',
                'q' => 'Which architecture is suitable to extract and view settled (not frequently updated) data from selected points of view ?',
                'answer' => Str::slug("OLAP"),
                'answers' => [
                    "OLTP",
                    "OLAP",
                    "DSP",
                    "All of these"
                ],
                'topic' => 1
            ],
            [
                'details' => '',
                'q' => 'Which tool load data from local file or from one or more web addresses/URLs, and cut and paste text directly ?',
                'answer' => Str::slug("Open Refine"),
                'answers' => [
                    "Origami",
                    "Open Refine",
                    "SQL",
                    "None of them"
                ],
                'topic' => 2
            ],
            [
                'details' => '',
                'q' => 'In the "six Vs" for describing the scale of data, ________ refers to how fast new data is generated and has to be processed ?',
                'answer' => Str::slug("Velocity"),
                'answers' => [
                    "Velocity",
                    "Veracity",
                    "Volume",
                    "Variety"
                ],
                'topic' => 1
            ],
            [
                'details' => '',
                'q' => 'In which scale, the numbers have the rank ordering as per Stevens proposed system ?',
                'answer' => Str::slug("Ordinal"),
                'answers' => [
                    "Nominal",
                    "Ordinal",
                    "Interval",
                    "Ratio"
                ],
                'topic' => 2
            ],
            [
                'details' => '',
                'q' => 'Data produced as a by-product of some other activity is known as ________ ?',
                'answer' => Str::slug("Exhaust"),
                'answers' => [
                    "Exhaust",
                    "Transient",
                    "Captured",
                    "Derived"
                ],
                'topic' => 2
            ],
            [
                'details' => '
                    <code>
                        <p>set1 = set([\'cabbage\', \'tomato\', \'carrot\', \'cucumber\'])</p>
                        <p>set2 = {\'cabbage\', \'cucumber\', \'potato\'}</p>
                        <p>print(set1 - set2)</p>
                    </code>
                ',
                'q' => 'What is the output for the following Python code ?',
                'answer' => Str::slug("{'tomato', 'carrot'}"),
                'answers' => [
                    "{'tomato', 'carrot'}",
                    "{'cabbage', 'cucumber'}",
                    "{'potato', 'carrot'}",
                    "None of these"
                ],
                'topic' => 2
            ],
            [
                'details' => '
                    <code>
                        <p>tuple1 = (10, 20, 30, 40)</p>
                        <p>a, b, c, d = tuple1</p>
                        <p>print(d)</p>
                    </code>
                ',
                'q' => 'What is the output for the following Python code ?',
                'answer' => Str::slug("40"),
                'answers' => [
                    "10",
                    "20",
                    "30",
                    "40"
                ],
                'topic' => 2
            ],
            [
                'details' => '',
                'q' => 'The four stages of data pipeline are: Acquisition, Preparation, Analysis and _______ ?',
                'answer' => Str::slug("Presentation"),
                'answers' => [
                    "Archiving",
                    "Repurposing",
                    "Analysis",
                    "Data Management"
                ],
                'topic' => 1
            ],
            [
                'details' => '',
                'q' => 'Which one of the following guarentees high degree of correctness and consistency in the data through a series of transactions, fault tolerance and high availability of large number of users in real time ?',
                'answer' => Str::slug("OLTP"),
                'answers' => [
                    "OLTP",
                    "OLAP",
                    "DSP",
                    "None of them"
                ],
                'topic' => 1
            ],
            [
                'details' => '',
                'q' => 'Which architecture is suitable to support processing of data arriving in continuous stream ?',
                'answer' => Str::slug("DSP"),
                'answers' => [
                    "OLTP",
                    "OLAP",
                    "DSP",
                    "All of them"
                ],
                'topic' => 1
            ],
            [
                'details' => '',
                'q' => 'Which term refers the quality of the data, how "clean" is it ?',
                'answer' => Str::slug("Veracity"),
                'answers' => [
                    "Veracity",
                    "Velocity",
                    "Validity",
                    "Volatility"
                ],
                'topic' => 1
            ],
            [
                'details' => '
                    <code>
                        <p>dict1 = {"Title": "Object Oriented Programming", "courseCode": "M251"}</p>
                        <p>dict2 = dict1.copy()</p>
                        <p>dict1["Credits"] = 8</p>
                        <p>print(dict2)</p>
                    </code>
                ',
                'q' => 'What is the output of the above code ?',
                'answer' => Str::slug("{'oranges', 'limes'}"),
                'answers' => [
                    "{'Title': 'Object Oriented Programming', 'courseCode': 'M251'}",
                    "{'Title': 'Object Oriented Programming'}",
                    "{'Title': 'Object Oriented Programming', 'courseCode': 'M251', 'Credits': 8}",
                    "None of these"
                ],
                'topic' => 2
            ],
        ];

        foreach ($questions as $q) {
            $answers = [];
            $question = Question::create([
                'question' => $q['q'],
                'details' => $q['details'],
                'answer' => $q['answer'],
                'topic_id' => $q['topic'],
            ]);
            foreach ($q['answers'] as $answer) {
                $answers[] = [
                    'answer' => $answer,
                    'question_id' => $question->id
                ];
            }
            DB::table('answers')->insert($answers);
        }
    }
}
