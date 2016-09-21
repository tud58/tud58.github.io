<?php

use Illuminate\Database\Seeder;

class SinhVienTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('sinhvien')->insert(
        	[
        		[
        			'name' => str_random(10),
        			'email' => str_random(10).'@gmail.com',
        			'age' => 21,
        			'phone' => '097979797',
        			'created_at' => new DateTime()
        		],
        		[
        			'name' => str_random(10),
        			'email' => str_random(10).'@gmail.com',
        			'age' => 21,
        			'phone' => '097979797',
        			'created_at' => new DateTime()
        		],
        		[
        			'name' => str_random(10),
        			'email' => str_random(10).'@gmail.com',
        			'age' => 21,
        			'phone' => '097979797',
        			'created_at' => new DateTime()
        		],
        		[
        			'name' => str_random(10),
        			'email' => str_random(10).'@gmail.com',
        			'age' => 21,
        			'phone' => '097979797',
        			'created_at' => new DateTime()
        		],
        	]);
    }
}
