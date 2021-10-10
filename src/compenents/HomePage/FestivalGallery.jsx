import { useEffect, useState } from "react";
import { addOne, addOneWithlimit } from "../../helper/config";

export function FestivalGallery(props) {
  const [index, setIndex] = useState(0);
  const [festIntervalPrev, setFestInterval] = useState(0);

  useEffect(() => {
    let frame = 0;
    if (props.images) {
      clearInterval(festIntervalPrev);
      setIndex(0);
      const festInterval = setInterval(() => {
        frame = frame >= props.images.length - 1 ? 0 : frame + 1;
        setIndex(frame);
      }, 6000);

      setFestInterval(festInterval);
      console.log(props.images.length);
    }
  }, [props.images]);

  return (
    <div className="w-full h-full overflow-hidden">
      <div className="  justify-center  ">
        <div
          className=" flex  duration-3000 ease-linear w-full h-full transition "
          style={{
            transform: `translateX(${-index * 100}%)`,
          }}
        >
          <div className=" flex  min-w-full h-min-full relative">
            {props.images.map((source) => {
              return <img src={source} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
