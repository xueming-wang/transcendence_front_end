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


let img = {
  backgroundImage: `url(${Background})`,
};

export const EditPage = () => {                  //修改页面

	//GET 数据 

 
	//put 更新数据 par name


	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
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
					bgcolor: "background.paper",
					overflow: 'hidden',
					borderRadius: "20px",
					boxShadow: 1,
					fontWeight: "bold",
				}}
			  >
			    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
					<Grid container spacing={20}>
						<Grid item xs={20}>
							<TextField
							required
							fullWidth
							id="entre your New Name"
							label="entre your New Name"
							name="entre your New Name"
							autoComplete="entre your New Name"
							/>
						</Grid>
					</Grid>
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

// export default function BasicPopover() {
//   const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? 'simple-popover' : undefined;

//   return (
//     <div>
//       <Button aria-describedby={id} color="inherit" variant="contained" onClick={handleClick}>
//         <EditIcon></EditIcon>settings
//       </Button>
//       <Popover
//         id={id}
//         open={open}
//         anchorEl={anchorEl}
//         onClose={handleClose}
//         anchorOrigin={{
//           vertical: 'bottom',
//           horizontal: 'left',
//         }}
//       >
//          <Typography sx={{ p: 20 }}>
//           The content of the Popover.
//          </Typography> 
//       </Popover>
//     </div>
//   );
// }
