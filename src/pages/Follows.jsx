import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { GET, loadProfilePic } from "../components/Util";
import Content from "../components/Content";
import FollowsList from "../components/FollowsList";
import SwitchTitle from "../components/SwitchTitle";

export default function Follows() {
  const [cookie] = useCookies(["glitch"]);
  const [data, setData] = useState([]);

  useEffect(GET(`http://localhost:8989/follows`, cookie, setData), [cookie]);

  return (
    <div className="flex flex-1 flex-col justify-center items-center border-x-2 border-b-2 border-yellow">
      <div className="flex flex-col h-128 w-256 justify-start items-start">
        <div className="w-full h-16 flex justify-start items-center">
          <div className="w-fit h-fit flex flex-row ml-16">
            <p className="text-3xl text-yellow font-bold">/</p>
            <p className="text-3xl text-grey font-bold">Follows</p>
          </div>
        </div>
        <FollowsList data={data} />
      </div>
    </div>
  );
}