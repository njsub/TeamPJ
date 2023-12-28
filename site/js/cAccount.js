console.log('cAccount 회원가입 페이지 실행')

function _signup2(){
    console.log('cAccount 회원가입 버튼 실행')
    const ezenId = document.querySelector('#ezenId').value;
    const ezenPw = document.querySelector('#ezenPw').value;
    const ezenPwCheck = document.querySelector('#ezenPwcheck').value;
    console.log(ezenId); console.log(ezenPw); console.log(ezenPwCheck);
    const ezenName = document.querySelector('#ezenName').value;
    let ezenGrade = document.querySelector('#ezenGrade').value;
    
    let identifyArray = JSON.parse(localStorage.getItem('identifyArray'))
    if (identifyArray==null){ identifyArray=[]}

    if(ezenId, ezenPw, ezenPwCheck, ezenName == ''){alert('빈 칸을 입력하세요.'); return;}
    if(ezenPw !== ezenPwCheck){ alert('비밀번호/비밀번호 확인이 다릅니다!'); return;}

    for(let i =0 ; i<identifyArray.length; i++){if(ezenId == identifyArray[i].ezenId){
        console.log(identifyArray[i]) // 원래 아이디의 객체 확인
        alert(`${ezenId}은/는 중복된 아이디입니다.`)
        return; // break가 가장 가까운 반복문 종료
    }
    }
  



    if(ezenGrade == '학생'){ ezenGrade = 1 ;}
    if(ezenGrade == '강사'){ ezenGrade = 4 ;}
    console.log(ezenGrade)


    
    const identify = { ezenId : ezenId ,
        ezenPw : ezenPw,
        ezenName : ezenName,
        ezenGrade : ezenGrade,
        
    }

    identifyArray.push(identify)        /* 넣어야 할 값 넣기 */
    // console.log(identifyArray[identifyArray.length-1].ezenMNo) // undefined
    if( identifyArray.length-1 == 0 ){identifyArray[identifyArray.length-1].ezenMNo = 1}
    else{ identify.ezenMNo = Number(identifyArray[identifyArray.length-2].ezenMNo)+1 } 
    console.log(identifyArray[identifyArray.length-1].ezenMNo)               /*  MNo 고유값 만들기 */

    identifyArray.splice(identifyArray.length-1,1,identify) /* 원래 없던 identify 제거하고 새로 넣기 */
    localStorage.setItem('identifyArray' , JSON.stringify(identifyArray) )



    alert('회원가입이 완료 되었습니다.')
    if(confirm('바로 로그인 하시겠습니까?')){location.href = '/site/html/login.html'}// 말고 로그인 페이지로 가게 하기
    else{location.href = '/site/main.html'}
     

}