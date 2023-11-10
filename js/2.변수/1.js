function clicked() {
	// 변수 : 변하는 수
	// 변수(variables)의 선언 : var, let(값을 변형시킬수 있는 변수), const(상수, 변하지 않는수)
	// let a = 1
	// a = 2
	// a = 5
	// const b = 7
	// console.log(a)
	// console.log(b)

	// 변수의 타입)(type, 종류)
	// * undefined : 아예 변수가 없는 것, 타입이 아닌데 구분하기 위해서
	// null : 변수가 비어있는 것
	// number : 숫자
	// string : 문자열, 연산 불가
	// boolean : 논리 변수(참true, 거짓false)
	// array : 배열

	// let c = 13
	// console.log(c * 2)
	// console.log(c * 2) // 곱
	// console.log(c / 2) // 나누기
	// console.log(c % 2) // 나머지
	// console.log(c ** 2) // 몇승 2의 2승

	// 몫을 구할때, parseInt(메소드) 정수형으로 바꿈
	// console.log(parseInt(c / 2)) // 몫

	// 문자열
	// let a = "안녕하세요"
	// let a1 = 안녕하세요 , ""없이 그냥 문자열로 만하면 숫자로 인식을 해서 오류가 뜬다 
	// console.log(a)
	// console.log(a1)
	// let a = 2
	// let b = Boolean(a > 1)
	// console.log(b)
	
	let c = '' // 값이 있는것(true) 값이 없는것(=null / 0 / '') (false)
	console.log(Boolean(c))
	
	// 0(심지만 있음)과 null(심지도 없음)은 다르다 

}