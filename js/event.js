

window.onload = function(){

let pc_show_more = document.querySelector("#pc_show_btn")
let mobile_show_more = document.querySelector("#mobile_show_btn")
let event_ul =document.querySelector(".event_ul")
let event_ul_pc = document.querySelector("#pc.event_list>.event_ul")
let event_ul_mobile = document.querySelector("#mobile.event_list>.event_ul")
let event_list_pc = document.querySelector("#pc.event_list")
let event_list_mobile = document.querySelector("#mobile.event_list")

function make_eu_mobile_default(){
    event_list_mobile.style.height = `${event_ul_mobile.offsetHeight/5 *2}px`    
}
function make_eu_mobile_open(){
    event_list_mobile.style.height = `${event_ul_mobile.offsetHeight}px`  
}
function make_eu_pc_default(){
    event_list_pc.style.height =`${event_ul_pc.offsetHeight/3 *2}px`
}
function make_eu_pc_open(){
    event_list_pc.style.height = `${event_ul_pc.offsetHeight}px`
}

let device = window.innerWidth<767?"mobile":"pc"


if(device="pc"){
    make_eu_pc_default()
}
if(device="mobile"){
    make_eu_mobile_default()
}


let timer

window.addEventListener('resize', function(){
	clearTimeout(timer);
	timer = setTimeout(function(){
        if(window.innerWidth>767){
            device="pc"
            make_eu_pc_default()

    }else{
            device="mobile"
            make_eu_mobile_default()
        
    }

	}, 300);
})

mobile_show_more.addEventListener("click",function(){
    make_eu_mobile_open()

    window.addEventListener('resize', function(){
        clearTimeout(timer);
        timer = setTimeout(function(){
            if(window.innerWidth>767){
                make_eu_pc_open()
    
        }else{
            make_eu_mobile_open()
        }
        }, 300);
    })
    mobile_show_more.style.opacity = `0`
    mobile_show_more.style.pointerEvents = `none`
    pc_show_more.style.opacity = `0`
        pc_show_more.style.pointerEvents = `none`
})


pc_show_more.addEventListener("click",function(){
        make_eu_pc_open()
        window.addEventListener('resize', function(){
            clearTimeout(timer);
            timer = setTimeout(function(){
                if(window.innerWidth>767){
                    make_eu_pc_open()
        
            }else{
                make_eu_mobile_open()
                
            }
            }, 300);
        })
        mobile_show_more.style.opacity = `0`
    mobile_show_more.style.pointerEvents = `none`
        pc_show_more.style.opacity = `0`
        pc_show_more.style.pointerEvents = `none`
})





// console.log(event_ul.offsetHeight)-902

// make_eu_pc_default()
// make_eu_mobile_default()


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

window.addEventListener("wheel",function(e){
    let aa = e.deltaY 
    if (aa<0){
        num++

        if(num<2){
            mobile_navigation_sec.classList.remove("hide")
            num=0
        }
    }
    if (aa>0){
        numb ++
        if(numb>2){
            mobile_navigation_sec.classList.add("hide")
            numb=0
        }

    }
})
























}