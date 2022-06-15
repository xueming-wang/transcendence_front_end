import './home.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Home from './home'
import Profile from '../profil/profil';
import Jeu from '../jeu/jeu';
import Chat from '../chat/char';
import SignUp from './components/signup';
import { Button } from '@mui/material';

const App = () => {
	const NotFound = () => {
		return <div>can t find page !!!!!!!!</div>
	}
	
	return (
		<BrowserRouter>
			<Routes>
				<Route path="" element={<Home />} />
				<Route path="/Home" element={<Home />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/jeu" element={<Jeu />} />
				<Route path="/chat" element={<Chat />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}




export default App;