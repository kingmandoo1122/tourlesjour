// window.onload =function(){


//     if (matchMedia("(max-width: 767px)").matches) {
    
//         let open_menu_btn = document.querySelector(".open_menu_btn")
//         let nav = document.querySelector("nav")
//         let close_menu_btn = document.querySelector(".close_menu_btn")
//         let nav_ul_li = document.querySelectorAll("nav>ul>li")
//         let nav_ul_li_a = document.querySelectorAll("nav>ul>li>a")
    
//         for(let i=0 ; i<nav_ul_li_a.length; i++){
//             nav_ul_li_a[i].addEventListener("click",function(e){
//                 e.preventDefault()
//             })
//         }
    
//         for(let i=0 ; i<nav_ul_li.length ; i++){
//             nav_ul_li[i].addEventListener("click",function(){
//                 for(let j=0 ;j<nav_ul_li.length ; j++){
//                     nav_ul_li[j].classList.remove("on")
//                 }
//                 nav_ul_li[i].classList.add("on")
//             })
//         }
    
    
    
//         open_menu_btn.addEventListener("click",function(){
//             nav.style.left = `0%`
//             open_menu_btn.style.opacity = `0`
//             open_menu_btn.style.pointerEvents = `none`
//             close_menu_btn.style.opacity = `1`
//             close_menu_btn.style.pointerEvents = `auto`
//         })
    
//         close_menu_btn.addEventListener("click",function(){
//             nav.style.left = `100%`
//             open_menu_btn.style.opacity = `1`
//             open_menu_btn.style.pointerEvents = `auto`
//             close_menu_btn.style.opacity = `0`
//             close_menu_btn.style.pointerEvents = `none`
//         })
    

//     }
// }