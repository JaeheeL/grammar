// state
import { useState } from 'react';
// CSS
import './App.css';

// JSX 문법 
export default function App() {
  // JS 
  // 리액트에서의 변수는 항상 local state 또는 global state 로 관리해야 함.(위에 import를 해줘야됌)
  
  // useState를 써서 선언.
  // const [변수, 함수] = useState(0); setNumber는 불변성의 법칙을 지키면서 Number라는 값을 바꾼다.
  // const number = useState(0); useState를 선언할때는 Destructuring문법을 써야한다.
  const [number, setNumber] = useState(0); 
  //{/*
  // DOM에서 함수를 이벤트 리스너로 볼러올 때는 함수형 업데이트가 필요함 
  // 함수형 업데이트 : () => { return sth } 
  //*/}
  const increase = () => setNumber(number + 1);
  const decrease = () => setNumber(number - 1);
  // const increase = (v) => v++
  // const decrease = (v) => v--

  // const increase = (v) => { return v++ }
  // const decrease = (v) => { return v-- }


  // XML
  return (
    // div최상단 태그가 두개 있으면 안된다. 하지만 두개이상 쓰는 방법이 있다. <> </>(prement)로 감싸준다.
    <>
      <div className="App">
        { number }
        {/* onclick에 안에 {함수이름}을 넣어주면 클릭과 동시에 함수가 실행된다. */}
        {/* return increase(number) => increase(number) 리턴이 화살표함수(=>)를 의미한다 */}
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
    </>
  );
}

// App을 import를 할수 있는 준비를 해라!!! 없으면 import가 안된다!@!!
// 얘를 위의 function App에 위치시킬수 있다.(export default function App()...)
// export default App;
