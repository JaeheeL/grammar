// 리턴(戻り値) : 결과값
function clicked() {
	let userName = getName()
	console.log(userName + '님 어서오세요.')

	let a = prompt('a의 값을 입력해주세요: ')
	let b = prompt('b의 값을 입력해주세요: ')
	let c = prompt('연산자를 입력해주세요: ')
	a = Number(a)
	b = Number(b)
	let ouput = calculate(a, b, c)
	console.log('계산 결과는 : ' + ouput + '입니다.')
}

function getName() {
	let name = 'Lee'
	return name
}

/**
 * 사칙연산을 수횅한다.
 * @param {Number} a a값
 * @param {Number} b b값
 * @param {String} c 연산자
 */
function calculate(a, b, c) {
	let result = 0
	if (c == '+') {
		result = a + b
	} else if(c == '-') {
		result = a - b
	} else if(c == '*'){
		result = a * b
	} else if(c == '/'){
		if(b == 0) {
			// console.error('입력오류입니다.')
			result = '입력오류'
		} else {
			result = a / b
		}
	} else {
		alert('사칙연산자(+, -, *, /)만 입력해주세요.')
	}
	return result

}
