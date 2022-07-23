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
import TwoFa from "../home/components/twofa";

////创建context
export const MyContext = React.createContext<any>(null);

const RouteStat = () => {
  const [isLogin, setIsLogin] = useContext(MyContext);

  if (isLogin) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/twofa" element={<TwoFa />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<EditPage />} />
          <Route path="/jeu" element={<Jeu />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="*" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
  }
};

const App = () => {

  const checkIsLogin = async (setter: Function) => {
    const resp = await GetData("/api/user/isLogin");
    if (resp) {
      const user = await GetData("/api/user/id");
      user['twofa'] = true // test for twofa, delete when have api
      user['tfauth'] = false // test for twofa, delete when have api
      setter(user)
    }
  }

  const [isLogin, setIsLogin] = useState(null);

  //init user
  useEffect(() => {
    checkIsLogin(setIsLogin).then()
  }, []);


  return (
    <div>
      <MyContext.Provider value={[isLogin, setIsLogin]}>
          <RouteStat />
      </MyContext.Provider>
    </div>
  );
};

export default App;
