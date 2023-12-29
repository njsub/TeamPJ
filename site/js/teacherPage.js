
/*
    ezenGrade : 직급 ezenId: 아이디 ezenName : 이름 ezenPw : 패스워드
    generation : 기수


*/
/* 사이트 이동 */
const Grade = 4 // 직급 체크 상수
function _cAccount(){
    console.log('cAccount 펑션, 회원가입 사이트 실행')
    location.href='cAccount.html'


}

function _signup(){
    console.log('로그인 펑션, 로그인 사이트 실행')
    location.href='login.html' 

}

function cafeWritePage(){/* 글쓰기 페이지로 가는 함수 */
    location.href ="cafeWritePage.html";
} 


// 박시현 작업 시작

document.addEventListener('DOMContentLoaded' , function(){
    cafeMembersNo()
let studentArray = []; // 회원정보의 ezenMNo (식별값) 가져올 배열 선언 

// 회원 저장 객체배열 불러오기
let identifyArray = JSON.parse(localStorage.getItem('identifyArray'))
// 로그인 저장 데이터 가져오기
let ezenLogin = JSON.parse(localStorage.getItem('ezenLogin'))
console.log(identifyArray)
console.log(studentArray)
console.log(ezenLogin)
console.log(ezenLogin.loginId)


// 비회원 접근시 메인페이지 이동
if(ezenLogin == null){alert('권한이 없습니다.'); location.href="../main.html"}

// 회원 로그인 
for(let i = 0 ; i < identifyArray.length; i++){
    if(ezenLogin.loginId == identifyArray[i].ezenId){
       console.log('로그인 성공')
        // 여기 부터 
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


        // 여기까지
       if( !(identifyArray[i].ezenGrade >= 4) ){
        alert('권한이없습니다.')
        location.href="../main.html"
       }
    }
}






회원출력()
function 기수체크(){
       // 회원배열에 기수 체크
       let initialValue = 0         // 기본 기수 값
       for(let j = 0 ; j < identifyArray.length; j++){
        // 배열객체많큼 반복 시작
        if(identifyArray[j].generation == undefined){
        // generation 속성과 회원 속성 비교
            identifyArray[j].generation = initialValue;
            // 해당 객체에 접근하여 generation 속성 추가 및 값 대입
            localStorage.setItem('identifyArray', JSON.stringify(identifyArray));
            // localStorage 배열객체 재저장
        }
    }
}

function 회원출력(){
    기수체크();
    let aaa = document.querySelector('#teachControloBox')
    let html = ''
    for(let i = 0 ; i < identifyArray.length; i++){
        // console.log(identifyArray[i].ezenGrade)
        if(Grade > identifyArray[i].ezenGrade){
            html += `<ul id="teachControl">
                <li>${identifyArray[i].ezenId}</li>
                <li>${identifyArray[i].ezenName}</li>
                <li>${identifyArray[i].generation}기수</li>
                <div>
                    <select>
                        <option name="기수" value="선택"/>선택</option>
                        <option name="기수" value="초기기수"/>0기수</option>
                        <option name="기수" value="1기수"/>1기수</option>
                        <option name="기수" value="2기수"/>2기수</option>
                    </select>
                </div>
                </ul>`
                
        const ezenMNo = identifyArray[i].ezenMNo
        studentArray.push(ezenMNo);
        }
        
    }// for end
    aaa.innerHTML = html
} // f end



// HTML에 select 문 가져오기
const selects = document.querySelectorAll('select')
// querySelectorAll 로 받으면 배열로 받아서 for문으로 돌려야함.
// selects 배열의 크기만큼 반복문 실행
for(let i = 0 ; i < selects.length; i++){
    // 셀렉트에서 change 이벤트 발생했을경우 함수 실행
    selects[i].addEventListener('change' , function(event){
        // studentArray 에서 저장된 회원고유번호 ezenMNo 를 id 에 대입
        let id = studentArray[i]

        // 대입한 id와 비교하기 위해 회원배열객체 identifyArray 반복 
        for(let z = 0 ; z < identifyArray.length; z++){
            // id 와 회원객체와 고유번호가 같으면..
            if(id == identifyArray[z].ezenMNo){
                // 회원객체에 등급 지정 (기초값인 선택옵션이  있기에 -1 )
                identifyArray[z].generation = selects[i].selectedIndex - 1
                // 확인 출력
                alert(identifyArray[z].generation)
                // localStorage 회원객체 저장
                localStorage.setItem('identifyArray', JSON.stringify(identifyArray));
                // 페이지 새로고침
                location.reload()
            }
            
        }
    })

}
        
console.log(_logOut)

function _logOut(){         /* 로그아웃 */
    console.log('로그아웃 펑션 실행')
    let ezenLogin = JSON.parse(localStorage.getItem('ezenLogin'))
    console.log(ezenLogin)
    ezenLogin = null
    localStorage.setItem( 'ezenLogin' , JSON.stringify(ezenLogin) )
    location.href='../main.html'
}


})

function cafeMembersNo(){ /* 카페멤버 수 세는 함수 */ /* 2023-12-28 승호 추가 */
    console.log('총 멤버수 함수 실행')
    let html = ``;
    let identifyArray = JSON.parse(localStorage.getItem('identifyArray'))
    if(identifyArray==null){html = '0명';}
    else{html = `${identifyArray.length}명 👨‍👩‍👧‍👦`}
   document.querySelector('#cafeMembersNo').innerHTML = html
    
    

}// e end


// 출력부분 추가함 

function 게시판출력(){
    console.log('게시판출력함수 실행')
    // 회원정보 가져오기
    let identifyArray = JSON.parse(localStorage.getItem('identifyArray'))
    // 글 목록 가져오기
    let cafeWriteList = JSON.parse(localStorage.getItem('cafeWriteList'))
    // 현재 로그인 계정 가져오기
    let ezenLogin = JSON.parse(localStorage.getItem('ezenLogin'))
    // 카페 카테고리목록 가져오기
    let 카테고리목록 = JSON.parse(localStorage.getItem('카테고리목록'))
    // 회원의 고유넘버 체크
    let ezenMNo체크 = 0;
    // 회원의 등급체크 ( 관리자5 강사 4 )
    let ezenGrade체크 = 0;
    // 카테고리 고유번호 저장
    let 카테고리number = 0;
    let html = '';  //출력 저장

        if( cafeWriteList == null){ cafeWriteList = [] ;}; // 만약에 localStorage 아무것도 없으면 배열 선언

    // 출력 위치
    const cafeWrite = document.querySelector('#mainText');
    // 현재 카테고리 및 카테고리목록을 조회하여 카테고리 고유 번호 저장
    for(let i = 0 ; i < 카테고리목록.length; i++){
        if(현재카테고리명 == 카테고리목록[i].카테고리명){
            카테고리number = 카테고리목록[i].cno
            console.log(`${카테고리number} 카테고리number`)
        }
    }
   
    // 현재로그인 계정과 회원배열 조회하여 회원의 고유넘버 및 등급 저장
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

    // 각 등급에 맞게 출력한다.
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
/*


const selects = document.querySelectorAll('select')
// querySelectorAll 로 받으면 배열로 받아서 for문으로 돌려야함.
for(let i = 0; i < selects.length; i++){
    selects[i].addEventListener('change' , function(event){
    // console.log(event.currentTarget.options.selectedIndex); // select 요소의 선택된 인덱스
    // console.log(identifyArray[i].ezenId);
    // console.log(selects[i].selectedIndex)
    identifyArray[i].generation = selects[i].selectedIndex
    localStorage.setItem('identifyArray', JSON.stringify(identifyArray));
    // localStorage 배열객체 재저장

}) // e end
}
*/

/*

기수교체(){
const selects = document.querySelectorAll('select')
// querySelectorAll 로 받으면 배열로 받아서 for문으로 돌려야함.
for(let i = 0 ; i < selects.length; i++)
selects[i].addEventListener('change' , function(event){
  console.log(selects[i].selectedIndex)
  let id = studentArray[i]
  console.log(id)
  // id 값하고 회원넘버 비교해서 값 넣어줘야함....
  for(let z = 0 ; z < identifyArray.length; z++){
    console.log(identifyArray[z].ezenMNo)
    if(id == identifyArray[z].ezenMNo){
        identifyArray[z].generation = selects[i].selectedIndex
        alert(identifyArray[z].generation)
        localStorage.setItem('identifyArray', JSON.stringify(identifyArray));
        회원출력()
    }
   
  }
})

}






*/