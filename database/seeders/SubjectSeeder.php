<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SubjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $array = [
            [
                'name' => 'Data Management and Analysis',
                'desc' => 'Data management is an administrative process that includes acquiring, validating, storing, protecting, and processing required data to ensure the accessibility, reliability, and timeliness of the data.',
                'code' => 'TM351',
            ],
            [
                'name' => 'Communications Technology',
                'desc' => 'Communication technologies include the Internet, multimedia, e-mail, telephone and other sound-based and video-based communication means.',
                'code' => 'TM355',
            ],
            [
                'name' => 'Algorithms, Data Structures and Computability',
                'desc' => 'This subject teaches you how to Write Algorithms to Solve Problems with Computers. Algorithmic knowledge of sorting and searching, Big-O notation for characterising the efficiency of an algorithm, Hash tables, Graphs etc.',
                'code' => 'M269',
            ],
            
        ];

        $final = [];
        foreach ($array as $a) {
            $final[] = [
                'name' => $a['name'],
                'desc' => $a['desc'],
                'code' => $a['code'],
                'updated_at' => now(),
                'created_at' => now(),
                'exam_id' => 5
            ];
        }
        DB::table('subjects')->insert($final);
    }
}
