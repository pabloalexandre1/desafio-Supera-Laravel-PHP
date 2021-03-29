<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    
    
     //METODO PARA REGISTRAR UM NOVO USUÁRIO AO BANCO
    public function saveUser(Request $req)
    {   
        $result = User::where('email',$req->email)->get();
        if(count($result)>0)
        {
            return 
            [
                "status" => "erro",
                "message" => "este email ja esta cadastrado"
            ];
        }elseif(count($result) == 0)
        {
            $user = new User;
            $user->name = $req->name;
            $user->email = $req->email;
            $user->password = password_hash($req->password, PASSWORD_DEFAULT);
            $final = $user->save();
            if($final)
            {
                return
                [
                    "status" => "ok",
                    "message" => "usuario cadastrado com sucesso"
                ];
            }
        }
        
    }
    
    //metodo para verificar e autenticar o login de um usuario
    public function userLogin(Request $req, $email, $password)
    {
        $result = User::where('email',$email)->get();
        if(count($result)>0)
        {
            if(password_verify($password, $result[0]["password"]))
            {
                $name = $result[0]['name'];
                $id = $result[0]['id'];
                $email = $result[0]['email'];

                return 
                [
                    "status" => "ok",
                    "message" => "logado com sucesso",
                    "name" => "$name",
                    "id" => "$id",
                    "email" => "$email"
                ];
            }else
            {
                return 
                [
                    "status" => "erro",
                    "message" => "credenciais incorretas"
   
                ];
            }
        }else
        {
            return 
            [
                "status" => "erro",
                "message" => "usuario nao encontrado"
                
            ];
        }  
    }
}
