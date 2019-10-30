// Array helper method

const colors = ['red', 'green', 'blue', 'salmon']


// for (const color of colors) {
//     // console.log(color)
    
// }

// colors.forEach()  //colors 어레이가 가지고 있는 모든 요소를 한번씩 방문해줄게

// forEach() loop를 대신 돌아줌

colors.forEach( function(color){
    console.log(color)
})

colors.forEach( color=> console.log(color))


// map - 배열 내의 모든 요소에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 return
// 일정한 형식의 새로운 배열을 만들 때 사용한다.

const numbers = [1, 2, 3, 4]

const doubleNumbers = numbers.map(number => {
    return number * 2
})


// 숫자가 담긴 배열을 받아 각 수의 제곱근이 들어있는 새로운 배열을 만들어 보자.
const numbers2 = [4, 9, 16, 25]

const newNumbers = numbers2.map(num => num **(1/2))
const newNumbers1 = numbers2.map(num => Math.sqrt(num))

// map helper를 사용해서 distance / time (속도)를 저장하는 배열 speeds를 만들어라.
const trips = [
    {distance : 34, time : 12},
    {distance : 12, time : 4},
    {distance : 54, time : 7},
    {distance : 1111, time : 123},
]

const asd = 123

const speeds = trips.map((trip, asd) => {
    return trip.distance / trip.time
})

//filter - 주어진 함수의 테스트를 통과하는 모든 요소를 모아서 새로운 배열 반환

numbers2.filter( num => {
    return num % 2 !== 0
})


const products = [
    {name: 'cucumber', type:'vege'},
    {name: 'banana', type:'fruit'},
    {name: 'carrot', type:'vege'},
    {name: 'apple', type:'fruit'},
   ]

const fruits = products.filter( p => {
    return p.type === 'fruit'
})

const veges = products.filter( p => {
    return p.type === 'vege'
})


// 나이가 50 이상인 아이템만 가지고 있는 새로운 배열을 만드시오

const ages = [15, 25, 35, 45, 55,67,67,8,945,232,4]

const oldAges = ages.filter((age, index, self )=> {
    console.log(age, index, self)
    

    return age >= 50

})


// find - 주어진 판별 함수를 만족하는 첫번째 요소의 값을 반환, 없다면 undefined 반환
const users = [
    { name : 'Tony Stark', age : 45 },
    { name : '이신호', age : 28 },
    { name : '김은성', age : 27 },
]

// const 이신호 = users.find(user => user.name === '이신호')
// filter는 하나일지라도 array?로 반환
const 이신호 = users.filter(user => user.name === '이신호')

// some - 배열 안의 어떤 요소가 하나라도 주어진 판별 함수를 통과하는지 테스트 하고 결과에 따라 boolean 값을 반환한다. 
// ex ) o o o o o x o o o 중 하나라도 x인게 있는가? 라는 질문에 대답은 true이다.


const arr = [1, 2, 3, 4, 5]

const isSomeOddNum = arr.some(item => item % 2 === 0)

// every - 배열 안에 모든 요소가 주어진 판별 함수를 통과하는지 테스트 하고 결과를 boolean 값으로 반환한다.
const isEveryOddNum = arr.every(item => item % 2 === 0)

// requests 배열에서 각 요청들 중 status 가 pending 인 요청이 있는지 확인하라.

const requests = [
    {url : '123/as', status : 'pending'},
    {url : '1231a/as', status : 'complete'},
    {url : '12zz3/as', status : 'failed'},
]

const check = requests.some(request => request.status === 'pending')


// reduce - 배열의 각 요소에 대해 주어진 'reducer' 함수를 실행하고 하나의 값을 반환한다.
// reduce 는 배열 내의 숫자 총합, 배열 내 평균 계산 등 ~~의 값을 하나로 줄이는 동작을 한다.
// 첫번째 매개변수는 '누적 값(전 단계의 결과)'

const ssafyTestScores = [90, 55, 78, 98]
//                                      누적 값, array의 요소 
const sumScore = ssafyTestScores.reduce((total, score) => {
    total += score
    return total
// total의 초기화 값
}, 0)


// ssafyTestScores 배열을  go to the blue 하라


const doubleSsafyTests = ssafyTestScores.reduce((newScores, score) =>{
    console.log(newScores, score)
    // newScores.push(score * 2)
    return newScores
}, [])
