import axios from "axios";

export const getServer = async () =>
  await axios
    .get("http://localhost:8000/api/serve/servers")
    .then((res) => res.data)
    .catch(err => console.log(err));

    export const postServer = async (data) =>
  await axios
    .post("http://localhost:8000/api/serve/servers", data)
    .then((res) => res.data)
    .catch(err => console.log(err));

    export const alterServer = async (client) =>
  await axios
    .put(`http://localhost:8000/api/serve/servers/alter-server?client=${client}`)
    .then((res) => res.data)
    .catch(err => console.log(err));

    
