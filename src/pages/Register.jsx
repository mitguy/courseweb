import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';
import Input from "../components/Input";
import Button from "../components/Button";
import TextBox from "../components/TextBox";
import Content from "../components/Content";

export default function Register() {
  const [cookie, setCookie] = useCookies(['glitch']);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const post = async () => {
    const response = await fetch("http://localhost:8989/auth/register", {
      headers: { "Content-type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    const auth = await response.json();

    setCookie("glitch", auth.token);

    navigate("/");
  };

  return (
    <Content>
      <TextBox name="Username:" />
      <Input id="username" value={username} onChange={e => setUsername(e.target.value)} type="text" />
      <TextBox name="Email:" />
      <Input id="email" value={email} onChange={e => setEmail(e.target.value)} type="email" />
      <TextBox name="Password:" />
      <Input id="password" value={password} onChange={e => setPassword(e.target.value)} type="password" />
      <div className="h-32"></div>
      <Button onClick={post} name="Register" />
    </Content>
  );
}