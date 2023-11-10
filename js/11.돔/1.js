// DOM(Document Object Model) : HTML소스를 객체로 만들어서 JS가 사용할 수 있게 document라는 변수로 가져온 것
function clicked() {
	
	// html 전체를 가져옴
	// console.log(document)
	
	// html에서 id가 hi인 html hi태그한줄을 찾아서 console.log로 띄워줌
	// console.log(document.getElementById('hi'))
	// let a = document.getElementById('hi')
	// console.log(a)
	// innerHTML은 html사이에 있는 값을 바꾼다.
	// a.innerHTML = 'Hello!'
	// a.style = 'color : red' // ;없어도됌

	// let b = document.getElementById('link')
	// b.href = 'https://amazon.com'

	// querySelector를 사용하면 클래스든 아이디든 태그든 다 사용할수 있다.
	// querySelector에서 아이디를 주려면 괄호안에 #id이름를 넣어줘야한다. 클래스는 .class이름
	// let c = document.querySelector('a') // class .a // id #link // tag는 그냥 tag(h1, a)
	// c.style = 'color:gold'
	
	// document.title = '탭이름'

	//document.querySelector('#link').innerHTML = "링크"

	// parentNode는 id가 속해있는 부모, 상위에 있는 태그를 바꾼다.(1.html의 a의 상위 div태그를 바꾼다.)
	// document.querySelector('#link').parentNode.style = "display:block"
	// document.querySelector('#link').style = "display:block"
	// document.querySelector('#link').parentNode.style = "color:pink"
	// document.querySelector('#link').style = "color:blue"

	// childNodes는 복수라서 배열이된다.
	// console.log(document.querySelector('div').childNodes[3].innerHTML = "링크링크")

	
}