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
                'name' => 'GCSE',
                'updated_at' => now(),
                'created_at' => now()
            ],
            [
                'name' => 'IGCSE',
                'updated_at' => now(),
                'created_at' => now()
            ],
            [
                'name' => 'AS',
                'updated_at' => now(),
                'created_at' => now()
            ],
            [
                'name' => 'A Level',
                'updated_at' => now(),
                'created_at' => now()
            ],
            [
                'name' => 'ICT',
                'updated_at' => now(),
                'created_at' => now()
            ]
        ];

        DB::table('exams')->insert($array);
    }
}
