import { ResponsiveAppBar } from "../home/components/appBar";
import * as React from "react";
import ProfileBox from "./components/profilbox";
import { useState } from "react";
import Background from "../common/pp2.gif";
import { GetData } from "../../global/constants"
import { MyContext } from "../common/route";
import { useNavigate } from "react-router-dom";
//useEffect 当你想在什么条件下要变化什么样子的时候使用

let img = {
  backgroundImage: `url(${Background})`,
};

const Profile = () => {

  // const data:any = GetData();
  // console.log(data);
  
//   const [win, setWin] = useState(0);  //win 数量
//   // const WinPlus = () => {
//   // 	setWin((prev) => {
//   // 		return prev + 1;
//   // 	})
//   // }
//   const [Loses, setLoses] = useState(0);  //lose 数量
//   // const LosesPlus = () => {
//   // 	setLoses( function(prev) {
//   // 		return prev + 1;
//   // 	})
//   // }
//   const [Score, setScore] = useState(0);  //socre 分数
  // const ScorePlus = () => {
  // 	setScore( function(prev) {
  // 		return prev + 500;
  // 	})
  // }

  return (
    <div className="image" style={img}>
      <ResponsiveAppBar />
      <ProfileBox  />
    </div>
  );
};

export default Profile;



//useEffect()的作用就是指定一个副效应函数，组件每渲染一次，该函数就自动执行一次。组件首次在网页 DOM 加载后，副效应函数也会执行。