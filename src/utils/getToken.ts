export default function getToken() {
  return localStorage.getItem("token");
}

export const authToken = () => {
  return { Authorization: `Bearer ${getToken()}` };
};
