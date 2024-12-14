import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { GET, loadProfilePic } from "../components/Util";
import Content from "../components/Content";
import StreamsList from "../components/StreamsList";
import SwitchTitle from "../components/SwitchTitle";

export default function Streams() {
  const [cookie] = useCookies(['glitch']);
  const [data, setData] = useState([]);

  useEffect(GET(`http://localhost:8989/streams/live`, cookie, setData), []);

  return (
    <Content>
      <SwitchTitle title="Live" />
      <StreamsList data={data} />
    </Content>
  );
}