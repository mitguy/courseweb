import { useCookies } from "react-cookie";
import Auth from "./Auth";
import Glitch from "./Glitch";

export default function App() {
  const [cookie] = useCookies(['glitch']);

  if (cookie.glitch) {
    return (
      <Glitch />
    )
  }
  
  return (
    <Auth />
  )
}