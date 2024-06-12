window.onload =function(){
    let last_month_btn = document.querySelector(".last_month_btn")
    let next_month_btn = document.querySelector(".next_month_btn")
    let train = document.querySelector(".train")
    let train_li = document.querySelectorAll(".train>li")
    let count = 0
    let submit_date_popup = document.querySelector(".submit_date")
    let close = document.querySelector(".close")
    let body = document.querySelector("body")
    let modal = document.querySelector(".modal")
    let sub_faq_ul_dl =document.querySelectorAll(".sub_faq_ul>li>dl")    
    let submit_franchise_popup = document.querySelector(".submit_franchise")
    let sub_faq_ul_dt =document.querySelectorAll(".sub_faq_ul>li>dl>dt")
    let sub_faq_ul_dd =document.querySelectorAll(".sub_faq_ul>li>dl>dd")
    let sub_faq_ul_li =document.querySelectorAll(".sub_faq_ul>li")  
    let close_2=document.querySelector(".close_2")
    let open_submit_franchise=document.querySelector(".open_submit_franchise")
    let dl_height_arr = []
        
        sub_faq_ul_li[0].style.height = `${sub_faq_ul_dl[0].offsetHeight}px`
        for(let i=0 ; i<sub_faq_ul_dd.length ; i++){
            dl_height_arr.push(sub_faq_ul_dl[i].offsetHeight)
        }

        console.log(sub_faq_ul_dl[0].offsetHeight)

        for(let i=0; i<sub_faq_ul_dt.length;i++){
            sub_faq_ul_dt[i].addEventListener("click",function(){
                for(let j=0; j<sub_faq_ul_dt.length; j++){
                    sub_faq_ul_li[j].style.height =`55px`
                    sub_faq_ul_li[j].classList.remove("on")
                }
                sub_faq_ul_li[i].style.height = `${dl_height_arr[i]}px`
                sub_faq_ul_li[i].classList.add("on")
            })
        }



        next_month_btn.addEventListener("click",function(){
            count ++
            if (count > train_li.length-1){count = 0}
            train.style.transform = `translateX(${count * -25}%)`
        })
    
        last_month_btn.addEventListener("click",function(){
            count --
            if (count < 0){count = train_li.length-1}
            train.style.transform = `translateX(${count * - 25}%)`
        })
    
        let open_submit_date =document.querySelector(".open_submit_date")
    
        open_submit_date.addEventListener("click",function(e){
            e.preventDefault()
            submit_date_popup.classList.add("show")
            modal.classList.add("show")
            body.classList.add("scroll")
        })
        close.addEventListener("click",function(e){
            e.preventDefault()
            submit_date_popup.classList.remove("show")
            modal.classList.remove("show")
            body.classList.remove("scroll")
        })
    
        
        open_submit_franchise.addEventListener("click",function(e){
            e.preventDefault()
            submit_franchise_popup.classList.add("show")
            modal.classList.add("show")
            body.classList.add("scroll")
        })
        close_2.addEventListener("click",function(e){
            e.preventDefault()
            submit_franchise_popup.classList.remove("show")
            modal.classList.remove("show")
            body.classList.remove("scroll")
        })
    


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
    















    }











}