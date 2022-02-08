import { useEffect, useState } from "react";
import { ProductsApi } from "../../../core/http/productsApi";
import CategoryArea from "../CatalogPage/CategoryArea";
import { ParseUtil } from "../../../core/util/parseUtil/parseUtil";

export function SearchPage() {
  const [rawData, setRawData] = useState([]);
  useEffect(async () => {
    const qeryObj = ParseUtil.urlHandle();
    const result = await ProductsApi.getProducts(qeryObj);
    const rawData = result.data;
    setRawData(rawData);
  }, []);
  return (
    <div>
      <div className="m-auto w-96 text-center font">Products</div>
      <div>
        <CategoryArea data={rawData}></CategoryArea>
      </div>
    </div>
  );
}
