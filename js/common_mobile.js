
        let open_menu_btn = document.querySelector("#mobile .open_menu_btn")
        let nav = document.querySelector("#mobile nav")
        let close_menu_btn = document.querySelector("#mobile .close_menu_btn")
        let nav_ul_li = document.querySelectorAll("#mobile nav>ul>li")
        let nav_ul_li_a = document.querySelectorAll("#mobile nav>ul>li>a")
        let navigation_sec = document.querySelector("#mobile .navigation_sec")


        // 네비게이션 바 1뎁스의 a태그 이벤트 없애기
        for(let i=0 ; i<nav_ul_li_a.length; i++){
            nav_ul_li_a[i].addEventListener("click",function(e){
                e.preventDefault()
            })
        }
    
        // 네비게이션 바 1뎁스 탭메뉴
        for(let i=0 ; i<nav_ul_li.length ; i++){
            nav_ul_li[i].addEventListener("click",function(){
                for(let j=0 ;j<nav_ul_li.length ; j++){
                    nav_ul_li[j].classList.remove("on")
                }
                nav_ul_li[i].classList.add("on")
            })
        }
    
        // 네비게이션 바 열기버튼
        open_menu_btn.addEventListener("click",function(){
            nav.style.left = `0%`
            open_menu_btn.style.opacity = `0`
            open_menu_btn.style.pointerEvents = `none`
            close_menu_btn.style.opacity = `1`
            close_menu_btn.style.pointerEvents = `auto`
            setTimeout(function(){
                navigation_sec.classList.add("on")
            },450)
        })
    
        // 네비게이션 바 닫기버튼
        close_menu_btn.addEventListener("click",function(){
            nav.style.left = `100%`
            open_menu_btn.style.opacity = `1`
            open_menu_btn.style.pointerEvents = `auto`
            close_menu_btn.style.opacity = `0`
            close_menu_btn.style.pointerEvents = `none`
            setTimeout(function(){
                navigation_sec.classList.remove("on")
            },450)
        })
