// 백틱??

function clicked() {
	let name1 = 'Lee' // Char	
	let name2 = "Lee"	// String
	let name3 = `Lee`	// Backtick
	let result = introduce('리', '개발자', '19')
	// console.log(result)

	// 백틱에서 삼항연산자 Ternery Operator 문법
	// `${조건 ? `${true일때의 변수}` : false일때의 변수}`
	let a = 9
	console.log(
		// 백틱안에도 백틱이 들어올수있다.
		`${a < 10 ? `0${a}` : a}`
	)
}

/**
 * 자기소개를 한다.
 * @param {String} name 이름
 * @param {String} job 직업
 * @param {String} age 나이
 */
function introduce(name, job, age) {
	// return '저는' + name + '입니다.' + '직업은 ' + job + '입니다.' + age + '살입니다.'
	// 백틱을 사용하면 번잡했던 코드가 간결해지고, 백틱은 중간에 변수(${})를 쓸수있다!@!@!@
	return `저는 ${name}입니다. 직업은 ${job}입니다. 올해로, 나이는 ${age}살입니다.`
}

