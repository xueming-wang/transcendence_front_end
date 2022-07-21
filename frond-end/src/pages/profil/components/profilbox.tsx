import Box from "@mui/material/Box";
import { useContext, useEffect, useState } from "react";
import "../../common/common.css";
import Button from '@mui/material/Button';
import BasicPopover from "../components/edit";
import { MyContext } from "../../common/route";


/*avatar: ""
created: "2022-07-21T14:03:48.494Z"
email: "xuwang@student.42.fr"
fortyTwoAvatar: "https://cdn.intra.42.fr/users/xuwang.jpg"
id: "83719"
login: "xuwang"
name: ""
online: 1
*/

const ProfileBox = () => {

  const [isLogin, setIsLogin] = useContext(MyContext)
  
  return (
    <Box
      className="profil"
      sx={{
         display: "flex",
         flexDirection: { xs: "column", md: "row"},
         alignItems: "center",
         overflow: 'hidden',
         borderRadius: "20px",
         boxShadow: 1,
         fontWeight: "bold",
      }}
    >
      <Box
        component="img"
        sx={{ height: 250, width: 250 }}
        alt="The photo from user."
        src={isLogin.avatar ? isLogin.avator: isLogin.fortyTwoAvatar}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
          m: 3,
          minWidth: { md: 350 },
        }}
      >
        <Box component="span" sx={{ fontSize: 23, mt: 2 }}>
          user: {isLogin.name}
        </Box>
        
        <Box component="span" sx={{ fontSize: 20, mt: 2 }}>
          Email: {isLogin.email}
        </Box>
  
        <Box
          component="span"
          sx={{ mt: 3, color: "primary.main", fontSize: 20 }}
        >
          WINS: {isLogin.wins}
        </Box>
        <Box
          component="span"
          sx={{ mt: 2, color: "warning.main", fontSize: 20 }}
        >
          LOSES: {isLogin.loses}
        </Box>
  
        <Box
          component="span"
          sx={{ mt: 2, color: "success.main", fontSize: 20 }}
        >
          score: {isLogin.score}
        </Box>
      
        <Button key="edit" sx= {{ mt: 2}} />
          <BasicPopover />
       
       
  
      </Box>
    </Box>
  );
};

export default ProfileBox;


