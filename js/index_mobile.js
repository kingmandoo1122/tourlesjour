window.onload =function(){

    if (matchMedia("(max-width: 767px)").matches) {

    let open_menu_btn = document.querySelector(".open_menu_btn")
    let nav = document.querySelector("nav")
    let close_menu_btn = document.querySelector(".close_menu_btn")
    let nav_ul_li = document.querySelectorAll("nav>ul>li")
    let nav_ul_li_a = document.querySelectorAll("nav>ul>li>a")

    for(let i=0 ; i<nav_ul_li_a.length; i++){
        nav_ul_li_a[i].addEventListener("click",function(e){
            e.preventDefault()
        })
    }

    for(let i=0 ; i<nav_ul_li.length ; i++){
        nav_ul_li[i].addEventListener("click",function(){
            for(let j=0 ;j<nav_ul_li.length ; j++){
                nav_ul_li[j].classList.remove("on")
            }
            nav_ul_li[i].classList.add("on")
        })
    }



    open_menu_btn.addEventListener("click",function(){
        nav.style.left = `0%`
        open_menu_btn.style.opacity = `0`
        open_menu_btn.style.pointerEvents = `none`
        close_menu_btn.style.opacity = `1`
        close_menu_btn.style.pointerEvents = `auto`
    })

    close_menu_btn.addEventListener("click",function(){
        nav.style.left = `100%`
        open_menu_btn.style.opacity = `1`
        open_menu_btn.style.pointerEvents = `auto`
        close_menu_btn.style.opacity = `0`
        close_menu_btn.style.pointerEvents = `none`
    })

    let train = document.querySelector(".newsTrain")
    let menubarlist = document.querySelectorAll(".menu_bar>ul>li>a")
    let menulist = document.querySelectorAll(".menu_txt>ul>li")
    let left_arrow = document.querySelector(".left_arrow")
    let right_arrow = document.querySelector(".right_arrow")
    let news_list = document.querySelectorAll(".news_div ul>li")
    let count = 0
    let news_li =document.querySelectorAll(".news_div li")
    let card_list = document.querySelectorAll(".card_list li>a")



    for(let i=0;i<card_list.length;i++){
        card_list[i].addEventListener("click",function(e){
            e.preventDefault()
        })
    }


    for(let i=0;i<menubarlist.length; i++){
        menubarlist[i].addEventListener("click",function(e){
            e.preventDefault()
            for(let j=0;j<menulist.length;j++){
            menulist[j].classList.remove("on")
            menubarlist[j].classList.remove("on")
        }
            menulist[i].classList.add("on")
            menubarlist[i].classList.add("on")
        })

    }

    right_arrow.addEventListener("click",function(e){
        count ++
        if (count>3){count=3}
        e.preventDefault()
        train.style.transform = `translateY(${-(100/7)*count}%)`
        for(let i=0 ; i<7 ; i++){
            news_list[i].classList.remove("on")
        }
        news_list[count+1].classList.add("on")

    })

    left_arrow.addEventListener("click",function(e){
        count --
        if (count<0){count=3}
        e.preventDefault()
        train.style.transform = `translateY(${-(100/7)*count}%)`
        for(let i=0 ; i<7 ; i++){
            news_list[i].classList.remove("on")
        }
        news_list[count+1].classList.add("on")

    })



    let num = 0
    let numb = 0
    let navigation_sec = document.querySelector(".navigation_sec")
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

}