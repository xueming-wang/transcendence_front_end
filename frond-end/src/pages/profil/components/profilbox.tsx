import { formGroupClasses } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import "../../common/common.css";
import { API_HOST, API_GET_DATA } from "../../../global/constants"
import Button from '@mui/material/Button';
import BasicPopover from "../components/edit";
import { GetData } from "../../../global/constants";
import { red } from "@mui/material/colors";
import { reduceEachTrailingCommentRange } from "typescript";


  //GET 用fetch来通过id数字来获取数据
// const queryParams = 'username=';  //

// async function GetData() {  //括号里setuser
//   const endpoint = API_GET_DATA + queryParams // + username
//   try {
//     const response = await fetch(endpoint) //???
//       if (response.ok) {
//         return await response.json();  //获取数据信息
//       }
//       throw new Error('Request failed!');
//   } catch (err) {
//     console.log(err);
//   } 
// }

const ProfileBox = () => {

  const data:any = GetData();
  console.log(data);

   let imagesGif = require("../../common/images.gif");
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
        src={data.img}
        // src={imagesGif}
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
          user: {data.username}
        </Box>

        <Box component="span" sx={{ fontSize: 20, mt: 2 }}>
          Email: {data.Email}
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


