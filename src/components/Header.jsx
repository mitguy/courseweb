import { Link } from "react-router-dom";

export default function Header({ src }) {
  return (
    <header className="h-16 min-w-full w-full max-w-full flex items-end justify-center bg-yellow">
      <Link to="/" className="h-full flex flex-1 ps-16 justify-center items-center">
        <h1 className="text-white text-5xl font-extrabold">glitch</h1>
      </Link>
      {src && src != null && 
        <Link to="/user">
          <img width="64" height="64" src={src}></img>
        </Link>
      }
      {src && src == null && 
        <Link to="/user">
          <img width="64" height="64" src="../assets/pfp.svg"></img>
        </Link>
      }
    </header>
  )
}