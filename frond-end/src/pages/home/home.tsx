import { useState, useContext, useEffect } from "react";
import "../common/common.css";
import { ResponsiveAppBar } from "./components/appBar";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../common/route";
import Edit from "../common/pp2.gif";
import { GetData } from "../../global/constants";

const HanldleButton = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useContext(MyContext);

  const handleLoginClick = async () => {
    setIsLogin(true)
    navigate('/signup')
    //按login 时候处理
    // setIsLogin(await GetData());
    
    // if (isLogin === null) {
    // // send request to back -> get TOKEN/SESSION
    // // -> if get token and User don't have username
    // // navigate to signup page else to '/'/'home'
    // // -> if not get token or login failed
    // // navigate to '/login'
    //   navigate("/signin");
    //   return
    // }

    // if (!isLogin.username)
    //   navigate('/signup')
    // else 
    //   navigate("/profile");
  };

  return (
    <div className="div">
        <button className="box" onClick={handleLoginClick}>
          inscription
        </button>
        <button className="box" onClick={handleLoginClick}>
          Login with 42
        </button>
    </div>
  );
};

let sectionStyle = {
  backgroundImage: `url(${Edit})`,
};

const Home = () => {

  // useEffect(() => {
  //   console.log("!!!!!!!!!!!!!");
  // },);


  return (
    <div className="image" style={sectionStyle}>
      <ResponsiveAppBar />
      <div id="welcome">
        <h1>WELCOME !!! GAME PONG </h1>
      </div>
      <HanldleButton />
    </div>
  );
};



export default Home;

