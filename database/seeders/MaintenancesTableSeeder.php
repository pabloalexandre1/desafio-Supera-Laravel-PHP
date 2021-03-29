<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Maintenance;
class MaintenancesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Maintenance::create([
            "car_id" => 1,
            "model" => "fox",
            "marca" => "volks",
            "year" => 2018,
            "problem_description" => "freio falhando quando precisa apertar muito",
            "date_preview" => "2021-04-05"
        ]);
        Maintenance::create([
            "car_id" => 2,
            "model" => "gol",
            "marca" => "volks",
            "year" => 2018,
            "problem_description" => "direção ruim travando",
            "date_preview" => "2021-04-04"
        ]);
        Maintenance::create([
            "car_id" => 3,
            "model" => "gol",
            "marca" => "volks",
            "year" => 2018,
            "problem_description" => "luz desconhecida de alerta acendendo no painel",
            "date_preview" => "2021-04-06"
        ]);
        Maintenance::create([
            "car_id" => 4,
            "model" => "aventador",
            "marca" => "lamborghinni",
            "year" => 2019,
            "problem_description" => "pneu careca precisando de troca",
            "date_preview" => "2021-04-04"
        ]);
        Maintenance::create([
            "car_id" => 1,
            "model" => "fox",
            "marca" => "volks",
            "year" => 2018,
            "problem_description" => "motor fazendo barulho estranho",
            "date_preview" => "2021-04-05"
        ]);
    }
}
