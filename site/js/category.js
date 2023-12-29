document.addEventListener('DOMContentLoaded', function(){
    카테고리목록출력()
    카테고리실행(i)
    
})
let 기수확인 = '';
function 카테고리실행(i){
    console.log('카테고리 눌렀을 때 실행')
    // 일단 권한 확인
    let 카테고리목록 = JSON.parse(localStorage.getItem('카테고리목록'))
    let ezenLogin = JSON.parse(localStorage.getItem('ezenLogin'))
    let identifyArray = JSON.parse(localStorage.getItem('identifyArray'))
    const mainInnerR = document.querySelector('#mainInnerR')

    let html = '';
        for(let i =0 ; i<identifyArray.length; i++){if(identifyArray[i].ezenId==ezenLogin.loginId){
           
            기수확인 = identifyArray[i].generation //지금 로그인한 아이디의 기수
            console.log(기수확인)
             break; // break가 가장 가까운 반복문 종료
        }}

        console.log(카테고리목록[i].기수)
        if(ezenLogin.loginId == '관리자'){ /* 관리자면 실행하게 */
            

        html += `<h2>${카테고리목록[i].카테고리명}</h2>
        <div style="border-bottom: black 1px solid; height: 10px"> </div>
        `
    
        mainInnerR.innerHTML = html

            
            return; }

        else if(카테고리목록[i].기수!=기수확인 ){ alert('본인이 해당하는 기수가 아닙니다.');
        location.href="/site/main.html";
    }

    //확인 완료
        }


       
        function 카테고리생성(){
            let 카테고리목록 = JSON.parse(localStorage.getItem('카테고리목록'))
            // 1. 어디에
            const lnbMenu = document.querySelector('#lnbMenu')
            
            
            // 2. 무엇을
            let html = '';
           
            for(let i= 0; i<카테고리목록.length; i++){
                html += `
                <div class="mainMenuS" onclick="카테고리실행(${i})">
                    <a >${카테고리목록[i].카테고리명}</a>
                </div>
                `;
                /* 메인 이너R에 넣을 html 정하기 */
              
            }
            // 3. 출력
            
            lnbMenu.innerHTML = html; 
            
        }
        

        

function 카테고리등록(){
    let 카테고리목록 = JSON.parse(localStorage.getItem('카테고리목록'))
    if (카테고리목록==null){ 카테고리목록=[]}
    // 1. 어디에

    const cateBox = document.querySelector('#cateBox').value;
    const gisuBox = document.querySelector('#gisuBox').value;

    const categoryArray = { 카테고리명 : cateBox,  기수 : gisuBox, cno : 카테고리목록.length ==0 ? 1 : Number(카테고리목록[카테고리목록.length-1].cno)+1}
    카테고리목록.push(categoryArray); console.log(categoryArray)

   
    // 초기화
    
    document.querySelector('#cateBox').value = '';
    document.querySelector('#gisuBox').value = '';

    // 3. 출력
    localStorage.setItem('카테고리목록' , JSON.stringify(카테고리목록) )
    카테고리목록출력()
    
    카테고리생성()
}

function 카테고리목록출력(){
    let 카테고리목록 = JSON.parse(localStorage.getItem('카테고리목록'))
    // 1. 어디에
    const categoryList = document.querySelector('#categoryList')


    // 2. 무엇을
    let html = ''
    for(let i= 0; i<카테고리목록.length; i++){
        html += `
        <tbody id="categoryList">
        <td>${카테고리목록[i].cno}</td>
        <td>${카테고리목록[i].카테고리명}</td>
        <td>${카테고리목록[i].기수}</td>
        </tbody>
        `
    }
    // 3. 출력
    categoryList.innerHTML = html; 
}
