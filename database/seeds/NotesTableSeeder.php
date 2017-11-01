<?php

use Illuminate\Database\Seeder;

class NotesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();

        DB::table('notes')->insert([
            [
                'title' => 'Just some ordinary note',
                'text' => $faker->realText(300),
                'user_id' => 1,
                'created_at' => new DateTime(),
            ],
            [
                'title' => 'Quite an unusual note',
                'text' => $faker->realText(300),
                'user_id' => 1,
                'created_at' => $faker->dateTime(),
            ],
            [
                'title' => 'Bla bla bla',
                'text' => $faker->realText(300),
                'user_id' => 1,
                'created_at' => $faker->dateTime(),
            ],
            [
                'title' => 'Bazinga!',
                'text' => $faker->realText(300),
                'user_id' => 1,
                'created_at' => $faker->dateTime(),
            ],
            [
                'title' => 'Wawa Wiwa',
                'text' => $faker->realText(300),
                'user_id' => 1,
                'created_at' => $faker->dateTime(),
            ],
            [
                'title' => 'I\'ve been here, Fantomas.',
                'text' => $faker->realText(300),
                'user_id' => 1,
                'created_at' => $faker->dateTime(),
            ],
            [
                'title' => 'Grocery list',
                'text' => $faker->realText(300),
                'user_id' => 1,
                'created_at' => $faker->dateTime(),
            ],
        ]);
    }
}
