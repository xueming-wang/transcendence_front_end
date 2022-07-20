import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container, { containerClasses } from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { PostData , user, creeruser, typeuser} from '../../../global/constants';
import { useNavigate } from "react-router-dom";

const theme = createTheme();


export default function SignUp() {

    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const newuser = creeruser;
    newuser['pseudo'] = data.get('pseudo');  //check long 5-15
    newuser['password'] = data.get('password');   //check long 5-15
    newuser['password2'] = data.get('password2');
   
    console.log(newuser.pseudo);  
    console.log(": PASSWORD", newuser.password); 
    console.log(": PASSWORD2", newuser.password2);
    
    if (checkData(newuser) === 1) {
    //转换填进去的内容
    console.log(newuser);
    // console.log("is not returun!!!!!!!!")

    const postuser = user;
    postuser.pseudo = newuser.pseudo; 
    postuser.password = newuser.password;

    console.log(postuser);
    //post to backend
    PostData( postuser );
    navigate('/profile');
    }
     
  };

  const checkData = (str:typeuser) => {
    let i = str.pseudo.length;
    let j = str.password.length;
    let k = str.password2.length;

    if(i < 5 || i > 15){
        alert('username long must be 5~15')
        return 0;
    }
    else if ((j < 5 || j > 15) || ( k< 5 || k > 15) ){
        alert('password long must be 5~15')
        return 0;
    }
    else if (str.password !== str.password2){
        alert('confime password is not same as first')
        return 0;
    }
    else  {
      alert(' SignUp Success');
      return 1;
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{ marginTop: 8,display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="pseudo"
                  label="Username"
                  name="pseudo"
                  autoComplete="pseudo"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
				          required
                  fullWidth
                  name="password"
                  label="Password"
                  id="password"
                  autoComplete="password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
				          required
                  fullWidth
                  name="password2"
                  label="confirme password"
                  type="password2"
                  id="password2"
                  autoComplete="password2"
                />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign Up</Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}



// const theme = createTheme();

// const SignUp = () => {

// return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{ marginTop: 8,display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign up
//           </Typography>

//           <Box>
//             <p>userName: </p>
//             <input type="text" className='signup'></input>
//             <p>ages: </p>
//             <input type="test" className='signup'></input>
//             <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >Sign Up</Button>
//           </Box>

//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// }


// export default SignUp
