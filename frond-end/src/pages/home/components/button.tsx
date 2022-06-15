import{ useState } from 'react'

const Button = () => {
	const [user, setUser] = useState(false);  //声明按钮一个状

	const handleLogin = () => {        	//login with 42
		setUser(true);
	}
	return (
		<div className='div'>
			{/* <h1>PingPong World!</h1> */}
			<button className="box" onClick={handleLogin}>Login with 42</button>
		</div>
	)
}

export default Button