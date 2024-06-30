
window.onload = function(){




let navigation_sec = document.querySelector(".navigation_sec")
let mobile_navigation_sec = document.querySelector("#mobile .navigation_sec")
let num = 0
let numb = 0
window.addEventListener("wheel",function(e){
    let aa = e.deltaY 
    if (aa<0){
        num++

        if(num<2){
            navigation_sec.classList.remove("hide")
            num=0
        }
    }
    if (aa>0){
        numb ++
        if(numb>2){
            navigation_sec.classList.add("hide")
            numb=0
        }

    }
})





    
}