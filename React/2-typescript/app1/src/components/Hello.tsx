import React from 'react'

// props로 넘겨주기 위해 type을 지정해줘야한다.
type HelloProps = {
	name: string,
	onClick: (name: string) => void;
}

export default function Hello( {name, onClick}: HelloProps ) {
	return (
		<div onClick={() => onClick(name)}>Hello {name}!</div>
	)
}
