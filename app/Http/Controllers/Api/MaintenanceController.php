<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Maintenance;

class MaintenanceController extends Controller
{
    public function viewMaintenances($maintenance)
    {
        if($maintenance == "all")
        {
            $dateNextWeek = date('Y-m-d', strtotime('+8 days'));
            $result = Maintenance::where('date_preview','<',$dateNextWeek)->get();
            return $result;
        }else
        {
            $result = Maintenance::where('car_id',$maintenance)->get();
            return $result;
        }
    }

    public function saveMaintenance(Request $req)
    {
        $maint = new Maintenance;
            $maint->car_id = $req->car_id;
            $maint->problem_description = $req->problem_description;
            $maint->model = $req->model;
            $maint->marca = $req->marca;
            $maint->date_preview = $req->date_preview;
            $maint->year = $req->year;
            $maint->save();
            return 
            [
                "status"=> "ok",
                "message" => "maintenance successfully added"
            ];
    }

    public function deleteMaintenance($id)
    {
        Maintenance::where('id', $id)->delete();
        return "deletado com sucesso";
    }
}
