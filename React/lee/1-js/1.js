// 배열도 객체, 객체, 함수도 객체 : 주소 참조, 메모리 참조
const a = [1, 2, 3] // 
// * Shallow Copy
// let b = a
// [] : 상자하나에 새로운 주소를 만들어서 a의 주소를 배정해라(Object.assign) 

// * Deep Copy
// const b = JSON.parse(JSON.stringify(a))
// const b = Object.assign([], a)
const b = [...a]
b.push(4) // 주소가 그대로인한, 바뀌는 게 아니다.
console.log(a) // [1, 2, 3, 4]
console.log(b) // [1, 2, 3, 4]
const c = { x: 1, y: 2 }

// * Shallow Copy 주소만 복사
// const d = c
// * Deep Copy
const d = [...c]
// c.x = 3
// console.log(c) // { x: 3, y: 2}
// console.log(d) // { x: 1, y: 2}


// b를 1, 2, 3이 가진 값으로 a와 b를 다르게 처리하고 싶을때



// 수, 문자열, 불리언, null, undefined : 값 참조
const FIXED_VALUE = 1

// Q. 주소 참조와 값 참조의 차이
