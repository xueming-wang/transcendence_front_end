import { useLocation, useNavigate } from "react-router-dom";
import { ResponsiveAppBar } from "../home/components/appBar";
import Background from "../common/pp2.gif";
import { useContext, useEffect } from "react";
import { MyContext } from "../common/route";


let img = {
  backgroundImage: `url(${Background})`,
};

const Jeu = () => {
  const [isLogin] = useContext(MyContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLogin.name) {
      navigate('/signup')
      return
    }
    if (isLogin.twofa) {
      if (!isLogin.tfactive) navigate('/twofa')
    }
  }, [])

  return (
    <div  className="image" style={img}>
      <ResponsiveAppBar />
      <div>this is page jeu </div>
    </div>
  );
};

export default Jeu;
