import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { GET, loadProfilePic } from "../components/Util";
import Content from "../components/Content";
import Streams from "../components/StreamsList";
import SwitchTitle from "../components/SwitchTitle";

export default function Live() {
  const [cookie] = useCookies(["glitch"]);
  const [data, setData] = useState([]);

  useEffect(GET(`http://localhost:8989/follows/live`, cookie, setData), [cookie]);

  return (
    <Content>
      <SwitchTitle state={true} />
      <Streams data={data} />
    </Content>
  );
}