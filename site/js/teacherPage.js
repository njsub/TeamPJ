
/*
    ezenGrade : 직급 ezenId: 아이디 ezenName : 이름 ezenPw : 패스워드
    generation : 기수
    

*/
    
// 회원 저장 객체배열 불러오기
let identifyArray = JSON.parse(localStorage.getItem('identifyArray'))
console.log(identifyArray)
console.log(identifyArray[0].generation)



function 회원출력(){
    // 회원배열에 기수 체크
    for(let j = 0 ; j < identifyArray.length; j++){
        console.log('회원출력실행')
        if(identifyArray[j].기수 == undefined){
            console.log('기수생성해야함')
            identifyArray[j].generation = 0;
        }
    }

    let aaa = document.querySelector('#teachControloBox')
    let html = ''
    for(let i = 0 ; i < identifyArray.length; i++){
        html += `<ul id="teachControl">
                <li>${identifyArray[i].ezenId}</li>
                <li>${identifyArray[i].generation}기생</li>
                <div>
                    <select>
                        <option>0기수</option>
                        <option>1기수</option>
                        <option>2기수</option>
                    </select>
                </div>
                </ul>`

    }// for end
    aaa.innerHTML = html
} // f end

회원출력()

const selects = document.querySelectorAll('select')
// querySelectorAll 로 받으면 배열로 받아서 for문으로 돌려야함.
for(let i =0; i < selects.length; i++){
    selects[i].addEventListener('change' , function(event){
    console.log(event); // change 이벤트 결과 정보 객체
    console.log(event.currentTarget); // change 이벤트를 발생시킨 요소
    console.log(event.currentTarget.options); // select 하위 요소들 / 배열 반환
    console.log(event.currentTarget.options.selectedIndex); // select 요소의 선택된 인덱스

}) // e end
}

/*

<li>홍길동</li>
<li>1기생</li>
<div>
<input onclick="one기생()" type="button"value='1기생'>
<input onclick="two기생()" type="button"value='2기생'>
</div>


*/