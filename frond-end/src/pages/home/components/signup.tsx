import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

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
                  id="UserName"
                  label="UserNames"
                  name="UserName"
                  autoComplete="UserName"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
				          required
                  fullWidth
                  name="ages"
                  label="ages"
                  type="ages"
                  id="ages"
                  autoComplete="ages"
                />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Sign Up</Button>
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
