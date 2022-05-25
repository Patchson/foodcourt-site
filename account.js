{/* <div class="navbar" id="navbar">
            <a href="./hub.html" class="logo" style="background-image: url(./images/logo.png);"></a>
            <div class="bar" id="bar">
                <a href="./basket.html" class="delivery" style="background-image: url(./images/delivery.png);"></a>
                <a href="#" class="account" onclick="" style="background-image: url(./images/account_default.png);"></a>
            </div>
        </div> */}



document.write(`<div class="nav" id="nav">`);
    document.write(`<div class="navbar" id="navbar">`);
        document.write(`<a href="../main/hub.html" class="logo" style="background-image: url(../images/logo.png);"></a>`);
        document.write(`<div class="bar" id="bar">`);
            document.write(`<a href="../main/basket.html" class="delivery" style="background-image: url(../images/delivery.png);"></a>`);
            document.write(`<a href="#" class="account account_disable" onclick="enter()" style="background-image: url(../images/account_default.png);"></a>`);
        document.write(`</div>`);
    document.write(`</div>`);
    document.write(`<div class="navbar_phone" id="navbar_phone">`);
        document.write(`<a href="../main/hub.html" class="logo_phone" style="background-image: url(../images/logo.png);"></a>`);
        document.write(`<a href="#submenu" class="more" style="background-image: url(../images/menu.png);" onclick="openNav()"></a>`);
    document.write(`</div>`);
    document.write(`<div id="mySidenav" class="sidenav">`);
        document.write(`<a class="closebtn" onclick="closeNav()">×</a>`);
        document.write(`<a href="../main/basket.html">Корзина</a>`);
        document.write(`<a href="../main/aboutus.html">О нас</a>`);
    document.write(`</div>`);
document.write(`</div>`);

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var auto = 0;

var bar = document.getElementById('bar');

function enter() {
    if(!auto){
        auto = 1;
        if(confirm('Хотите авторизоваться?')) {
            bar.removeChild(bar.lastChild);
            bar.innerHTML=bar.innerHTML+''+`<a href="#" class="account account_active" onclick="enter()" style="background-image: url(../images/drive.png);"></a>`;
        }
    }
    else {
        if(confirm('Хотите выйти с аккаунта?')) {
            auto = 0;
            bar.removeChild(bar.lastChild);
            bar.innerHTML=bar.innerHTML+''+`<a href="#" class="account account_disable" onclick="enter()" style="background-image: url(../images/account_default.png);"></a>`;
        }
    }
}