
window.onload = function(){




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
    
    


    let event_card_ul = document.querySelector(".event_card ul")


    let card_li_html = ""
    for(let i=0; i<card_array.length;i++){
        card_li_html += `<li>
        <a href="event_card_info.html?&cid=${card_array[i].cid}">
        ${card_array[i].imgframe}
        </a> 
        <p>${card_array[i].name}</p></li>
    
    
    `
    }


    event_card_ul.innerHTML = card_li_html



    
        
    }