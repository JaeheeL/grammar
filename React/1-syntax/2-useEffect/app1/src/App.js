// state
import { useState } from 'react';
// CSS
import './App.css';
import Counter from './components/Counter';
import Cart from './components/Cart';

// JSX 문법 
export default function App() {
  // JS 
  // Counter를 열었냐 안열었냐를 확인하기 위해 isOpen을 만든다.
  const [isOpen, setIsOpen] = useState(false)
  // App에서 Counter로 값을 넘겨주고 싶을떄? App에다가 선언을 하고 Props로 넘겨준다
  const [number, setNumber] = useState(0);



  // XML
  return (
    // div최상단 태그가 두개 있으면 안된다. 하지만 두개이상 쓰는 방법이 있다. <> </>(prement)로 감싸준다.
    <>
      <button onClick={() => setIsOpen(!isOpen)}>{ isOpen ? '닫기' : '열기'}</button>
      {/* isOpen이 true일때만 Counter를 열겠다 */}
      { isOpen && <Cart /> }
      { isOpen && <Cart /> }
      { isOpen && <Cart /> }
      { isOpen && <Cart /> }
      <hr/>
      { isOpen && <Counter number={number} setNumber={setNumber} /> }
      { isOpen && <Counter number={number} setNumber={setNumber} /> }
      { isOpen && <Counter number={number} setNumber={setNumber} /> }
      { isOpen && <Counter number={number} setNumber={setNumber} /> }
      { isOpen && <Counter number={number} setNumber={setNumber} /> }
      
    </>
  );
}

// App을 import를 할수 있는 준비를 해라!!! 없으면 import가 안된다!@!!
// 얘를 위의 function App에 위치시킬수 있다.(export default function App()...)
// export default App;
