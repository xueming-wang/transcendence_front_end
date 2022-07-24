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
import { useNavigate } from "react-router-dom";
import { PutData } from '../../../global/constants';
import { MyContext } from '../../common/route';

const theme = createTheme();

export default function TwoFa() {
    const navigate = useNavigate()
    const [isLogin, setIsLogin] = React.useContext(MyContext)

    if (isLogin.twofa) {
      if (isLogin.tfactive) navigate('/profile')
    }


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);

      const tf = data.get('twofa')
      
      console.log('tf:', tf)

      // const resp = await PostData('', {?: tf}) // need a API for two factor
      const resp = true

      if (resp) {
        setIsLogin((prev: any) => { // test for twofa, delete when have API
          prev['tfactive'] = true
          return prev
        })
        navigate('/profile')
      }
      else {
        alert('username failed')
      }
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
            Two Factor
          </Typography>

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="twofa"
                  label="twofa"
                  name="twofa"
                  autoComplete="twofa"
                />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Valid</Button>
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


