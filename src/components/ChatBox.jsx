import { useEffect, useState, useRef } from "react";
import { useCookies } from "react-cookie";
import { io } from "socket.io-client";
import Button from "./Button";

export default function ChatBox({ data }) {
  const [cookie] = useCookies(["glitch"]);
  const [msg, setMsg] = useState([]);
  const [socket, setSocket] = useState("");
  const [chat, setChat] = useState("");

  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [msg]);

  useEffect(() => {
    if (data) {
      const socket = io("http://localhost:80/chat", {
        transports: [ "polling", "websocket" ],
        extraHeaders: {
          chat: data.username,
          "Authorization": `Bearer ${cookie.glitch}`,
        }
      });

      setSocket(socket);
      
      return () => socket.close();
    }
  }, [data]);

  if (socket) {
    socket.on("message", async (message) => {
      setMsg([...msg, JSON.parse(message)]);
    });
  }

  const post = async () => {
    if (socket) {
      socket.emit("message", { message: chat });
    }
  };

  return (
    <div className={`w-wc h-hc border-l-1 border-yellow`}>
      <div ref={containerRef} className="w-wcb h-hcb overflow-y-scroll">
        {msg.map((item, index) => (
          <div key={index} className="h-8 w-full flex flex-row justify-start items-center gap-1">
            <p className="text-xl font-bold">{`${new Date(item.at).toLocaleTimeString()}`}</p>
            <p className="text-xl text-yellow font-bold">{`${item.username}:`}</p>
            <p className="text-xl">{ item.message }</p>
          </div>
        ))}
      </div>
      <input id="chat" value={chat} type="text" onChange={e => setChat(e.target.value)} className={`h-16 w-full bg-black border-t-2 border-r-2 border-yellow focus:outline-none text-2xl text-center`}></input>
      <Button name="Chat" width="full" onClick={post} />
    </div>
  );
}