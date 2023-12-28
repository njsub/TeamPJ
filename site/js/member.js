console.log('')

document.addEventListener('DOMContentLoaded' , function(){
// 회원 저장 객체배열 불러오기


회원목록출력()
})
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