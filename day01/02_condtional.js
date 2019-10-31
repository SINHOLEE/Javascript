// const username = prompt('안녕하세요? 당신은 누구.....')

// let message = ''

// if (username === '신호') {
//     message = '<h1>Welcome to SSAFY</h1>'
// }

// else if (username === 'admin') {
//     message = '<h1>주인님 하이</h1>'
// }
// else {
// message = `<h1> Hi ${username} </h1>`
// }



// document.write(message)



// switch : 
const username = prompt('whe are you')

let message = ''
switch(username) {
    case 'ssafy' : {
        message = '<h1>Welcome to SSAFY</h1>'
        document.write(message)

    }
    case 'admin' : {
        message = '<h1>주인님 하이</h1>'
        document.write(message)
        

    }
    default :{
        message = `<h1> Hi ${username} </h1>`
        document.write(message)

    }
}



