import React from "react";

export default function Globe() {
  return (
    <div>
      <div className className="border-b-8 border-black mb-2">
        <div className="border-r-8 border-t-8	border-black p-2 rounded-full">
          <iframe
            className="rounded-full border-2	border-black"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218294.64210008344!2d34.738870000854924!3d31.252470805830864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15026640029f8777%3A0x8dee8012deb5dd8!2sBe&#39;er%20Sheva!5e0!3m2!1sen!2sil!4v1629867035678!5m2!1sen!2sil"
            style={{
              width: "600px",
              height: "600px",

              allowfullscreen: "",
              loading: "lazy",
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
