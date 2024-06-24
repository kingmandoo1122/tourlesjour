



let bread_array =[
    {
        bread_id : 1,
        pid:0,
        pcate : "식빵",
        name : `고단백 현미 식빵`,
        imgframe :`<img src="./img/menu/bread_1.jpg" alt="고단백 현미 식빵">`,
        info : `탕종법을 사용하여 촉촉하고 쫄깃한 기지에 현미와 호두, 아몬드, 호박씨, 해바라기씨 등의 견과류를 함유하여 더 고소하게 즐기기 좋은 고단백 식빵`,
        ingredient : `<li>열랑(Kcal) : 280</li>
        <li>당류(g/%) : 6/6</li>
        <li>단백질(g/%) : 11/20</li>
        <li>포화지방(g/%) : 2.4/16</li>
        <li>나트륨(mg/%) : 370/19</li>`,
        allergy : `밀, 우유, 호두, 계란 함유`
    },
    {
        bread_id : 2,
        pid:1,
        pcate : "식빵",
        name : `그대로 구워먹는 꿀 토스트 식빵`,
        imgframe :`<img src="./img/menu/bread_2.jpg" alt="그대로 구워먹는 꿀 토스트 식빵">`,
        info : `꿀분말과 펄슈가를 넣어 건강한 단맛과 고소한 버터 풍미로 토스트 하였을 때 가장 맛있는 식빵`,
        ingredient : ""
    },
    {
        bread_id : 3,
        pid:2,
        pcate : "식빵",
        name : `착한빵식 통밀식빵`,
        imgframe :`<img src="./img/menu/bread_3.jpg" alt="착한빵식 통밀식빵">`,
        info : `통밀을 넣어 고소 담백하고 맥주발효종으로
        풍미와 식감을 더한 식사빵. 맛있고 건강한
        푸드업사이클링 재료를 더해 내 몸과 지구에
        더욱 건강한 제품`,
        ingredient : ""
    },
    {
        bread_id : 4,
        pid:3,
        pcate : "건강빵",
        name : `고소 담백 더치브레드 건강빵`,
        imgframe :`<img src="./img/menu/bread_4.jpg" alt="고소 담백 더치브레드">`,
        info : `가슬가슬한 윗면과 폭신하고 은은한 단맛의
        빵결로 손으로 뜯어먹으면 더욱 맛있는 제품`,
        ingredient : ""
    },
    {
        bread_id : 5,
        pid:4,
        pcate : "식빵",
        name : `고소함이 톡톡 곡물식빵`,
        imgframe :`<img src="./img/menu/bread_5.jpg" alt="고소함이 톡톡 곡물식빵">`,
        info : `해바라기씨, 아마씨, 참깨, 귀리를 넣고 반죽한 촉촉한 곡물식빵으로 입안에서 고소함이
        톡톡 터지는 제품`,
        ingredient : ""
    },
    {
        bread_id : 6,
        pid:5,
        pcate : "건강빵",
        name : `마구마구 밤건강빵`,
        imgframe :`<img src="./img/menu/bread_6.jpg" alt="마구마구 밤식빵">`,
        info : `밤 다이스를 듬뿍 넣고, 밤 크림을 더해 풍미 UP! 더욱 커지고 촉촉하게 재탄생한 밤식빵`,
        ingredient : ""
    },
    {
        bread_id : 7,
        pid:6,
        pcate : "간식빵",
        name : `마구마구 밤식빵(1/2)`,
        imgframe :`<img src="./img/menu/bread_7.jpg" alt="마구마구 밤식빵(1/2)">`,
        info : `밤 다이스를 듬뿍 넣고, 밤크림을 더해 풍미 UP! 더욱 커지고 촉촉하게 재탄생한 밤식빵`,
        ingredient : ""
    },
    {
        bread_id : 8,
        pid:7,
        pcate : "식빵",
        name : `72겹의 정성 데니쉬식빵`,
        imgframe :`<img src="./img/menu/bread_8.jpg" alt="72겹의 정성 데니쉬식빵">`,
        info : `겉은 바삭, 속은 72겹의 결이 살아 있어
        결결이 뜯어 먹기 좋은 고소한 버터 풍미의
        정통 데니쉬식빵`,
        ingredient : ""
    },
    {
        bread_id : 9,
        pid:8,
        pcate : "간식빵",
        name : `순,식빵`,
        imgframe :`<img src="./img/menu/bread_9.jpg" alt="순,식빵">`,
        info : `막걸리종으로 만든 쌀 발효당을 넣은 은은한
        단맛과, 탕종법으로 부드럽고 촉촉한 식감의
        뚜레쥬르 시그니처 식빵`,
        ingredient : ""
    },
    {
        bread_id : 10,
        pid:9,
        pcate : "식빵",
        name : `고소한 곡물식빵`,
        imgframe :`<img src="./img/menu/bread_10.jpg" alt="고소한 곡물식빵">`,
        info : `곡물과 씨앗을 가득 넣고 구워
        더욱 고소하고 촉촉해 샌드위치 등
        식사빵으로 활용하기 좋은 제품`,
        ingredient : ""
    },
    {
        bread_id : 11,
        pid:10,
        pcate : "식빵",
        name : `촉촉 쫄깃 탕종식빵`,
        imgframe :`<img src="./img/menu/bread_11.jpg" alt="촉촉 쫄깃 탕종식빵">`,
        info : `탕종을 넣어 더욱 촉촉하고 쫄깃한 식감과
        은은한 단맛이 어우러지는 담백 식빵`,
        ingredient : ""
    },
    {
        bread_id : 12,
        pid:11,
        pcate : "식빵",
        name : `生生 생크림 식빵`,
        imgframe :`<img src="./img/menu/bread_12.jpg" alt="生生 생크림 식빵">`,
        info : `마스카포네 생크림을 넣어 극강의 부드러움과 마지막까지 은은한 단맛을 느낄 수 있는
        뚜레쥬르 대표 식빵`,
        ingredient : ""
    },
    {
        bread_id : 13,
        pid:12,
        pcate : "파이패스트리",
        name : `고메 버터 식빵`,
        imgframe :`<img src="./img/menu/bread_13.jpg" alt="고메 버터 식빵">`,
        info : `브라운버터를 넣어 버터의 풍미를 올린
        촉촉하고 부드러운 빵에 바삭하고 고소한
        풍미의 패스트리가 만나 껍질까지 맛있게
        먹을 수 있는 맛있는 식빵`,
        ingredient : ""
    },
    {
        bread_id : 14,
        pid:13,
        pcate : "식빵",
        name : `통우유식빵`,
        imgframe :`<img src="./img/menu/bread_14.jpg" alt="통우유식빵">`,
        info : `30.7% 우유 함량으로 쫄깃한 식감과 고소한
        풍미가 일품으로, 통으로 제공되어 고객님의
        취향에 따라 두껍게 슬라이스하여 프렌치토스트
        하여도 좋으며, 손으로 결대로 뜯어 먹어도 좋은 제품`,
        ingredient : ""
    },
    {
        bread_id : 15,
        pid:14,
        pcate : "식빵",
        name : `TLJ옥수수듬뿍옥수수식빵`,
        imgframe :`<img src="./img/menu/bread_15.jpg" alt="TLJ옥수수듬뿍옥수수식빵">`,
        info : `한층 더 촉촉해지고 옥수수 맛이 풍부한 빵 속에 고소한 옥수수 알갱이가 톡톡 씹히는 식빵`,
        ingredient : ""
    },
    {
        bread_id : 16,
        pid:15,
        pcate : "식빵",
        name : `더블 롤치즈 식빵`,
        imgframe :`<img src="./img/menu/bread_16.jpg" alt="더블 롤치즈 식빵">`,
        info : `
        폭신하고 부드러운 탕종반죽에
        고소한 롤치즈와 짭짤한 체다치즈가
        콕콕 박힌 더블 롤치즈 식빵`,
        ingredient : ""
    },
    {
        pid:16,
        pcate : "파이패스트리",
        name : `치즈 트위스트 스틱`,
        imgframe :`<img src="./img/menu/bread_17.jpg" alt="치즈 트위스트 스틱">`,
        info : `
        체다치즈가 콕콕 박힌 바삭한 식감의
패스트리에 파마산 치즈와 설탕을 더해
단짠조합으로 간편하게 즐기는 간식형 제품`,
        ingredient : ""
    },
    {
        pid:17,
        pcate : "도넛고로케",
        name : `츄러스 꽈배기`,
        imgframe :`<img src="./img/menu/bread_18.jpg" alt="츄러스 꽈배기">`,
        info : `
        결결이 바삭한 식감의 패스트리에
        달콤한 시나몬 설탕을 토핑한 간식형 제품`,
        ingredient : ""
    }
    ,
    {
        pid:18,
        pcate : "도넛고로케",
        name : `NEW 김치 고로케`,
        imgframe :`<img src="./img/menu/bread_19.jpg" alt="NEW 김치 고로케">`,
        info : `
        바삭바삭하게 잘 튀겨진 빵 속에 매콤 아삭한
김치와 깍두기, 당면이 듬뿍 들어있어
먹으면 먹을수록 끌리는 김치 고로케`,
        ingredient : ""
    }













]
let cake_array = [
    {
        pid:0,
        pcate : "캐릭터케이크",
        name : `헬로카봇 펜타스톰X라이프캐논`,
        imgframe :`<img src="./img/menu/cake_1.jpg" alt="헬로카봇 펜타스톰X라이프캐논">`,
        info : `펜타스톰X라이프 캐논 모드가 지구를 지키러
        출동해 새니타이저 캐논을 발사하는 모습을
        표현한 초코 케이크`,
        ingredient : ""
    },
    {
        pid:1,
        pcate : "캐릭터케이크",
        name : `카3_라이트닝맥퀸_케이크`,
        imgframe :`<img src="./img/menu/cake_2.jpg" alt="카3_라이트닝맥퀸_케이크">`,
        info : `빨간 라이트닝 맥퀸 피규어가 레이싱에서
        달콤한 초콜렛 트랙을 질주하는 모습을 표현한
        초코 가나슈 케이크`,
        ingredient : ""
    },
    {
        pid:2,
        pcate : "캐릭터케이크",
        name : `곰돌이 푸_알럽허니`,
        imgframe :`<img src="./img/menu/cake_3.jpg" alt="곰돌이 푸_알럽허니">`,
        info : `달콤한 꿀 바나나 크림과 바나나 리플 잼을
        샌드하고 진한 초코 크림 사이 초코 크런치와
        미니 마시멜로를 샌드한 사랑스러운
        곰돌이 푸 케이크`,
        ingredient : ""
    },
    {
        pid:3,
        pcate : "캐릭터케이크",
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
        pid:4,
        pcate : "캐릭터케이크",
        name : `티니핑과 슈가베리 케이크`,
        imgframe :`<img src="./img/menu/cake_5.jpg" alt="티니핑과 슈가베리 케이크">`,
        info : `달콤한 초코 시트에 가나슈와 딸기 꿀리를
        샌드하고 딸기 우유 맛 크림으로 아이싱한 뒤
        귀여운 말랑핑을 살포시 올린
        캐치!티니핑 슈가베리 케이크`,
        ingredient : ""
    },
    {
        pid:5,
        pcate : "생크림케이크",
        name : `퐁신퐁신 포실핑`,
        imgframe :`<img src="./img/menu/cake_6.jpg" alt="퐁신퐁신 포실핑">`,
        info : `상큼한 딸기시트에 블루베리가나슈와
        라즈베리크림을 샌드하고, 대형 포실핑 초콜릿 장식을 올려낸 캐치!티니핑 케이크`,
        ingredient : ""
    },
    {
        pid:6,
        pcate : "스페셜케이크",
        name : `사르르 샤샤핑`,
        imgframe :`<img src="./img/menu/cake_7.jpg" alt="사르르 샤샤핑">`,
        info : `달콤한 초코시트와 가나슈, 초코크림으로
        샌드하고, 아이스크림 장식과 샤샤핑을 올려낸
        캐치!티니핑 초코케이크`,
        ingredient : ""
    },
    {
        pid:7,
        pcate : "무스케이크",
        name : `사르르 티라미수 생크림 쉬폰`,
        imgframe :`<img src="./img/menu/cake_8.jpg" alt="사르르 티라미수 생크림 쉬폰">`,
        info : `풍미 좋은 커피시럽을 더한 폭신한 모카 쉬폰에
        마스카포네 생크림을 샌드하고 연유 생크림으로
        마무리한 티라미수 생크림 쉬폰`,
        ingredient : ""
    },
    {
        pid:8,
        pcate : "스페셜케이크",
        name : `사르르 생크림 쉬폰`,
        imgframe :`<img src="./img/menu/cake_9.jpg" alt="사르르 생크림 쉬폰">`,
        info : `폭신폭신한 쉬폰과 입안에서 사르르 녹는
        우유 생크림이 어우러진 케이크`,
        ingredient : ""
    },
    {
        pid:9,
        pcate : "생크림케이크",
        name : `사르르 초코 생크림 쉬폰`,
        imgframe :`<img src="./img/menu/cake_10.jpg" alt="사르르 초코 생크림 쉬폰">`,
        info : `폭신폭신 쉬폰과 사르르 녹는 달콤한
        초코 생크림이 어우러진 쁘띠 케이크`,
        ingredient : ""
    },
    {
        pid:10,
        pcate : "스페셜케이크",
        name : `마담 얼그레이 케이크`,
        imgframe :`<img src="./img/menu/cake_11.jpg" alt="마담 얼그레이 케이크">`,
        info : `제품설명
        묵직한 바디감의 시트에 둘세 카라멜 가나슈와
        얼그레이 풍미의 연유 생크림으로 그 맛을 더한 케이크`,
        ingredient : ""
    },
    {
        pid:11,
        pcate : "생크림케이크",
        name : `말차에 퐁당 딸기케이크`,
        imgframe :`<img src="./img/menu/cake_12.jpg" alt="말차에 퐁당 딸기케이크">`,
        info : `산뜻하고 달콤한 딸기 크림에
        봄의 싱그러움을 듬뿍 머금은 말차 크림을 더한
        그린 & 핑크빛의 사랑스러운 케이크`,
        ingredient : ""
    }
,
    {
        pid:12,
        pcate : "조각케이크",
        name : `클래식 오브 치즈케이크(조각)`,
        imgframe :`<img src="./img/menu/cake_13.jpg" alt="클래식 오브 치즈케이크(조각)">`,
        info : `엄선한 자연치즈의 진한 풍미가
        그대로 살아있는 부드럽고 촉촉한
        수플레 타입의 클래식 치즈 케이크`,
        ingredient : ""
    }
,
{
    pid:13,
    pcate : "조각케이크",
    name : `쇼콜라 갸또(조각)`,
    imgframe :`<img src="./img/menu/cake_14.jpg" alt="쇼콜라 갸또(조각)">`,
    info : `초코&블랙초코 시트에 진한 가나슈 초콜릿이
    샌드된 프리미엄 조각 케이크`,
    ingredient : ""
}
,
{
    pid:14,
    pcate : "조각케이크",
    name : `까망쿠키 치즈(조각)`,
    imgframe :`<img src="./img/menu/cake_15.jpg" alt="까망쿠키 치즈(조각)">`,
    info : `부드러운 치즈 무스와 달콤한 까망쿠키가 어우러져 더욱 맛있게 즐길 수 있는 치즈 케이크`,
    ingredient : ""
}
,
{
    pid:15,
    pcate : "조각케이크",
    name : `쁘띠 한라봉&오렌지 케이크`,
    imgframe :`<img src="./img/menu/cake_16.jpg" alt="쁘띠 한라봉&오렌지 케이크">`,
    info : `
    향긋한 한라봉 시트에 상큼한 오렌지와
    한라봉 맛 생크림을 샌드하여 입안 가득 상큼한
    맛을 느낄 수 있는 디저트 케이크`,
    ingredient : ""
}
,
{
    pid:16,
    pcate : "무스케이크",
    name : `고구마케이크`,
    imgframe :`<img src="./img/menu/cake_17.jpg" alt="고구마케이크">`,
    info : `
    진한 고구마맛을 더하여 한층 풍미가 깊어진
부드러운 고구마케이크`,
    ingredient : ""
}
,
{
    pid:17,
    pcate : "무스케이크",
    name : `클래식 치즈 케이크`,
    imgframe :`<img src="./img/menu/cake_18.jpg" alt="클래식 치즈 케이크">`,
    info : `
    엄선한 자연치즈의 진한 풍미가
그대로 살아있는 부드럽고 촉촉한
수플레 타입의 클래식 치즈 케이크`,
    ingredient : ""
}

,
{
    pid:18,
    pcate : "대형케이크",
    name : `6호 2단 화이트케이크(다리포함)`,
    imgframe :`<img src="./img/menu/cake_19.jpg" alt="6호 2단 화이트케이크(다리포함)">`,
    info : `
    장식 하나하나에 더욱더 정성을 담은
축하용 화이트 단케익`,
    ingredient : ""
}
,
{
    pid:19,
    pcate : "대형케이크",
    name : `티니핑 디저트마을`,
    imgframe :`<img src="./img/menu/cake_20.jpg" alt="티니핑 디저트마을">`,
    info : `
    
달콤한 디저트 장식과 말랑핑 피규어를 올린
초코&딸기맛 2단 케이크에
미니 피규어와 초코펜으로 직접 꾸미고
완성하는 러블리한 DIY 케이크`,
    ingredient : ""
}









]


let deli_array = [
    {
        pid:0,
        pcate : "샌드위치",
        name : `고단백 치킨페스토 곡물 샌드위치`,
        imgframe :`<img src="./img/menu/deli_1.jpg" alt="고단백 치킨페스토 곡물 샌드위치">`,
        info : `
        고소한 하루견과 곡물브레드와 담백한
        닭가슴살과 바질페스토&썬드라이드 토마토의
        맛있는 건강 밸런스`,
        ingredient : ""
    }
,
    {
        pid:1,
        pcate : "샌드위치",
        name : `라구듬뿍 치즈브리또`,
        imgframe :`<img src="./img/menu/deli_2.jpg" alt="라구듬뿍 치즈브리또">`,
        info : `
        
플랜트 미트볼과 베지 라구소스 볶음밥이 그릴드 야채, 모짜렐라 치즈와 어울린 제품`,
        ingredient : ""
    }
    ,
    {
        pid:2,
        pcate : "샌드위치",
        name : `에그튜나 샌드위치`,
        imgframe :`<img src="./img/menu/deli_3.jpg" alt="에그튜나 샌드위치">`,
        info : `
        신선한 야채와 계란, 참치샐러드로
        대중성있는 담백한맛 샌드위치`,
        ingredient : ""
    },
    {
        pid:3,
        pcate : "샌드위치",
        name : `크랜베리치킨 베이글 샌드위치`,
        imgframe :`<img src="./img/menu/deli_4.jpg" alt="크랜베리치킨 베이글 샌드위치">`,
        info : `
        크랜베리치킨에 신선한 토마토, 야채와
부드러운 크림치즈가 어우러진
담백한 베이글 샌드위치`,
        ingredient : ""
    },
    {
        pid:4,
        pcate : "샐러드",
        name : `불고기 분짜 누들 샐러드`,
        imgframe :`<img src="./img/menu/deli_5.jpg" alt="불고기 분짜 누들 샐러드">`,
        info : `
        
풍성한 소불고기와 탱글한 누들 토핑이
아삭&상큼한 무피클과 어우러져
상큼하게 즐기는 분짜 샐러드`,
        ingredient : ""
    },
    {
        pid:5,
        pcate : "샐러드",
        name : `그릴치킨 오렌지 샐러드`,
        imgframe :`<img src="./img/menu/deli_6.jpg" alt="그릴치킨 오렌지 샐러드">`,
        info : `
        담백한 닭가슴살을 가득 넣고 시트러스한
오렌지와 유자 오리엔탈 드레싱으로
입맛을 돋운 단백질 든든 볼샐러드`,
        ingredient : ""
    },
    {
        pid:6,
        pcate : "간편식",
        name : `토마토 라구라자냐`,
        imgframe :`<img src="./img/menu/deli_7.jpg" alt="토마토 라구라자냐">`,
        info : `
        플랜트 미트와 신선한 토마토를
가득 넣어 끓인 라구소스와 베사멜소스,
모짜렐라 치즈가 부드럽게 어우러진 제품
`,
        ingredient : ""
    },
    {
        pid:7,
        pcate : "간편식",
        name : `베이컨 에그 브리오쉬`,
        imgframe :`<img src="./img/menu/deli_8.jpg" alt="베이컨 에그 브리오쉬">`,
        info : `
        담백한 오믈렛, 짭짤한 베이컨을 넣은
폭신한 브리오쉬 샌드를 따뜻하게
치즈멜팅하여 즐기는 제품
`,
        ingredient : ""
    },

    {
        pid:8,
        pcate : "간편식",
        name : `트러플 크림 파스타`,
        imgframe :`<img src="./img/menu/deli_9.jpg" alt="트러플 크림 파스타">`,
        info : `
        큼직한 리가토니 파스타에 구운버섯을
가득 올린 트러플 크림치즈 파스타
`,
        ingredient : ""
    },





]

let dessert_array = [
    {
        pid:0,
        pcate : "구움양과",
        name : `리얼브라우니`,
        imgframe :`<img src="./img/menu/dessert_1.jpg" alt="리얼브라우니">`,
        info : `
        다크초콜릿과 밀크초콜릿의 달콤한 맛을
느낄 수 있는 쫀득한 식감의 브라우니
`,
        ingredient : ""
    },

    {
        pid:1,
        pcate : "구움양과",
        name : `호두 브라우니`,
        imgframe :`<img src="./img/menu/dessert_2.jpg" alt="호두 브라우니">`,
        info : `
        진한 발로나 초콜렛의 풍미와 고소한 호두가 어우러져 입안에서 부드럽게 녹아내리는 브라우니
`,
        ingredient : ""
    },
    {
        pid:2,
        pcate : "구움양과",
        name : `생크림 버터 스콘`,
        imgframe :`<img src="./img/menu/dessert_3.jpg" alt="생크림 버터 스콘">`,
        info : `
        생크림이 들어가 부드럽고
버터의 풍미가 좋은 촉촉한 스콘
`,
        ingredient : ""
    },
    {
        pid:3,
        pcate : "구움양과",
        name : `오리지널 까눌레`,
        imgframe :`<img src="./img/menu/dessert_4.jpg" alt="오리지널 까눌레">`,
        info : `
        
겉은 카라멜화되어 바삭하지만 속은 푸딩같이 부드러운 맛이 일품인 고급 디저트
`,
        ingredient : ""
    },

    {
        pid:4,
        pcate : "마카롱",
        name : `쿠키앤크림 뚱카롱`,
        imgframe :`<img src="./img/menu/dessert_5.jpg" alt="쿠키앤크림 뚱카롱">`,
        info : `
        
        버터크림치즈에 쿠키 파우더와 초코쿠키가
        들어있어 바삭한 식감과 달콤한 맛이 조화로운 뚱카롱
`,
        ingredient : ""
    },

    {
        pid:5,
        pcate : "마카롱",
        name : `앙버터 뚱카롱`,
        imgframe :`<img src="./img/menu/dessert_6.jpg" alt="앙버터 뚱카롱">`,
        info : `
        
        달콤한 팥앙금과 우유크림, 가염버터로 만들어 단짠단짠의 조화가 어우러진 마카롱
`,
        ingredient : ""
    },

    {
        pid:6,
        pcate : "마카롱",
        name : `딸기 우유 뚱카롱`,
        imgframe :`<img src="./img/menu/dessert_7.jpg" alt="딸기 우유 뚱카롱">`,
        info : `
풍성한 우유크림에 상큼한 딸기퓨레가 들어가 딸기 우유맛이 입 안 가득 퍼지는 뚱카롱
`,
        ingredient : ""
    },

    {
        pid:7,
        pcate : "아이스크림",
        name : `기쁨이 샤인머스캣 아이스캔디`,
        imgframe :`<img src="./img/menu/dessert_8.jpg" alt="기쁨이 샤인머스캣 아이스캔디">`,
        info : `

        올 여름 가장 기쁜 순간을 만들어줄,
        상큼한 샤인머스캣 아이스캔디
`,
        ingredient : ""
    },


    {
        pid:8,
        pcate : "아이스크림",
        name : `당황이 딸기 아이스캔디`,
        imgframe :`<img src="./img/menu/dessert_9.jpg" alt="당황이 딸기 아이스캔디">`,
        info : `
        너무 맛있어서 당황할 걸?
        달콤한 딸기맛을 시원하게 즐길 수 있는
        아이스캔디
`,
        ingredient : ""
    },




    {
        pid:9,
        pcate : "아이스크림",
        name : `나뚜루 바닐라&아몬드바`,
        imgframe :`<img src="./img/menu/dessert_10.jpg" alt="나뚜루 바닐라&아몬드바">`,
        info : `
        마다가스카르산 바닐라와 우유로 만든
진한 풍미와 쫀득한 식감의 아이스바
`,
        ingredient : ""
    },

    {
        pid:10,
        pcate : "아이스크림",
        name : `라라스윗 초콜릿 모나카`,
        imgframe :`<img src="./img/menu/dessert_11.jpg" alt="라라스윗 초콜릿 모나카">`,
        info : `
        국내산 생우유에 다크 초콜릿의 묵직함을 더해
        더 깊고 진한 초콜릿 모나카 아이스크림
`,
        ingredient : ""
    },
    {
        pid:11,
        pcate : "초콜릿캔디",
        name : `소프트 초콜릿`,
        imgframe :`<img src="./img/menu/dessert_12.jpg" alt="소프트 초콜릿">`,
        info : `
        부드럽고 달콤한 밀크 초콜릿이
입 안에서 사르르 녹아 내리는
한 입 사이즈의 소프트 초콜릿
`,
        ingredient : ""
    },
    {
        pid:12,
        pcate : "초콜릿캔디",
        name : `소프트 초콜릿`,
        imgframe :`<img src="./img/menu/dessert_13.jpg" alt="포실포실 솜사탕">`,
        info : `
        천연색소와 유기농 설탕을 활용하여
        신맛과 단맛을 동시에 느낄 수 있는 솜사탕
`,
        ingredient : ""
    },
    {
        pid:13,
        pcate : "초콜릿캔디",
        name : `헬로카봇 젤리스틱 (사파리세이버)`,
        imgframe :`<img src="./img/menu/dessert_14.jpg" alt="헬로카봇 젤리스틱 (사파리세이버)">`,
        info : `
        인기만점 헬로카봇 캐릭터인
사파리세이버 얼굴 모양의
새콤달콤 딸기맛 젤리스틱
`,
        ingredient : ""
    },
    {
        pid:14,
        pcate : "초콜릿캔디",
        name : `캐빈디쉬 병캔디`,
        imgframe :`<img src="./img/menu/dessert_15.jpg" alt="캐빈디쉬 병캔디">`,
        info : `
        고급스러운 병 속에 다채로운 모양과 색깔의
        과일 캔디가 아기자기하게 담겨 있어
        선물용으로 좋은 병캔디
`,
        ingredient : ""
    },
    {
        pid:15,
        pcate : "잼스프레드",
        name : `뚜레쥬르가 만든 딸기잼 120g`,
        imgframe :`<img src="./img/menu/dessert_16.jpg" alt="뚜레쥬르가 만든 딸기잼 120g">`,
        info : `
        국내산 딸기를 사용하여 딸기향과 맛을 살린
뚜레쥬르가 만든 딸기잼
`,
        ingredient : ""
    },
    {
        pid:16,
        pcate : "잼스프레드",
        name : `간편하게 발라먹는 앙버터 스프레드`,
        imgframe :`<img src="./img/menu/dessert_17.jpg" alt="간편하게 발라먹는 앙버터 스프레드">`,
        info : `
      
팥과 버터가 부드럽게 섞여있어
간편하게 즐길 수 있는 튜브 타입 잼
`,
        ingredient : ""
    }


    
]


let drink_array = [
    {
        pid:0,
        pcate : "커피",
        name : `원샷! 아샷추`,
        imgframe :`<img src="./img/menu/drink_1.jpg" alt="원샷! 아샷추">`,
        info : `
        달콤한 복숭아 홍차에 에스프레소 샷을 더해
        더운 날씨에도 깔끔하게 즐길 수 있는
        에스프레소 음료
`,
        ingredient : ""
    },
    {
        pid:1,
        pcate : "커피",
        name : `꿀꺽꿀꺽! 꿀메리카노`,
        imgframe :`<img src="./img/menu/drink_2.jpg" alt="꿀꺽꿀꺽! 꿀메리카노">`,
        info : `아메리카노에 달콤한 아카시아 꿀을 더해
        달콤하게 수분 충전하는 에스프레소 음료
`,
        ingredient : ""
    },
    {
        pid:2,
        pcate : "커피",
        name : `그랑드카페 콜드브루 보틀(원액)`,
        imgframe :`<img src="./img/menu/drink_3.jpg" alt="그랑드카페 콜드브루 보틀(원액)">`,
        info : `뚜레쥬르의 그랑드카페 스페셜티 원두를
        저온고압 추출하여 부드러운 산미와
        깔끔한 풍미를 즐길 수 있는
        콜드브루 커피 원액
`,
        ingredient : ""
    },
    {
        pid:3,
        pcate : "블랜디드",
        name : `사르르 딸기 쉐이크`,
        imgframe :`<img src="./img/menu/drink_4.jpg" alt="사르르딸기쉐이크">`,
        info : `
        달콤한 우유맛 쉐이크에 딸기 다이스가
        톡톡 씹히는 새콤달콤 딸기 쉐이크
`,
        ingredient : ""
    },
    {
        pid:4,
        pcate : "블랜디드",
        name : `사르르 우유 쉐이크`,
        imgframe :`<img src="./img/menu/drink_5.jpg" alt="사르르 우유 쉐이크">`,
        info : `
        빵과 잘 어울리는 부드럽고 고소한 우유쉐이크.
        깔끔한 뒷맛과 부담스럽지 않은 바디감으로
        남녀노소 모두 선호하는 제품
`,
        ingredient : ""
    },

    {
        pid:5,
        pcate : "과일주스에이드",
        name : `자몽 에이드`,
        imgframe :`<img src="./img/menu/drink_6.jpg" alt="자몽 에이드">`,
        info : `
        자몽과육과 탄산수를 넣어
톡 쏘는 맛이 일품인 자몽에이드
`,
        ingredient : ""
    },

    {
        pid:6,
        pcate : "과일주스에이드",
        name : `레몬 에이드`,
        imgframe :`<img src="./img/menu/drink_7.jpg" alt="레몬 에이드">`,
        info : `
        레몬의 상큼함과 탄산수를 넣어
톡 쏘는 맛이 일품인 레몬에이드
`,
        ingredient : ""
    },
    {
        pid:7,
        pcate : "티라떼",
        name : `유자레몬티`,
        imgframe :`<img src="./img/menu/drink_8.jpg" alt="유자레몬티">`,
        info : `
       
꿀유자차에 새콤한 레몬즙을 넣어
더욱 맛있는 유자차
`,
        ingredient : ""
    },

    {
        pid:8,
        pcate : "티라떼",
        name : `핫 초코`,
        imgframe :`<img src="./img/menu/drink_9.jpg" alt="핫 초코">`,
        info : `
        제품설명
        진한 초콜릿 파우더와 부드러운 스팀우유가 어우러진 핫초코
`,
        ingredient : ""
    },

    {
        pid:9,
        pcate : "티라떼",
        name : `딸기라떼`,
        imgframe :`<img src="./img/menu/drink_10.jpg" alt="딸기라떼">`,
        info : `
        톡톡 씹히는 달콤한 딸기 다이스와 고소한 우유의 조화가 돋보이는 과일라떼
`,
        ingredient : ""
    },


    {
        pid:10,
        pcate : "우유병음료",
        name : `곰돌이 푸_신선한 우유`,
        imgframe :`<img src="./img/menu/drink_11.jpg" alt="곰돌이 푸_신선한 우유">`,
        info : `
        
원유의 영양과 신선함을 그대로 담고 있는
고소한 흰 우유
`,
        ingredient : ""
    },
    {
        pid:11,
        pcate : "우유병음료",
        name : `산 펠레그리노(500ML)`,
        imgframe :`<img src="./img/menu/drink_12.jpg" alt="산 펠레그리노">`,
        info : `
        
부드러운 탄산감과 깔끔한 맛이 특징인
500 ml 용량의 탄산수
`,
        ingredient : ""
    }



]







let product_array = [bread_array,cake_array,deli_array,dessert_array,drink_array]
