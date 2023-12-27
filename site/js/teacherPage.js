
/*
    ezenGrade : 직급 ezenId: 아이디 ezenName : 이름 ezenPw : 패스워드
    generation : 기수


*/
    
let studentArray = []; 

// 회원 저장 객체배열 불러오기
let identifyArray = JSON.parse(localStorage.getItem('identifyArray'))
console.log(identifyArray)
console.log(studentArray)



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
    const Grade = 4
    for(let i = 0 ; i < identifyArray.length; i++){
        // console.log(identifyArray[i].ezenGrade)
        if(Grade > identifyArray[i].ezenGrade){
            html += `<ul id="teachControl">
                <li>${identifyArray[i].ezenId}</li>
                <li>${identifyArray[i].generation}기수</li>
                <div>
                    <select>
                        <option>0기수</option>
                        <option>1기수</option>
                        <option>2기수</option>
                    </select>
                </div>
                </ul>`
                
        const ezenMNo = identifyArray[i].ezenMNo
        studentArray.push(ezenMNo);
        }
        
    }// for end
    
    aaa.innerHTML = html
} // f end



const selects = document.querySelectorAll('select')
// querySelectorAll 로 받으면 배열로 받아서 for문으로 돌려야함.
for(let i = 0; i < selects.length; i++){
    console.log(selects.length)
    selects[i].addEventListener('change' , function(event){
    for(let j = 0 ; j < identifyArray.length; j++){
        console.log(studentArray[i])
        if(studentArray[i] == identifyArray[j].ezenMNo){
            identifyArray[j].generation = selects[i].selectedIndex
            localStorage.setItem('identifyArray', JSON.stringify(identifyArray));
            // localStorage 배열객체 재저장
            console.log(selects[i].selectedIndex)
            회원출력()
        }
    }
    

}) // e end

} // f end


회원출력()
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