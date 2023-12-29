

function 카테고리등록(){
    let 카테고리목록 = JSON.parse(localStorage.getItem('카테고리목록'))
    if (카테고리목록==null){ 카테고리목록=[]}
    // 1. 어디에

    const cateBox = document.querySelector('#cateBox').value;
    const gradeBox = document.querySelector('#gradeBox').value;
    const gisuBox = document.querySelector('#gisuBox').value;

    const categoryArray = { 카테고리명 : cateBox, 기수 : gisuBox, cno : 카테고리목록.length ==0 ? 1 : Number(카테고리목록[카테고리목록.length-1].cno)+1}
    카테고리목록.push(categoryArray); console.log(categoryArray)

   
    // 초기화
    
    document.querySelector('#cateBox').value = '';
    document.querySelector('#gradeBox').value = '';
    document.querySelector('#gisuBox').value = '';

    // 3. 출력
    localStorage.setItem('카테고리목록' , JSON.stringify(카테고리목록) )
    카테고리목록출력()
    

}

function 카테고리목록출력(){
    let 카테고리목록 = JSON.parse(localStorage.getItem('카테고리목록'))
    // 1. 어디에
    const categoryList = document.querySelector('#categoryList')


    // 2. 무엇을
    let html = ''
    for(let i= 0; i<카테고리목록.length; i++){
        html += `
        <tbody id="categoryList">
        <td>${카테고리목록[i].cno}</td>
        <td>${카테고리목록[i].카테고리명}</td>
        <td>${카테고리목록[i].기수}</td>
        </tbody>
        `
    }
    // 3. 출력
    categoryList.innerHTML = html; 
}
