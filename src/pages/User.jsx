import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";
import Content from "../components/Content";
import Title from "../components/Title";
import ProfilePic from "../components/ProfilePic";
import FollowerCount from "../components/FollowerCount";
import CreatedAge from "../components/CreatedAge";
import Bio from "../components/Bio";

export default function User() {
  const { username } = useParams();

  console.log(username);

  const [cookie] = useCookies(['glitch']);
  const [data, setData] = useState([]);
  const [imageSrc, setImageSrc] = useState("");

  const GET = async (url) => {
    return await fetch(url, {
      method: "GET",
      headers: { "Authorization": `Bearer ${cookie.glitch}` },
    }).then((res) => res.json()).then((body) => setData(body));
  }
  
  useEffect(() => {
    GET(`http://localhost:8989/users${(username) ? `/${username}` : ""}`);
  }, []);

  useEffect(() => {    
    if (data.profilepic) {
      const uint8Array = new Uint8Array(Object.values(data.profilepic));

      const base64String = globalThis.btoa(String.fromCharCode(...uint8Array));

      setImageSrc(`data:image/webp;base64,${base64String}`);
    }
  }, [data]);


  return (
    <Content>
      <Title name={data.username}/>
      <div className="flex flex-row justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <ProfilePic src={imageSrc} />
          <FollowerCount count={(data._count) ? data._count.FollowsTo : "0"} />
          <CreatedAge createdAt={(data.createdAt) ? new Date(data.createdAt).toLocaleDateString() : "never"} />
        </div>
        <Bio bio={data.bio} />
      </div>
    </Content>
  );
}