import React from "react";
import Carousel from "../Carousel/Carousel";

export default class HomePage extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div
        className
        className="bg-no-repeat h-full bg-cover bg-center"
        style={{
          backgroundImage: "url(/images/links/link_desert_item.jpg)",
        }}
      >
        <div className=" w-36 mb-2 mt-2 bg-gray-300 w-96  mr-auto opacity-50">
          <h1 className="  cursor-default font-bold  text-5xl	">Holy mally</h1>
        </div>
        <div className="flex ml-auto mr-auto">
          <iframe
            className="rounded-full"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/IvwS6BYjHG0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            className="rounded-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218294.64210008344!2d34.738870000854924!3d31.252470805830864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15026640029f8777%3A0x8dee8012deb5dd8!2sBe&#39;er%20Sheva!5e0!3m2!1sen!2sil!4v1629867035678!5m2!1sen!2sil"
            style={{
              width: "600",
              height: "450",
              style: "border:0;",
              allowfullscreen: "",
              loading: "lazy",
            }}
          ></iframe>
          <Carousel>
            <img
              src="/images/caruselLink/leftCarusel.jpg"
              className="min-w-full rounded-full	"
              alt=""
            />
            <img
              src="/images/tents/tent.jpg"
              className="min-w-full	rounded-full"
              alt=""
            />
            <img
              src="/images/caruselLink/leftCarusel.jpg"
              className="min-w-full	rounded-full"
              alt=""
            />
          </Carousel>
        </div>

        <Carousel className="w-96">
          <img
            src="/images/caruselLink/leftCarusel.jpg"
            className="min-w-full	"
            alt=""
          />
          <img src="/images/tents/tent.jpg" className="min-w-full	" alt="" />
          <img
            src="/images/caruselLink/leftCarusel.jpg"
            className="min-w-full	"
            alt=""
          />
        </Carousel>
      </div>
    );
  }
}
