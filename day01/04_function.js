// def 

// 함수 선언식 : 파일 맨 밑단에 있더라도 그 위에서 호출한다면 읽어 올 수 있다.
// 이런식의 코드는 일반적으로 좋지 않다. 왜? 충돌할 수 있으니까
// 함수의 이름이 있다.
function add(num1, num2) {
    return num1 + num2
}


// 함수 표현식 : 파일 맨 밑단에 있다면 실행할 수 없다.
// 중요 : 하나의 인자로 존재하기 때문에 함수에 인자로 받을 수 있다.
const sub = function(num1, num2) {
    return num1 - num2
}


// Arrow Function : 
let addOne = function(num) {
    return num + 1
}

// 위 함수와 같은식의 arrow function 항상 함수표현식으로만 사용가능 == 익명함수만으로 이용할 수 있다.
// 함수의 이름이 없다.
// 기능적인 차이도 있다.

addOne = (num) => {
    return num + 1
}

// 중가로 제거 후 바로 return에 할당하는 값을 쓴다.
addOne = (num) => num + 1

// 인자가 하나밖에 없다면, 괄호 생략 가능
addOne = num => num + 1

function greeting(name) {
    return `hello ${name}`
}

let greeting1 = function(name) {
    return `hello ${name}`
}

greeting2 = name =>  `hello ${name}`

//object 를 반환하는 arrow function (dict와 비슷)

const makeObject = (value) => {
    return {'key' : value}
}

const makeObject2 = value => ({'key' : value})

const noArgs = () => 'No args'