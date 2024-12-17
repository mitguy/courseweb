export default function ProfilePic({ size, src }) {
  return (
    <img width={size} height={size} src={(src != "") ? src : "/pfp.svg"}></img>
  )
}