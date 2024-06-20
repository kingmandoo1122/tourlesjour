function showList(array){
    let result =""
    for(let i=0; i<array.length;i++){
        
        result +=`<li><div class="info">
        <a href="menu_info.html">
        <p>영양성분</p>
        <ul>
            <li>열랑(Kcal) : 280</li>
            <li>당류(g/%) : 6/6</li>
            <li>단백질(g/%) : 11/20</li>
            <li>포화지방(g/%) : 2.4/16</li>
            <li>나트륨(mg/%) : 370/19</li>
        </ul>
        <p>*%영양소 기준치 : 1일 영양성분 기준치에 대한 비율</p>
    </a>
    </div>
    <a href="#"> ${array[i].imgframe} <p>${array[i].name}</p></a></li>`
    }
    return result

}


window.onload = function(){


let food_menu_ul_li_a = document.querySelectorAll(".food_menu_ul>li>a")
let menu_wrap_div = document.querySelectorAll(".menu_wrap>div")

let food_menu_ul_li = document.querySelectorAll(".food_menu_ul>li")
let food_menu_ul_ul = document.querySelectorAll(".food_menu_ul>li>ul")

let food_menu_ul_li2_a = document.querySelectorAll(".food_menu_ul>li>ul>li>a") //식빵~샌드위치
// let food_menu_ul_li_2 = document.querySelectorAll(".food_menu_ul>li:nth-of-type(2) ul>li")
// let food_menu_ul_li_3 = document.querySelectorAll(".food_menu_ul>li:nth-of-type(3) ul>li")
// let food_menu_ul_li_4 = document.querySelectorAll(".food_menu_ul>li:nth-of-type(4) ul>li")
// let food_menu_ul_li_5 = document.querySelectorAll(".food_menu_ul>li:nth-of-type(5) ul>li")


// let food_menu_ul_lists = [food_menu_ul_li_1,food_menu_ul_li_2,food_menu_ul_li_3,food_menu_ul_li_4,food_menu_ul_li_5]


    
let bread_ul_li = document.querySelectorAll(".bread_ul>li")
let cake_ul_li = document.querySelectorAll(".cake_ul>li")
let deli_ul_li= document.querySelectorAll(".deli_ul>li")
let dessert_ul_li= document.querySelectorAll(".dessert_ul>li")
let drink_ul_li= document.querySelectorAll(".drink_ul>li")
let menu_li = [bread_ul_li,cake_ul_li,deli_ul_li,dessert_ul_li,drink_ul_li]



for(let i=0; i<food_menu_ul_li_a.length;i++){
    food_menu_ul_li_a[i].addEventListener("click",function(){
        for(let j=0;j<food_menu_ul_li_a.length;j++){
            food_menu_ul_li[j].classList.remove("on")

            for(let k=0;k<menu_li[i].length;k++){
                menu_li[i][k].classList.remove("on")
            }

        }
        food_menu_ul_li[i].classList.add("on")
        menu_li[i][0].classList.add("on")

    })
}












function depth2select(tag){

    for(let i=0;i<tag.length;i++){
        tag[i].addEventListener("click",function(){
            for(let j=0; j<tag.length;j++){
                tag[j].classList.remove("on")
            }
            tag[i].classList.add("on")
        })
    }
}


// for(let i=0;i<bread_ul_li.length;i++){
//     bread_ul_li[i].addEventListener("click",function(){
//         for(let j=0; j<bread_ul_li.length;j++){
//             bread_ul_li[j].classList.remove("on")
            
//         }
//         bread_ul_li[i].classList.add("on")
        
//     })
// }


// for(let i=0;i<bread_ul_li.length;i++){
//     bread_ul_li[i].addEventListener("click",function(){
//         for(let j=0; j<bread_ul_li.length;j++){
//             bread_ul_li[j].classList.remove("on")
//             for(let k=0;k<food_menu_ul_li.length;k++){
//                 food_menu_ul_li[k].classList.remove("on")
//             }
//         }
//         bread_ul_li[i].classList.add("on")
//         food_menu_ul_li[0].classList.add("on")
//     })
// }


// for(let i=0;i<cake_ul_li.length;i++){
//     cake_ul_li[i].addEventListener("click",function(){
//         for(let j=0; j<cake_ul_li.length;j++){
//             cake_ul_li[j].classList.remove("on")
//             for(let k=0;k<food_menu_ul_li.length;k++){
//                 food_menu_ul_li[k].classList.remove("on")
//             }
//         }
//         cake_ul_li[i].classList.add("on")
//         food_menu_ul_li[1].classList.add("on")
//     })
// }




for(let p=0; p<menu_li.length;p++){
    for(let i=0;i<menu_li[p].length;i++){
        menu_li[p][i].addEventListener("click",function(){
            for(let j=0; j<menu_li[p].length;j++){
                menu_li[p][j].classList.remove("on")
                for(let k=0;k<food_menu_ul_li.length;k++){
                    food_menu_ul_li[k].classList.remove("on")
                }
            }
            menu_li[p][i].classList.add("on")
            food_menu_ul_li[p].classList.add("on")
        })
    }
}






let first_array = []
bread_array.map(function(item){
    if(item.pcate =="식빵"){
        first_array.push(item)
    }
})


document.querySelector(".pro_list").innerHTML = showList(first_array)




depth2select(bread_ul_li)
depth2select(cake_ul_li)
depth2select(deli_ul_li)
depth2select(dessert_ul_li)
depth2select(drink_ul_li)


//2뎁스 클릭시 변경함수






// 1뎁스메뉴
for(let i=0 ; i<product_array.length ; i++){
    food_menu_ul_li_a[i].addEventListener("click",function(){
        let category_name = this.getAttribute("data-category")
        let result_array = []
        product_array[i].map(function(item){
            if(item.pcate == category_name){
                result_array.push(item)
            }
        })
        // console.log(result_array)
        // console.log(showList(result_array))
        document.querySelector(".pro_list").innerHTML = showList(result_array)
    })
}





// 2뎁스메뉴

for(let i=0 ; i<product_array[0].length ; i++){
    food_menu_ul_li2_a[i].addEventListener("click",function(){
        let category_name = this.getAttribute("data-category")
        let depth1num = this.getAttribute("data-num")
        let result_array = []

        product_array[depth1num].map(function(item){
            if(item.pcate == category_name){
                result_array.push(item)
            }
        })
        console.log(result_array)
        // console.log(showList(result_array))
        document.querySelector(".pro_list").innerHTML = showList(result_array)

    })
}




// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map(function(number) {
//     return number * 2; // 매핑된 결과를 새로운 배열로 반환
// });








// for(let i=0;i<food_menu_ul_li_a.length;i++){
    
//     food_menu_ul_li_a[i].addEventListener("click",function(e){
//         e.preventDefault()
//         for(let j=0;j<food_menu_ul_li_a.length;j++){
//             food_menu_ul_li[j].classList.remove("on")
//             menu_wrap_div[j].classList.remove("on")
//             food_menu_ul_lists[j][0].classList.remove("on")
//         }
//         food_menu_ul_li[i].classList.add("on")
//         menu_wrap_div[i].classList.add("on")
//         food_menu_ul_lists[i][0].classList.add("on")
//     })
// }


// for(let i=0;i<food_menu_ul_li_1.length;i++){
//     food_menu_ul_li_1[i].addEventListener("click",function(){
//         for(let j=0;j<food_menu_ul_li_1.length;j++)
//         {food_menu_ul_li_1[j].classList.remove("on")
//         menu_wrap_div[1].classList.remove("on")
//         for(let k=0;k<food_menu_ul_li_a.length;k++){
//             food_menu_ul_li[j].classList.remove("on")
//         }
//         }


//         food_menu_ul_li[i].classList.add("on")
//         food_menu_ul_li_1[i].classList.add("on")
//         menu_wrap_div[0].classList.add("on")
//     })

// }





// for(let i=0;i<food_menu_ul_li_2.length;i++){
//     food_menu_ul_li_2[i].addEventListener("click",function(){

//         for(let j=0;j<food_menu_ul_li_2.length;j++)
//         {food_menu_ul_li_2[j].classList.remove("on")
//         menu_wrap_div[0].classList.remove("on")
//         food_menu_ul_li[j].classList.remove("on")}


//         food_menu_ul_li[i].classList.add("on")
//     food_menu_ul_li_2[i].classList.add("on")
//     menu_wrap_div[1].classList.add("on")
//     })

// }











// for(let i=0; i<food_menu_ul_lists.length;i++){
//     for(k=0;k<food_menu_ul_lists[i].length;k++){
//         food_menu_ul_lists[i][k].addEventListener("click",function(){
//             for(let j=0;j<food_menu_ul_lists[i].length;j++){
//                 food_menu_ul_lists[i][j].classList.remove("on")
//             }
//             food_menu_ul_lists[i][i].classList.add("on")
//         })
//     }

    
   
// }





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
    bread_list[i].innerHTML =`<div class="info">
    <a href="menu_info.html">
    <p>영양성분</p>
    <ul>
        <li>열랑(Kcal) : 280</li>
        <li>당류(g/%) : 6/6</li>
        <li>단백질(g/%) : 11/20</li>
        <li>포화지방(g/%) : 2.4/16</li>
        <li>나트륨(mg/%) : 370/19</li>
    </ul>
    <p>*%영양소 기준치 : 1일 영양성분 기준치에 대한 비율</p>
</a>
</div>
<a href="#"> ${bread_array[i].imgframe} <p>${bread_array[i].name}</p></a>`
}


for(let i=0; i<cake_list.length;i++){
    cake_list[i].innerHTML =` <div class="info">
    <p>영양성분</p>
    <ul>
        <li>열랑(Kcal) : 2610</li>
        <li>당류(g/%) : 177/177</li>
        <li>단백질(g/%) : 31/56</li>
        <li>포화지방(g/%) : 85/567</li>
        <li>나트륨(mg/%) : 1140/57</li>
    </ul>
    <p>*%영양소 기준치 : 1일 영양성분 기준치에 대한 비율</p>
</div><a href="#"> ${cake_array[i].imgframe} <p>${cake_array[i].name}</p></a>`
}














}