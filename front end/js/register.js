//definição da função principal que irá requisitar a api do laravel
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
            sessionStorage.setItem("registered", JSON.parse(result)["status"]);

            if(sessionStorage.getItem("registered") == 'ok')
            {
                
                alert(JSON.parse(result)["message"]);
                window.location = "index.html";
            }else
            {
                alert(JSON.parse(result)["message"]);
            }
            
        }
    };
    xhr.send(JSON.stringify(body));
    
}

//declaração e definição da função e ações do botão de cadastrar

let registerButton = document.getElementById("register-button");

function sendRegister()
{
    
    let password1 = document.getElementById("password-1").value;
    let password2 = document.getElementById("password-2").value;
    let name = document.getElementById("name-1").value;
    let email = document.getElementById("email-1").value;
    let url = "http://localhost/laravelapp/public/api/register/user";
    
    if(password1.value == password2.value && password1 !== '' && name !== '' && email !== '')
    {
        let body = 
        {
            "name": name,
            "email": email,
            "password": password1
        }
        doRequest(url, 'POST', body);
    }else
    {
        alert("preencha as informações corretamente para prosseguir");
    }
}

//adiciona eventlistener para disparo da função

registerButton.addEventListener("click", sendRegister);