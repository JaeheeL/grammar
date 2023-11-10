// API(Application Programming Interface)란 무엇인가?

// 사용할 API 주소(예제) : 영화리뷰사이트 API 호출
// GET: https://yts-official.org/api/v2/list_movis.json?sort_by=rating
// 튜토리얼: https://yts-official.org/api

let url = "https://yts-official.org/api/v2/list_movis.json?sort_by=rating"
let movies = []
console.log(url)

function getMovie(url) {
	// api를 사용할때 fetch를 통해서 가져온다.
	fetch(url)
		.then(res => { // res = responce
			console.log(res)
			// 응답 res를 JSON형태로 파싱(parsing)
			return res.json()
		})

		.then(data => {
			console.log(data)
			let moviesArray = data.data.movies
			for (let i = 0; i < moviesArray.length; i++) {
				movies.push(moviesArray[i])
			}
			movies.push(data.data.movies)
		})
		.catch(err => {
			console.log('fetch error: ', err);
		})
}

// 전역변수 movies 배열의 값을 갱신한다.
getMovie(url)
console.log('movies:', movies)