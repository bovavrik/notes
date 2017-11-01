<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Bořek Vavřík',
            'email' => 'bo.vavrik@gmail.com',
            'password' => bcrypt('shineonyoucrazydiamond'),
        ]);
    }
}
