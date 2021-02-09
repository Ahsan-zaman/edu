<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ExamsSeeder extends Seeder
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
                'name' => 'GCSE'
            ],
            [
                'name' => 'IGCSE'
            ],
            [
                'name' => 'AS'
            ],
            [
                'name' => 'A Level'
            ],
            [
                'name' => 'ICT'
            ]
        ];

        DB::table('exams')->insert($array);
    }
}
