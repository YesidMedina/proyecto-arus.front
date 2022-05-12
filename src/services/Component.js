import axios from "axios";

export const getComponent = async () =>
  await axios
    .get("http://localhost:8000/api/component/components")
    .then((res) => res.data)
    .catch(err => console.log(err));

    export const postComponent = async (data) =>
  await axios
    .post("http://localhost:8000/api/component/components", data)
    .then((res) => res.data)
    .catch(err => console.log(err));