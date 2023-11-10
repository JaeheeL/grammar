// CSS 파일 내의 class 정의를 사용해서 스타일을 바꾼다.
function init() {
	let title = document.querySelector("#title")

	// html을 건들지 않고 자바스크립트 안에서 이벤트리스너를 추가해준다.
	title.addEventListener("click", handleClick)
	title.addEventListener("contextmenu", handleContextmenu)
}

// function 바깥에 꺼내서 실행시켜줌
init()

function handleClick() {
	// console.log('title.className : ', title.className)
	// if(title.className !== "topic") {
	// 	title.className = "topic"
	// } else {
	// 	title.className = "" // 문제발생 : large가 없어져버린다.
	// }

	// if(!title.classList.contains("topic")) {
	// 	// topic을 포함하지 않을경우
	// 	title.classList.add("topic")
	// } else {
	// 	// topic을 포함하는 경우
	// 	title.classList.remove("topic")
	// }

	// console.log(title)
	title.classList.toggle("topic")
	console.log(title)

}

function handleContextmenu() {
	// if(!title.classList.contains("large")) {
	// 	// large을 포함하지 않을경우
	// 	title.classList.add("large")
	// } else {
	// 	// large을 포함하는 경우
	// 	title.classList.remove("large")
	// }

	// 위에 코드를 toggle로 한번에
	title.classList.toggle("large")
	console.log(title)
}

