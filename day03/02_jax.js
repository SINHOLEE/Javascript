
// 세팅
const XHR = new XMLHttpRequest()

const url = 'https://jsonplaceholder.typicode.com/posts/1'

XHR.open('GET', url)

// ??? a머하는거지
XHR.addEventListener('load', function(event) {
	console.log(event)
})

// 실행
XHR.send()