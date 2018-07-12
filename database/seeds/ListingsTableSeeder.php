<?php

use Illuminate\Database\Seeder;

class ListingsTableSeeder extends Seeder
{
    public function run()
    {
        $path = base_path() . '/database/data.json';
        $file = File::get($path);
        $data = json_decode($file, true);
        DB::table('listings')->insert($data);
    }
}
