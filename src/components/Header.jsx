import { Link } from "react-router-dom";
import ProfilePic from "./ProfilePic";

export default function Header({ src }) {
  if (src) {
    return (
      <header className="h-16 min-w-full w-full max-w-full flex justify-center items-end bg-yellow">
        <Link to="/" className="h-full flex flex-1 justify-center items-center">
          <h1 className="pl-16 text-5xl font-extrabold">glitch</h1>
        </Link>
        <Link to="/user" className="flex justify-end">
          <ProfilePic size="64" src={(src != null) ? src : "/pfp.svg"} />
        </Link>
      </header>
    )
  }
  
  return (
    <header className="h-16 min-w-full w-full max-w-full flex justify-center items-center bg-yellow">
      <Link to="/" className="h-full flex flex-1 justify-center items-center">
        <h1 className="text-5xl font-extrabold">glitch</h1>
      </Link>
    </header>
  )
}