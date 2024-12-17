import StreamBox from "./StreamBox";

export default function StreamsList({ data }) {
  if (data.length != 0) {
    return (
      <div className="w-fit h-fit flex flex-col gap-2">
        {data.map((item, index) => (
          <StreamBox key={index} data={(item.ToStream) ? item.ToStream : item} />
        ))}
      </div>
    );
  }

  return (
    <div className="w-256 h-16 flex justify-center items-center"> 
      <p className="text-lg">Streamless...</p>
    </div>
  );
}