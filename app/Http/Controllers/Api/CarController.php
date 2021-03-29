<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Car;
class CarController extends Controller
{
    public function addCar(Request $req)
    {
        $car = new Car;
        $car->user_id = $req->user_id;
        $car->model = $req->model;
        $car->marca = $req->marca;
        $car->color = $req->color;
        $car->year = $req->year;
        $car->save();
        return 
        [
            "status" => "ok",
            "message" => "carro adicionado com sucesso"
        ];
    }

    public function viewCars($userId)
    {
        $result = Car::where("user_id", $userId)->get();
        return $result;
    }

    public function deleteCar($id)
    {
        Car::where("id", $id)->delete();
        return 
        [
            "status" => "ok",
            "message" => "carro removido da lista com sucesso"
        ];
    }
}
