import Box from "@mui/material/Box";
import { useContext, useEffect, useState } from "react";
import "../../common/common.css";
import Button from '@mui/material/Button';
import BasicPopover from "../components/edit";
import { MyContext } from "../../common/route";
import { margin } from "@mui/system";

const ProfileBox = () => {

  const [isLogin, setIsLogin] = useContext(MyContext)
  const [active, setActive] = useState('two-factor OFF')

 
  const clickActive = () => {
    const newState = active == 'two-factor OFF' ? 'two-factor ON' : 'two-factor OFF';
    setActive(newState);
  }

  const ShowQR = () => {
    
    if (active ==='two-factor OFF') {
      return <img height='100' width='100' src="" alt="aaaaa" />  //two fa
    }
    return null
  }

  return (
    <Box
      className="profil"
      sx={{
         display: "flex",
         flexDirection:  "row",
         alignItems: "self-start",
         overflow: 'hidden',
         borderRadius: "20px",
         boxShadow: 1,
         fontWeight: "bold",
      }} >
    
      <img  height='250' width='250' className="profilimg"
        alt="The photo from user."
        src={isLogin.avatar ? isLogin.avator: isLogin.fortyTwoAvatar}/>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
          m: 4,
          minWidth: { md: 350 } }} >

        <Box component="span" sx={{ fontSize: 25, mt: 4 }}>
          USER: {isLogin.name}
        </Box>

        <Box component="span" sx={{ fontSize: 25, mt: 4 }}>
            STATUS: {isLogin.online ? "online": "offline"}
        </Box>

        <Box component="span" sx={{ fontSize: 25, mt: 4 }}>
          EMAIL: {isLogin.email}
        </Box>
  
        <Box
          component="span"
          sx={{ mt: 3, color: "primary.main", fontSize: 25 }}>
          WINS: {isLogin.wins}
        </Box>

        <Box
          component="span"
          sx={{ mt: 3, color: "warning.main", fontSize: 25 }}>
          LOSES: {isLogin.loses}
        </Box>
  
        <Box
          component="span"
          sx={{ mt: 3, color: "success.main", fontSize:25 }}>
          SCORE: {isLogin.score}  
        </Box>

        <Button className="edit">
          <BasicPopover  />
            <b  className="buttonedit">Edit profile</b>
        </Button>

       
        <Button  variant="outlined"  onClick={clickActive}>{active}</Button>
        <div  className="twofa">
            <ShowQR />
        </div>

      </Box>
    </Box>
  );
};

export default ProfileBox;


