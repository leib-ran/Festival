import axios from "axios";
import { useEffect } from "react";

export function Orders() {
  const [data, SetData] = SetData();
  useEffect(async () => {
    const result = axios.post("http://localhost:8000/users");
  });
  return <div></div>;
}
