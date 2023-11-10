// 반복문 : 배열 변수가 없으면 사용할 수 없다.
// 반복문 : 배열의 인덱스를 for로 빙글빙글 돌면서 반복된 특정 작업을 수행하는 문
function clicked() {
	//let arr1 = [1, 2, 3, 4, 5]

	// 어떤 값을 입력을 하면 arr1에 그 값이 있는지 알수 있는 코딩
	//let a = Number(prompt('어떤 숫자를 확인해보시겠습니까?'))
	// 위에서 Number로 숫자로 형변환을 하고 숫자를 입력했을때 console에서 정수로 표시됐지만,
	// Number를 빼고, 실행했을때는 console에서 문자로 표시된다.
	// let a = prompt('어떤 숫자를 확인해보시겠습니까?')
	// for(let i = 0; i < arr1.length; i++) {
	// 	// console.log('arri[i] :', arr1[i])
	// 	if (a == arr1[i]) {
	// 		console.log(String(i+1) + '번째에 ' + String(arr1[i]) + '이라는 값이 있습니다.')
	// 	}
	// }
	// console.log('값이 없습니다.')
	// console.log(a)
	
	// JSON형태
	// let arr2 = [
	// 	{ name : '사과', count : 2 },
	// 	{ name : '멜론', count : 7 },
	// 	{ name : '레몬', count : 3 },
	// ]
	// //console.log(arr2)
	// let b = prompt('어떤 과일을 확인하시겠습니까?')
	// let c = 0

	// for(let i = 0; i < arr2.length; i++) {
	// 	if(b == arr2[i].name) {
	// 		c++
	// 		console.log(arr2[i].count + '개 있습니다.')
	// 	}
	// }
	// if (c == 0) {
	// 	console.log('그런 과일은 없습니다.')
	// }

	// 구구단
	let a = [2, 3, 4, 5, 6, 7, 8, 9]
	let b = [1, 2, 3, 4, 5, 6, 7, 8, 9]

	for(let i = 0; i < a.length; i++) {
		for(let j = 0; j < b.length; j++) {
			console.log(String(a[i])+'x'+ String(b[j])+'='+String(a[i]*b[j]))
		}
	}
	
	// for(let i = 2; i < 10; i++) {
	// 	for(let j = 1; j < 10; j++) {
	// 		console.log(String(i) + 'x' + String(j) + '=' + String(i*j))
	// 	}
	// }
}