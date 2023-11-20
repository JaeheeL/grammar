// 배열 추가 수정 삭제 로직

// 배열
const arr = [1, 2, 3, 4, 5]

// 객체
const obj = { id: 'abc1234', pw: 'lee1234' }
// 리액트는 위와 같은 초기값이 있는데 이것에 추가를 할때 그냥 arr.push로 하면 불변성의 법칙을 깨기 때문에 안되고, 새로운 것을 만드는 방법이있다.
// arr.push(6)


// ⭐️CRUD에 유용하다⭐️

// 딥카피와 동시에 새로운 것을 추가하는 방법
const newArr = [...arr, 6]
// 객체추가
const newObj = { ...obj, email: 'test@test.com'}

// 딥카피와 동시에 수정 
const modArr = arr.map((item, index) => { return index === arr.length - 1 ? 999 : item })
// 객체 수정
const modObj = { ...obj, pw: 'test1234' }

// 딮카피와 동시에 삭제
const delObj = (({ email, ...delobj }) => delObj)(obj)

// 래액트 방식
// const addArr = () => { setArr([ ...arr, 6 ])} // 배열 추가
// const modArr = () => { setArr(arr.map((item, index) => { return index === arr.length - 1 ? 999 : item}))} // 배열 수정
const delArr = () => { setArr(arr.filter((item, index) => { return index !== arr.length - 1}))} // 배열 삭제

const addObj = () => { setObj({ ...obj, email: 'test@exmpla.com' }) } // 객체 추가
// const modObj = () => { setObj({ ...obj, email: 'test@exmpla.com' }) } // 객체 수정
// const delObj = () => { const { email, ...delObj } = obj; setObj(delObj) } // 객체 삭제

