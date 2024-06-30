window.onload = function(){


    // console.log("ggg")

   
// 공통 변수들
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
    let close_2 = document.querySelector(".close_2")
    let open_submit_franchise=document.querySelector(".open_submit_franchise")
    let open_submit_date =document.querySelector(".open_submit_date")
    let dl_height_arr = []

// 창업 섹션 공통 자바스크립트


open_submit_franchise.addEventListener("click",function(e){
    let viewportwidth = window.innerWidth
    e.preventDefault()

    if (matchMedia("screen and (max-width: 768px)").matches) {
        window.open(this.href, `_blank`, `width=${viewportwidth}, height=1000`);
    return false;
    }
    else{
        window.open(this.href, `_blank`, `width=1200, height=1000`);
    return false;
    }
    

})

open_submit_date.addEventListener("click",function(e){
    let viewportwidth = window.innerWidth
    e.preventDefault()

    if (matchMedia("screen and (max-width: 768px)").matches) {
        window.open(this.href, `_blank`, `width=${viewportwidth}, height=1000`);
    return false;
    }
    else{
        window.open(this.href, `_blank`, `width=1200, height=1000`);
    return false;
    }
    

})




sub_faq_ul_li[0].style.height = `${sub_faq_ul_dl[0].offsetHeight}px`

// console.log(sub_faq_ul_dl[0].offsetHeight)

    // 가맹 FAQ 리스트 탭메뉴

    for(let i=0 ; i<sub_faq_ul_dd.length ; i++){
        dl_height_arr.push(sub_faq_ul_dl[i].offsetHeight)
    }

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

    // 창업설명회 다음달 버튼
    next_month_btn.addEventListener("click",function(){
        count ++
        if (count > train_li.length-1){count = 0}
        train.style.transform = `translateX(${count * -20}%)`
    })

    // 창업설명회 지난달 버튼
    last_month_btn.addEventListener("click",function(){
        count --
        if (count < 0){count = train_li.length-1}
        train.style.transform = `translateX(${count * - 20}%)`
    })



    let rect
    let scroll
    let viewheight = window.innerHeight
    let up_to_down = document.querySelectorAll(".up_to_down")
    function getitemtop(event){ // event = 태그 = document.querySelector("원하는css값")
        rect = event.getBoundingClientRect()
        return rect.top + scroll
    }


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
    

let roundnum =0


    function opacityround(num){

        if(num>0.75){
            roundnum = 1
            return roundnum
        }
        if(num<0.25){
            roundnum = 0
            return roundnum
        }
        else{
            return num
        }
    }




    window.addEventListener("scroll",function(){
        scroll = window.scrollY
        let up_to_down_1 =document.querySelector(".up_to_down_1")
        let up_to_down_2 =document.querySelector(".up_to_down_2")
        let up_to_down_3 =document.querySelector(".up_to_down_3")
        let opacity_ani = document.querySelectorAll(".opacity_ani")
        let elv_li = this.document.querySelectorAll(".lists>ol>li")




        let sub_process = document.querySelector(".sub_process")
        let elv = document.querySelector(".elv")
        let ani_length = sub_process.offsetHeight - elv.offsetHeight
        let distance = scroll - getitemtop(sub_process)
        let ani_per = distance / ani_length *100 //0~99
        // console.log(ani_per)

        let ani_num = ani_per / 12.5 // 1~8   1.141414 - 1
        let ani_idx = Math.floor(ani_num)
        let ani_iper = Math.round((ani_num - ani_idx)*100)/100 // 0~100
        // console.log(ani_num)
        let sub_down_to_up_event = document.querySelectorAll(".sub_down_to_up_event")
        // console.log(ani_iper)





        for(let i=0; i<sub_down_to_up_event.length; i++){
            if(scroll > getitemtop(sub_down_to_up_event[i]) - viewheight*0.65){
                sub_down_to_up_event[i].classList.add("on")
            }
            else{
                sub_down_to_up_event[i].classList.remove("on")
            }
        }
    



    
        if (matchMedia("(min-width: 1024px)").matches){

            if (distance < 0){
                elv.classList.remove("fixed")
                elv.classList.remove("bottom")
                for(let i=0;i<elv_li.length;i++){
                    elv_li[i].style.opacity = `0`
                    elv_li[i].classList.remove("on")
                }
            }
        
        
            if (distance > 0 && distance <= ani_length) {
                elv.classList.add("fixed")
                elv.classList.remove("bottom")
                elv_li[ani_idx].style.opacity = `${opacityround(ani_iper)}`
                elv_li[ani_idx].classList.add("on")
        
    
            }
            if (distance > ani_length){
                elv.classList.add("bottom")
                elv.classList.remove("fixed")
                for(let i=0;i<elv_li.length;i++){
                    elv_li[i].style.opacity = `1`
                    elv_li[i].classList.remove("on")
                }
                
            }
        }








        for(let i=0; i<opacity_ani.length; i++){
            if(scroll > getitemtop(opacity_ani[i]) - viewheight*0.7){
                opacity_ani[i].classList.add("on")
            }
            else{
                opacity_ani[i].classList.remove("on")
            }
        }


        if(scroll> getitemtop(up_to_down_1) - viewheight*0.7 ){
            up_to_down_1.classList.add("on")
        }
        else{
            up_to_down_1.classList.remove("on")
        }
        if(scroll> getitemtop(up_to_down_2) - viewheight*0.7 ){
            up_to_down_2.classList.add("on")
        }
        else{
            up_to_down_2.classList.remove("on")
        }

        if(scroll> getitemtop(up_to_down_3) - viewheight*0.7 ){
            up_to_down_3.classList.add("on")
        }
        else{
            up_to_down_3.classList.remove("on")
        }








    })













    // 창업 설명회 열기버튼-모달/바디 스크롤 막기
    // open_submit_date.addEventListener("click",function(e){
    //     e.preventDefault()
    //     submit_date_popup.classList.add("show")
    //     modal.classList.add("show")
    //     body.classList.add("scroll")
    // })

    // 창업 설명회 닫기버튼-모달/바디 스크롤 풀기
    // close.addEventListener("click",function(e){
    //     e.preventDefault()
    //     submit_date_popup.classList.remove("show")
    //     modal.classList.remove("show")
    //     body.classList.remove("scroll")
    // })

    // 창업상담 열기
    // open_submit_franchise.addEventListener("click",function(e){
    //     e.preventDefault()
    //     submit_franchise_popup.classList.add("show")
    //     modal.classList.add("show")
    //     body.classList.add("scroll")
    // })

    // 창업상담 닫기
    // close_2.addEventListener("click",function(e){
    //     e.preventDefault()
    //     submit_franchise_popup.classList.remove("show")
    //     modal.classList.remove("show")
    //     body.classList.remove("scroll")
    // })



}