
document.addEventListener('DOMContentLoaded', function(){

/* 로그인 안했는데 여기 페이지 들어오면 메인으로 가짐 */
let ezenLogin = JSON.parse(localStorage.getItem('ezenLogin'))
if( ezenLogin == null){ location.href='../main.html'  }
/* 로그인 후 함수 실행을 위해 */

console.log(ezenLogin)
if( ezenLogin == null){  }
else{ afterlogin() } 

function afterlogin(){
    console.log('로그인 후 함수 실행')
    /* html 의 변화 */
    const headerTR = document.querySelector('#headerTR')
    headerTR.innerHTML = `<input onclick="_logOut()" type="button" value="로그아웃">`

    

    localStorage.setItem( 'ezenLogin' , JSON.stringify(ezenLogin) )


}

// 박시현 작업 회원정보를 비교하여 글을 쓸수있는 카테고리만 선택가능


// 회원정보 가져오기
let identifyArray = JSON.parse(localStorage.getItem('identifyArray'))
// 카테고리 목록 가져오기
let 카테고리목록 = JSON.parse(localStorage.getItem('카테고리목록'))  
// console.log(ezenLogin.loginId)
// console.log(카테고리목록[0].기수)
const contentSelect = document.querySelector('#contentSelect');
let 기수체크 = 0;
let 신분체크 = 0;
let html = '';

 // 현재 로그인중인 ID와 회원배열에있는 값 비교하여 기수값(generation) 가져오기 
 for(let i = 0; i < identifyArray.length; i++){
    if(ezenLogin.loginId == identifyArray[i].ezenId){
        기수체크 = identifyArray[i].generation
        신분체크 = identifyArray[i].ezenGrade
    }
}
for(let i = 0 ; i < 카테고리목록.length; i++ ){
    // 관리자나 강사는 모든글 쓰기 가능
    if(신분체크 == 4 || 신분체크 == 5){
        html += `<option>${카테고리목록[i].카테고리명}</option>`
    }
    // console.log(카테고리목록[i].기수)
    // console.log(카테고리목록[i].카테고리명)
    if( 기수체크 == 카테고리목록[i].기수){
        console.log(카테고리목록[i].카테고리명)
        html += `<option>${카테고리목록[i].카테고리명}</option>`
    }
    
}
console.log(html)
contentSelect.innerHTML = html;


// 박시현 작업 끝


})



function _logOut(){         /* 로그아웃 */
    console.log('로그아웃 펑션 실행')
    let ezenLogin = JSON.parse(localStorage.getItem('ezenLogin'))
    console.log(ezenLogin)
    ezenLogin = null
    localStorage.setItem( 'ezenLogin' , JSON.stringify(ezenLogin) )
    location.href='../main.html'  

    /* 시현이형 로그아웃하면 메인페이지로 가게 해놨고, 
    로그인 안하면 글쓰기 버튼 자체가 없을거라 로그인 상태만 유지되면 될 거같아요 */
}

function cafeWritePage(){/* 글쓰기 페이지로 가는 함수 */
    location.href ="/html/cafeWritePage.html";
} 


//까지가 로그인된 카페 글 쓰기 화면 함수



//박시현 작업 끝 2023-12-28 23:28
// 내일 마무리로 선택가능한 게시판만 보여주게 하면 될것 같다...


// 전역변수
    // 회원정보 가져오기
    let identifyArray = JSON.parse(localStorage.getItem('identifyArray'))
    // 현재 로그인중인 회원 가져오기
    let ezenLogin = JSON.parse(localStorage.getItem('ezenLogin')) 
    // 카테고리 목록 가져오기
    let 카테고리목록 = JSON.parse(localStorage.getItem('카테고리목록'))  
    // console.log(ezenLogin.loginId)
    // console.log(카테고리목록[0].기수)


function 게시글등록(){

    // 글쓰기 값 가져오기
    const cfTitle = document.querySelector('#cftitle').value
    const cfSelect = document.querySelector('#contentSelect').value
    const cfContent = document.querySelector('textarea').value;
    // 현재 로그인중인 ID와 회원배열에있는 값 비교하여 ezenMNo 가져오기
    let ezenMNo = 0;
    let cno = 0;
    let ID = ''
    for(let i = 0; i < identifyArray.length; i++){
        if(ezenLogin.loginId == identifyArray[i].ezenId){
            ezenMNo = identifyArray[i].ezenMNo
            ID = identifyArray[i].ezenId
        }
    }

    for(let i = 0 ; i < 카테고리목록.length; i++){
        if(cfSelect == 카테고리목록[i].카테고리명){
            console.log(`${카테고리목록[i].cno} 카테고리목록값`)
            cno = 카테고리목록[i].cno
        }
    }

    // 사용가능한 카테고리만 보여주기.....

      // 유효성 검사
      if(cfTitle.length < 1){ alert('제목을 입력해주세요.'); return};
      if(cfSelect == '선택'){ alert('게시판을 선택하세요.'); return};
      if(cfSelect == ''){ alert('게시판을 선택하세요.'); return};
      if(cfContent.length < 1){ alert('내용을 입력해주세요.'); return};

       //  localStorage 호출하여 글쓸 공간(배열)이 없으면 생성 
    let cafeWriteList = JSON.parse( localStorage.getItem('cafeWriteList') ); console.log(cafeWriteList)
    if( cafeWriteList == null){ cafeWriteList = [] }; // 만약에 localStorage 아무것도 없으면 배열 선언
    
    const cafeWrite = {
        // [!] 게시물번호를 자동으로 순차적으로 배정.
        cfno : cafeWriteList.length >=1 ? cafeWriteList[cafeWriteList.length-1].cfno +1 : 1 , // 글번호
        ezenMNo :  ezenMNo ,    // 글쓸때 회원의 고유 회원번호
        cfTitle : cfTitle ,  // 글쓰기 제목
        cfsel : cfSelect , // 게시판 선택
        cfdate : new Date()  ,   // 날짜시간 저장
        cfContent : cfContent.replaceAll('\n' , '<br/>') ,      // 문자열.replaceAll('교체할문자' , '새로운문자')
        ctno : cno , 
        cID : ID
    }

    // 글 저장 배열에 글 객체 저장
    cafeWriteList.push(cafeWrite);
    // localStorage 에 저장
    localStorage.setItem('cafeWriteList' , JSON.stringify(cafeWriteList) );
    // 등록 성공 메세지
    alert('글등록 성공!')
    // 게시판 기본값 초기화
    document.querySelector('#cftitle').value = ''
    document.querySelector('#contentSelect').value = "선택"
    document.querySelector('textarea').value = ''


}

