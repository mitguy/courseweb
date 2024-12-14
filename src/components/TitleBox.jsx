import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { GET, loadProfilePic } from "./Util";
import StreamDataBox from  "./StreamDataBox";
import ProfilePic from "./ProfilePic";
import FollowButton from "./FollowButton";
import { Link } from "react-router-dom";

export default function TitleBox({ data }) {
  const [cookie] = useCookies(['glitch']);
  const [user, setUser] = useState([]);
  const [imgSrc, setImgSrc] = useState(null);
  const [followed, setFollowed] = useState(false);

  useEffect(GET(`http://localhost:8989/users/${data.username}`, cookie, setUser), [data, followed]);
  useEffect(GET(`http://localhost:8989/follows/${data.id}`, cookie, setFollowed), [data]);

  useEffect(loadProfilePic(user?.profilepic, setImgSrc), [user]);

  return (
    <div className="flex flex-1 p-4 border-t-1 border-r-1 border-yellow">
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex flex-row w-full h-8 justify-between items-center">
          <div className="h-8 w-full flex flex-row justify-center items-center">
            <h3 className="w-full text-2xl">{data.title}</h3>
          </div>
          <StreamDataBox height="4" startedAt={data.startedAt} viewers={data.viewers} />
        </div>
        <div className="flex flex-1 flex-row justify-start items-start">
          <ProfilePic size="64" src={imgSrc} />
          <FollowButton size="64" to={data.id} followed={followed} setFollowed={setFollowed} />
          <div className="h-16 w-fit flex flex-col justify-start content-between">
            <Link to={`/user/${data.username}`}>
              <h2 className="text-yellow text-3xl font-extrabold">{data.username}</h2>
            </Link>
            <p className="text-lg font-bold">{user?._count?.FollowsTo} followers</p>
          </div>
        </div>
      </div>
    </div>
  );
}