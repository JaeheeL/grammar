import React, { useState, useEffect } from 'react'
// CSS
import './News.css'

// https://yts.mx/api/v2/list_movies.json?sort_by=rating
export default function News() {
	const [news, setNews] = useState([])

	useEffect(() => {
		// fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
		fetch('https://api.hnpwa.com/v0/news.json')
			// 비동기로 약속을 함. res.json값이 들어갈거다
			.then(res => res.json())
			// .then(json => console.log(json))
			.then(json => setNews(json))
	}, [])



	// return값으로써 html렌더링
	const render = () => { 
		console.log('news: ', news)
		return news.map(item => {
			return (
				<div key={item.id}>
					<div>
						<a className="newsTitle" href={item.url}>{item.title}</a>
						<span> / {item.time_ago}전 기사</span>
						<span> / ID : {item.user}</span>
					</div>
			</div>	
			)
		})
	}

	return (
		<>
		{/* 검색엔진 최적화를 h1태그에서 한다 SEO(Search Engine Optimization)에 대해서 찾기 */}
			<h1>News App</h1>
			<div>{render()}</div>
		</>
	)
}
