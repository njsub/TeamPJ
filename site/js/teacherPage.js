
/*
    ezenGrade : 직급 ezenId: 아이디 ezenName : 이름 ezenPw : 패스워드
    generation : 기수


*/
/* 사이트 이동 */


function _cAccount(){
    console.log('cAccount 펑션, 회원가입 사이트 실행')
    location.href='cAccount.html'


}

function _signup(){
    console.log('로그인 펑션, 로그인 사이트 실행')
    location.href='login.html' 

}

document.addEventListener('DOMContentLoaded' , function(){
let studentArray = []; 

// 회원 저장 객체배열 불러오기
let identifyArray = JSON.parse(localStorage.getItem('identifyArray'))
console.log(identifyArray)
console.log(studentArray)


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
    const Grade = 4
    for(let i = 0 ; i < identifyArray.length; i++){
        // console.log(identifyArray[i].ezenGrade)
        if(Grade > identifyArray[i].ezenGrade){
            html += `<ul id="teachControl">
                <li>${identifyArray[i].ezenId}</li>
                <li>${identifyArray[i].ezenName}</li>
                <li>${identifyArray[i].generation}기수</li>
                <div>
                    <select>
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




const selects = document.querySelectorAll('select')
// querySelectorAll 로 받으면 배열로 받아서 for문으로 돌려야함.
for(let i = 0 ; i < selects.length; i++){
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
                
                location.reload()
            }
            
        }
    })

}
        

  


}) // e end
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