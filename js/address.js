window.onload = function(){


    let pal0 = document.querySelector(".pal0")

    console.log(pal0)
let paldo = [
    ["경기도",["성남시 분당구","성남시 중원구","성남시 수정구"]],
    ["강원도",["강릉시","속초시","양양군"]],
    ["서울특별시",["강남구","강북구","마포구"]],
    ["부산광역시",["해운대구","북구"]]
]


let place_parent = document.querySelector("#place_parent")
let place_child = document.querySelector("#place_child")



// place_parent.innerHTML = `
// <option value="#">선택</option>
// <option class="pal0" value="#">${paldo[0][0]}</option>
// <option class="pal1" value="#">${paldo[1][0]}</option>
// <option class="pal2" value="#">${paldo[2][0]}</option>
// `


pal0.addEventListener("change",function(){
    console.log("ggg")
    place_child.innerHTML = `
    <option value="#">${paldo[0][1][0]}</option>
    <option value="#">${paldo[0][1][1]}</option>
    <option value="#">${paldo[0][1][2]}</option>

    `

})

}


