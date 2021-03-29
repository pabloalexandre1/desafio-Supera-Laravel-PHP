<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Car;
class CarsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Car::create([
            "model"=> "fox",
            "marca" => "volks",
            "color" => "cinza",
            "year"=> "2018",
            "user_id" => 1
        ]);
        Car::create([
            "model"=> "gol",
            "marca" => "volks",
            "color" => "preto",
            "year"=> "2018",
            "user_id" => 1
        ]);
        Car::create([
            "model"=> "gol",
            "marca" => "volks",
            "color" => "vermelho",
            "year"=> "2018",
            "user_id" => 2
        ]);
        Car::create([
            "model"=> "aventador",
            "marca" => "lamborghinni",
            "color" => "verde",
            "year"=> "2019",
            "user_id" => 2
        ]);
    }
}
