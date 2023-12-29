console.log('')
document.addEventListener('DOMContentLoaded' , function(){
    // 회원 저장 객체배열 불러오기
    카테고리실행(i)
    
    회원목록출력()
    })

let 기수확인 = '';
function 카테고리실행(i){
    console.log('카테고리 눌렀을 때 실행')
    // 일단 권한 확인
    let 카테고리목록 = JSON.parse(localStorage.getItem('카테고리목록'))
    let ezenLogin = JSON.parse(localStorage.getItem('ezenLogin'))
    let identifyArray = JSON.parse(localStorage.getItem('identifyArray'))
    const mainInnerR = document.querySelector('#mainInnerR')

    let html = '';
        for(let i =0 ; i<identifyArray.length; i++){if(identifyArray[i].ezenId==ezenLogin.loginId){
           
            기수확인 = identifyArray[i].generation //지금 로그인한 아이디의 기수
            console.log(기수확인)
             break; // break가 가장 가까운 반복문 종료
        }}

        console.log(카테고리목록[i].기수)
        if(ezenLogin.loginId == '관리자'){ /* 관리자면 실행하게 */
            

        html += `<h2>${카테고리목록[i].카테고리명}</h2>
        <div style="border-bottom: black 1px solid; height: 10px"> </div>
        `
    
        mainInnerR.innerHTML = html

            
            return; }

        else if(카테고리목록[i].기수!=기수확인 ){ alert('본인이 해당하는 기수가 아닙니다.');
        location.href="/site/main.html";
    }

    //확인 완료
        }




function 삭제버튼(index){  
    let identifyArray = JSON.parse(localStorage.getItem('identifyArray'))
    if(!confirm('해당 회원을 삭제하시겠습니까?')){
        
        alert('취소되었습니다.');
    }
    else{
         //삭제처리
         identifyArray.splice(index, 1);
         localStorage.setItem( 'identifyArray' ,JSON.stringify(identifyArray))
         //새로고침
        alert('삭제되었습니다.');
        회원목록출력();
        }
}


function 회원목록출력(){
    // 1. 어디에
    const memberList = document.querySelector('#memberList')
    let identifyArray = JSON.parse(localStorage.getItem('identifyArray'))
    console.log(identifyArray)
    // 2. 무엇을
    let html = ''
    for(let i= 1; i<identifyArray.length; i++){
        html += `
        <tbody id="memberList">
        <td>1</td>
        <td>${identifyArray[i].ezenId}</td>
        <td>${identifyArray[i].ezenName}</td>
        <td>${identifyArray[i].ezenGrade}</td>
        <td>${identifyArray[i].ezenGrade}</td>
        <td><button onclick="삭제버튼(${i})" value="삭제">삭제</button></td>
        </tbody>
        `
    }
    // 3. 출력
    memberList.innerHTML = html; 
}