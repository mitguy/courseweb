import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';
import Content from "../components/Content";
import TextBox from "../components/TextBox";
import Input from "../components/Input";
import ErrorBox from "../components/ErrorBox";
import Button from "../components/Button";

export default function Register() {
  const [_cookie, setCookie] = useCookies(['glitch']);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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

    if (auth.error) {
      setError((Array.isArray(auth.message)) ? auth.message[0] : auth.message);

      return;
    }

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
      <ErrorBox className="h-32" message={error} />
      <Button onClick={post} name="Register" />
    </Content>
  );
}