// API(Application Programming Interface)란 무엇인가?

// 사용할 API 주소(예제) : 영화리뷰사이트 API 호출
// GET: https://yts-official.org/api/v2/list_movis.json?sort_by=rating
// 튜토리얼: https://yts-official.org/api

let url = "https://yts.mx/api/v2/list_movies.json"
let movies = []
console.log(url)

function getMovie(url) {
	// api를 사용할때 fetch를 통해서 가져온다.
	fetch(url)
		.then(res => { // res = responce
			// console.log(res)
			// 응답 res를 JSON형태로 파싱(parsing)
			return res.json()
		})
		.then(data => {
			// 취득 성공 확인
			console.log(data)
			movies.push(data.data.movies)
			// *** 비동기 이므로 아래를 먼저 실행하고 제일 마지막에 여기를 실행
			render(movies[0])
		})
		.catch(err => {
			console.log('fetch error: ', err);
		})
}

// 전역변수 movies 배열의 값을 갱신한다.
getMovie(url)
// render(movies) // 비동기이므로 얘를 먼저 실행하면 안됨



// 렌더링 할 함수를 만듦
function render(movies) {
	for(let i = 0; i < movies.length; i++) {
		console.log('moviesObj: ', movies[i])
		makeMovieList(movies[i])
	}
}

function makeMovieList(moviesObj) {
	let title = document.createElement("div")
	title.setAttribute("class", "title")
	let image = document.createElement("img")
	title.setAttribute("class", "image")
	let rank = document.createElement("p")
	title.setAttribute("class", "rank")
	let parent = document.querySelector("#movies")

	title.innerHTML = moviesObj.title
	image.src = moviesObj.background_image
	rank.innerHTML = `${moviesObj.rating} / 10.0`
	parent.appendChild(title)
	parent.appendChild(image)
	parent.appendChild(rank)
}