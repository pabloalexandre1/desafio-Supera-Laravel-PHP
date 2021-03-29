let insideMainPanel = document.createElement("div");
insideMainPanel.innerHTML = 
`
<div>
    <h1>Bem Vindo, ${sessionStorage.getItem("name").split(" ")[0]}!</h1>
</div>
<div>
    <h2>verifique seus veículos e manutenções aqui</h2>
</div>
<div id="div-button">
    <a class="btn" href="cars.html">GERENCIAR MEUS VEÍCULOS</a>
</div>
`;

let mainPanel = document.getElementById("main-panel");
mainPanel.append(insideMainPanel);

//codigo do botão de menu mobile

let mobileButton = document.getElementById("mobile-menu");

function openMenu(){
    let mobileNav = document.getElementById("mobile-nav");
    mobileNav.classList.toggle("display-none");
}

mobileButton.addEventListener("click", openMenu);

//fazer a request e executar a criação dos elementos de manutenção
function doRequest(url, method, body) 
{
    let xhr = new XMLHttpRequest();

    let resultt = '';
    xhr.open(method, url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Accept", "application/json");
    

    xhr.onreadystatechange = () =>
    {
        if(xhr.readyState == 4)
        {
            resultt = xhr.responseText;
            result = JSON.parse(resultt);
            for(let i = 0; i<result.length; i++)
            {
                let maintenanceDiv = document.createElement("div");
                maintenanceDiv.id = `maintenance-${result[i]["id"]}`;
                maintenanceDiv.innerHTML = 
                `
                <div>
                    <h3>Modelo: ${result[i]["model"]}</h3>
                    <h3>Marca:  ${result[i]["marca"]}</h3>
                    <h3>Ano:  ${result[i]["year"]}</h3>
                </div>
                <div id="middle-div">
                    <h3>data prevista:  ${result[i]["date_preview"]}</h3>
                    <h3>descrição:</h3>
                    <h3> ${result[i]["problem_description"]}</h3>
                </div>
                <div>
                    <a href="#" class="btn" style="justify-content: center; align-items: center;" onClick="deleteMainteance( ${result[i]["id"]})">Marcar Como Concluída</a>
                </div>
                `;
                document.getElementById("maintenances").append(maintenanceDiv);
            }
        }
    };
    xhr.send(JSON.stringify(body));
    
}

let url = "http://localhost/laravelapp/public/api/view/maintenance/all";
doRequest(url, 'GET', '');

//codigo do botão para deletar as manutenções
function doRequestDelete(url, method, body, id)
{
    let xhr = new XMLHttpRequest();

    let resultt = '';
    xhr.open(method, url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Accept", "application/json");
    

    xhr.onreadystatechange = () =>
    {
        if(xhr.readyState == 4)
        {
            resultt = xhr.responseText;
            result = resultt;
            if(result == 'deletado com sucesso'){
                document.getElementById(`maintenance-${id}`).remove();
                alert("manutenção concluida/removida com sucesso");
            }
        }    
    };
    xhr.send(JSON.stringify(body));
}
function deleteMainteance(id)
{
    let urll = `http://localhost/laravelapp/public/api/delete/maintenance/${id}`;
    doRequestDelete(urll, 'DELETE', '', id);
}