import * as React from 'react';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/ModeEdit';
import { Navigate, useNavigate } from "react-router-dom";
import { ResponsiveAppBar } from "../../home/components/appBar"
import Background from "../../common/pp2.gif";
import Fab from '@mui/material/Fab';
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { GetData } from "../../../global/constants";
import { PutData } from '../../../global/constants';
import { useContext } from 'react';
import { MyContext } from '../../common/route';

let img = {
	backgroundImage: `url(${Background})`,
  };
//GET 数据
export const EditPage = () => {                  //修改页面

	const [isLogin, setIsLogin] = useContext(MyContext)
	const navigate = useNavigate()
	
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const newdata = new FormData(event.currentTarget);
		// const newimg =  newdata.get('avatar');
		const newname =  newdata.get('name');
	
		// console.log('here:', newdata.get('avatar'));
		console.log('here2:', newdata.get('name'));
	
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


	return (
		<div className="image" style={img}>
		 	<ResponsiveAppBar />
			 <Box
				className="profil"
				sx={{
					display: "flex",
					flexDirection: { xs: "column", md: "row" },
					alignItems: "center",
					overflow: 'hidden',
					borderRadius: "20px",
					boxShadow: 1,
					fontWeight: "bold",
				}}>
				<Box component="form" noValidate onSubmit={handleSubmit}>
					<img 
						 src={isLogin.avatar ? isLogin.avator: isLogin.fortyTwoAvatar}
						 height='200' width='200' alt="The photo from user."/>

					<input
						type="file"
						name='avatar'
						id='avatar'
						accept='image/jpeg'
					/>
	
					<TextField className='newName'
						required
						id="name"
						label="enter your New Name"
						name="name"
						autoComplete="name"
					/>
	
				   <Button  type="submit" className='editvalide' >valide</Button>
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