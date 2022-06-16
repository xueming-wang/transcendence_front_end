import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import SvgIcon from '@mui/material/SvgIcon';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ForumSharpIcon from '@mui/icons-material/ForumSharp';
import SportsHandballRoundedIcon from '@mui/icons-material/SportsHandballRounded';
import { MyContext } from '../route';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';


const pages = ['Home', 'profile', 'jeu', 'chat', 'logout'];


const HomeIcon = (props:any) => {
	return (
	  <SvgIcon {...props}>
		<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
	  </SvgIcon>
	);
}

export const CommonBox = () => {
	const [isLogin, setIsLogin] = React.useContext(MyContext)
	const navigate = useNavigate();
	
	const logout = () => {  //logout 处理状态 变成false 转向首页
		setIsLogin(false);
		navigate('/');
	}

	if (isLogin) {
		return (
			<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
				<Button key='profile' >
					<Link className='nav' to={`/${pages[1]}`}> 
						<AssignmentIndIcon fontSize="large"/>
					</Link>
				</Button>
		
				<Button key='jeu' >
					<Link className='nav' to={`/${pages[2]}`}> 
						<SportsHandballRoundedIcon fontSize="large" />
					</Link>
				</Button>
		
				<Button key='chat' >
					<Link className='nav' to={`/${pages[3]}`}> 
						<ForumSharpIcon fontSize="large"/>
					</Link>
				</Button>

				<Button key='logout'onClick={logout}>
					<LogoutIcon  fontSize="medium"/>
				</Button>
			</Box>
			)
	}
	else {
		return (
			<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
				<Button key='home' >
					<Link className='nav' to={`/${pages[0]}`}> 
						<HomeIcon fontSize="large"/>
					</Link>
				</Button>
			</Box>
			)
	}
}

export const ResponsiveAppBar = () => {
  return (
    <AppBar   color='transparent' position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters >
			<img alt="42"  className='logo' src="https://elearning.intra.42.fr/assets/42_logo-7dfc9110a5319a308863b96bda33cea995046d1731cebb735e41b16255106c12.svg" />
          <Typography 
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 10,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: 'rem',
              color: 'inherit',
              textDecoration: 'none',
            }} 
          >
            Ft_transcendence
          </Typography>
			<CommonBox />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

