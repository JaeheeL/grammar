// DOM 객체는 HTML 안의 DOM 트리안에서 위계적인 구조(HTML태그가 객체처럼 담아져 있기 때문에)를 띈다.
// F12에서 Element탭에 가보면 DOM 트리가 나온다.

// a, b 변수
let a = document.createElement("div") // div 태그를 만든다.
a.innerHTML = "새로 생성됨"

// 바디에 생성
function create1() {
	console.log('document:', document)
	// html의 body부분을 가져온다.
	let body = document.body
	console.log('body:', body)
	body.appendChild(a)
}

// 원하는 태그에 생성
function create2() {
	let parent = document.querySelector("#create2")
	parent.appendChild(a)
}

// 원하는 태그에 계속생성
function create3() {
	// 아들 태그를 생성
	let b = document.createElement("div") // div 태그를 만든다.

	// 아들을 어떤 형태로 키울 것인가?, 아들태그의 속성을 변경
	b.innerHTML = "새로 생성됨(지역변수)"
	// setAttribute로 식별자(id나 class)를 부여할수 있다.
	b.setAttribute("id", "son") // id = 고유명사
	b.setAttribute("class", "tottenham") // class = 소속
	b.style.backgroundColor = "yellow"

	// 부모에게 아들의 속성을 갖다 붙인다.
	let parent = document.querySelector("#create3")
	parent.appendChild(b)
}

// create3으로 만들어졌던 리스트 삭제
function delete4() {
	// 삭제할 자식 찾기
	let son = document.querySelector("#son")
	
	// 에러예외처리
	let parent = ""
	if (son && son.parentElement) {
		// 부모 객체 알아내기
		parent = son.parentElement
		// 부모로 부터 id가 son인 DOM객체를 떼어낸다.
		parent.removeChild(son)
	}
}
