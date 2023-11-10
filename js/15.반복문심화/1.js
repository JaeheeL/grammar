// 반복문 심화
function init() {
	
	// a의 배열에 당첨번호를 찾아주는 코드
	let a = [11, 22, 22, 44, 51]
	let b = 51
	
	// 기존 for의 방식
	// for (let i = 0; i < a.length; i++) {
	// 	if(a[i] == b) {
	// 		alert('당첨되셨습니다. 축하합니다!')
	// 	}
	// }
	// console.log(a[a.indexOf(b)] + '가 있습니다.')
	// console.log(a.indexOf(b)+1 + '번째에 있습니다.')
			
			
	// ⭐️indexOf : 조건에 해당하는 값이 어디에 있는지, 몇번째 인덱스에 있는지를 표시
	// if(a[a.indexOf(b)] != undefined) {
	// 	console.log('당첨되셨습니다. 축하합니다!')
	// }

	// ⭐️filter : 조건에 해당하는 값이 몇개 있는지를 검색해서, 배열에 담아서 표시, JSON에서 특정값 한개를 걸러낼때 유용하다.
	// let b = 22;
	// let c = a.filter(function(item) { return item == b }) // console.log(c) //[22, 22]
	// if(c.length != 0) {
	// 	console.log('당첨되셨습니다.')
	// }

	// map : 밸류값, 인덱스값을 동시에 꺼낸다.
	// a.map(function(v, i) {
	// 	if (b == v) {
	// 		console.log(i+1 + '번째 상품에 당첨되셨습니다.')
	// 	} 
	// })

	// ⭐️forEach : 배열 안에 있는 값들을 순서대로 한줄에 하나씩 꺼낸다.
	a.forEach(function(item) { console.log(item) })
	a.forEach(function(item) { 
		if(item == b) {
			console.log('당첨되셨습니다.')
		}
	})

	a.forEach(function(value, index, array) { 
			console.log('value:', value)
			console.log('index:', index)
			console.log('array:', array)
	})

}

init()