import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";
import { GET } from "../components/Util";
import Player from "../components/Player";
import TitleBox from "../components/TitleBox";
import ChatBox from "../components/ChatBox";
import NotFound from "./NotFound";

export default function Stream() {
  const { username } = useParams();

  const [cookie] = useCookies(['glitch']);
  const [data, setData] = useState([]);

  useEffect(GET(`http://localhost:8989/streams${(username) ? `/${username}` : ""}`, cookie, setData), [cookie]);

  if (data == null) {
    return (
      <NotFound />
    )
  }

  return (
    <div className="flex flex-1 flex-row">
      <div className="flex flex-col">
        <Player />
        <TitleBox data={data} />
      </div>
      <ChatBox />
    </div>
  );
}