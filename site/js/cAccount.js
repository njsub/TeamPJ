console.log('cAccount 회원가입 페이지 실행')

function _signup2(){
    console.log('cAccount 회원가입 버튼 실행')
    const ezenId = document.querySelector('#ezenId').value;
    const ezenPw = document.querySelector('#ezenPw').value;
    const ezenPwCheck = document.querySelector('#ezenPwcheck').value;
    console.log(ezenId); console.log(ezenPw); console.log(ezenPwCheck);
    const ezenName = document.querySelector('#ezenName').value;
    let ezenGrade = document.querySelector('#ezenGrade').value;
    if(ezenPw !== ezenPwCheck){ alert('비밀번호/비밀번호 확인이 다릅니다!'); return;}

    if(ezenId, ezenPw, ezenPwCheck, ezenName == ''){alert('빈 칸을 입력하세요.'); return;}


    if(ezenGrade == '학생'){ ezenGrade = 1 ;}
    if(ezenGrade == '강사'){ ezenGrade = 4 ;}
    console.log(ezenGrade)

    let identifyArray = JSON.parse(localStorage.getItem('identifyArray'))
    if (identifyArray==null){ identifyArray=[]}
    
    const identify = { ezenId : ezenId ,
        ezenPw : ezenPw,
        ezenName : ezenName,
        ezenGrade : ezenGrade,
        
    }

    identifyArray.push(identify)        /* 넣어야 할 값 넣기 */
    // console.log(identifyArray[identifyArray.length-1].ezenMNo) // undefined
    if( identifyArray.length-1 == 0 ){identifyArray[identifyArray.length-1].ezenMNo = 1}
    else{ identify.ezenMNo = Number(identifyArray[identifyArray.length-2].ezenMNo)+1 } 
    console.log(identifyArray[identifyArray.length-1].ezenMNo) //NaN               /*  MNo 고유값 만들기 */

    identifyArray.splice(identifyArray.length-1,1,identify) /* 원래 없던 identify 제거하고 새로 넣기 */
    localStorage.setItem('identifyArray' , JSON.stringify(identifyArray) )



    alert('회원가입 완료.')
    location.href = '/site/main.html' // 말고 로그인 페이지로 가게 하기

}