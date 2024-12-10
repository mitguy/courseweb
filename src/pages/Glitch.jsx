import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Main from "../components/Main.jsx";
import Content from "../components/Content.jsx";
import Header from "../components/Header.jsx";
import User from "../pages/User.jsx";

export default function Glitch() {
  const [cookie] = useCookies(['glitch']);
  const [data, setData] = useState([]);
  const [imageSrc, setImageSrc] = useState("");

  const GET = async (url) => {
    return await fetch(url, {
      method: "GET",
      headers: { "Authorization": `Bearer ${cookie.glitch}` },
    }).then((res) => res.json()).then((body) => setData(body));
  }
  
  useEffect(() => {
    GET("http://localhost:8989/users");
  }, []);

  useEffect(() => {
    if (data.profilepic) {
      const uint8Array = new Uint8Array(Object.values(data.profilepic));

      const base64String = globalThis.btoa(String.fromCharCode(...uint8Array));

      setImageSrc(`data:image/webp;base64,${base64String}`);
    }
  }, [data]);
  
  return (
    <Router>
      <Main>
        <Header src={imageSrc} />
        <Routes>
          <Route path="/" element={
            <Content>
              
            </Content>
          } />
          <Route path="/user" element={<User />} />
          <Route path="/user/:username" element={<User />} />
        </Routes>
      </Main>
    </Router>
  )
}