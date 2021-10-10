import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./product";

export default function ProductPage(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    const result = await axios(
      `http://localhost:8000/products/${props.match.params.id}`
    );
    console.log(props.match.params.id);
    setData(result.data);
    setLoading(true);
  }, []);

  return (
    <div className=" bg-no-repeat bg-cover bg-center">
      <header></header>
      <main>
        <div className="text-center text-5xl">Dionisos Project</div>
        {loading && <Product data={data}></Product>}
      </main>
    </div>
  );
}
