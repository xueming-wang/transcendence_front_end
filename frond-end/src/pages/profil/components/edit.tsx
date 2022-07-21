import * as React from 'react';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/ModeEdit';
import { useNavigate } from "react-router-dom";
import { ResponsiveAppBar } from "../../home/components/appBar"
import Background from "../../common/pp2.gif";
import Fab from '@mui/material/Fab';
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { GetData } from "../../../global/constants";
import { PutData } from '../../../global/constants';

  

//GET 数据
export const EditPage = () => {                  //修改页面
	const data:any = GetData("/api/user/id");
	
	let img = {
		backgroundImage: `url(${Background})`,
	};
	
	let imagesGif = require("../../common/images.gif");  //exemple
	
	const[editImg, setImg] = useState(data.Avatar);
	const[name, setname] = useState(data.name);
	
	const onImageChange = (e:any) => {
		const [file] = e.target.files;
		setImg(URL.createObjectURL(file));
	};
			//**blob to dataURL**
	
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const newdata = new FormData(event.currentTarget);
		const newimg =  newdata.get('imgtest');
		const newname =  newdata.get('name');
	
		console.log('here:', newdata.get('imgtest'));
		console.log('here2:', newdata.get('name'));
	
		// const dataToPost = user;
		// dataToPost['name'] = data.get('name');
		PutData("/api/user/id", newdata);
		//put 更新数据 par name
	
		// const imgDataUrl = readAsDataURL(newimg)
	};
	
	
	//**blob to dataURL**
	// function blobToDataURL(blob:any, callback:any) {
	// 	var a = new FileReader();
	// 	a.onload = (e) => {
	// 		callback(e.target.result);
	// 	}
	// 	a.readAsDataURL(blob);
	// }
	
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
				<Box component="form" noValidate onSubmit={handleSubmit}  >
					<Box>
					<img src={editImg} height='200' width='200' alt="The photo from user."/>
	
					<input
						className='cImg'
						onChange={onImageChange}
						type='file'
						name='imgtest'
						id='imgtest'
						accept='image/jpeg'
					/>
					</Box>
					{/* <IconButton color="primary" aria-label="upload picture" component="label">
						<Box
							onChange={onImageChange}
							component="img"
							sx={{ height: 200, width: 200 }}
							alt="The photo from user."
							src={editImg}
						/>
						<input hidden accept="image/*" type="file" />
						<PhotoCamera />
					</IconButton> */}
	
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