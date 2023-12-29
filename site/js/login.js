console.log('로그인 js 실행')

function login(){
    console.log('로그인 펑션 실행')

    const loginId = document.querySelector('#loginId').value;
    const loginPw = document.querySelector('#loginPw').value;

    const identifyArray = JSON.parse( localStorage.getItem('identifyArray')); 
    console.log(identifyArray)
    const login = { loginId: loginId, loginPw: loginPw};

    for(let i =0 ; i<identifyArray.length ; i ++){
        console.log('for문 실행')
        if(identifyArray[i].ezenId == login.loginId && identifyArray[i].ezenPw ==login.loginPw ){
           
            localStorage.setItem ( 'ezenLogin' , JSON.stringify(login) ) /* 로그인 하는 객체를 ezenLogin Storage 에 넣기 */

            location.href="/site/main.html"
            return;

            
        }
    }
    alert('동일한 회원정보가 없습니다.'); return;
}