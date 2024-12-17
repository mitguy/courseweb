import { useCookies } from "react-cookie";

export default function FollowButton({ to, followed, setFollowed, size }) {
  const [cookie] = useCookies(["glitch"]);

  const post = async () => {
    if (followed) {
      await fetch("http://localhost:8989/follows/delete", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${cookie.glitch}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          to,
        }),
      }).then(() => setFollowed(false));

      return;
    }

    await fetch("http://localhost:8989/follows/create", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${cookie.glitch}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        to,
      }),
    }).then((res) => setFollowed(true));
  };

  return (
    <button onClick={post} className="h-16 w-16">
      <img width={size} height={size} src={(followed) ? "/followed.svg" : "/unfollowed.svg"}></img>
    </button>
  );
}