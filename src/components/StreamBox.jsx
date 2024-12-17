import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import { GET, loadProfilePic } from "./Util";
import ProfilePic from "./ProfilePic";
import UsernameBox from "./UsernameBox";
import StreamTitle from "./StreamTitle";
import StreamDataBox from "./StreamDataBox";

export default function StreamBox({ data }) {
  const [cookie] = useCookies(["glitch"]);
  const [user, setUser] = useState([]);
  const [imgSrc, setImgSrc] = useState("");

  useEffect(GET(`http://localhost:8989/users/${data?.username}`, cookie, setUser), [data]);

  useEffect(loadProfilePic(user?.profilepic, setImgSrc), [user]);

  return (
    <Link to={`/stream/${data?.username}`} className="flex flex-row w-fit h-16 justify-between hover:bg-yellow">
      <div className="flex flex-row w-fit">
        <ProfilePic size="64" src={imgSrc} />
        <UsernameBox name={data?.username} />
      </div>
      <StreamTitle title={data?.title} />
      <StreamDataBox startedAt={data?.startedAt} viewers={data?.viewers} />
    </Link>
  );
}