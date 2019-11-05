// function getData(){
//     let data

//     setTimeout(() => {
//         console.log('INFO : 요청을 보냈습니다.')
//         data = {'data' : 'somedata'}
//     }, 100)
//     return data
//     /*
//     undefined
//     INFO : 요청을 보냈습니다.
//     비동기적으로 작동하기 때문에, 0.1초 뒤에 받는 데이터를 출력하지 않고, let data를 정의하지 않았다는 뜻의 undefined를 출력 후 디버깅용 출력물을 보여준다.
//     이를 해결하기 위해 콜백함수를 이용한다.
//     */
// }

// function printData() {
//     let respones1 = getData()
//     console.log(respones1)
// }

// printData()


// function getDataCallback(callback) {  // 2. 여기서 콜백은 함수다.
//     setTimeout(() => {
//         console.log('요청을 보냈습니다.')
//         const data = { 'data' : 'somedata'}
//         callback(data)  // 3. 이 함수에 데이터를 넣어서 실행해
//     }, 100)

// }
// // 1. 출력하는 작업을 하는 함수를 인수로 엄김
// getDataCallback(function(data) {
//     console.log(data)
// })

// // 순차적으로 가져오는 로직이 쌓일수록 가독성 떨어지기 때문에, promise를 사용하게 되었다.

// 프로미스로 데이터를 가져오겠다.
// 순서 1. 다짐을 반환한다. 순서 2. 데이터를 요청한 뒤 어떻게 한다는 로직을 프로미스 인스턴스 안쪽의 함수에 작성

function getDataPromise() { // axios.get(DATA_URL)  반환하는 값은 프로미스
    //  promise를 반환하고부터 시작한다.
    return new Promise( resolv => { //여기에서 어떤 다짐인지를 꾸밀것 
        setTimeout(() => {
            console.log('요청을 보냈습니다.')
            const data = {'data' : 'somedata'}
            resolv(data)  // .then 으로 꺼낼 수 있는 객체가 된다.
        }, 100)
    } 
    )

}
// getDataPromise()
// .then(response =>{
//     console.log(response)
//     return response  // then에서 끝난 작업을 리턴으로 ㅇ
// })
// .then((data1)=>{
//     if (data1 === 'somedata'){
//         console.log(1)
//     } else {
//         console.log(2)
//     }
//     return data1.data
// })
// .then( data2 => {
//     if (data1 === 'somedata'){
//         console.log(1)
//     } else {
//         console.log(2)
//     }
// }) 
// // catch는 마지막에 하나만 정의하면 모든 단계에서 검사한다.
// .catch(error =>{
//     console.log(error)
// })


const handleData = async function() {  // async : 동기적인 동작하라고 선언
    const response = await getDataPromise()
    
    console.log(response)
        
}

handleData()
