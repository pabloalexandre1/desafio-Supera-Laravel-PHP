<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            "name" => "Pabla Alexandre Souza Barros",
            "email" => "pablo.umburana3@gmail.com",
            "password" => password_hash('arvore23', PASSWORD_DEFAULT)
        ]);
        User::create([
            "name" => "Pablo Alexandre Souza Barros",
            "email" => "pablo.umburana2@gmail.com",
            "password" => password_hash('arvore25', PASSWORD_DEFAULT)
        ]);
        User::create([
            "name" => "Enzo Ariel Souza Barros",
            "email" => "enzoariel@hotmail.com",
            "password" => password_hash('enzoariel123', PASSWORD_DEFAULT)
        ]);
        User::create([
            "name" => "Julia Teles da Silva",
            "email" => "juliasilva@outlook.com",
            "password" => password_hash('silvajulia', PASSWORD_DEFAULT)
        ]);
    }
}
