import Box from "@mui/material/Box";
import { useEffect } from "react";
import "../../common/common.css";
import Button from '@mui/material/Button';
import BasicPopover from "../components/edit";
import { GetData } from "../../../global/constants";


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

  const data:any = GetData("/api/user/id");
  console.log(data);

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
        src={data.fortyTwoAvatar}
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
          user: {data.login}
        </Box>
        
        <Box component="span" sx={{ fontSize: 20, mt: 2 }}>
          Email: {data.email}
        </Box>
  
        <Box
          component="span"
          sx={{ mt: 3, color: "primary.main", fontSize: 20 }}
        >
          WINS: {data.wins}
        </Box>
        <Box
          component="span"
          sx={{ mt: 2, color: "warning.main", fontSize: 20 }}
        >
          LOSES: {data.loses}
        </Box>
  
        <Box
          component="span"
          sx={{ mt: 2, color: "success.main", fontSize: 20 }}
        >
          score: {data.score}
        </Box>
  
        <Button key="edit" sx= {{ mt: 2}}>
          <BasicPopover />
        </Button>
  
      </Box>
    </Box>
  );
};

export default ProfileBox;


