function Comment() {
  return (
    <div>
      <div className="flex">
        <div className="overflow-hidden w-20 ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"
            alt="missing profile"
          />
        </div>
        <div class="ml-2">
          <h1 className="">
            comment <br />
          </h1>

          <p className="w-136 text-xm	">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
            culpa tenetur itaque, eos alias debitis nesciunt fugiat quidem
            voluptatibus laborum! Tempore consequatur ut eveniet saepe quo quia
            autem doloribus aliquid.
          </p>
          <div className="text-gray-500 text-xs">reply</div>
        </div>
      </div>
    </div>
  );
}
export default Comment;
