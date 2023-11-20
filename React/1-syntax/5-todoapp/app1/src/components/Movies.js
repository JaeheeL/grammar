import React, { useState, useEffect } from 'react'
// CSS
import './Movies.css'
import Loading from './Loading'

// https://yts.mx/api/v2/list_movies.json?sort_by=rating
export default function Movies() {
	const [movies, setMovies] = useState([])
	const [isLoading, setIsLoading] = useState(false) 

	useEffect(() => {
		// fetch로 값을 가져올때 시간이 오래걸리기 때문에 Loading...이라는 것을 만들어준다.
		setIsLoading(true);
		fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
		// 화면이 안뜰때 try catch로 오류가 없이 넘어감
			// fetch('https://yts.mx/api/v2/list_movies.json')
				// .then(res => console.log(res.json()))
				// 비동기로 약속을 함. res.json값이 들어갈거다
				.then(res => res.json())
				.then(json => { setMovies(json.data.movies);  setIsLoading(false);})
	}, [setMovies, setIsLoading])



	// return값으로써 html렌더링
	const render = () => { 
		console.log('movies: ', movies)
		return movies.map(item => {
			return (
				<div key={item.id} className="movieContainer">
						<a class="movieTitle" href={item.url}> {item.title} ({item.year}) {item.rating >= 9 && '🔥'}</a>
						<div className="movieDetail">
							<img className="movieImage" src={item.large_cover_image} alt={item.title}/>
							<div className="movieDescription">
								<div className={item.rating >= 9 ? 'good' : item.rating >= 7 ? 'notBad' : 'bad'}>평점: {item.rating ? item.rating + ' / 10점' : '정보없음'}</div>
								<div>장르: {item.genres.join(', ')}</div>
								<div>상영시간: {item.runtime ? item.runtime + '분' : '정보없음'}</div>
								{/* 요약이 긴 영화에 긴요약을 tooltip으로 만들수있는지 찾아보기 */}
								<div>요약: {item.summary || '정보없음'}</div>
								{/* torrent.url이 한개 이상일 때 map으로 만들어서  */}
								<div>토렌트: {item.torrents.map((tor, idx) => { return (
									<span>
										<a href={tor.url}>#{idx + 1}</a>{' '}
										{/* <div>토렌트 주소 : {item.torrent.url}</div>
										<div>토렌트 퀄리티 : {item.torrent.quality}</div>
										<div>토렌트 사이즈 : {item.torrent.size}</div> */}
									</span>
								)})}
								</div>
							</div>
						</div>
					</div>
				)
			})
		}

	return (
		<>
		{/* 검색엔진 최적화를 h1태그에서 한다 SEO(Search Engine Optimization)에 대해서 찾기 */}
			<h1>Movie App</h1>
			{/* render를 쓰면 화면이 나오는데 그냥 render는 원래 필요없는건가? */}
			{/* <div>{render()}</div> */}
			<div>{ isLoading ? <Loading /> : render()}</div>
		</>
	)
}
