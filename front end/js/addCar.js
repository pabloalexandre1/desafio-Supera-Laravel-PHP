function doRequestt(url, method, body)
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
            console.log(result);
            alert(JSON.parse(result)["message"]);
            window.location = "cars.html";
            
        }
    };
    xhr.send(JSON.stringify(body));
}
function adicionaCar(){
    let newCar = 
    {
        "model": `${document.getElementById("model").value}`,
        "marca": `${document.getElementById("marca").value}`,
        "year": `${document.getElementById("year").value}`,
        "color": `${document.getElementById("color").value}`,
        "user_id": `${sessionStorage.getItem("id")}`
    }
    url = "http://localhost/laravelapp/public/api/add/car";
    doRequestt(url, "POST", newCar);
    
}

document.getElementById("adiciona-car").addEventListener("click", adicionaCar);