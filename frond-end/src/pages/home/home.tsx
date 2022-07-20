import { useState, useContext, useEffect } from "react";
import "../common/common.css";
import { ResponsiveAppBar } from "./components/appBar";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../common/route";
import Edit from "../common/pp2.gif";

export const API_HOST = "http://localhost:3000/api"

function ftLogin() {
  window.location.href = `${API_HOST}/user/auth/42/login`;
}

const HandleButton = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useContext(MyContext);

  const handleLoginClick = async () => {
    ftLogin()
  }

  return (
    <div className="div">
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
  return (
    <div className="image" style={sectionStyle}>
      <ResponsiveAppBar />
      <div id="welcome">
        <h1>WELCOME !!! GAME PONG </h1>
      </div>
      <HandleButton />
    </div>
  );
};



export default Home;

