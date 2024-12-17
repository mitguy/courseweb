import React from "react"
import ReactPlayer from "react-player"

export default function Player() {
  const test = "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8";

  return (
    <div className={`w-wp h-hp border-b-1 border-r-1 border-yellow`}>
      <ReactPlayer controls={true} width="100%" height="100%" url={test} />
    </div>
  );
}