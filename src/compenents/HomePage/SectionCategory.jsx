import Carousel from "../Carousel/Carousel";

export default function SectionCategory() {
  let objImags = {
    1: {
      name: "Leds",
      src: "/images/categories/night.jpg",
    },
    2: {
      name: "Sleeping Equipment",
      src: "/images/categories/sleeping.jpg",
    },
    3: {
      name: "Flight Tickets",
      src: "/images/categories/Flight.jpg",
    },
    4: {
      name: "Clothing",
      src: "/images/categories/clothing.jpg",
    },
  };
  return (
    <div>
      <div className="text-center w-7/12 mb-2 m-auto text-5xl">
        <h1 className="m-12 font-bold">Categories</h1>
        <Carousel>
          {Object.values(objImags).map((element) => {
            return (
              <div key={element.name} className="w-full  relative z-1">
                <div className="h-full w-full bg-gray-900 opacity-40 z-10 absolute"></div>
                <img
                  src={element.src}
                  alt={element.name}
                  className=" h-full  w-full filter contrast-200"
                />
                <div className="absolute text-center w-full font-semibold top-2 text-gray-100  z-50">
                  {element.name}
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
