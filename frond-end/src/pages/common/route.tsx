import "./common.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../home/home";
import Profile from "../profil/profil";
import Jeu from "../jeu/jeu";
import Chat from "../chat/char";
import SignUp from "../home/components/signup";
import React, { useContext, useEffect, useState } from "react";
import { EditPage } from "../profil/components/edit";
import { GetData } from "../../global/constants";
import { useNavigate } from "react-router-dom";


////创建context
export const MyContext = React.createContext<any>(null);

const RouteStat = () => {
  const [isLogin] = useContext(MyContext);

  if (isLogin) {
    return (
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Profile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<EditPage />} />
        <Route path="/jeu" element={<Jeu />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="*" element={<Home />} />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    );
  }
};




const App = () => {

  const checkIsLogin = async (setter: Function) => {
    const resp = await GetData("/api/user/isLogin");
    if (resp) {
      const user = await GetData("/api/user/id");
      console.log(user);
      setter(user)
    }
  }

  const [isLogin, setIsLogin] = useState(null);

  useEffect(() => {
    checkIsLogin(setIsLogin).then()
  }, []);

  // const navigate = useNavigate();
  // const user: any = isLogin
  // if (!user.name) {
  //   navigate("/signup")
  // }

  return (
    <div>
      <MyContext.Provider value={[isLogin, setIsLogin]}>
        <BrowserRouter>
          <RouteStat />
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
};

export default App;
