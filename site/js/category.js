
const 카테고리목록 = []

function 카테고리등록(){

    // 1. 어디에

    const cnoBox = document.querySelector('#cnoBox').value;
    const cateBox = document.querySelector('#cateBox').value;
    const gradeBox = document.querySelector('#gradeBox').value;
    const gisuBox = document.querySelector('#gisuBox').value;

    const categoryArray = {cno : cnoBox, 카테고리명 : cateBox, 권한 : gradeBox, 기수 : gisuBox}
    카테고리목록.push(categoryArray); console.log(categoryArray)

   
    // 초기화
    document.querySelector('#cnoBox').value ='';
    document.querySelector('#cateBox').value = '';
    document.querySelector('#gradeBox').value = '';
    document.querySelector('#gisuBox').value = '';

    // 3. 출력
    카테고리목록출력()
}

function 카테고리목록출력(){
    // 1. 어디에
    const categoryList = document.querySelector('#categoryList')


    // 2. 무엇을
    let html = ''
    for(let i= 0; i<카테고리목록.length; i++){
        html += `
        <tbody id="categoryList">
        <td>${카테고리목록[i].cno}</td>
        <td>${카테고리목록[i].카테고리명}</td>
        <td>${카테고리목록[i].권한}</td>
        <td>${카테고리목록[i].기수}</td>
        </tbody>
        `
    }
    // 3. 출력
    categoryList.innerHTML = html; 
}
