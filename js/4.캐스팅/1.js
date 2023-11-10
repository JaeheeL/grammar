// 캐스팅 : 데이터 타입을 변환시키는것 Number(), String(), Boolean()
function clicked() {
	let a = '150'
	// let a 의 150 문자열을 숫자로 변환시켜서 밑에 1234와 더하고 싶다
	a = Number(a)
	console.log(a + 1234)

	let b = 100
	// 숫자를 문자로 형변환
	b = String(b)
	console.log(b + '개의 재고가 있습니다.')

	let c = 10
	let d = 20
	let e = Boolean(c > d)
	console.log(e)

}
