console.log('')
document.addEventListener('DOMContentLoaded' , function(){
    // 회원 저장 객체배열 불러오기
    
    회원목록출력()
    })

    function 카테고리실행(i){
    
        console.log('카테고리 눌렀을 때 실행')
        // 일단 권한 확인
        let 카테고리목록 = JSON.parse(localStorage.getItem('카테고리목록'))
        let ezenLogin = JSON.parse(localStorage.getItem('ezenLogin'))
        let identifyArray = JSON.parse(localStorage.getItem('identifyArray'))
        const mainInnerR = document.querySelector('#mainInnerR')
        let 직급확인 = 0;
        if( ezenLogin == null){
            alert('로그인 후 이용해주세요.'); location.href="/site/main.html"
        }
    
        let html = '';
            for(let i =0 ; i<identifyArray.length; i++){if(identifyArray[i].ezenId==ezenLogin.loginId){
               
                기수확인 = identifyArray[i].generation //지금 로그인한 아이디의 기수
                직급확인 = identifyArray[i].ezenGrade
                console.log(기수확인)
                 break; // break가 가장 가까운 반복문 종료
            }}
    
            console.log(카테고리목록[i].기수)
            if(ezenLogin.loginId == '관리자' || 직급확인 == 4 || 카테고리목록[i].기수 == 기수확인 ){ /* 관리자면 실행하게 */
                
            html += `<h2>${카테고리목록[i].카테고리명} 게시판</h2>
            <div style="border-bottom: black 1px solid; height: 10px"> </div>
            `
            현재카테고리명 = 카테고리목록[i].카테고리명
            mainInnerR.innerHTML = html
            게시판출력(기수확인)    // 게시판 출력
            }
            else if(카테고리목록[i].기수!=기수확인 ){ alert('본인이 해당하는 기수가 아닙니다.');
            location.href="/site/main.html";
            
           
        }
        
        //확인 완료
            }
            
// 박시현 작업시작 출력


function 게시판출력(){
    console.log('게시판출력함수 실행')
    let identifyArray = JSON.parse(localStorage.getItem('identifyArray'))
    let cafeWriteList = JSON.parse(localStorage.getItem('cafeWriteList'))
    let ezenLogin = JSON.parse(localStorage.getItem('ezenLogin'))
    let 카테고리목록 = JSON.parse(localStorage.getItem('카테고리목록'))
    console.log(cafeWriteList)
    console.log(기수확인+'기수당')
    console.log(ezenLogin.loginId)
    console.log(현재카테고리명)
    let ezenMNo체크 = 0;
    let ezenGrade체크 = 0;
    let 카테고리number = 0;
    let html = '';  //출력 저장


        if( cafeWriteList == null){ cafeWriteList = [] ;}; // 만약에 localStorage 아무것도 없으면 배열 선언

    // 출력 위치
    const cafeWrite = document.querySelector('#mainText');

    for(let i = 0 ; i < 카테고리목록.length; i++){
        if(현재카테고리명 == 카테고리목록[i].카테고리명){
            카테고리number = 카테고리목록[i].cno
            console.log(`${카테고리number} 카테고리number`)
        }
    }
   
    
   
    if(true){
        for(let i = 0 ; i < identifyArray.length; i++){
            if(ezenLogin.loginId == identifyArray[i].ezenId){
                ezenMNo체크 = identifyArray[i].ezenMNo
                ezenGrade체크 = identifyArray[i].ezenGrade
                console.log(ezenMNo체크)
                console.log(ezenGrade체크)
            }
        }
    }


    if(ezenGrade체크 == 4 || ezenGrade체크 == 5){
        for(let i = 0 ; i <cafeWriteList.length; i++){
            if(카테고리number == cafeWriteList[i].ctno){
                console.log('글출력')
                html += `<div>${cafeWriteList[i].cID}${cafeWriteList[i].cfTitle}${cafeWriteList[i].cfContent}${cafeWriteList[i].cfdate}</div>`
            }
        }
        cafeWrite.innerHTML = html; 
    }

    if(ezenGrade체크 == 1){
        for(let i = 0 ; i < cafeWriteList.length; i++){
            if(카테고리number == cafeWriteList[i].ctno){
                console.log('글출력')
                html += `<div>${cafeWriteList[i].cID}${cafeWriteList[i].cfTitle}${cafeWriteList[i].cfContent}${cafeWriteList[i].cfdate}</div>`
            }
        }
        cafeWrite.innerHTML = html; 
    }

    if(ezenGrade체크 == 2){
        for(let i = 0 ; i <cafeWriteList.length; i++){
            if(카테고리number == cafeWriteList[i].ctno){
                console.log('글출력')
                html += `<div>${cafeWriteList[i].cID}${cafeWriteList[i].cfTitle}${cafeWriteList[i].cfContent}${cafeWriteList[i].cfdate}</div>`
            }
        }
        cafeWrite.innerHTML = html; 
    }
    


}
    


function 삭제버튼(index){  
    let identifyArray = JSON.parse(localStorage.getItem('identifyArray'))
    if(!confirm('해당 회원을 삭제하시겠습니까?')){
        
        alert('취소되었습니다.');
    }
    else{
         //삭제처리
         identifyArray.splice(index, 1);
         localStorage.setItem( 'identifyArray' ,JSON.stringify(identifyArray))
         //새로고침
        alert('삭제되었습니다.');
        회원목록출력();
        }
}


function 회원목록출력(){
    // 1. 어디에
    const memberList = document.querySelector('#memberList')
    let identifyArray = JSON.parse(localStorage.getItem('identifyArray'))
    console.log(identifyArray)
    // 2. 무엇을
    let html = ''
    for(let i= 1; i<identifyArray.length; i++){
        html += `
        <tbody id="memberList">
        <td>${identifyArray[i].ezenMNo}</td>
        <td>${identifyArray[i].ezenId}</td>
        <td>${identifyArray[i].ezenName}</td>
        <td>${identifyArray[i].ezenGrade}</td>
        <td>${identifyArray[i].generation}</td>
        <td><button onclick="삭제버튼(${i})" value="삭제">삭제</button></td>
        </tbody>
        `
    }
    // 3. 출력
    memberList.innerHTML = html; 
}