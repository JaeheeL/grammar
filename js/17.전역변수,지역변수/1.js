// 전역변수 : 지역밖에서 선언이 된 변수, 모든 전역, 지역 언팎에서 사용한다.
let global1 = ""

// 상수는 전역변수더라도 값을 못바꾼다. 
const global2 = ""

// 지역변수 : 지역안에서 선언이 된 변수, 지역안에서만
function fish() {
	let local = "문어"
	console.log(local)
	global1 = "오징어"
	// global2 = "쭈꾸미"
}

fish()

// console.log(local) // local is not defined out of the function fish()
console.log(global1);
console.log(global2);