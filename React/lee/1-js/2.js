// 리액트는 const로 선언한다. let을 쓰지않는다 → 불변성의 법칙(직접바꿔서는 안된다.)
// 리액트는 객체화 될수 있는 주소참조를 하는 모든 상수, 변수들의 변화를 감지해서 그것을 처리하는 언어
// 1. Spreading 문법
const a = [1, 2, 3]

// a.push(4) // 이런식으로 직접바꿔서는 안된다
const b = [...a, 4] // Spreading의 push 방법
const c = [0, ...a] // unshift 앞에다 넣고싶을때

// 메모리 누수가 발생하지 않는다.
// a는 바꾸지 않고 b의 메모리주소를 넣으면서 a가 바뀌었다는 것을 인지! 
// a <-> b // setState, a의 메모리주소를 휘발시키면서 그 자리에 b로 대체한다.

// 불변성의 법칙을 어겼다(Shallow Copy)
// const d = a.slice(0, 2) // 중간에 넣고싶을때, a에다 슬라이스한것이 d에 들어간다. 

// 객체
const a2 = { id: 'abc1234', pw: '1234'} // a2 = { id: 'abc1234', pw: '1234'} // 원본
// a2에 name을 추가하고싶을때
const b2 = { ...a2, name: 'Lee'} // b2 = { id: 'abc1234', pw: '1234', name: 'Lee' } // 추가
// a2의 pw를 변경하고 싶을때
const c2 = { ...c2, pw: '5678' } // c2 = { id: 'abc1234', pw: '5678'} // 수정
// 삭제하고 싶을때
const { pw, ...d2 } = a2 // d2 = { id: 'abc1234' } // 삭제, Destructuring 문법
