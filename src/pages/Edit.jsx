import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { GET, loadProfilePic } from "../components/Util";
import Content from "../components/Content";
import ProfilePic from "../components/ProfilePic";
import Button from "../components/Button";
import ErrorBox from "../components/ErrorBox";
import Input from "../components/Input";
import TextBox from "../components/TextBox";

export default function Edit() {
  const navigate = useNavigate();

  const [cookie, _setCookie, removeCookie] = useCookies(["glitch"]);
  const [data, setData] = useState([]);
  const [_auth, setAuth] = useState([]);
  const [imgSrc, setImgSrc] = useState("");
  const [newImg, setNewImg] = useState("");
  const [email, setEmail] = useState("");
  const [old, setOld] = useState("");
  const [NEW, setNEW] = useState("");
  const [bio, setBio] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      await fetch(`http://localhost:8989/auth`, {
        method: "GET",
        headers: { "Authorization": `Bearer ${cookie.glitch}` },
      }).then((res) => res.json()).then((body) => {
        setAuth(body);
        setEmail(body.email);
      });
    })()
  }, [cookie]);
  useEffect(() => {
    (async () => {
      await fetch(`http://localhost:8989/users`, {
        method: "GET",
        headers: { "Authorization": `Bearer ${cookie.glitch}` },
      }).then((res) => res.json()).then((body) => {
        setData(body);
        setBio(body.bio);
      });
    })()
  }, [cookie]);

  useEffect(loadProfilePic(data?.profilepic, setImgSrc), [data]);

  const postEmail = async () => {
    if (error) {
      setError("");
    }

    const response = await fetch("http://localhost:8989/auth/email", {
      headers: { 
        "Authorization": `Bearer ${cookie.glitch}`,
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email,
      }),
    });

    const data = await response.json();

    if (data.error) {
      setError((Array.isArray(data.message)) ? data.message[0] : data.message);

      return;
    }

    setEmail(data.email);
  };

  const postPassword = async () => {
    if (error) {
      setError("");
    }

    const response = await fetch("http://localhost:8989/auth/password", {
      headers: { 
        "Authorization": `Bearer ${cookie.glitch}`,
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        old,
        new: NEW,
      }),
    });
    
    const data = await response.json();

    if (data.error) {
      setError((Array.isArray(data.message)) ? data.message[0] : data.message);

      return;
    }
  };

  const DELETE = async () => {
    if (error) {
      setError("");
    }
    
    const response = await fetch("http://localhost:8989/auth", {
      headers: { "Authorization": `Bearer ${cookie.glitch}` },
      method: "DELETE",
    });

    const data = await response.json();

    if (data.error) {
      setError((Array.isArray(data.message)) ? data.message[0] : data.message);

      return;
    }

    removeCookie("glitch");

    useNavigate("/");
  };

  const upload = async () => {
    if (error) {
      setError("");
    }

    const fd = new FormData();
    fd.append("profilepic", newImg);

    console.log(fd);

    const response = await fetch("http://localhost:8989/users/upload", {
      headers: { 
        "Authorization": `Bearer ${cookie.glitch}`,
      },
      method: "POST",
      body: fd,
    });

    const data = await response.json();

    if (data.error) {
      setError((Array.isArray(data.message)) ? data.message[0] : data.message);

      return;
    }

    loadProfilePic(data.profilepic, setImgSrc);

    globalThis.location.reload();
  };

  const postBio = async () => {
    if (error) {
      setError("");
    }

    const response = await fetch("http://localhost:8989/users/update", {
      headers: { 
        "Authorization": `Bearer ${cookie.glitch}`,
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        bio,
      }),
    });

    const data = await response.json();

    if (data.error) {
      setError((Array.isArray(data.message)) ? data.message[0] : data.message);

      return;
    }

    setBio(data.bio);
  };

  return (
    <Content>
      <div className="w-fit h-192 gap-16 flex flex-row">
        <div className="w-128 h-full flex flex-col">
          <TextBox name="Email:" />
          <div className="w-fit h-fit flex flex-row">
            <input id="email" value={email} onChange={e => setEmail(e.target.value)} type="email" className={`h-16 w-96 bg-black border-2 border-yellow focus:outline-none text-2xl text-center`}></input>
            {/* <Input id="email" width="96" value={email} onChange={e => setEmail(e.target.value)} type="email" /> */}
            <Button width="32" onClick={postEmail} name="Save" />
          </div>
          <TextBox name="Old password:" />
          <Input id="old" width="128" value={old} onChange={e => setOld(e.target.value)} type="password" />
          <TextBox name="New password:" />
          <Input id="old" width="128" value={NEW} onChange={e => setNEW(e.target.value)} type="password" />
          <div className="h-16"></div>
          <Button width="full" onClick={postPassword} name="Change password" />
          {/* <Button width="128" color="red" onClick={() => {removeCookie("glitch");useNavigate("/")}} name="Logout" /> */}
          <div className="h-16"></div>
          <TextBox name="Delete account permanently:" />
          <button onClick={DELETE} className={`h-16 w-128 bg-red text-black text-2xl text-center font-extrabold`}>DELETE</button>
        </div>
        <div className="w-128 h-full flex flex-col justify-between items-center">
          <ErrorBox className="h-32" message={error} />
          <Button width="128" color="red" onClick={() => {removeCookie("glitch", { path: "/" });navigate("/");globalThis.location.reload()}} name="Logout" />
        </div>
        <div className="w-128 h-full flex flex-col">
          <div className="w-128 h-fit flex flex-row">
            <label className="h-32 w-32 flex justify-center items-center cursor-pointer">
              <ProfilePic size="128" src={imgSrc} />
              <input id="dragndrop" type="file" onChange={e => {setNewImg(e.target.files[0]);setImgSrc(URL.createObjectURL(e.target.files[0]))}} className="hidden"/>
            </label>
            <button onClick={upload} className={`h-32 w-96 bg-yellow text-2xl text-center active:bg-white active:text-yellow`}>Change profilepic</button>
            {/* <Button height="32" width="96" onClick={upload} name="Change profilepic" /> */}
          </div>
          <textarea defaultValue={ bio } onChange={e => setBio(e.target.value)} className="h-128 w-full text-xl bg-black resize-none border-x-2 border-yellow focus:outline-none"></textarea>
          <Button onClick={postBio} name="Save" />
        </div>
      </div>
    </Content>
  );
}