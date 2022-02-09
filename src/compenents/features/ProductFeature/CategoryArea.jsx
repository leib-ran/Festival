import Card from "./Card";

function CategoryArea(props) {
  return (
    <div>
      <div className="max-w-4xl flex justify-center flex-wrap m-auto">
        {props.data.length != 0 &&
          props.data.products.map((element, index) => {
            return <Card key={index} data={element} />;
          })}
      </div>
    </div>
  );
}

export default CategoryArea;
