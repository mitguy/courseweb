import { Link } from "react-router-dom";

export default function SwitchTitle({ state }) {
  return (
    <div className="w-full h-16 flex justify-start items-center">
        <div className="w-fit h-fit flex flex-row ml-16">
          <p className="text-3xl text-yellow font-bold">/</p>
          <p className="text-3xl font-bold">{(state) ? "Live" : "All" }</p>
        </div>
      <Link to={`/${(state) ? "all" : ""}`} className="flex justify-end">
        <div className="w-fit h-fit ml-16 pr-8 border-b-2 border-yellow hover:bg-yellow">
          <p className="text-3xl font-bold">{(state) ? "All" : "Live"}</p>
        </div>
      </Link>
    </div>
  )
}