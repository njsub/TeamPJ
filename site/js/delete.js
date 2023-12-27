console.log('js')

회원목록 = []

function _signup2(){
    
    
    const ezenId = document.querySelector('#ezenId').value;
    const ezenName = document.querySelector('#ezenName').value;
    const ezenGrade = document.querySelector('#ezenGrade').value;

    const memberArray = {아이디 : ezenId, 이름 : ezenName, 등급 : ezenGrade}
    회원목록.push(memberArray);

   
    // 초기화
    document.querySelector('#ezenId').value ='';
    document.querySelector('#ezenName').value = '';
    document.querySelector('#ezenGrade').value = '';

    // 3. 출력
    회원목록출력()
}

function 삭제버튼(){
    let deletebtn = confirm('해당 회원을 삭제하시겠습니까?')
        if(deletebtn){
            회원목록.splice(deletebtn, 1);
            alert('삭제되었습니다.')
        }
    else {''}
}

function 회원목록출력(){
    // 1. 어디에
    const memberList = document.querySelector('#memberList')


    // 2. 무엇을
    let html = ''
    for(let i= 0; i<회원목록.length; i++){
        html += `
        <tbody id="memberList">
        <td>${회원목록[i].ezenId}</td>
        <td>${회원목록[i].ezenName}</td>
        <td>${회원목록[i].ezenGrade}</td>
        </tbody>
        `
    }
    // 3. 출력
    memberList.innerHTML = html; 
}
