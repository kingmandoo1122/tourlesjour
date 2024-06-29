let card_array = [

    {
        cid : 0 ,
        name : "T 멤버십",
        imgframe : `<img src="./img/card_1.png" alt="t멤버쉽카드">`,
        type : "통신사 멤버십 혜택",
        cardinfo : `(할인형) VIP/골드 1,000원당 150원 할인
                    실버 1,000원당 50원
                    (적립형) VIP/골드 1,000원당 150원 적립
                    실버 1,000원당 50원 적립`,
        cardinfo_2 : `
        <li>1일 1회 사용 가능</li>
        <li>구매금액 최대 20만원 내 할인/적립</li>
        <li>T 플러스포인트 사용 가능</li>`,
    },
    {
        cid : 1 ,
        name : "현대카드 M포인트",
        imgframe : `<img src="./img/card_2.png" alt="현대카드 M포인트">`,
        type : "포인트&보너스 적립 혜택",
        cardinfo : `구매 금액의 50% 포인트 사용`,
        cardinfo_2 : `
        <li>포인트 한도 내에서 결제 가능하며, 잔여 포인트 부족 시 보유 중인 포인트 만큼만 차감</li>
         `,
    },
    {
        cid : 2 ,
        name : "신한 DIY카드",
        imgframe : `<img src="./img/card_3.png" alt="신한 DIY카드">`,
        type : "포인트&보너스 적립 혜택",
        cardinfo : `구매 금액의 최대 5% 마이 신한포인트적립`,
        cardinfo_2 : `
        <li>포인트 DIY 설정에 따라, 적립률 1%~5% 변동</li>
        <li>카드 뒷면 바코드를 통한 CJ ONE 포인트 적립</li>
        `,
    },
    {
        cid : 3 ,
        name : "신한카드 Hi-Point",
        imgframe : `<img src="./img/card_4.png" alt="신한카드 Hi-Point">`,
        type : "포인트&보너스 적립 혜택",
        cardinfo : `구매 금액의 15% 포인트 사용`,
        cardinfo_2 : `
        <li>포인트 한도 내에서 결제 가능하며, 잔여 포인트 부족 시 보유 중인 포인트 만큼만 차감</li>
        <li>한도 및 횟수 제한 없음. Nano/Nano F, S-MORE, 체크카드 포함</li>
        `,
    },
    {
        cid : 4 ,
        name : "CJ ONE 삼성/신한카드",
        imgframe : `<img src="./img/card_5.png" alt="CJ ONE 삼성/신한카드">`,
        type : "신용카드/멤버십 제휴카드 혜택",
        cardinfo : `구매금액의 15%할인 +
기본적립율(제휴/할인 시 적립율)의
2배 적립(CJ ONE 포인트)`,
        cardinfo_2 : `
       <li>전월(1일~말일) 실적 20만원 이상</li>
       <li>월 5회 한도(1회 최대 3만원 할인, CJ 푸드빌 15% 할인브랜드 통합 기준)</li>
       <li>할인 횟수 초과 시, 기본 적립율의 2배 적립 (CJ ONE 포인트)</li>
       `,
    },
    {
        cid : 5 ,
        name : "KT멤버십",
        imgframe : `<img src="./img/card_6.png" alt="KT멤버십">`,
        type : "통신사 멤버십 혜택",
        cardinfo : `VIP/골드: 구매금액 1,000원당 150원 할인
실버/화이트/일반: 구매금액 1,000원당 100원 할인`,
        cardinfo_2 : `
        <li>1일 1회 사용가능</li>
        <li>1회 최대 20만원 한도 할인</li>
        `,
    },
    {
        cid : 6 ,
        name : "CJ ONE 신한 체크카드",
        imgframe : `<img src="./img/card_7.png" alt="CJ ONE 신한 체크카드">`,
        type : "신용카드/멤버십 제휴카드 혜택",
        cardinfo : `구매금액의 10% 캐시백`,
        cardinfo_2 : `
       <li>일 1회, 월 5회 / 1회 최대 1천원 캐시백 (뚜레쥬르/투썸플레이스 통합 기준)</li>
       `,
    },
    {
        cid : 7 ,
        name : "CJ ONE 우리 체크카드",
        imgframe : `<img src="./img/card_8.png" alt="CJ ONE 우리 체크카드">`,
        type : "신용카드/멤버십 제휴카드 혜택",
        cardinfo : `3천원 캐쉬백`,
        cardinfo_2 : `
       <li>15,000원 이상 사용 시</li>
       <li>통합 일 1회, 월 6천원 한도</li>
       <li>캐시백 금액은 월간 통합 캐시백 한도 내에서 제공</li>
       <li>상품권 구매금액, 기프트카드·선불카드 구매/충전금액은 캐시백 제외</li>
       `,
    }, 
    {
        cid : 8 ,
        name : "농협카드 NH포인트",
        imgframe : `<img src="./img/card_9.png" alt="농협카드 NH포인트">`,
        type : "포인트&보너스 적립 혜택",
        cardinfo : `구매 금액의 100% 포인트 사용`,
        cardinfo_2 : `
        <li>포인트 한도 내에서 결제 가능하며, 잔여 포인트 부족 시 보유 중인 포인트 만큼만 차감</li>`,
    }
    ,
    {
        cid : 9 ,
        name : "CJ ONE 하나 체크카드",
        imgframe : `<img src="./img/card_10.png" alt="CJ ONE 하나 체크카드">`,
        type : "신용카드/멤버십 제휴카드 혜택",
        cardinfo : `적립한 CJ ONE 포인트의
2배 캐쉬백`,
        cardinfo_2 : `
       <li>전월 실적 30만원 이상 / 1만원 이상 결제 시 (월 최대 1만원 캐쉬백)</li>
       <li>국내 하나카드 전 가맹점에서 2만원 당 100원 캐시백</li>
       <li>전월 실적 20만원 이상 / 2배 캐쉬백과 중복 적용</li>
`,
    }
    ,
    {
        cid : 10 ,
        name : "블루멤버스",
        imgframe : `<img src="./img/card_11.png" alt="블루멤버스">`,
        type : "포인트&보너스 적립 혜택",
        cardinfo : `구매 금액의 20% 포인트 사용`,
        cardinfo_2 : `
        <li>1일 10회, 월 10회, 연 100회 사용가능</li>       
        <li>보유 포인트가 구매 금액의 20% 미만 시 사용불가</li>     
        `,
    }

]





let point = ["","","","","","","","","","",]
for(let i=0; i<card_array.length;i++){

    if (card_array[i].type == "포인트&보너스 적립 혜택"){
        point[i] = `포인트&보너스 적립 혜택`
    }
    if (card_array[i].type == "신용카드/멤버십 제휴카드 혜택"){
        point[i] = `신용카드/멤버십 제휴카드 혜택`
    }
    if (card_array[i].type == "통신사 멤버십 혜택"){
        point[i] = `통신사 멤버십 혜택`
    }

}





