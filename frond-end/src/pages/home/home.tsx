import{ useState, useContext } from 'react'
import '../common/common.css'
import {ResponsiveAppBar} from './components/appBar'
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../common/route';
import Background from '../common/pingpong.png';


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

var sectionStyle = {
	width: "100%",
	height: "800px",
  // makesure here is String确保这里是一个字符串，以下是es6写法
	backgroundImage: `url(${Background})` 
};
  

const Home =() => {

	return <div style={sectionStyle} >
			<ResponsiveAppBar />
				{/* <img src={loadingGif} className='gif' /> */}
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


