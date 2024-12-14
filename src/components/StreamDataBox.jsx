import { useEffect, useState } from "react";

export default function StreamDataBox({ height, startedAt, viewers }) {
  const start = new Date(startedAt);

  const [uptime, setUptime] = useState([]);

  useEffect(() => {
    setUptime(new Date(new Date() - start).toLocaleTimeString());

    setInterval(() => {
      setUptime(new Date(new Date() - start).toLocaleTimeString());
    }, 1000);
  });

  return (
    <div className={`h-${height} w-fit flex flex-row justify-center items-center`}>
      <div className={`h-${height} w-32 flex flex-row justify-center items-center`}>
        <img width="28" height="28" src="/uptime.svg"></img>
        <p className="text-xl font-extrabold">{ uptime }</p>
      </div>
      <div className={`h-${height} w-16 flex flex-row justify-center items-center`}>
        <p className="text-red text-xl font-extrabold">{ viewers }</p>
        <img width="32" height="32" src="/viewers.svg"></img>
      </div>
    </div>
  );  
}