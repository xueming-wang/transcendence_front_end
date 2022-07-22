import { useLocation } from "react-router-dom";
import { ResponsiveAppBar } from "../home/components/appBar";
import Background from "../common/pp2.gif";


let img = {
  backgroundImage: `url(${Background})`,
};

const Jeu = () => {
  return (
    <div  className="image" style={img}>
      <ResponsiveAppBar />
      <div>this is page jeu </div>
    </div>
  );
};

export default Jeu;
