import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { loadProfilePic } from "./Util";
import ProfilePic from "./ProfilePic";
import UsernameBox from "./UsernameBox";
import FollowButton from "./FollowButton";

export default function FollowBox({ data }) {
  const [imgSrc, setImgSrc] = useState(null);
  const [followed, setFollowed] = useState(true);

  useEffect(loadProfilePic(data?.ToUser.profilepic, setImgSrc), [data]);

  return (
    <Link to={`/user/${data?.ToUser.username}`} className="flex flex-row w-fit h-16 justify-between">
      <div className="flex flex-row w-fit">
        <ProfilePic size="64" src={imgSrc} />
        <FollowButton size="64" to={data?.ToUser} followed={followed} setFollowed={setFollowed} />
        <UsernameBox name={data?.ToUser.username} />
      </div>
    </Link>
  );
}