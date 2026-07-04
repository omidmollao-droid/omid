const btn1 = document.getElementById("switch");
const page = document.getElementById("switch-page");
const icon = document.getElementById("arrow");
const title = document.getElementById("switch-page-title");
const txt = document.getElementById("text");

let isOpen = false;

btn1.addEventListener("click", function () {
    if (!isOpen) {
        page.style.right = "30%";
        btn1.style.transform = "rotate(180deg)"
        setTimeout(() => {
            title.innerText = "وارد اکانتت شو";
            txt.innerText = "اگر قبلا اینجا اکانتی داشتی میتونی با وارد کردن مشخصات اکانتت وارد اکانتت بشی";
        }, 400);

    } else {
        page.style.right = "0";
        btn1.style.transform = "rotate(0deg)"
            setTimeout(() => {
            title.innerText = "ساخت اکانت جدید";
            txt.innerText = "اگر تا به حال هیچ اکانتی در این سایت باز نکرده ای یااگر مشخصات اکانتت رو فراموش کرده ای از این پنل یک اکانت جدید بساز";
        }, 400);
    }

    isOpen = !isOpen;
});

const input = document.getElementById("in1");
const label = document.getElementById("label1");
const btn = document.getElementById("create");

btn.addEventListener("click" , function(){
    if(input.value.trim() === ""){
        alert("پر کردن تمامی فیلدها الزامی است");
    }else{
        alert("اکانت با موفقیت ساخته شد")
    }
});

const input2 = document.getElementById("in");
const label1 = document.getElementById("lab");
const btn2 = document.getElementById("enter");

btn2.addEventListener("click" , function(){
    if(input.value.trim() === ""){
        alert("پر کردن تمامی فیلدها الزامی است");
    }else{
        alert("اکانت با موفقیت ساخته شد")
    }
});