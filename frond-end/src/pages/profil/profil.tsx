import { ResponsiveAppBar } from "../home/components/appBar";
import ProfileBox from "./components/profilbox";
import Background from "../common/pp2.gif";


let img = {
  backgroundImage: `url(${Background})`,
};

const Profile = () => {

  return (
    <div className="image" style={img}>
      <ResponsiveAppBar />
      <ProfileBox  />
    </div>
  );
};

export default Profile;


//useEffect 当你想在什么条件下要变化什么样子的时候使用
//useEffect()的作用就是指定一个副效应函数，组件每渲染一次，该函数就自动执行一次。组件首次在网页 DOM 加载后，副效应函数也会执行。