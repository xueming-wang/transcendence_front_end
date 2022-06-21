import { ResponsiveAppBar } from '../home/components/appBar'
import * as React from 'react';
import ProfileBox from './components/profilbox'
import { useState } from 'react';


const Profile = () => {

	//win COUNT 状态
	// const [win, setWin] = useState(0); 
	// const WinPlus = () => {
	// 	setWin( function(prev) {
	// 		return prev + 1;
	// 	})
	// }

	//Loses COUNT 状态
	// const [Loses, setLoses] = useState(0); 
	// const LosesPlus = () => {
	// 	setLoses( function(prev) {
	// 		return prev + 1;
	// 	})
	// }

	//score COUNT 状态
	// const [Score, setScore] = useState(0); 
	// const ScorePlus = () => {
	// 	setScore( function(prev) {
	// 		return prev + 500;
	// 	})
	// }

	return (
	<div>
		<ResponsiveAppBar />
		<ProfileBox />
	</div>
	)
	
}

export default Profile