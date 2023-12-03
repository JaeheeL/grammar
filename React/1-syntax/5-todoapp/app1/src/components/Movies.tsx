import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import './Movies.css'

type MoviesItemProps = {
  id: number
  title: string
  rating: number
  runtime: number
  genres: string[]
  summary: string
  large_cover_image: string
  url: string
  year: number
  torrents: TorrentsProps[]
}

type TorrentsProps = {
  url: string
  torrents: string[]
}

export default function Movies() {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
    setIsLoading(true)
    // fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
    fetch('https://yts.mx/api/v2/list_movies.json')
      .then(res => res.json())
      .then(json => { setMovies(json.data.movies); setIsLoading(false)} ) 	
  }, [])

  const render = () => {
    // console.log('movies: ', movies)
    return movies.map( (item: MoviesItemProps) => {
      return (
        <div key={item.id} className="movieContainer">
          <a className="movieTitle" href={item.url}>{item.title} ({item.year}) {item.rating >= 9 && '🔥'}</a>
          <div className="movieDetail">
            <img className="movieImage" src={item.large_cover_image} alt={item.title} />
            <div className="movieDescription">
              <div className={item.rating >= 9 ? 'good' : item.rating >=7 ? 'notBad' : 'bad'}>평점: {item.rating ? item.rating + '/ 10점' : '정보없음'} </div>
              <div>장르 : {item.genres.join(', ')}</div>
              <div>상영시간 : {item.runtime ? item.runtime + '분' : '정보없음'}</div>
              <div>요약 : {item.summary || '정보없음'}</div>
              <div>토렌트 : {item.torrents.map((tor, idx) => { return (
                <span>
                  <a href={item.url}>#{idx + 1}</a>{' '}
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
      <h1>Movie App</h1>
      <div>{ isLoading ? <Loading /> :  render()}</div>
    </>
  )
}
