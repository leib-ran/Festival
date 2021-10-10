import React from "react";
import { Link } from "react-router-dom";

function BlogPost() {
  return (
    <div className="flex justify-center">
      <div className="w-96 leading-7">
        <div className=" shadow-lg h-96 p-4">
          <div>
            <h1 className="font-medium text-4xl">{post.title}</h1>
            <h1 className="text-gray-300">{post.author}</h1>
            <p>{post.content}</p>
            <h1 className="text-gray-300 text-xs">{post.date}</h1>
          </div>

          <Link
            to={`/Blog/${"name"}`}
            className="text-blue-400 text-xs hover:text-blue-200 cursor-pointer underline"
          >
            read me
          </Link>
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

const post = {
  title: "title",
  subTitle: "sub Title",
  author: "by shuki",
  date: "30/08/2008",
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Cupiditate quam voluptas numquam! Consectetur reprehenderit quosrecusandae ex, at sunt ipsam sed non! Autem cum, exercitationemdolor deleniti veritatis consectetur iure?",
  comment: "",
};
