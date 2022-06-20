import Box from '@mui/material/Box';
import '../../common/common.css';

const ProfileBox =() => {
	let imagesGif = require("../../common/images.gif");
	return (
		
	  <Box className='profil'
		sx={{
		  display: 'flex',
		  flexDirection: { xs: 'column', md: 'row' },
		  alignItems: 'center',
		  bgcolor: 'background.paper',
		  // overflow: 'hidden',
		  borderRadius: '12px',
		  boxShadow: 1,
		  fontWeight: 'bold',
		}}
	  >
	   
		<Box
		  component="img"
		  sx={{ height: 250, width: 250}}
		  alt="The photo from user."
		  src={imagesGif}
		/>
		<Box
		  sx={{
			display: 'flex',
			flexDirection: 'column',
			alignItems: { xs: 'center', md: 'flex-start' },
			m: 3,
			minWidth: { md: 350 },
		  }}
		>
		  <Box component="span" sx={{ fontSize: 20 }}>
			user: XX
		  </Box>
		  <Box component="span" sx={{ fontSize: 20, mt: 2 }}>
			ages: X
		  </Box>
  
		  <Box component="span" sx={{ mt: 3, color: 'primary.main', fontSize: 22 }}>
			WINS: 10
		  </Box>
		  <Box component="span" sx={{ mt: 2, color: 'warning.main', fontSize: 22 }}>
			LOSES: 10
		  </Box>
  
		  <Box component="span" sx={{ mt: 2, color: 'success.main', fontSize: 22 }}>
			score:  1200
		  </Box>
		</Box>
	  </Box>
	);
  }
  

export default ProfileBox