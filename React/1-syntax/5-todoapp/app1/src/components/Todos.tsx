import React, { useState, useRef } from 'react'
import './Todos.css'

type TodosItemProps = {
	id: number;
	content: string;
	isDone: boolean;
}


export default function Todos() {
	// CRUD로 빈배열을 넣은 useState를 만든다.
	// const [todos, setTodos] = useState([ { id: 1, content: '영화보기', isDone: true}, { id: 2, content: '공부하기', isDone: false} ]);
	const [todos, setTodos] = useState<TodosItemProps[]>([]);
	// useRef를 이용해서 id로 key prop정의
	// 변화됐을때만 감지하는 state, key의 초기값은 todos의 현재길이(2)에서 1씩 점점 추가되어서 초기화된다.
	const key  = useRef(todos.length + 1);

	// input에 제한을 걸기위한, input용 state를 만든다.
	const [inputText, setInputText] = useState('');

	// 할일을 추가하는 변수, 기능 생성, 그후 Todo가 추가되면서 id도 1씩 늘어가게 만든다.
	const addTodo = (text: string) => { setTodos([ ...todos, { id: key.current++, content: text, isDone: false} ]) }

	// 체크했을때 Toggle로 check uncheck 실현
	const toggleTodo = (id: number) => setTodos( todos.map((item) =>  { return item.id === id ? { ...item, isDone: !item.isDone } : {...item}}) )
	
	// form 태그를 클릭했을때의 원래 속성을 제거하기 위한 기능추가
	const onSubmit = (e: {
		preventDefault: () => void; }) => {
		// 기본값 방지
		e.preventDefault()
		addTodo(inputText)
		// submit했을때 input창을 다시 비어있는 상태로 초기화
		setInputText('')
	}

	const onChange = (e: {
		preventDefault: () => void; target: { value: React.SetStateAction<string>; }; }) => {
		e.preventDefault();
		setInputText(e.target.value)
	}

	// 할일을 추가하는 변수, 기능 생성	
	// 삭제를 하기 위해서 id를 가져와야 한다.
	// 여기서 중요한건 item.id가 id와 다른것을 제외한 나머지를 filter로 남긴다.(같은것을 삭제??)
	const deleteTodo = (id: number) => { setTodos(todos.filter((item: { id: number } ) => { return item.id !== id })) }

	const render = todos.map((todo: TodosItemProps) => {
		return(	
			<div className="todo" key={todo.id}>
				{/* onClick은 함수형 업데이트를 해줘야한다. */}
				{/* onClick이 아니고 onChange를 쓴다. (checked를 쓰려면???) */}
				{/* <input type="checkbox" checked={todo.isDone} onClick={() => toggleIsDone(todo.id)} /> */}
				<input type="checkbox" checked={todo.isDone} onChange={() => toggleTodo(todo.id)} />
				{/* `백틱은 ` {} 중괄호로 감싸줘야한다. */}
				<span className={ `${todo.isDone}Done` }>{todo.content}</span>
				<span onClick={() => deleteTodo(todo.id)}>🗑</span>
			</div>
		)
	})
	return (

		<>
			<h1>Todo App</h1>
			{/* form 태그는 onSubmit를 하고 버튼을 눌렀을때 화면 이동을 하고, 갱신이 되버린다. 그래서 원래의 속성을 제거해야됨 */}
			<form onSubmit={ onSubmit } >
				<input value={inputText} onChange={onChange} placeholder='할일을 입력해주세요.' />
				<button type='submit'>추가</button>
			</form>
			<div>{ render }</div>
		</>
	)
}
