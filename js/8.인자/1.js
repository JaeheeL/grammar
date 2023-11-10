// 파라미터 : 메소드가 취하는 목적어
// 파라미터안에 들어가는 값이 아규먼트(인자)이다.

// 파라미터가 없는 메소드
/**
 * 버튼을 클릭하면 실행한다.
 */
function clicked() {
	// 입력받을 사용자 이름
	// let username = prompt('당신의 이름은 무엇입니까?')
	// // 인사
	// greet(username) // Jh가 어규먼트
	// 계산
	add(10, 2)
}

// 파라미터가 있는 메소드
/**
 * 사용자에게 인사한다.
 * @param {String} name 사용자의 이름
 */
// function greet(name) {
// 	console.log('안녕하세요. ' + name + '씨')
// }

/**
 * 두 값을 더한다.
 * @param {Number} a 첫번째 값
 * @param {Number} b 첫번째 값
 */

function add(a, b) {
	console.log(String(a), '+', String(b), '=', String(a+b))
	console.log(a+b)
}


