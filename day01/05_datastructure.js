// // array

const numbers = [1, 2, 3, 4]

// // 원본파괴 
// numbers.reverse()  // 배열의 순서를 뒤집고 length 반환

// numbers.push('ㅋㅋㅋ') // 괄호안에 인자를 배열 맨 끝에 추가 후 length 반환

// numbers.pop() // 맨 끝에 배열의 요소를 삭제후 삭제한 요소 반환

// numbers.unshift('asd') // 맨 앞에 배열에 요소 추가하고 length 반환

// numbers.shift()  // 가장 앞에있는 요소를 제거하고 이를 반환



// // includes는 해당 인덱스에 값이 있는지 검사 !! 중요부분 : 인덱스의 첫번째 부분은 1이다.
// numbers.includes(0)  // false
// numbers.includes(1)  // true
// numbers.includes(2)  // ture

// numbers.push('a')
// numbers.push('a')

// // indexOf
// numbers.indexOf('a')  // 4반환 즉, 해당 인자를 가지고있는 가장 낮은 인덱스 반환
// numbers.indexOf('B')  // -1반환  즉, 해당 인자를 가지고 있는 인덱스가 없다면


// // 배열의 아이템을 함수의 인자를 seperator로 이어서 문자열로 반환
// numbers.join()
// numbers.join('')
// numbers.join('-') 

// const name = 'Jason'

// // object 
// // 'phone number' : '010-3321-7598' 처럼 작성할 수 있다. 단 이렇게 작성하면 .로 접근하지 못하고 []로 접근할 수 밖에 없다.\
// //  변수의 이름과 key이름이 같다면 name : name => name으로 생략 가능 => object literal
// const me = {
//     name,
//     phoneNumber : '010-3321-7556', 
//     appleProducts :{
//         macbook : '2018pro',
//         iPhone : '7',
//     }
// }


// // JSON
// const jsonData = JSON.stringify(me)  // 직렬화 => js object를 JSON형식의 파일로 변환해달라/.
// const parsedData = JSON.parse(jsonData) // 역직렬화 => string을 JS object로 변환해 달라.