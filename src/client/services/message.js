import axios from "axios";

export default async function sendMessage(to, subject, text) {
  return axios
    .post(`http://localhost:3001`, {to, subject, text})
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      return undefined;
    });
}