window.onload = function(){







let bread_array =[
    {
        name : `고단백 현미 식빵`,
        imgframe :`<img src="./img/menu/bread_1.jpg" alt="고단백 현미 식빵">`,
        info : `탕종법을 사용하여 촉촉하고 쫄깃한 기지에 현미와 호두, 아몬드, 호박씨, 해바라기씨 등의 견과류를 함유하여 더 고소하게 즐기기 좋은 고단백 식빵`,
        ingredient : ""
    },
    {
        name : `그대로 구워먹는 꿀 토스트 식빵`,
        imgframe :`<img src="./img/menu/bread_2.jpg" alt="그대로 구워먹는 꿀 토스트 식빵">`,
        info : `꿀분말과 펄슈가를 넣어 건강한 단맛과 고소한 버터 풍미로 토스트 하였을 때 가장 맛있는 식빵`,
        ingredient : ""
    },
    {
        name : `착한빵식 통밀식빵`,
        imgframe :`<img src="./img/menu/bread_3.jpg" alt="착한빵식 통밀식빵">`,
        info : `통밀을 넣어 고소 담백하고 맥주발효종으로
        풍미와 식감을 더한 식사빵. 맛있고 건강한
        푸드업사이클링 재료를 더해 내 몸과 지구에
        더욱 건강한 제품`,
        ingredient : ""
    },
    {
        name : `고소 담백 더치브레드`,
        imgframe :`<img src="./img/menu/bread_4.jpg" alt="고소 담백 더치브레드">`,
        info : `가슬가슬한 윗면과 폭신하고 은은한 단맛의
        빵결로 손으로 뜯어먹으면 더욱 맛있는 제품`,
        ingredient : ""
    },
    {
        name : `고소함이 톡톡 곡물식빵`,
        imgframe :`<img src="./img/menu/bread_5.jpg" alt="고소함이 톡톡 곡물식빵">`,
        info : `해바라기씨, 아마씨, 참깨, 귀리를 넣고 반죽한 촉촉한 곡물식빵으로 입안에서 고소함이
        톡톡 터지는 제품`,
        ingredient : ""
    },
    {
        name : `마구마구 밤식빵`,
        imgframe :`<img src="./img/menu/bread_6.jpg" alt="마구마구 밤식빵">`,
        info : `밤 다이스를 듬뿍 넣고, 밤 크림을 더해 풍미 UP! 더욱 커지고 촉촉하게 재탄생한 밤식빵`,
        ingredient : ""
    },
    {
        name : `마구마구 밤식빵(1/2)`,
        imgframe :`<img src="./img/menu/bread_7.jpg" alt="마구마구 밤식빵(1/2)">`,
        info : `밤 다이스를 듬뿍 넣고, 밤크림을 더해 풍미 UP! 더욱 커지고 촉촉하게 재탄생한 밤식빵`,
        ingredient : ""
    },
    {
        name : `72겹의 정성 데니쉬식빵`,
        imgframe :`<img src="./img/menu/bread_8.jpg" alt="72겹의 정성 데니쉬식빵">`,
        info : `겉은 바삭, 속은 72겹의 결이 살아 있어
        결결이 뜯어 먹기 좋은 고소한 버터 풍미의
        정통 데니쉬식빵`,
        ingredient : ""
    },
    {
        name : `순,식빵`,
        imgframe :`<img src="./img/menu/bread_9.jpg" alt="순,식빵">`,
        info : `막걸리종으로 만든 쌀 발효당을 넣은 은은한
        단맛과, 탕종법으로 부드럽고 촉촉한 식감의
        뚜레쥬르 시그니처 식빵`,
        ingredient : ""
    },
    {
        name : `고소한 곡물식빵`,
        imgframe :`<img src="./img/menu/bread_10.jpg" alt="고소한 곡물식빵">`,
        info : `곡물과 씨앗을 가득 넣고 구워
        더욱 고소하고 촉촉해 샌드위치 등
        식사빵으로 활용하기 좋은 제품`,
        ingredient : ""
    },
    {
        name : `촉촉 쫄깃 탕종식빵`,
        imgframe :`<img src="./img/menu/bread_11.jpg" alt="촉촉 쫄깃 탕종식빵">`,
        info : `탕종을 넣어 더욱 촉촉하고 쫄깃한 식감과
        은은한 단맛이 어우러지는 담백 식빵`,
        ingredient : ""
    },
    {
        name : `生生 생크림 식빵`,
        imgframe :`<img src="./img/menu/bread_12.jpg" alt="生生 생크림 식빵">`,
        info : `마스카포네 생크림을 넣어 극강의 부드러움과 마지막까지 은은한 단맛을 느낄 수 있는
        뚜레쥬르 대표 식빵`,
        ingredient : ""
    },
    {
        name : `고메 버터 식빵`,
        imgframe :`<img src="./img/menu/bread_13.jpg" alt="고메 버터 식빵">`,
        info : `브라운버터를 넣어 버터의 풍미를 올린
        촉촉하고 부드러운 빵에 바삭하고 고소한
        풍미의 패스트리가 만나 껍질까지 맛있게
        먹을 수 있는 맛있는 식빵`,
        ingredient : ""
    },
    {
        name : `통우유식빵`,
        imgframe :`<img src="./img/menu/bread_14.jpg" alt="통우유식빵">`,
        info : `30.7% 우유 함량으로 쫄깃한 식감과 고소한
        풍미가 일품으로, 통으로 제공되어 고객님의
        취향에 따라 두껍게 슬라이스하여 프렌치토스트
        하여도 좋으며, 손으로 결대로 뜯어 먹어도 좋은 제품`,
        ingredient : ""
    },
    {
        name : `TLJ옥수수듬뿍옥수수식빵`,
        imgframe :`<img src="./img/menu/bread_15.jpg" alt="TLJ옥수수듬뿍옥수수식빵">`,
        info : `한층 더 촉촉해지고 옥수수 맛이 풍부한 빵 속에 고소한 옥수수 알갱이가 톡톡 씹히는 식빵`,
        ingredient : ""
    },
    {
        name : `더블 롤치즈 식빵`,
        imgframe :`<img src="./img/menu/bread_16.jpg" alt="더블 롤치즈 식빵">`,
        info : `
        폭신하고 부드러운 탕종반죽에
        고소한 롤치즈와 짭짤한 체다치즈가
        콕콕 박힌 더블 롤치즈 식빵`,
        ingredient : ""
    }


]


let cake_array = [
    {
        name : `헬로카봇 펜타스톰X라이프캐논`,
        imgframe :`<img src="./img/menu/cake_1.jpg" alt="헬로카봇 펜타스톰X라이프캐논">`,
        info : `펜타스톰X라이프 캐논 모드가 지구를 지키러
        출동해 새니타이저 캐논을 발사하는 모습을
        표현한 초코 케이크`,
        ingredient : ""
    },
    {
        name : `카3_라이트닝맥퀸_케이크`,
        imgframe :`<img src="./img/menu/cake_2.jpg" alt="카3_라이트닝맥퀸_케이크">`,
        info : `빨간 라이트닝 맥퀸 피규어가 레이싱에서
        달콤한 초콜렛 트랙을 질주하는 모습을 표현한
        초코 가나슈 케이크`,
        ingredient : ""
    },
    {
        name : `곰돌이 푸_알럽허니`,
        imgframe :`<img src="./img/menu/cake_3.jpg" alt="곰돌이 푸_알럽허니">`,
        info : `달콤한 꿀 바나나 크림과 바나나 리플 잼을
        샌드하고 진한 초코 크림 사이 초코 크런치와
        미니 마시멜로를 샌드한 사랑스러운
        곰돌이 푸 케이크`,
        ingredient : ""
    },
    {
        name : `크앙! 티라노 케이크`,
        imgframe :`<img src="./img/menu/cake_4.jpg" alt="크앙! 티라노 케이크">`,
        info : `알을 노리는 랩터로부터 크앙! 포효하며 알을
        수호하는 티라노 사우르스를 표현한
        2단 초코 케이크
        (버튼을 누르면, 크앙! 소리나는
        티라노 피규어가 올라가 있어요!)`,
        ingredient : ""
    },
    {
        name : `티니핑과 슈가베리 케이크`,
        imgframe :`<img src="./img/menu/cake_5.jpg" alt="티니핑과 슈가베리 케이크">`,
        info : `달콤한 초코 시트에 가나슈와 딸기 꿀리를
        샌드하고 딸기 우유 맛 크림으로 아이싱한 뒤
        귀여운 말랑핑을 살포시 올린
        캐치!티니핑 슈가베리 케이크`,
        ingredient : ""
    },
    {
        name : `퐁신퐁신 포실핑`,
        imgframe :`<img src="./img/menu/cake_6.jpg" alt="퐁신퐁신 포실핑">`,
        info : `상큼한 딸기시트에 블루베리가나슈와
        라즈베리크림을 샌드하고, 대형 포실핑 초콜릿 장식을 올려낸 캐치!티니핑 케이크`,
        ingredient : ""
    },
    {
        name : `사르르 샤샤핑`,
        imgframe :`<img src="./img/menu/cake_7.jpg" alt="사르르 샤샤핑">`,
        info : `달콤한 초코시트와 가나슈, 초코크림으로
        샌드하고, 아이스크림 장식과 샤샤핑을 올려낸
        캐치!티니핑 초코케이크`,
        ingredient : ""
    },
    {
        name : `사르르 티라미수 생크림 쉬폰`,
        imgframe :`<img src="./img/menu/cake_8.jpg" alt="사르르 티라미수 생크림 쉬폰">`,
        info : `풍미 좋은 커피시럽을 더한 폭신한 모카 쉬폰에
        마스카포네 생크림을 샌드하고 연유 생크림으로
        마무리한 티라미수 생크림 쉬폰`,
        ingredient : ""
    },
    {
        name : `사르르 생크림 쉬폰`,
        imgframe :`<img src="./img/menu/cake_9.jpg" alt="사르르 생크림 쉬폰">`,
        info : `폭신폭신한 쉬폰과 입안에서 사르르 녹는
        우유 생크림이 어우러진 케이크`,
        ingredient : ""
    },
    {
        name : `사르르 초코 생크림 쉬폰`,
        imgframe :`<img src="./img/menu/cake_10.jpg" alt="사르르 초코 생크림 쉬폰">`,
        info : `폭신폭신 쉬폰과 사르르 녹는 달콤한
        초코 생크림이 어우러진 쁘띠 케이크`,
        ingredient : ""
    },
    {
        name : `마담 얼그레이 케이크`,
        imgframe :`<img src="./img/menu/cake_11.jpg" alt="마담 얼그레이 케이크">`,
        info : `제품설명
        묵직한 바디감의 시트에 둘세 카라멜 가나슈와
        얼그레이 풍미의 연유 생크림으로 그 맛을 더한 케이크`,
        ingredient : ""
    },
    {
        name : `말차에 퐁당 딸기케이크`,
        imgframe :`<img src="./img/menu/cake_12.jpg" alt="말차에 퐁당 딸기케이크">`,
        info : `산뜻하고 달콤한 딸기 크림에
        봄의 싱그러움을 듬뿍 머금은 말차 크림을 더한
        그린 & 핑크빛의 사랑스러운 케이크`,
        ingredient : ""
    }

]





let food_menu_ul_li_a = document.querySelectorAll(".food_menu_ul>li>a")
let menu_wrap_div = document.querySelectorAll(".menu_wrap>div")

let food_menu_ul_li = document.querySelectorAll(".food_menu_ul>li")
let food_menu_ul_li_ul_li = document.querySelectorAll(".food_menu_ul>li ul>li")

let food_menu_ul_li_1 = document.querySelectorAll(".food_menu_ul>li:nth-of-type(1) ul>li")
let food_menu_ul_li_2 = document.querySelectorAll(".food_menu_ul>li:nth-of-type(2) ul>li")
let food_menu_ul_li_3 = document.querySelectorAll(".food_menu_ul>li:nth-of-type(3) ul>li")
let food_menu_ul_li_4 = document.querySelectorAll(".food_menu_ul>li:nth-of-type(4) ul>li")
let food_menu_ul_li_5 = document.querySelectorAll(".food_menu_ul>li:nth-of-type(5) ul>li")


let foo_menu_ul_lists = [food_menu_ul_li_1,food_menu_ul_li_2,food_menu_ul_li_3,food_menu_ul_li_4,food_menu_ul_li_5]


for(let i=0;i<food_menu_ul_li_a.length;i++){
    food_menu_ul_li_a[i].addEventListener("click",function(){
        for(let j=0;j<food_menu_ul_li_a.length;j++){
            food_menu_ul_li[j].classList.remove("on")
            menu_wrap_div[j].classList.remove("on")
            foo_menu_ul_lists[j][0].classList.remove("on")
        }
        food_menu_ul_li[i].classList.add("on")
        menu_wrap_div[i].classList.add("on")
        foo_menu_ul_lists[i][0].classList.add("on")
    })
}




let rect
let scroll
let viewheight = window.innerHeight
let up_to_down = document.querySelectorAll(".up_to_down")
function getitemtop(event){ // event = 태그 = document.querySelector("원하는css값")
    rect = event.getBoundingClientRect()
    return rect.top + scroll
}

let navigation_sec = document.querySelector(".navigation_sec")
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











let bread_list = document.querySelectorAll(".menu_bread>ul>li")
let cake_list = document.querySelectorAll(".menu_cake>ul>li")

for(let i=0; i<bread_list.length;i++){
    bread_list[i].innerHTML =`<a href="#"> ${bread_array[i].imgframe} <p>${bread_array[i].name}</p></a>`
}


for(let i=0; i<cake_list.length;i++){
    cake_list[i].innerHTML =`<a href="#"> ${cake_array[i].imgframe} <p>${cake_array[i].name}</p></a>`
}














}