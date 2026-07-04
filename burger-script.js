const btn = document.getElementsByClassName("plus")[0];
const box = document.getElementsByClassName("burger-info")[0];

btn.addEventListener("click", function () {
    box.style.height = "10rem";
});

btn.addEventListener("click" , function(){
    if(box.style.height == "10rem"){
        box.style.height = "2rem"
    }
})