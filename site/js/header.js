
document.addEventListener('DOMContentLoaded', function(){

    console.log('header js 실행')
/* 로그인 안했는데 여기 페이지 들어오면 메인으로 가짐 */
let ezenLogin = JSON.parse(localStorage.getItem('ezenLogin'))
if( ezenLogin == null){ alert('권한이 없습니다.'); location.href='../main.html'  }
/* 로그인 후 함수 실행을 위해 */

console.log(ezenLogin)
if( ezenLogin == null){  }
else{ afterlogin() } 

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



function _logOut(){         /* 로그아웃 */
    console.log('로그아웃 펑션 실행')
    let ezenLogin = JSON.parse(localStorage.getItem('ezenLogin'))
    console.log(ezenLogin)
    ezenLogin = null
    localStorage.setItem( 'ezenLogin' , JSON.stringify(ezenLogin) )
    location.href='../main.html'  


}

function cafeWritePage(){/* 글쓰기 페이지로 가는 함수 */
    location.href ="../html/cafeWritePage.html";
} 


//까지가 로그인된 카페 글 쓰기 화면 함수