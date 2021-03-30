import axios from "axios";

export const getTaskData = async () => {
  let data = [];
  await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
       data = response.data;
    });
    // console.log(`data from service`, data)
  return data;
};
