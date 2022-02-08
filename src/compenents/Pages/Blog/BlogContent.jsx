import Comments from "./Comments";

function BlogContent() {
  return (
    <div className="m-auto">
      <div className="m-auto flex-col shadow-lg	">
        <div className="text-5xl font-bold text-center p-5">Title</div>
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a6fac0106194335.5f8a0c5474233.jpg"
          alt="festival"
          className="w-136 m-auto"
        />
        <div className="text-2xl font-medium">sub Title</div>
        <div className="w-136">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quam
          esse harum sed rerum incidunt, enim recusandae natus maiores facere
          dignissimos, dolor, ipsa sapiente quas quae tempora minus illo soluta?
        </div>
        <br />
        <div className="w-136">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quam
          esse harum sed rerum incidunt, enim recusandae natus maiores facere
          dignissimos, dolor, ipsa sapiente quas quae tempora minus illo soluta?
        </div>
        <br />
        <div className="w-136">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quam
          esse harum sed rerum incidunt, enim recusandae natus maiores facere
          dignissimos, dolor, ipsa sapiente quas quae tempora minus illo soluta?
        </div>
        <br />
        <div className="w-136">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quam
          esse harum sed rerum incidunt, enim recusandae natus maiores facere
          dignissimos, dolor, ipsa sapiente quas quae tempora minus illo soluta?
        </div>
      </div>
      <Comments></Comments>
    </div>
  );
}
export default BlogContent;
