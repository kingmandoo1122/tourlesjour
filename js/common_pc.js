if (matchMedia("(min-width: 768px)").matches){

    // 상단네비게이션
    if(scroll > 1093){
        navigation_sec.classList.remove("top")
    }
    else{
        navigation_sec.classList.add("top")
    }
}