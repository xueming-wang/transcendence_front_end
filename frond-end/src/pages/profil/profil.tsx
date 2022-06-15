import { ResponsiveAppBar } from '../home/components/appBar'
import{ useState } from 'react'
import  Button from '../home/components/button'

const Profile = () => {
	let isLogin = false; 
	const[state, setState] = useState(isLogin);
	
	return	<div>
				<ResponsiveAppBar />
				 <div>page profile</div>
			</div>

}

export default Profile