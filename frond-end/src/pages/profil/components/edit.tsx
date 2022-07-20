import * as React from 'react';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/ModeEdit';
import { useNavigate } from "react-router-dom";
import { ResponsiveAppBar } from "../../home/components/appBar"
import Background from "../../common/pp2.gif";
import Fab from '@mui/material/Fab';
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from "react";
import { API_HOST } from "../../../global/constants"
import { GetData } from "../../../global/constants";
import { margin } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
  

//GET 数据
export const EditPage = () => {                  //修改页面
	// const data:any = GetData();
	//
	// let img = {
	// 	backgroundImage: `url(${Background})`,
	// };
	//
	// let imagesGif = require("../../common/images.gif");  //exemple
	//
	// const[editImg, setImg] = useState(data.img);
	// const[username, setUsername] = useState(data.username);
	//
	// const onImageChange = (e:any) => {
	// 	const [file] = e.target.files;
	// 	setImg(URL.createObjectURL(file));
	// };
	// 		//**blob to dataURL**
	//
	// const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
	// 	event.preventDefault();
	// 	const newdata = new FormData(event.currentTarget);
	// 	const newimg =  newdata.get('imgtest');
	// 	const newname =  newdata.get('username');
	//
	// 	console.log('here:', newdata.get('imgtest'));
	// 	console.log('here2:', newdata.get('username'));
	//
	// 	// const dataToPost = user;
	// 	// dataToPost['username'] = data.get('username');
	// 	PutData(newdata);
	// 	//put 更新数据 par name
	//
	// 	// const imgDataUrl = readAsDataURL(newimg)
	// };
	//
	//
	// //**blob to dataURL**
	// // function blobToDataURL(blob:any, callback:any) {
	// // 	var a = new FileReader();
	// // 	a.onload = (e) => {
	// // 		callback(e.target.result);
	// // 	}
	// // 	a.readAsDataURL(blob);
	// // }
	//
	// return (
	// 	<div className="image" style={img}>
	// 	 	<ResponsiveAppBar />
	// 		 <Box
	// 			className="profil"
	// 			sx={{
	// 				display: "flex",
	// 				flexDirection: { xs: "column", md: "row" },
	// 				alignItems: "center",
	// 				overflow: 'hidden',
	// 				borderRadius: "20px",
	// 				boxShadow: 1,
	// 				fontWeight: "bold",
	// 			}}>
	// 			<Box component="form" noValidate onSubmit={handleSubmit}  >
	// 				<Box>
	// 				<img src={editImg} height='200' width='200' alt="The photo from user."/>
	//
	// 				<input
	// 					className='cImg'
	// 					onChange={onImageChange}
	// 					type='file'
	// 					name='imgtest'
	// 					id='imgtest'
	// 					accept='image/jpeg'
	// 				/>
	// 				</Box>
	// 				{/* <IconButton color="primary" aria-label="upload picture" component="label">
	// 					<Box
	// 						onChange={onImageChange}
	// 						component="img"
	// 						sx={{ height: 200, width: 200 }}
	// 						alt="The photo from user."
	// 						src={editImg}
	// 					/>
	// 					<input hidden accept="image/*" type="file" />
	// 					<PhotoCamera />
	// 				</IconButton> */}
	//
	// 				<TextField className='newName'
	// 					required
	// 					id="username"
	// 					label="enter your New Name"
	// 					name="username"
	// 					autoComplete="username"
	// 				/>
	//
	// 			   <Button  type="submit" className='editvalide' >valide</Button>
	// 			</Box>
	// 		</Box>
	// 	</div>
	// )

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