import { formGroupClasses } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import "../../common/common.css";
import { API_HOST, API_GET_DATA } from "../../../global/constants"
import Button from '@mui/material/Button';
import BasicPopover from "../components/edit"

// const renderResponse = (res:any) => {
//   if (!res) {
//     console.log(res.status);
//   }
  

// }

//GET 用fetch来通过id数字来获取数据
 const queryParams = 'id=';  //user id 
// const inputField = document.querySelector('#input');
// const signUp = document.querySelector('#signUp');
// const responseField = document.querySelector('#responseField');
async function GetData() {  //括号里setuser
  const endpoint = API_GET_DATA + queryParams //+id  
  try {
    const response = await fetch(endpoint) //???
      if (response.ok) {
        const jsonResponse = await response.json();  //获取数据信息
        //jsonResponse


      }
  } catch (err) {
    console.log(err);
  } 
}

 

const ProfileBox = () => {

  // useEffect( () => {
  //   GetData();  //如果有usestate 参数是setState
  // },[])

  let imagesGif = require("../../common/images.gif");
  return (
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
      <Box
        component="img"
        sx={{ height: 250, width: 250 }}
        alt="The photo from user."
        src={imagesGif}
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
        <Box component="span" sx={{ fontSize: 20 }}>
          user: XX
        </Box>
        <Box component="span" sx={{ fontSize: 20, mt: 2 }}>
          ages: X
        </Box>

        <Box
          component="span"
          sx={{ mt: 3, color: "primary.main", fontSize: 22 }}
        >
          WINS: 10
        </Box>
        <Box
          component="span"
          sx={{ mt: 2, color: "warning.main", fontSize: 22 }}
        >
          LOSES: 10
        </Box>

        <Box
          component="span"
          sx={{ mt: 2, color: "success.main", fontSize: 22 }}
        >
          score: 1200
        </Box>

        <Button key="edit" sx= {{ mt: 2}}>
          <BasicPopover />
        </Button>

      </Box>
    </Box>
  );
};

export default ProfileBox;


