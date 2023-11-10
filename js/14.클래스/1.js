// 클래스 : 관련성이 있는 일련의 변수, 메소드들을 정의해놓은 것

// let user = { id: 'lee', pw: 'lee123' }
// console.log(user.pw)

// math object
// let Math = {
// 	pi: 3.14,
// 	plus: function(a, b) {
// 		return a + b
// 	},
// 	minus: function(a, b) {
// 		return a - b
// 	}
// }

// 진짜 class Math, 객체를 만들어내는 틀
class Math {
	// 생성자 : 변수를 초기화하면서 선언
	constructor() {
		this.a = 0
		this.b = 0
	}
	pi = 3.14
	plus(a, b) {
		return a + b;
	}
	minus(a, b) {
		return a - b;
	}
}

// Class를 math라는 객체 변수에 담아서 사용 : Class는 붕어빵 만드는 틀, 객체는 붕어빵
// Math가 math변수에 담아지면, 객체가 사용하는 것처럼 파일을 꺼냈을때 위에 class Math의 값들이 나온다.
let math = new Math()
console.log(math.pi)
console.log(math.plus(1, 2))
console.log(math.minus(2, 1))

// Math object용
// console.log('Math.pi:', Math.pi)
// console.log('Math.plus(1, 2):', Math.plus(1, 2))
// console.log('Math.minus(2, 1):', Math.minus(2, 1))



