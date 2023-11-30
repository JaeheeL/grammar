import './News.css';
import React, { useState, useEffect } from 'react'

// 뉴스앱 API : // https://api.hnpwa.com/v0/news.json
export default function News() {
	const [news, setNews] = useState([]);

	useEffect( () => {
		fetch('https://api.hnpwa.com/v0/news.json')
			.then(res => res.json())
			.then(json => setNews(json))
			// 어떤 것이 나오는지 모르기 때문에 console.log로 json을 찍어본다.
			// .then(json => console.log((json)))
	}, []);

	const render = () => {
		return news.map(item => {
			return (
				<div key={item.id}>
					<div>
						<a className="newsTitle" href={item.url}>{item.title}</a>
						<span> / {item.time_ago}</span>
						<span> / ID: {item.user}</span>
					</div>
				</div>
			)
		})
	}	

	return (
		<>	
		{/* h1태그로 검색엔진 대응을 할수 있다.(SEO 검색엔진최적화) */}
			<h1 style={{ fontWeight: 'bold' }}>News App</h1>
			<div>{ render() }</div>
		</>	
	)
}
