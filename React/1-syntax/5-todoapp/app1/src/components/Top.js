import React from 'react'
import './Top.css'

export default function Top({ isMovies, setIsMovies, isNews, setIsNews, isTodos, setIsTodos }) {

	// 클릭을 하면 영화, 뉴스로 이동을 시켜야 되기때문에 따로따로 로직을 추가한다.
	const onClickMovies = () => { 
		// 다꺼놓고 하나만 켜지도록 리넷을 추가
		onReset()
		setIsMovies(true)
	}
	const onClickNews = () => {
		onReset()
		setIsNews(true)
	}

	const onClickTodos = () => {
		onReset()
		setIsTodos(true)
	}
	// 기존에 켜져있는 것들을 리셋하기 위한 함수
	const onReset = () => {
		setIsMovies(false)
		setIsNews(false)
		setIsTodos(false)
	}

	return (
		<div className="navbar">
			<div className="navbarItem">로고</div>
			{/* 함수형 업데이트 처리 해줘야된다. */}
			{/* <div className="navbarItem menu" onClick={() => setIsMovie(true)}>영화</div> */}
			<div className="navbarItem menu" onClick={onClickMovies}>영화</div>
			{/* <div className="navbarItem menu" onClick={() => setIsNews(true)}>뉴스</div> */}
			<div className="navbarItem menu" onClick={onClickNews}>뉴스</div>
			<div className="navbarItem menu" onClick={onClickTodos}>할일</div>
		</div>
	)
}
