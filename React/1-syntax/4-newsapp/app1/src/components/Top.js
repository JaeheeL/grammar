import React from 'react'
import './Top.css'

export default function Top({ isMovie, setIsMovie, isNews, setIsNews }) {

	// 클릭을 하면 영화, 뉴스로 이동을 시켜야 되기때문에 따로따로 로직을 추가한다.
	const onClickMovie = () => { 
		// 다꺼놓고 하나만 켜지도록 리넷을 추가
		onReset()
		setIsMovie(true) 
	}
	const onClickNews = () => {
		onReset()
		setIsNews(true) 
	}
	// 기존에 켜져있는 것들을 리셋하기 위한 함수
	const onReset = () => {
		setIsMovie(false)
		setIsNews(false)
	}

	return (
		<div className="navbar">
			<div className="navbarItem">로고</div>
			{/* 함수형 업데이트 처리 해줘야된다. */}
			{/* <div className="navbarItem menu" onClick={() => setIsMovie(true)}>영화</div> */}
			<div className="navbarItem menu" onClick={onClickMovie}>영화</div>
			{/* <div className="navbarItem menu" onClick={() => setIsNews(true)}>뉴스</div> */}
			<div className="navbarItem menu" onClick={onClickNews}>뉴스</div>
		</div>
	)
}
