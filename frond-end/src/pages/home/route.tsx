import './home.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './home'
import Profile from '../profil/profil';
import Jeu from '../jeu/jeu';
import Chat from '../chat/char';
import SignUp from './components/signup';
import React,{useContext, useEffect, useState}  from 'react';


////创建context
export const MyContext = React.createContext<any>(null);

const RouteStat = () => {
	const [isLogin] = useContext(MyContext)

	if (isLogin) {
		return (
			<Routes>
				<Route path="/" element={<Profile />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/jeu" element={<Jeu />} />
				<Route path="/chat" element={<Chat />} />
				<Route path="*" element={<Home />} />
			</Routes>
		)
	}
	else {
		return (
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Home" element={<Home />} />
				<Route path="*" element={<Home />} />
			</Routes>
		)
	}
}

const App = () => {
	const [isLogin, setIsLogin] = useState(false)

	useEffect(() => {
		setIsLogin(true)
	}, [])

	return (
	<MyContext.Provider value={[isLogin, setIsLogin]}>
		<BrowserRouter>
			<RouteStat />
		</BrowserRouter>
	  </MyContext.Provider>
	)
}




export default App;
