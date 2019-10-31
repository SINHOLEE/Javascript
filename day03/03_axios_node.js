// axios 불러오기 마치 임포트와 같으

const axois = require('axios')

// 비동기적으로 자바스크립트에 요청을 보내주는 툴(라이브러리)
// 요청을 보낸다/
const url = 'https://jsonplaceholder.typicode.com/posts/1'
// const response = axois.get(url)

// console.log(response)
// 비동기적으로 응답받기 때문에, Promise { <pending> }로 반환


// 비동기적으로 요청으로 하고, 요청이 끝났다면 콜백함수를 넣는다.
axois.get(url)
  .then(response => console.log(response.data))