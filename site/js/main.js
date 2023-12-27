console.log('main js 실행')

document.addEventListener('DOMContentLoaded', function(){
   


//console.log([JSON.parse(localStorage.getItem('ezenLogin'))])

/* 로그인 후 함수 실행을 위해 */
let ezenLogin = JSON.parse(localStorage.getItem('ezenLogin'))
console.log(ezenLogin)
if( ezenLogin == null){  }
else{ afterlogin() } /* 로그인 후 함수 실행 */
//localStorage.setItem( 'ezenLogin' , JSON.stringify(ezenLogin) )

function afterlogin(){
    console.log('로그인 후 함수 실행')
    /* html 의 변화 */
    const headerTR = document.querySelector('#headerTR')
    headerTR.innerHTML = `<input onclick="_logOut()" type="button" value="로그아웃">`

    const myInfo = document.querySelector('#myInfo')
    let identifyArray = JSON.parse(localStorage.getItem('identifyArray'))
/*     for(let i =0 ; i<identifyArray.length; i++){if(identifyArray[i].ezenId==ezenLogin.loginId){
        console.log(identifyArray[i].ezenGrade)
       Number(identifyArray[i].ezenGrade);  
    }
    } */
   // 이커 어케 뽑누

    myInfo.innerHTML =`${ezenLogin.loginId}님<br/>
    카페 회원 등급 : ${123}<br/>
    <div onclick="★★()" id="cafeWrite">카페 글 쓰기</div>`
            //★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★카페 글 쓰기 펑션 및 등급
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