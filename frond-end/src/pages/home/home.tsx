import{ useState, useContext } from 'react'
import './home.css'
import {ResponsiveAppBar} from './components/appBar'
import { useNavigate } from 'react-router-dom';
import { MyContext } from './route';

const HanldleButton = () => {
	const navigate = useNavigate();
	const [isLogin, setIsLogin] = useContext(MyContext);

	const handleLoginClick = () => {                     //按login 时候处理
		setIsLogin(true);
    	navigate('/signup');
	}

	return (
		<div className='div'>
			{<button className="box" onClick={handleLoginClick}>Login with 42</button>}
		</div>
	)
}

const Home =() => {
  return <div>
      <ResponsiveAppBar />
      <HanldleButton />
    </div>
}
export default Home

//Handling clicks


// //注销和登录按钮：
// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   );
// }

// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   );
// }
//<Button href="#text-buttons">Link</Button> 链接


