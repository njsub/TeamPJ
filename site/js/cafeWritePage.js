
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