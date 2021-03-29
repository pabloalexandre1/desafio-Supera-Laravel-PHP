<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## Sobre o Projeto

Para rodar o projeto após baixar, usar os comandos:
composer update,
composer dump-autoload.

e retirar o ".example" do arquivo .env se estiver.
também criar um banco de dados e colocar as informações de conexão no arquivo .env

retirar a pasta "frontend" do diretório se quiser,

pode ter sido um equivoco porem como foi citado a obtenção das informações da home por api
neste projeto foi feito separadamente o front e o back end, todos os dados sendo trocados via api mesmo.
e o front end com html css e javascript que foram as linguagens citadas no e-mail, porém deixo claro que também
tenho conhecimento em bibliotecas e frameworks como bootstrap e react js/native se for necessário,
acabei não tendo tanto tempo nestes dias para trabalhar o design do layout, mas a lógica de dados e a responsividade foi possível trabalhar um pouco melhor.


basta rodar o projeto com nome de "laravelapp" na pasta htdocs do xampp pois este é o caminho que as requisições ajax do frontend em javascript estão programadas.

e em seguida abra o arquivo index.html da pasta frontend em algum navegador e pronto.
