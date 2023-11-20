// import React from 'react'
import React, { useState, useRef } from 'react'
import './Todos.css'

export default function Todos() {
	// CRUD
	const [todos, setTodos] = useState([])
	// input용 텍스트
	const [inputText, setInputText] = useState('')
	
	// 같은 키가 들어가지 않게 하기위해서 useRef를 사용한다.
	// 1. useRef를 빈공간으로 만든다음, todos의 초기값을 길이로 만들어준다.
	// useRef 변화됐을떄만 감지하는 스테이트, 키 중복 방지
	const key = useRef(todos.length + 1)

	//추가하기
	const addTodo = (text) => { setTodos([ ...todos, { id: key.current++, content: text, isDone: false}]) }
	// 수정하기
	const toggleTodo = (id) => setTodos(todos.map((item) => { return item.id === id ? { ...item, isDone: !item.isDone } : { ...item } }))
	// 삭제하기
	// return item.id !== id의미 item.id가 해당 아이디가 아닌것들만 filter를 걸어 삭제한다
	const deleteTodo = (id) => { setTodos(todos.filter((item) => { return item.id !== id})) }

	const onSummit = (e) => {
		// 기본값을 방지해준다.
		e.preventDefault()
		addTodo(inputText)
		setInputText('')
	}

	const onChange = (e) => {
		e.preventDefault()
		setInputText(e.target.value)
	}

	
	const render = todos.map((todo) => {
		return (
			<div className="todo" key={todo.id}>
				{/* value 가 checked */}
				<input type="checkbox" checked={todo.isDone} onChange={ () => toggleTodo(todo.id)} /> 
				<span className={`${todo.isDone}Done`}>{todo.content}</span>
				<span onClick={() => deleteTodo(todo.id)}>🗑</span>
			</div>
		)
	})

	return (
		<>
			<h1 className='margin'>Todo App</h1>
			{/* form 태그 자체에 화면이 이동하는 성질있어서 원래의 성질을 제거 해야한다. */}
			<form onSubmit={onSummit}>
				<input value={inputText} onChange={onChange} placeholder='할일을 입력하세요.'/>
				<button type='summit'>추가</button>
			</form>
			<div>{render}</div>
		</>
	)
}
