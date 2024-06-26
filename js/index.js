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




    let content = [
        "현재 사이트는 실제 사이트가 아니며",
        "TOUS les JOURS 사이트를 리디자인한 사이트입니다.",
        "메인, 브랜드 스토리, 브랜드스토리 - 뉴스&공지사항,",
        "가맹 안내, 제품 안내, 이벤트 페이지를 제작하였습니다.",
        "768px - 1023px 태블릿 버전과",
        "767 이하의 모바일 버전의 반응형 페이지도 확인해 보실 수 있습니다."

    ]

    let txtframe = document.querySelectorAll(".enter_popup_txtframe>span")

    let i_list = [0,0,0,0,0,0]
    
    setTimeout(function(){


        setInterval(function(){
            if (i_list[0] < content[0].length) {
            let txt = content[0].charAt(i_list[0]);
            txtframe[0].innerHTML += txt;
            i_list[0]++;
            }
        },50)


    },500)

    

    setTimeout(function(){
        setInterval(function(){
            if (i_list[1] < content[1].length) {
            let txt = content[1].charAt(i_list[1]);
            txtframe[1].innerHTML += txt;
            i_list[1]++;
            }
        },50)
    },2000)
    

    setTimeout(function(){
        setInterval(function(){
            if (i_list[2] < content[1].length) {
            let txt = content[2].charAt(i_list[2]);
            txtframe[2].innerHTML += txt;
            i_list[2]++;
            }
        },50)
    },6500)
    


    setTimeout(function(){
        setInterval(function(){
            if (i_list[3] < content[1].length) {
            let txt = content[3].charAt(i_list[3]);
            txtframe[3].innerHTML += txt;
            i_list[3]++;
            }
        },50)
    },9000)
    


    setTimeout(function(){
        setInterval(function(){
            if (i_list[4] < content[4].length) {
            let txt = content[4].charAt(i_list[4]);
            txtframe[4].innerHTML += txt;
            i_list[4]++;
            }
        },50)
    },13000)

    
    setTimeout(function(){
        setInterval(function(){
            if (i_list[5] < content[5].length) {
            let txt = content[5].charAt(i_list[5]);
            txtframe[5].innerHTML += txt;
            i_list[5]++;
            }
        },50)
    },15500)





//  function typing(content,txtframe){
//     setInterval(function(){
//         if (i_list[0] < content.length) {
//         let txt = content.charAt(i_list[0]);
//         txtframe.innerHTML += txt;
//         i_list[0]++;
//         }
//     },80)
//  }


// typing(content[0],txtframe[0])
















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