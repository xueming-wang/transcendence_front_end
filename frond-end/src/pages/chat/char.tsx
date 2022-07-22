import { ResponsiveAppBar } from "../home/components/appBar";
import Background from "../common/pp2.gif";
import { GetData } from "../../global/constants";
import { useEffect, useState } from "react";

let img = {
  backgroundImage: `url(${Background})`,
};
// implements

const Chat = () => {
  async function getAllUser(setter: Function) {
    const u = await GetData("/api/user/")
     setter((prev: any) => {
       prev = [...u]
       return prev
     })
  }

  const [u, setU] = useState([])

  useEffect(() => {
    getAllUser(setU).then()
  }, [])

  return (
    <div className="image" style={img}>
      <ResponsiveAppBar />
      <ul>
        {
          u.map((item: any) => {
            return (
              <li key={item.id}>
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
