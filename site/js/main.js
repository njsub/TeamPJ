console.log('main js 실행')

document.addEventListener('DOMContentLoaded', function(){
   

admin() 
//console.log([JSON.parse(localStorage.getItem('ezenLogin'))])

/* 로그인 후 함수 실행을 위해 */
let ezenLogin = JSON.parse(localStorage.getItem('ezenLogin'))
console.log(ezenLogin)
if( ezenLogin == null){  }
else{ afterlogin() } /* 로그인 후 함수 실행 */
//localStorage.setItem( 'ezenLogin' , JSON.stringify(ezenLogin) )

let 현재카테고리명 = '';

cafeMembersNo() // 카페 회원수 표시 함수 실행

카테고리생성()
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


let 기수확인 = '';








function afterlogin(){
    console.log('로그인 후 함수 실행')
    /* html 의 변화 */
    const headerTR = document.querySelector('#headerTR')
    headerTR.innerHTML = `<input onclick="_logOut()" type="button" value="로그아웃">`
    
    

    const myInfo = document.querySelector('#myInfo')
    let identifyArray = JSON.parse(localStorage.getItem('identifyArray'))
    


    let ithezenName = '' //이름
    let ithezenGrade = -1   // 변수 값 저장 공간 ★★ for문 밖에 존재해야함
    for(let i =0 ; i<identifyArray.length; i++){if(identifyArray[i].ezenId==ezenLogin.loginId){
        console.log(identifyArray[i].ezenGrade)
        ithezenName = identifyArray[i].ezenName
       ithezenGrade = Number(identifyArray[i].ezenGrade);  break; // break가 가장 가까운 반복문 종료
    }
    }
     /* 강사, 관리자 로그인 차이 */
    const mainMenu = document.querySelector('#mainMenu>span')

    if(ithezenGrade==4){mainMenu.innerHTML = `<div class="topLine">
                                                    <a href="/site/html/teacherPage.html">강사 페이지</a>
                                                </div>`}
    else if(ithezenGrade==5){mainMenu.innerHTML = `<div  class="topLine">
                                                        <a href="/site/html/member.html">회원 관리</a>
                                                    </div>
                                                    <div  class="topLine">
                                                        <a href="/site/html/category.html">카테고리 생성</a>
                                                    </div>
                                                    <div class="topLine">
                                                        <a href="/site/html/teacherPage.html">강사 페이지</a>
                                                    </div>`}
    else { }

    
    if(ithezenGrade==1){ithezenGrade = '학생(준회원)🌱'}
    else if(ithezenGrade==2){ithezenGrade = '학생(정회원)🌿'}
    else if(ithezenGrade==3){ithezenGrade ='학생(우수회원)🌲'}
    else if(ithezenGrade==4){ithezenGrade = '강사🌳'}
    else if(ithezenGrade==5){ithezenGrade = '카페관리자🌞'}


    myInfo.innerHTML =`${ithezenName}님<br/>
    카페 회원 등급 : ${ithezenGrade}<br/>
    <div onclick="cafeWritePage()" id="cafeWrite">카페 글 쓰기</div>`
            //★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★카페 글 쓰기 펑션 및 등급 넣기
    localStorage.setItem( 'ezenLogin' , JSON.stringify(ezenLogin) )

}


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
    // 1. 
  


/* 펑션안에 생으로 펑션 넣기는 안되나봄 */

function _cAccount(){       /* 회원가입 */
    console.log('cAccount 펑션, 회원가입 사이트 실행')
    location.href='html/cAccount.html'


}

function _signup(){         /* 로그인 */
    console.log('로그인 펑션, 로그인 사이트 실행')
    location.href='html/login.html'

}

function _logOut(){         /* 로그아웃 */
    console.log('로그아웃 펑션 실행')
    let ezenLogin = JSON.parse(localStorage.getItem('ezenLogin'))
    console.log(ezenLogin)
    ezenLogin = null
    localStorage.setItem( 'ezenLogin' , JSON.stringify(ezenLogin) )
    location.href='main.html'
}

function admin(){/* 관리자 추가 */
    let identifyArray = JSON.parse(localStorage.getItem('identifyArray'))
    const identify = { ezenId : '관리자',
    ezenPw : '1234',
    ezenName : '카피조우',
    ezenGrade : 5,
    ezenMNo: 1,
    generation : '관리자'

}

    if (identifyArray==null){ identifyArray=[]; identifyArray.push(identify)


}
    
    localStorage.setItem( 'identifyArray' , JSON.stringify(identifyArray) )
}

function cafeMembersNo(){ /* 카페멤버 수 세는 함수 */
    console.log('총 멤버수 함수 실행')
    let html = ``;
    let identifyArray = JSON.parse(localStorage.getItem('identifyArray'))
    if(identifyArray==null){html = '0명';}
    else{html = `${identifyArray.length}명 👨‍👩‍👧‍👦`}
   document.querySelector('#cafeMembersNo').innerHTML = html
    
    

}

function cafeWritePage(){/* 글쓰기 페이지로 가는 함수 */
    location.href ="html/cafeWritePage.html";
} 

//==============================================================================================================================================












// 박시현 작업시작 출력


function 게시판출력(기수확인){
    console.log('게시판출력함수 실행')
    let identifyArray = JSON.parse(localStorage.getItem('identifyArray'))
    let cafeWriteList = JSON.parse(localStorage.getItem('cafeWriteList'))
    let ezenLogin = JSON.parse(localStorage.getItem('ezenLogin'))
    let 카테고리목록 = JSON.parse(localStorage.getItem('카테고리목록'))
    console.log(cafeWriteList)
    console.log(기수확인+'기수')
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
   
    
    
    if(기수확인 == 0){
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

    if(기수확인 == 1){
        for(let i = 0 ; i < cafeWriteList.length; i++){
            if(카테고리number == cafeWriteList[i].ctno){
                console.log('글출력')
                html += `<div>${cafeWriteList[i].cID}${cafeWriteList[i].cfTitle}${cafeWriteList[i].cfContent}${cafeWriteList[i].cfdate}</div>`
            }
        }
        cafeWrite.innerHTML = html; 
    }

    if(기수확인 == 2){
        for(let i = 0 ; i <cafeWriteList.length; i++){
            if(카테고리number == cafeWriteList[i].ctno){
                console.log('글출력')
                html += `<div>${cafeWriteList[i].cID}${cafeWriteList[i].cfTitle}${cafeWriteList[i].cfContent}${cafeWriteList[i].cfdate}</div>`
            }
        }
        cafeWrite.innerHTML = html; 
    }
    




}