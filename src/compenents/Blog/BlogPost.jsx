import React from "react";

function BlogPost() {
  return (
    <div className="flex justify-center">
      <div className="w-96 leading-7">
        <div className=" shadow-lg h-96 p-4">
          <div>
            <h1 className="font-medium text-4xl">title</h1>
            <h1 className="text-gray-300">by shuki</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate quam voluptas numquam! Consectetur reprehenderit quos
              recusandae ex, at sunt ipsam sed non! Autem cum, exercitationem
              dolor deleniti veritatis consectetur iure?
            </p>
            <h1 className="text-gray-300 text-xs">30/08/20008</h1>
          </div>
        </div>
      </div>
      <div className="shadow-lg overflow-hidden h-96">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a6fac0106194335.5f8a0c5474233.jpg"
          alt="festival"
          className="h-96"
        />
      </div>
    </div>
  );
}
export default BlogPost;
