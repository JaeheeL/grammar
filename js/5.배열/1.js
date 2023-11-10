// 배열 : (여러개의)인덱스와 밸류가 있는 변수, array는 순서가 존재한다.
function clicked() {
	let a = [1, 2, 3, 4, 5]
	// console.log(a)
	// 배열의 길이만 출력하고싶다
	//console.log('a배열:' + a.length + '개')
	// console.log('배열의 길이', a.length + '개')
	// // 배열의 값 중에 특정한 값만 꺼내고 싶다
	// console.log('배열의 0번째 인덱스:', a[0])
	// console.log('배열의 1번째 인덱스:', a[1])
	// console.log('배열의 2번째 인덱스:', a[2])
	// console.log('배열의 3번째 인덱스:', a[3])
	// console.log('배열의 4번째 인덱스:', a[4])
	// // 연산도 가능
	// console.log('배열의 4번째 인덱스:', a[4]-a[3])
	
	// 인덱스가 하나만 있는 배열
	let b = [1]
	// 해당 배열에 값을 추가하고 싶을때
	// b.push(2)
	// b.push(3)
	// b.push(7)
	// b.push(9)
	// console.log('b배열 : ', b)

	// 배열 삭제1 : pop() , 파라미터가 없는 메소드
	//b.pop() // 마지막에 있는 값 하나 삭제 
	//console.log('b배열 : ', b)
	
	// 배열 삭제2 : splice(시작위치, 제거건수), 파라미터가 있는 메소드
	// b.splice(3, 1)
	// console.log('b배열 : ', b), 파라미터가 있는 메소드

	// b.splice(1, 3)
	// console.log('b배열 : ', b)


	// 뒤에서 N번째 인덱스 꺼내기
	//console.log('맨 뒤의 인덱스 값은 ? ', b[b.length - 1])


	//Set (집합) 데이터타입을 이용하여 배열에서 중복값을 제거하는 방법
	let c = [1, 2, 3, 1, 2, 3, 1, 1, 4, 5, 4, 5, 5, 3]
	// console.log(c)
	
	// Set데이터타입으로 변경
	let setC = new Set(c) // c배열의 값으로 새로운 Set를 만들어서 setC에 넣어라.
	console.log(setC)
	
	// 다시 array로 전환
	c = Array.from(setC) // Set -> Array로 캐스팅
	console.log('중복 제거된 배열:' ,c)
	



}