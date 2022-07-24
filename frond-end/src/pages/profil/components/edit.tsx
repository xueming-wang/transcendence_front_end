import * as React from 'react';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/ModeEdit';
import { Navigate, useNavigate } from "react-router-dom";
import { ResponsiveAppBar } from "../../home/components/appBar"
import Background from "../../common/pp2.gif";
import Fab from '@mui/material/Fab';
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import { PutData } from '../../../global/constants';
import { useContext , useState} from 'react';
import { MyContext } from '../../common/route';

let img = {
	backgroundImage: `url(${Background})`,
  };
//GET 数据
export const EditPage = () => {                  //修改页面

	const [isLogin, setIsLogin] = useContext(MyContext)
	const [avatar, setAvatar] = useState(isLogin.avatar ? isLogin.avator: isLogin.fortyTwoAvatar)

	const navigate = useNavigate()
  
	React.useEffect(() => {
		if (!isLogin.name) {
		  navigate('/signup')
		  return
		}
		if (isLogin.twofa) {
		  if (!isLogin.tfactive) navigate('/twofa')
		}
	  }, [])
	
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const newdata = new FormData(event.currentTarget);

		const newimg =  newdata.get('avatar');
		const newname =  newdata.get('name');
		console.log('here2:', newdata.get('name'));
		console.log('here:', newdata.get('avatar'));
		

		if(newname !== '' && checkName(newname) === 0 ) {
			return ;
		}
		// PutData("/api/user/id", newdata);
		const res = PutData("/api/user/update", {name: newname});

		const handleChange = (newname: any) => {
			setIsLogin((prev:any) => {
				if (newname)
					prev.name = newname
				return prev
			});
		};

		if (res != null) {
			handleChange(newname)
			navigate('/profile')
		}
		else alert('Update fail')
	};

	const checkName = (newname:any) => {
		let i = newname.length;
	
		var isletter = /^[a-zA-Z]{6,16}$/.test(newname);
		if (isletter === false) {
			alert('username must be a lettre and long is 6~16')
			return 0;
		}
	}


	const handleImg = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files != null) {
			const file = e.target.files[0];
			setAvatar(URL.createObjectURL(file));
		}
	}

	return (
		<div className="image" style={img}>
		 	<ResponsiveAppBar />
			 <Box
				className="profil"
				sx={{
					display: "flex",
					flexDirection: "row",
					// alignItems: "self-start",
					overflow: 'hidden',
					borderRadius: "20px",
					boxShadow: 1,
					fontWeight: "bold",
				 }} >

				<Box component="form" noValidate onSubmit={handleSubmit}>
				
					<img src={avatar}
							height='250' width='250' className="editimg"
							alt="The photo from user."/>
					<Button className='upload' color="secondary" variant="outlined" component="label">
						Upload
						<input 
							hidden   //隐藏
							onChange={handleImg}
							type="file"
							name='avatar'
							id='avatar'
							accept='image/jpeg'
						/>
					</Button>

					<TextField className='newName'
							required
							id="name"
							label="enter your New Name"
							name="name"
					/>
					<Button  variant="contained" color="success" type="submit" className='editvalide' >valide</Button>
				</Box>
			</Box>
		</div>
	)

}


const Edit = () => {
	const navigate = useNavigate();

	const handleSettings = () => {
		navigate("/profile/edit");
	}

	return (
		<div>
			<Fab color="secondary" aria-label="edit" onClick={handleSettings} >
				<EditIcon></EditIcon>
			</Fab>
		</div>
	)
}


export default Edit;