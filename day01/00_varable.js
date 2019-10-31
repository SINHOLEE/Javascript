// 한줄짜리 주석
/* 
여러줄 짜리 주석
*/

// 값을 재할당 할 수 있는 변수를 선언하는 키워드
let x = 1  // x = 1 이라는 뜻
// console.log(x)

x = 3 
// 재선언은 할 수 없지만, 재할당은 가능하다. 
/*
let x = 1 
let x = 3
불가


let x = 1
x = 3
가능

*/

//print() : 진짜 인쇄

// print의 기능 : console.log()

// console.log(x)

if (x === 3){
    let message = '안녕하세요'
    console.log(message) // local scope의 message라서 global 영역에서는 호출 불가능
    console.log(x)  // global scope의 x라서 호출 가능
}
// console.log(message)

let y
console.log(y)  // undefined 값을 가지고 있다.  파이썬에서 None과 같은 의미

// x = 2와 같은 var 는 쓰지 않는다. 이제는....
// const : 값이 변하지 않는 (재할당 불가) 상수를 선언하는 키워드
// let과 동일하게 블록유효 범위(block scope)를 가진다. : 블럭이란, if, for, 함수 등 모든 중가로 안에 있는 공간을 지칭한다.


// const my_fav  // Uncaught SyntaxError: Missing initializer in const declaration

const my_fav = 2

console.log(my_fav)
// my_fav = 2  // Uncaught TypeError: Assignment to constant variable. 재할당 불가

// 하지만 local scope에서는 재 할당 가능하다.
if (my_fav === 2) {
    console.log(my_fav)
    // const my_fav = 30
    // console.log(my_fav)
}
console.log(my_fav)

// 파이썬과 다른 부분 : js에서는 if 안과 밖의 scope가 다르지만, 파이썬은 if 안과 밖이 같다.

let q = my_fav
console.log(q)



// 식별자
// 변수명은 식별자라고 불린다.
// 1. 반드시 문자, 달러($), 밑줄(_)로 시작해야 한다.
// 2. 대소문자 구분하고 class이름을 제외하고는 대문자로 시작하지 않는걸 권장한다.
// 3. 예약어 사용 불가(const, let, class, return)등 이미 기능이 있는 문자 사용 불가하다.

// 카멜 케이스(camelCass) : 객체, 함수, 변수를 사용할 때, 단어단어의 첫글자는 대문자로 (맨 첫글자는 빼고)

    // 이벤트 핸들러 : 'on' 으로 시작
    const onClick = () => {}

    // boolean 값 : 'is' 로 시작
    let isAvailable = false

    // 함수이름
    function getUsername () {}

// 파스칼 케이스(PascalCase) : 클래스, 생성자 (UperCamelCase) 첫글자 포함 모든 단어의 시작을 대문자로
class User {}

//  대문자 스네이크 케이스 : 상수
const API_KEY = 'asdasdasdasdasd'