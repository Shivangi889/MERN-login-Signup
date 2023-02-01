import axios from "axios";

const API_URL = "http://localhost:3000/api/";

class UserService {
  login(data) {
    return axios
      .post(API_URL + "login",data)
      .then(response => {
        if (response.data) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(data) {
    return axios.post(API_URL + "register", data);
  }

  getAllUsers() {
    return axios.get(API_URL+"getallUsers");
  }
}

export default new UserService();