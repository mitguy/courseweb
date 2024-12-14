import FollowBox from "./FollowBox";

export default function StreamsList({ data }) {
  if (data.length != 0) {
    return (
      <div className="w-fit h-fit flex flex-col gap-2">
        {/* {data.sort((a, b) => new Date(a.followedAt) > new Date(b.followedAt)).map((item, i) => (
          <FollowBox key={i} data={item} />
        )} */}
        {data.sort((a, b) => new Date(a.followedAt) > new Date(b.followedAt)).map((item, index) => (
          <FollowBox key={index} data={item} />
        ))}
      </div>
    );
  }

  return (
    <div className="w-256 h-16 flex justify-center items-center"> 
      <p className="text-lg">Followless...</p>
    </div>
  );
}