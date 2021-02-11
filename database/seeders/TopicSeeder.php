<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TopicSeeder extends Seeder
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
                'name' => 'Introducing data management and analysis',
                'desc' => 'Data management is an administrative process that includes acquiring, validating, storing, protecting, and processing required data to ensure the accessibility, reliability, and timeliness of the data.',
            ],
            [
                'name' => 'Acquiring and representing data',
                'desc' => 'The process of sampling signals that measure real world physical conditions and converting the resulting samples into digital numeric values that can be manipulated by a computer.',
            ],
            [
                'name' => 'Data preparation',
                'desc' => 'Data preparation is the act of manipulating raw data into a form that can readily and accurately be analysed.',
            ],
            [
                'name' => 'Data analysis',
                'desc' => 'The process of inspecting, cleansing, transforming, and modeling data with the goal of discovering useful information.',
            ],
            [
                'name' => 'Presentation: telling the story',
                'desc' => 'This part focuses on the final phase of the data pipeline:
                the presentation of our investigation and its findings.',
            ],
            [
                'name' => 'With data comes responsibility',
                'desc' => 'The scope and applicability of legislation relevant to data management & ethical issues surrounding the management of personal data.',
            ],
            [
                'name' => 'When spreadsheets fail',
                'desc' => 'The usablity & maintainence of spreadsheets as they grow in terms of data & complexity.',
            ],
            [
                'name' => 'Databases',
                'desc' => 'Database Design and Development: An Essential Guide for IT Professionals',
            ],
            [
                'name' => 'Relational databases I',
                'desc' => 'How tables can be manipulated using SQL to create, retrieve, update and delete data (CRUD operations).',
            ],
            [
                'name' => 'Normalisation',
                'desc' => 'The process of structuring a database in accordance with a series of forms in order to reduce data redundancy and improve data integrity.',
            ]
        ];

        $final = [];
        foreach ($array as $a) {
            $final[] = [
                'name' => $a['name'],
                'desc' => $a['desc'],
                'updated_at' => now(),
                'created_at' => now(),
                'subject_id' => 1
            ];
        }
        DB::table('topics')->insert($final);
    }
}
