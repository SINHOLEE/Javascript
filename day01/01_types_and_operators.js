// Types and Operators(타입과 연산자)

// Primitive Type(원시타입)  문자열, 숫자열, 불리언 등등 - 특징: 불변하다

let x = 1
let y = 3


// numbers

const a = 13
const b = -5
const c = 3.14 // float
const d = 2.999e8 // 2.999 * 10^8 엄청 큰 숫자
const e = Infinity // 무한
const f = -Infinity // -무한

// javascript에서만 사용하는 문법
const g = NaN // not a number 숫자가 아닌 숫자???

console.log(a,b,c,d,e,f,g)

console.log(0/0) // NaN

// string
// quotation은 엔터(줄바꿈) 사용 불가능 하지만  escape sequence 사용 가능 (\n)
const sentence1 = 'Ask and go the blue'  // Single Quotation 권장
const sentence2 = "Ask and go\n the blue"

// 백탭 - 엔터(줄바꿈) 사용 가능 하지만 escape sequence 사용 불가능 (\n) 그리고 !!! template literal 사용 가능

const sentence3 = `Ask and go
 the b
 lue`
console.log(sentence1)
console.log(sentence2)
console.log(sentence3)

// Template Literal이란?  파이썬의 f strings와 비슷한 기능을 가지고 있다. 
const age = 10
const message = `홍길동의 나이는 ${age}`
console.log(message)

// string + 연산 가능
console.log(`happy` + ` ` + `hacking`)


// boolean - 소문자로 표현
true
false


// empty value - 값이 존재하지 않음을 표현하는 값 2가지가 있는 이유는 설계 실수다.
// 1. undefined : 선언하고 할당하지 않았을 때,
// 2. null : 우리가 의도적으로 값이 없음을 표시할 때... 
// ex ) let a = null




let students = {}

console.log( students.jason) // undefined

// operators for only javascript (할당연산자)
x++ // x += 1




// 비교연산자
// 영어 소문자보다 대문자가 큼, 알파벳은 오름차순

'A' < 'B' // true
'가' < '나' // true
'A' < 'a' // true

// 동등연산자 (==) : 서로 같은 값을 갖도록 변환할 수 있으면 같다고 판단한다.
// js엔진이 자동으로 형변환 => 동등 연산자의 사용은 지양한다.

console.log('가다' < '가나')


const a1 = 1
const a2 = '1'
console.log(a1 == a2) // true 왜??? 아 둘이 형변환을 했을 때 같은 값이라면, true반환

// 일치연산자(===) : 서로 같은 값을 갖도록 변환할 수 있더라도 타입이 다르다면 같다고 생각하지 않는다.

// 논리 연산자
// and, or,  단일연산자 : not, typeof 

true && true //true
true && false // false

true || true // true
true || false // true

! true // false
! false // true



// 삼항 연산자 - 가장 앞의 boolean 값이 참이면 :  앞의 값이 반환, 그렇지 않다면 : 뒤의 값이 반환

let flag = true

const result = flag ? '참' : '거짓'
console.log(result)