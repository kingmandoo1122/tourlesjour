window.onload = function(){

    let menu_img = document.querySelector(".menu_img>h1")
    let menu_name = document.querySelector(".menu_info>.name")
    let menu_info = document.querySelector(".menu_info>.info")
    let ingredient = document.querySelector(".menu_info>.ingredient")
    let allergy = document.querySelector(".menu_info>.allergy")
 
    menu_img.innerHTML = `${bread_array[0].imgframe}`
    menu_name.innerHTML =`${bread_array[0].name}`
    menu_info.innerHTML =`${bread_array[0].info}`
    ingredient.innerHTML =`${bread_array[0].ingredient}`
    allergy.innerHTML =`${bread_array[0].allergy}`
    let shareButton = document.querySelector("a.share")
    

    // document.addEventListener("DOMContentLoaded", function() {
    //     let copy = document.querySelector(".copy")

    //     let url 
    //     copy.addEventListener("click", function() {
    //         url = window.location.href;
    //         navigator.clipboard.writeText(url).then(() => {
    //             alert("현재 페이지 주소가 복사되었습니다.");
    //         }).catch(err => {
    //             console.error('URL 복사 실패:', err);
    //         });
    //     });
    // });


    // document.addEventListener("DOMContentLoaded", function() {
        let copy = document.querySelector(".copy");
        copy.addEventListener("click",function(){
            console.log(copy)
            let url = window.location.href;
                navigator.clipboard.writeText(url).then(() => {
                    alert("현재 페이지 주소가 복사되었습니다.");
                }).catch(err => {
                    console.error('URL 복사 실패:', err);
                });
        })



        if (shareButton) {
            shareButton.addEventListener("click", function() {
                var url = window.location.href;
                if (navigator.share) { // Web Share API가 지원되는지 확인
                    navigator.share({
                        title: document.title,
                        text: '이 페이지를 확인해보세요:',
                        url: url
                    }).then(function() {
                        console.log('공유 성공');
                    }).catch(function(err) {
                        console.error('공유 실패:', err);
                    });
                } else {
                    alert('Web Share API가 지원되지 않는 브라우저입니다.');
                }
            });
        } else {
            console.error("공유 버튼을 찾을 수 없습니다.");
        }
    }





