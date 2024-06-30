window.onload = function(){

let value_list = document.querySelectorAll(".value_div>ul>li")
let value_txt_div = document.querySelector(".value_txt")
let global_tab =document.querySelectorAll(".sub_global_bottom .tab_ul>li")
let global_txt = document.querySelectorAll(".sub_global_bottom .txt_ul>li ")
let value_txt = [
    `<h3 class="submidft">선별된 좋은 재료를 사용하여 더욱 건강한 제품을 제공하고자 합니다
    </h3>
    <p class="subsmallft">뚜레쥬르의 빵과 케이크는 들어가는 모든 재료를 하나 하나 꼼꼼히 선별해서 사용합니다.
    </p>
    <p class="subsmallft">빵에 가장 많이 쓰이는 우유와 치즈를 유기농 우유, 자연치즈로 바꿔보기도 하고, 각 지역의 싱싱한 제철 식재와 과일 등 자연의 기운을 담은 순수한 재료를 사용하는 등. 항상 좋은 재료가 기본이 되는 건강하고 정직한 빵과 케이크를 만들고자 노력 합니다.</p>`
    ,
    `<h3 class="submidft">갓 구운 신선함이 매장을 가득 채웁니다
    </h3>
    <p class="subsmallft">오븐에서 방금 꺼낸 빵이 가장 맛있다는 것을 알기에, 뚜레쥬르는 지금도 더욱 따뜻하고 촉촉한 갓 구운 빵을 제공하기 위해 끊임없이 노력합니다.
    </p>
    <p class="subsmallft">
    매장에서 직접 굽는 것에 그치지 않고, 언제라도 따끈한 빵을 만날 수 있게 더욱 자주 굽고, 고객들이 필요한 시간에 맞춰 굽는 등 세심하고 배려가 담긴 서비스도 준비하고 있습니다.</p>`
    ,
    `<h3 class="submidft">좋은 밀가루를 만드는 회사의 베이커리 브랜드
    </h3>
    <p class="subsmallft">뚜레쥬르와 CJ제일제당은 오랜 노력 끝에 베이커리 전용 맞춤 밀가루, ‘온리원(OnlyOne)’을 개발하여,  개성있는 최적의 빵 맛을 구현하고자 하였습니다.
    </p>
    <p class="subsmallft">
    식빵은 더욱 부드럽고 촉촉하게, 페이스트리 류는 더욱 가볍고 바삭하게! 뚜레쥬르의 다양한 맞춤 밀가루는 빵마다의 개성 있는 식감을살려주고 장시간 동안 그 부드러움이 유지되며, 더 깊은 빵의 풍미를 즐길 수 있도록 합니다.</p>`
]

for(let i=0;i<value_list.length;i++){
    value_list[i].addEventListener("click",function(){
        for(let j=0;j<value_list.length;j++){
            value_list[j].classList.remove("on")
        }
        value_list[i].classList.add("on")
        value_txt_div.innerHTML = value_txt[i]
    })
}
for(let i=0; i<global_tab.length;i++){
    global_tab[i].addEventListener("click",function(){
        for(let j=0;j<global_tab.length;j++){
            global_tab[j].classList.remove("on")
            global_txt[j].classList.remove("on")
        }
        global_tab[i].classList.add("on")
        global_txt[i].classList.add("on")
    })
}



    let navigation_sec = document.querySelector(".navigation_sec")
    let rect
    let scroll
    let viewheight = window.innerHeight
    let sub_down_to_up_event = document.querySelectorAll(".sub_down_to_up_event")
    let sub_down_to_up_event_ver2 = document.querySelectorAll(".history_ol .sub_down_to_up_event")

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
    
    
    



let footer = document.querySelector("footer")
// console.log(footer.getBoundingClientRect())

// * 함수 정의 1
function getitemtop(event){ // event = 태그 = document.querySelector("원하는css값")
    rect = event.getBoundingClientRect()
    return rect.top + scroll
}
// getitemtop 함수 = event해당하는 태그의 top값 return
// getitemtop의 값에서 viewheight 값의 0.6~0.7을 곱한 값을 뺀 위치에 이벤트 작동되게



// 페이지의 최상단부터 div 요소의 top 위치까지의 거리를 계산합니다

function gettop (item){
    let recta
    recta = item.getBoundingClientRect()
    let scrollTop =  window.scrollY;
    let divTop = recta.top + scrollTop;
    return divTop

}



window.addEventListener("scroll",function(){
    scroll = window.scrollY
    let sub_history = document.querySelector(".sub_history")
    let elv = document.querySelector(".elv")
    let train = document.querySelector(".elv>.inner_contents>.history_ol")
    let ani_length = sub_history.offsetHeight - elv.offsetHeight
    let distance = scroll - getitemtop(sub_history)
    let ani_per = distance / ani_length *100 //0~99
    let cur_line = document.querySelector(".cur_line")
    let opacity_ani =document.querySelectorAll(".opacity_ani")
    // console.log(ani_length)
    let dot_line_2n = document.querySelectorAll(".history_ol>li:nth-of-type(2n)>h5")
    let dot_line_2n_1 = document.querySelectorAll(".history_ol>li:nth-of-type(2n-1)>h5")
    


    for(let i=0; i<sub_down_to_up_event.length; i++){
        if(scroll > getitemtop(sub_down_to_up_event[i]) - viewheight*0.65){
            sub_down_to_up_event[i].classList.add("on")
        }
        else{
            sub_down_to_up_event[i].classList.remove("on")
        }
    }


    for(let i=0; i<sub_down_to_up_event_ver2.length; i++){
        if(scroll > getitemtop(sub_down_to_up_event_ver2[i]) - viewheight*0.75){
            sub_down_to_up_event_ver2[i].classList.add("on")
        }
        else{
            sub_down_to_up_event_ver2[i].classList.remove("on")
        }
    }

    for(let i=0; i<opacity_ani.length; i++){
        if(scroll > getitemtop(opacity_ani[i]) - viewheight*0.65){
            opacity_ani[i].classList.add("on")
        }
        else{
            opacity_ani[i].classList.remove("on")
        }
    }



    // console.log(gettop(dot_line_2n[0]))
    // console.log(scroll)
    // console.log(ani_length)

    if (distance < 0){
        elv.classList.remove("fixed")
        elv.classList.remove("bottom")
        train.style.transform = `translateY(0%)`
        cur_line.style.height = `5%`
        dot_line_2n_1[0].classList.remove("fill")
    }


    if (distance > 0 && distance <= ani_length) {
        elv.classList.add("fixed")
        elv.classList.remove("bottom")
        train.style.transform = `translateY(${ani_per * -0.8}%)`
        cur_line.style.height = `${10 + ani_per}%`
        // console.log(distance)
        
        // console.log(gettop(dot_line_2n[0]))
        // console.log(scroll?)

        // if(scroll>gettop(dot_line_2n_1[0]) && scroll < gettop(dot_line_2n[0]) ){
        //     dot_line_2n_1[0].classList.remove("fill")
        // }

        // if(scroll>gettop(dot_line_2n[0]) && scroll < gettop(dot_line_2n_1[1]) ){
        //     dot_line_2n_1[0].classList.add("fill")
        //     dot_line_2n[0].classList.remove("fill")
        // }
        // if(distance>766 && distance < 1448 ){
        //     dot_line_2n[0].classList.add("fill")
        //     dot_line_2n_1[1].classList.remove("fill")
        // }
        // if(distance>1448 && distance < 1813 ){
        //     dot_line_2n_1[1].classList.add("fill")
        //     dot_line_2n[1].classList.remove("fill")
        // }
        // if(distance>1813 && distance < 2405 ){
        //     dot_line_2n[1].classList.add("fill")
        //     dot_line_2n_1[2].classList.remove("fill")
        // }
        // if(distance>2405 && distance < 2790 ){
        //     dot_line_2n_1[2].classList.add("fill")
        //     dot_line_2n[2].classList.remove("fill")
        // }
        // if(distance>2790 && distance < 3531 ){
        //     dot_line_2n[2].classList.add("fill")
        //     dot_line_2n_1[3].classList.remove("fill")
        // }
        // if(distance>3531 && distance < 4220 ){
        //     dot_line_2n_1[3].classList.add("fill")
        //     dot_line_2n[3].classList.remove("fill")
        // }
        // if(distance>4220 && distance < 4925){
        //     dot_line_2n[3].classList.add("fill")
        // }

        if(scroll > getitemtop(dot_line_2n_1[0]) - viewheight*0.1){
            dot_line_2n_1[0].classList.add("fill")
        }
        else{
            dot_line_2n_1[0].classList.remove("fill")
        }

        if(scroll > getitemtop(dot_line_2n[0]) - viewheight*0.23){
            dot_line_2n[0].classList.add("fill")
        }
        else{
            dot_line_2n[0].classList.remove("fill")
        }


        if(scroll > getitemtop(dot_line_2n_1[1]) - viewheight*0.38){
            dot_line_2n_1[1].classList.add("fill")
        }
        else{
            dot_line_2n_1[1].classList.remove("fill")
        }

        if(scroll > getitemtop(dot_line_2n[1]) - viewheight*0.45){
            dot_line_2n[1].classList.add("fill")
        }
        else{
            dot_line_2n[1].classList.remove("fill")
        }


        if(scroll > getitemtop(dot_line_2n_1[2]) - viewheight*0.58){
            dot_line_2n_1[2].classList.add("fill")
        }
        else{
            dot_line_2n_1[2].classList.remove("fill")
        }


        if(scroll > getitemtop(dot_line_2n[2]) - viewheight*0.66){
            dot_line_2n[2].classList.add("fill")
        }
        else{
            dot_line_2n[2].classList.remove("fill")
        }
        if(scroll > getitemtop(dot_line_2n_1[3]) - viewheight*0.82){
            dot_line_2n_1[3].classList.add("fill")
        }
        else{
            dot_line_2n_1[3].classList.remove("fill")
        }


        if(scroll > getitemtop(dot_line_2n[3]) - viewheight*0.95){
            dot_line_2n[3].classList.add("fill")
        }
        else{
            dot_line_2n[3].classList.remove("fill")
        }





    }
    if (distance > ani_length){
        elv.classList.add("bottom")
        elv.classList.remove("fixed")
        train.style.transform = `100%`
        dot_line_2n[3].classList.add("fill")
    }













    // if(scroll > )




    // 상단네비게이션
    // if(scroll > 1093){
    //     navigation_sec.classList.remove("top")
    // }
    // else{
    //     navigation_sec.classList.add("top")
    // }



})













}