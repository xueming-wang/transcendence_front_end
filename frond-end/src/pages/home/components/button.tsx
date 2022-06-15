import{ useState } from 'react'
import SignUp from './signup'
import {Routes, Route, useNavigate} from 'react-router-dom';



const HanldleButton = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState(false);  //声明按钮一个状

	const handleLoginClick = () => {                     //按login 时候处理
		setUser(true);
	}
	const chandleLogoutClick = () => {                   //按logout 时候出来
		setUser(false);
	}
	const navigateToContacts = () => {
		// 👇️ navigate to /contacts
		navigate('/signup');
	};
	return (
		<div className='div'>
			<button className="box" onClick={navigateToContacts}>Login with 42</button>
		</div>
	)
}

export default HanldleButton