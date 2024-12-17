import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GET, loadProfilePic } from "../components/Util";
import NotFound from "../pages/NotFound";
import Content from "../components/Content";
import Title from "../components/Title";
import ProfilePic from "../components/ProfilePic";
import FollowerCount from "../components/FollowerCount";
import CreatedAge from "../components/CreatedAge";
import Bio from "../components/Bio";
import FollowButton from "../components/FollowButton";

export default function User() {
  const { username } = useParams();

  const [cookie] = useCookies(["glitch"]);
  const [data, setData] = useState([]);
  const [imgSrc, setImgSrc] = useState("");
  const [followed, setFollowed] = useState(false);

  useEffect(GET(`http://localhost:8989/users${(username) ? `/${username}` : ""}`, cookie, setData), [username]);
  useEffect(GET(`http://localhost:8989/follows/${data.id}`, cookie, setFollowed), [data]);

  useEffect(loadProfilePic(data?.profilepic, setImgSrc), [data]);

  if (data == null) {
    return (
      <NotFound />
    )
  }

  return (
    <Content>
      <div className={`w-full flex flex-row`}>
        <Title name={data.username}/>
        {!username && 
          <div className="w-fit flex flex-row">
            <Link to="/user/edit" className="w-16">
              <img height="64px" width="64px" src="/edit.svg"></img>
            </Link>
            <Link to="/follows" className="w-16">
              <img height="64px" width="64px" src="/follows.svg"></img>
            </Link>
            <Link to="/stream" className="w-16">
              <img height="64px" width="64px" src="/stream.svg"></img>
            </Link>
          </div>
        }
      </div>
      <div className="flex flex-row justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <ProfilePic size="256" src={imgSrc} />
          <div className="w-64 h-16 flex flex-row">
            <FollowButton size="64" to={data.id} followed={followed} setFollowed={setFollowed} />
            <div className="h-full flex flex-col justify-between">
              <FollowerCount count={(data._count) ? data._count.FollowsTo : "0"} />
              <CreatedAge createdAt={(data.createdAt) ? new Date(data.createdAt).toLocaleDateString() : "never"} />
            </div>
          </div>
        </div>
        <Bio bio={(data.bio) ? data.bio : "..."} />
      </div>
    </Content>
  );
}