window.onload = function(){

// 공통 변수들
    let train = document.querySelector(".newsTrain")
    let menubarlist = document.querySelectorAll(".menu_bar>ul>li>a")
    let menulist = document.querySelectorAll(".menu_txt>ul>li")
    let left_arrow = document.querySelector(".left_arrow")
    let right_arrow = document.querySelector(".right_arrow")
    let news_list = document.querySelectorAll(".news_div ul>li")
    let count = 0
    let card_list = document.querySelectorAll(".card_list li>a")
    let card_ul1_img = document.querySelectorAll(".card_ul1>li>a>img")
    let card_ul2_img= document.querySelectorAll(".card_ul2>li>a>img")
    let card_ul1 = document.querySelector(".card_ul1")
    let card_ul2 = document.querySelector(".card_ul2")


    // 카드 리스트들의 a태그 이벤트 없애기
    for(let i=0;i<card_list.length;i++){
        card_list[i].addEventListener("click",function(e){
            e.preventDefault()
        })
    }

    // 

    for(let i=0;i<card_ul1_img.length;i++){
        card_ul1_img[i].addEventListener("mouseenter",function(){
                card_ul1.style.zIndex = 10
                console.log("ggg")
        })    
        }
    

    for(let i=0;i<card_ul1_img.length;i++){
        card_ul1_img[i].addEventListener("mouseleave",function(){
            card_ul1.style.zIndex = 1

        })
    }

    for(let i=0;i<card_ul2_img.length;i++){
        card_ul2_img[i].addEventListener("mouseenter",function(){
            card_ul2.style.zIndex = 10
            
        })    
        }
    

    for(let i=0;i<card_ul2_img.length;i++){
        card_ul2_img[i].addEventListener("mouseleave",function(){
                card_ul2.style.zIndex = 1
        })
    }













    // 빵 메뉴바 탭메뉴
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
    // 

    //뉴스 섹션 오른쪽 화살표 클릭이벤트
    right_arrow.addEventListener("click",function(e){
        count ++
        if (count>3){count=0}
        e.preventDefault()
        train.style.transform = `translateY(${-(100/7)*count}%)`
        for(let i=0 ; i<news_list.length ; i++){
            news_list[i].classList.remove("on")
        }
        news_list[count+1].classList.add("on")
    })

    // 뉴스 섹션 왼쪽 화살표 클릭이벤트
    left_arrow.addEventListener("click",function(e){
        count --
        if (count<0){count=3}
        e.preventDefault()
        train.style.transform = `translateY(${-(100/7)*count}%)`
        for(let i=0 ; i<news_list.length ; i++){
            news_list[i].classList.remove("on")
        }
        news_list[count+1].classList.add("on")

    })




// 스크롤 이벤트 제작

    let down_to_up_event = document.querySelectorAll(".down_to_up_event")
    let down_to_up_event_sub = document.querySelectorAll(".down_to_up_event_sub")
    let navigation_sec = document.querySelector(".navigation_sec")
    let mobile_navigation_sec = document.querySelector("#mobile .navigation_sec")
        let rect
        let scroll
        let viewheight = window.innerHeight

// * 함수 정의 1
    function getitemtop(event){ // event = 태그 = document.querySelector("원하는css값")
        rect = event.getBoundingClientRect()
        return rect.top + scroll
    }
    // getitemtop 함수 = event해당하는 태그의 top값 return
    // getitemtop의 값에서 viewheight 값의 0.6~0.7을 곱한 값을 뺀 위치에 이벤트 작동되게


    // console.log(window.scrollY)



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



    window.addEventListener("scroll",function(){
        scroll = window.scrollY
        // console.log(window.scrollY)
        for(let i=0; i<down_to_up_event.length; i++){
            if(scroll > getitemtop(down_to_up_event[i]) - viewheight*0.65){
                down_to_up_event[i].classList.add("on")
            }
            else{
                down_to_up_event[i].classList.remove("on")
            }
        }

        for(let i=0; i<down_to_up_event_sub.length; i++){
            if(scroll > getitemtop(down_to_up_event_sub[i]) - viewheight*0.75){
                down_to_up_event_sub[i].classList.add("on")
            }
            else{
                down_to_up_event_sub[i].classList.remove("on")
            }
        }

        







        
        if (matchMedia("(min-width: 768px) and (max-width:1023px)").matches){
            console.log(scroll)
            // 상단네비게이션
            if(scroll > 849){
                navigation_sec.classList.remove("top")
            }
            else{
                navigation_sec.classList.add("top")
            }
        }


        if (matchMedia("(min-width:1024px)").matches){

            // 상단네비게이션
            if(scroll > 1093){
                navigation_sec.classList.remove("top")
            }
            else{
                navigation_sec.classList.add("top")
            }
        }


















    })

   




   



    















}