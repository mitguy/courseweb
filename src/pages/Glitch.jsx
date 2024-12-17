import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useCookies } from "react-cookie";
import { GET, loadProfilePic } from "../components/Util";
import Main from "../components/Main.jsx";
import Header from "../components/Header.jsx";
import Live from "../pages/Live.jsx";
import Stream from "../pages/Stream.jsx";
import Streams from "../pages/Streams.jsx";
import User from "../pages/User.jsx";
import Edit from "./Edit.jsx";
import Follows from "./Follows.jsx";
import NotFound from "../pages/NotFound.jsx";

export default function Glitch() {
  const [cookie] = useCookies(["glitch"]);
  const [data, setData] = useState([]);
  const [imgSrc, setImgSrc] = useState("");
  
  useEffect(GET(`http://localhost:8989/users`, cookie, setData), [cookie]);

  useEffect(loadProfilePic(data?.profilepic, setImgSrc), [data]);
  
  return (
    <Router>
      <Main>
        <Header src={imgSrc} />
        <Routes>
          <Route path="/" element={<Live />} />
          <Route path="/all" element={<Streams />} />
          <Route path="/stream" element={<Stream />} />
          <Route path="/stream/:username" element={<Stream />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/edit" element={<Edit />} />
          <Route path="/user/:username" element={<User />} />
          <Route path="/follows" element={<Follows />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </Router>
  )
}