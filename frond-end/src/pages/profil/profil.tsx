import { ResponsiveAppBar } from '../home/components/appBar'
import{ useContext, useState } from 'react'
import { MyContext } from '../home/route';
import {Routes, Route, useNavigate} from 'react-router-dom';



const Profile = () => {
	return (
	<div>
		<ResponsiveAppBar />
		<div>page profile</div>
	</div>
	)
	
}

export default Profile