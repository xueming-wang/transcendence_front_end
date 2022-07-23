import { ResponsiveAppBar } from "../home/components/appBar";
import Background from "../common/pp2.gif";
import { GetData } from "../../global/constants";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../common/route";
import { useNavigate } from "react-router";

let img = {
  backgroundImage: `url(${Background})`,
};

const Chat = () => {
  const [isLogin] = useContext(MyContext)
  const navigate = useNavigate()

  async function getAllUser(setter: Function) {
    const u = await GetData("/api/user/")
     setter((prev: any) => {
       prev = [...u]
       return prev
     })
  }


  const [u, setU] = useState([])

  useEffect(() => {
    if (!isLogin.name) {
      navigate('/signup')
      return
    }
    if (isLogin.twofa) {
      if (!isLogin.tfactive) navigate('/twofa')
    }
    getAllUser(setU).then()
  }, [])


  return (
    <div className="image" style={img}>
      <ResponsiveAppBar />
      <ul>
        {
          u.map((item: any) => {
            console.log(item);  //users
            return (   
              <li key={item.id}>
                {/*  <span>{item.name}</span>  this is username*/}  
                <span>{item.name}</span>   
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default Chat;
