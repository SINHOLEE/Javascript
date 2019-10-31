function sleep_3() {
    setTimeout(function () {
        console.log('wake up')
    }, 3000)
}

console.log('start sleeping')
sleep_3()

// ???setTimeout은 비동기식 함수( 병렬식 처리 가능?)
console.log('end of program')