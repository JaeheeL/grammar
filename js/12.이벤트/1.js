// 이벤트
function clicked1() {
	console.log('좌클릭')
}

function clicked2() {
	console.log('우클릭')
}

let title = document.querySelector('#title')

// title을 클릭을 했을때, leftClick이란 함수를 실행시켜라
// leftClick함수자리에 leftClick()를 넣으면 함수가 무조건 바로 실행이 되버린다.
// 그냥 leftClick을 넣으면 click을 했을때, 조건에 해당할때만, 실행하고 싶을때만 실행한다.
title.addEventListener("click", leftClick)

// contextmenu는 oncontextmenu과 같다. 이벤트이름이 원래 contextmenu임
title.addEventListener("contextmenu", rightClick)

// 자바나 자바스크립트는 여러단어라 이어지는 단어는 CamelCase법칙을 지켜주는것이 좋다.
title.addEventListener("mouseenter", onMouse)

function leftClick() {
	title.innerHTML = '좌클릭'
}

function rightClick() {
	title.innerHTML = '우클릭'
}

// JS에서 변수명이나 메소드명은 camel case로 지정한다.(예: onMouseEnter)
// 마우스를 갖다 댔을때 색깔이 변하게
function onMouse() {
	title.style.color = 'purple'
}