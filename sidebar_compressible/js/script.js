window.onload = function(){
    const slidebar = document.querySelector(".slidebar");
    const closeBtn = document.querySelector("#btn");
    const searchBtn = document.querySelector(".bx-search");

    closeBtn.addEventListener("click",function(){
        slidebar.classList.toggle("open")
        menuBtnChange()
    })

    searchBtn.addEventListener("click",function(){
        slidebar.classList.toggle("open")
        menuBtnChange()
    })

    function menuBtnChange(){
        if(slidebar.classList.contains("open")){
            closeBtn.classList.replace("bx-menu","bx-menu-alt-right")
        }
        else{
            closeBtn.classList.replace("bx-menu-alt-right","bx-menu")
        }
    }
}