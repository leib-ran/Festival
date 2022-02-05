import axios from "axios";

export const getUser = async () => {
  try {
    const { data } = await axios.get("http://localhost:8000/users/user", {
      withCredentials: true,
      credentials: "include",
    });

    return data;
  } catch (err) {
    return {};
  }
};
