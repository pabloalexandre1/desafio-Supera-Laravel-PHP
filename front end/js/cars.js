//codigo do botão de menu mobile

let mobileButton = document.getElementById("mobile-menu");

function openMenu(){
    let mobileNav = document.getElementById("mobile-nav");
    mobileNav.classList.toggle("display-none");
}

mobileButton.addEventListener("click", openMenu);

//mainsection

function doRequest(url, method, body) 
{
    let xhr = new XMLHttpRequest();

    let resultt = '';
    let result = '';
    xhr.open(method, url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Accept", "application/json");
    

    xhr.onreadystatechange = () =>
    {
        if(xhr.readyState == 4)
        {
            resultt = xhr.responseText;
            result = resultt;
            result = JSON.parse(resultt);
            console.log(result);
            for(let i = 0; i < result.length; i++)
            {
                
                let divCar = document.createElement("div");
                divCar.id = `car-${result[i]["id"]}`;
                divCar.innerHTML = 
                `
                    <div>
                        <h2>Modelo: ${result[i]["model"]}</h2>
                        <h3>Marca: ${result[i]["marca"]}</h3>
                    </div>
                    <div>
                        <h3>Cor: ${result[i]["color"]}</h3>
                        <h3>Ano: ${result[i]["year"]}</h3>
                    </div>
                    <div>
                        <img onclick="deleteCar(${result[i]["id"]})" class="icon-car" src="../img/delete.png"/>
                        <img onclick="addMaintenance1('${result[i]["id"]}-${result[i]["model"]}-${result[i]["marca"]}-${result[i]["year"]}')" class="icon-car" src="../img/plus-icon.png"/>
                        <button class="btn" href="#" onclick="goCar('${result[i]["id"]}-${result[i]["model"]}')">Ver Manutenções</button>
                    </div>
                `;
                let areaAppend = document.getElementById("main-body");
                areaAppend.append(divCar);
            }
            
        }
    };
    xhr.send(JSON.stringify(body));
    
}

let url = `http://localhost/laravelapp/public/api/view/cars/${sessionStorage.getItem("id")}`;
doRequest(url, 'GET', '');

//codigo para redirecionar para a pagina e visualizar as manutenções de um carro especifico
function goCar(id)
{
    sessionStorage.setItem("car_id", id.split('-')[0]);
    sessionStorage.setItem("car_model", id.split('-')[1]);
    window.location = "oneCar.html";
}

//CODIGO PARA O BOTÃO DE REMOVER CARRO
function doRequestDelete(url, method, body) 
{
    let xhr = new XMLHttpRequest();

    let resultt = '';
    let result = '';
    xhr.open(method, url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Accept", "application/json");
    

    xhr.onreadystatechange = () =>
    {
        if(xhr.readyState == 4)
        {
            resultt = xhr.responseText;
            result = resultt;
            alert("carro removido do sistema com sucesso");
            
        }
    };
    xhr.send(JSON.stringify(body));
    
}

function deleteCar(id)
{
    document.getElementById(`car-${id}`).remove();
    url = `http://localhost/laravelapp/public/api/delete/car/${id}`;
    doRequestDelete(url, "DELETE", '');
}

//CODIGOS PARA O BOTÃO DE ADICIONAR MANUTENÇÕES/PROBLEMAS A RESOLVER DO CARRO

let actualCar = 
{
    "id": '',
    "model": '',
    "marca": '',
    "year": '',
}

let actualMaintenance = 
{
    "car_id": "",
    "problem_description": "",
    "model": "",
    "marca": "",
    "year": "",
    "date_preview": ""
};
//função para abrir o formulario de manutenção
function addMaintenance1(info)
{
    let infoSplited = info.split('-');
    actualCar["id"] = infoSplited[0];
    actualCar["model"] = infoSplited[1];
    actualCar["marca"] = infoSplited[2];
    actualCar["year"] = infoSplited[3];
    console.log(actualCar);
    document.getElementById("maintenance-form").classList.toggle("display-none");
}
//função para enviar uma nova manutenção para o sistema
function doRequestMaintenance(url, method, body) 
{
    let xhr = new XMLHttpRequest();

    let resultt = '';
    let result = '';
    xhr.open(method, url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Accept", "application/json");
    

    xhr.onreadystatechange = () =>
    {
        if(xhr.readyState == 4)
        {
            resultt = xhr.responseText;
            result = JSON.parse(resultt);
            alert(result["message"]);
            document.getElementById("maintenance-form").classList.toggle("display-none");

            
        }
    };
    xhr.send(JSON.stringify(body));
    
}

function sendMaintenance(){
    actualMaintenance["car_id"] = actualCar["id"];
    actualMaintenance["problem_description"] = document.getElementById("description").value;
    actualMaintenance["model"] = actualCar["model"];
    actualMaintenance["marca"] = actualCar["marca"];
    actualMaintenance["year"] = actualCar["year"];
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    actualMaintenance["date_preview"] = `${year}-${month}-${day}`;
    url = `http://localhost/laravelapp/public/api/save/maintenance`;
    doRequestMaintenance(url, "POST", actualMaintenance);
}

//botão para salvar a manutenção
document.getElementById("send-maintenance").addEventListener("click", sendMaintenance);


//função para fechar o formulário
function closeForm()
{
    document.getElementById("maintenance-form").classList.toggle("display-none");
}


//botão de fechar o formulário
document.getElementById("close-form").addEventListener("click", closeForm);

//botão para ir pra página de adicionar um novo veículo
document.getElementById("add-car").addEventListener("click", () => 
{
    window.location = "addCar.html";
});