import axios from "axios";

export const getUser = async () =>
  await axios
    .get("http://localhost:8000/api/user/us")
    .then((res) => res.data)
    .catch(err => console.log(err));

    export const postUser = async (data) =>
  await axios
    .post("http://localhost:8000/api/user/us", data)
    .then((res) => res.data)
    .catch(err => console.log(err));

    
