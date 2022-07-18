import { ResponsiveAppBar } from "../home/components/appBar";
import Background from "../common/pp2.gif";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { DataGrid } from '@mui/x-data-grid';
import { PostData } from "../../global/constants";

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
    PostData(searchname);

  }



  return (
    <div className="image" style={img}>
      <ResponsiveAppBar />
      <form onSubmit={handleSubmit}>
          <Grid container >
                <Grid className="search" >
                  <TextField
                    required
                    fullWidth
                    id="searchname"
                    label="Enter the search name"
                    name="searchname"
                    autoComplete="searchname"
                  /> 
                </Grid>
            </Grid>
        {/* /* <label>Enter the search name!
          <input type='text' name="searchname" id='searchname' className="search"/>
        </label>*/}
        <button type="submit" className='searchbutton'>search</button>
      </form>
    </div>
  );
};

export default Chat;
