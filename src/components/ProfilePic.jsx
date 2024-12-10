export default function ProfilePic({ src }) {
  return (
    src && src != null && <img width="256" height="256" src={src}></img> ||
    src && src == null && <img width="256" height="256" src="../assets/pfp.svg"></img>
  )
}