if(sessionStorage.getItem("logged"))
{
    if(sessionStorage.getItem("logged") == 'ok')
    {

    }else
    {
        window.location = "../index.html";
    }
}else
{
    window.location = "../index.html";
}