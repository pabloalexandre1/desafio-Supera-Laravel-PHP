//definição da função principal que irá requisitar a api do laravel
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
            result = resultt;
            sessionStorage.setItem("logged", JSON.parse(result)["status"]);

            if(sessionStorage.getItem("logged") == 'ok')
            {
                sessionStorage.setItem("name", JSON.parse(result)["name"]);
                sessionStorage.setItem("email", JSON.parse(result)["email"]);
                sessionStorage.setItem("id", JSON.parse(result)["id"]);
                window.location = "logged/home.html";
            }else
            {
                alert(JSON.parse(result)["message"]);
            }
            
        }
    };
    xhr.send(JSON.stringify(body));
    
}

//declaração do botão de login e a ação a ser tomada
let loginButton = document.getElementById("login-button");

function doLogin()
{
    let email = document.getElementById('login-email').value;
    let password = document.getElementById("login-password").value;
    if(email !== '' && password !== '')
    {
        
        let url = `http://localhost/laravelapp/public/api/user/login/${email}/${password}`;
        let bodyy = '';
        let result =''; 
        doRequest(url, 'GET', bodyy);
    }else
    {
        alert('preencha as informações para realizar o login');
    }
    

}

loginButton.addEventListener("click", doLogin);



