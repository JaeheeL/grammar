// state
import { useState } from 'react';
// CSS
import './App.css';
import Movies from './components/Movies';
import Top from './components/Top';
import News from './components/News';

// JSX 문법 
export default function App() {
  // JS 
  // Counter를 열었냐 안열었냐를 확인하기 위해 isOpen을 만든다.
  // const [isOpen, setIsOpen] = useState(false)
  // App에서 Counter로 값을 넘겨주고 싶을떄? App에다가 선언을 하고 Props로 넘겨준다
  

  // useState()안에 초기값을 줘야된다.
  const [isMovie, setIsMovie] = useState(false);
  const [isNews, setIsNews] = useState(false);


  // XML
  return (
    // div최상단 태그가 두개 있으면 안된다. 하지만 두개이상 쓰는 방법이 있다. <> </>(prement)로 감싸준다.
    <>
      <Top isMovie={isMovie} setIsMovie={setIsMovie} isNews={isNews} setIsNews={setIsNews} />
      {isMovie && <Movies />}
      {isNews && <News />}
      {/* <button onClick={() => setIsOpen(!isOpen)}>{ isOpen ? '닫기' : '열기'}</button> */}
      {/* isOpen이 true일때만 Counter를 열겠다 */}
      {/* { isOpen && <Movie /> } */}
      
    </>
  );
}

// App을 import를 할수 있는 준비를 해라!!! 없으면 import가 안된다!@!!
// 얘를 위의 function App에 위치시킬수 있다.(export default function App()...)
// export default App;
