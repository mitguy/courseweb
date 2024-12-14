import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { GET, loadProfilePic } from "../components/Util";
import Content from "../components/Content";
import FollowsList from "../components/FollowsList";
import SwitchTitle from "../components/SwitchTitle";

export default function Follows() {
  const [cookie] = useCookies(['glitch']);
  const [data, setData] = useState([]);

  useEffect(GET(`http://localhost:8989/follows`, cookie, setData), []);

  return (
    <Content>
      <SwitchTitle title="Follows" />
      <FollowsList data={data} />
    </Content>
  );
}