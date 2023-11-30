import React from 'react'
import './Top.css'


export default function Top( { isMovies, setIsMovies, isNews, setIsNews, isTodos, setIsTodos } ) {
	
	const onClickMovies = () => {
		onReset()
		setIsMovies(true)
	}
	const onClickNews = () => {
		onReset()
		setIsNews(true) 
	}

	const onClickTodos = () => {
		onReset()
		// setIsNews(true)
		setIsTodos(true) 
	}
	
	const onReset = () => {
		setIsMovies(false)
		setIsNews(false)
		setIsTodos(false)
	}

	return (
		<div className="navbar">
			<div className="navbarItem">로고</div>
			{/* 함수형 업데이트를 안하면 에러가 발생한다. */}
			<div className="navbarItem menu" onClick={onClickMovies}>영화</div>
			<div className="navbarItem menu" onClick={onClickNews}>뉴스</div>
			<div className="navbarItem menu" onClick={onClickTodos}>할일</div>
		</div>
	)
}
