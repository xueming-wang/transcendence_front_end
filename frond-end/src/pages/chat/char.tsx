import { ResponsiveAppBar } from "../home/components/appBar";
import Background from "../common/pp2.gif";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { DataGrid } from '@mui/x-data-grid';
import { GetData } from "../../global/constants";
import { useEffect, useState } from "react";
// import { PostData } from "../../global/constants";

let img = {
  backgroundImage: `url(${Background})`,
};
// implements

const Chat = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newdata = new FormData(event.currentTarget);
    const searchname = newdata.get('searchname');

    console.log('!!!!!!!!!: ', {searchname});
    // PostData(searchname);
  }

  async function getA(f: Function) {
     f(await GetData("/api/user/"))
  }

  const [u, setU] = useState(null)

  useEffect(() => {
    getA(setU)
  }, [])

  const users = u;

  console.log('allU:', users);

  return (
    <div className="image" style={img}>
      <ResponsiveAppBar />
      <div></>user: {isLogin.name}
    </div>
  );
};

export default Chat;
