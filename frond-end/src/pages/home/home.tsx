import{ useState } from 'react'
import Button  from "./components/button"
import './home.css'
import DeleteIcon from '@mui/icons-material/Delete';
import {ResponsiveAppBar} from './components/appBar'
import App from './route'



const Home =() => {
  return <div>
      <ResponsiveAppBar />
      <Button />
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


