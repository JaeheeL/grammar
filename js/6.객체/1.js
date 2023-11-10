// 객체(Object) : 배열과 흡사하고, 객체는 키와 벨류가 있는 변수, 순서X
// 배열(Array) : 인덱스와 벨류가 있는 변수, 순서O

function clicked() {
	let a = {'id': 'jh', 'pw': '1234', 'email': 'google.com'}
	let b = {'id': 'zz'}
	// console.log('a객체:', a)
	// 객체를 꺼낼때
	// console.log('a의 id키의 값', a.id)
	// console.log('b의 id키의 값', b['id'])

	// console.log('a의 id키의 값', a.pw)
	// console.log('a의 id키의 값', a.email)

	// Object의 추가
	// a.gender = 'male'
	// console.log('a객체:', a)
	// console.log('a의 gender키의 값', a.id)

	// Object의 삭제
	// delete a.email
	// console.log('a객체:', a)
	// console.log('a의 email키의 값', a.email)

	// Object와 Array의 차이
	// Object는 키로 값을 꺼낸다, Array는 순서가 있는데, 반복문과 같이 사용할수 있다
	
	// JSON 타입의 예 
	// 고객정보 [{고객1}, {고객2}, {고객3}, ...]
	// let client1 = {'id': 'jh', 'pw': '1234', 'email': 'google.com'}
	// let c = []
	// c.push({'id': 'jh', 'pw': '1234', 'email': 'google.com'},)
	// c.push({'id': 'user1', 'pw': '1234', 'email': 'user1.com'},)
	// c.push({'id': 'user2', 'pw': '1234', 'email': 'user2.com'},)
	// c.push({'id': 'user3', 'pw': '1234', 'email': 'user3.com'},)
	// c.push({'id': 'user4', 'pw': '1234', 'email': 'user4.com'},)
	
	// console.log('고객정보 JSON: ', c)

	// JSON으로 정보를 꺼낼때
	// console.log('2번째 고객의 email을 알고싶다.:', c[1].email)
	// console.log('2번째 고객의 email을 알고싶다.:', c[1]['pw'])

	// Object와 일반 변수의 차이
	let int1 = 1
	let int2 = int1
	int1 = 2
	console.log('int2:', int2)

	// 일반 변수는 값을 참조하지만, 일반 변수와 다르게 Object는 주소를 참조한다.
	// let obj1 = { 'a': 1, 'b': 2 }
	// let obj2 = obj1 // obj1의 주소를 obj2에 넣었기 때문에 같은 주소을 참조한다.
	// obj1.a = 2
	// console.log('obj2.a:', obj2.a)

	// 🌟객체(Object)를 일반 변수처럼 값만 복사하고 싶을때 : JSON.parse(JSON.stringify(obj1))
	// JSON.stringify() : 문자화를 해서 카피를 한다. 단 이 결과값은 객체가 아니라 문자열이다.
	// JSON.parse() : 파싱(컴퓨터가 이해할수 있는 형태로 번역)한다. 여기서는 객체로 바꿔준다.
	let obj1 = { 'a': 1, 'b': 2 } // a변수 1은 메소드이다.
	// let obj2 = JSON.stringify(obj1)
	// console.log(obj2)


	// obj2 = JSON.parse(JSON.stringify(obj1))
	// console.log(obj2)
	// obj1.a = 2
	// console.log('obj1.a : ', obj1.a)
	// console.log('obj2.a : ', obj2.a)

	// 콘솔로그의 정체(console은 객체, 클래스이다. console에는 키가 많다. 그중이 log를 써서 쓴다.)
	console.log(console)
	// 에러가 떴을때 자동으로 console에서 error키를 써서 에러메시지를 띄운다.
	console.error('에러입니다.') 
}