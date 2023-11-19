import React, { useState, useEffect } from 'react'


// 내부에서 로컬스테이트를 선언하는 경우
export default function Counter() {
	const [number, setNumber] = useState(0);

	// JS 
  // 리액트에서의 변수는 항상 local state 또는 global state 로 관리해야 함.(위에 import를 해줘야됌)
  // const [number, setNumber] = useState(0);

	
  
  // 시점을 catch하는 방법 : useEffect를 사용한다.
	// LifeCycle 라이프사이클
  // Mount : 앱에서 컴포넌트가 렌더링 된 시점
  useEffect(() => {
		console.log('컴포넌트가 렌더링되었습니다. Mounted.')
	}, []) // DEPS : 의존성이 있으면 넣어라?, DEPS가 비어있으면 Mount시점에만 실행됨

  // Update : 앱에서 컴포넌트가 업데이트 된 시점
	useEffect(() => {
		// 0이하는 내려가지 않게
		if (number < 0) {
			setNumber(0)
			alert('카트가 비어있어요')
		}
		// if (number < 0 ) { setNumber(0) }
		console.log('컴포넌트가 업데이트되었습니다. Updated.')
	}, [number, setNumber]) // DEPS에 number가 있으면 number가 업데이트될 때마다 실행됨

  // Unmount : 앱에서 컴포넌트가 사라진 된 시점
	useEffect(() => {
		return () => {
			console.log('컴포넌트가 사라졌습니다. Unmounted.')
		}
	}, []) // DEPS가 비어있는데, return안에 함수가 있으면, 그 함수를 Unmount 시점에만 실행됨

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
