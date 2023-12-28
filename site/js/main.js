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

cafeMembersNo() // 카페 회원수 표시 함수 실행

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
    ezenMNo: 1

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

