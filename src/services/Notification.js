import axios from "axios";

export const getNotification = async () =>
  await axios
    .get("http://localhost:8000/api/notification/note")
    .then((res) => res.data)
    .catch(err => console.log(err));

    export const postNotification = async (data) =>
  await axios
    .post("http://localhost:8000/api/notification/note", data)
    .then((res) => res.data)
    .catch(err => console.log(err));
