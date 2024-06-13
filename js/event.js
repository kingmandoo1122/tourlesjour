window.onload = function(){






let show_more = document.querySelector(".show_more")
let event_list =document.querySelector(".event_list")
let event_ul =document.querySelector(".event_ul")

show_more.addEventListener("click",function(){
    event_list.style.height = `${event_ul.offsetHeight}px`
    show_more.style.opacity = `0`
    show_more.style.pointerEvents =`none`
})

let navigation_sec = document.querySelector(".navigation_sec")
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