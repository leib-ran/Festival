import Card from "./Card";

function CategoryArea(props) {
  return (
    <div>
      <div className="w-136 flex flex-wrap m-auto">
        {props.data.map((element) => {
          return <Card data={element} />;
        })}
      </div>
    </div>
  );
}

export default CategoryArea;
