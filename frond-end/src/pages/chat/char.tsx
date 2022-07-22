import { ResponsiveAppBar } from "../home/components/appBar";
import Background from "../common/pp2.gif";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { DataGrid } from '@mui/x-data-grid';
import { GetData } from "../../global/constants";
import { MyContext } from "../common/route";
import { useContext, useEffect, useState } from "react";


let img = {
  backgroundImage: `url(${Background})`,
};
// implements

const Chat = () => {

  const [isLogin, setIsLogin] = useContext(MyContext)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newdata = new FormData(event.currentTarget);
  
  }
  console.log('allU:', isLogin);

  return (
    <div className="image" style={img}>
      <ResponsiveAppBar />
      {/* <div>user:{u}</div> */}
    </div>
  );
};

export default Chat;
