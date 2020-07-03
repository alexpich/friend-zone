import http from "../http-common";
import axios from "axios";
import authHeader from "./auth-header";

//test
const API_URL = "http://localhost:5000/api/auth/";
const API_URL_TEST = "http://localhost:5000/api/test/";

class UserService {
  //test
  getPublicContent() {
    return axios.get(API_URL_TEST + "all");
  }
  getUserBoard() {
    return axios.get(API_URL_TEST + "user", { headers: authHeader() });
  }
  getModeratorBoard() {
    return axios.get(API_URL_TEST + "mod", { headers: authHeader() });
  }
  getAdminBoard() {
    return axios.get(API_URL_TEST + "admin", { headers: authHeader() });
  }

  // TODO: Fix these
  getAll() {
    // return http.get("/users");
    // return axios.get("/users");
  }

  get(id) {
    // return http.get(`/users/${id}`);
    // return axios.get(`/users/${id}`);
  }

  create(data) {
    // return axios.post("/users", data);
    return axios.post(API_URL + "signup", data);
  }

  update(id, data) {
    // return axios.put(`/users/${id}`, data);
  }

  delete(id) {
    // return axios.delete(`/users/${id}`);
  }

  deleteAll() {
    // return axios.delete("/users");
  }

  findByEmail(email) {
    // return axios.get(`/users?email=${email}`);
  }

  findByFirstName(firstName) {
    // return axios.get(`/users?firstName=${firstName}`);
  }

  findByLastName(lastName) {
    // return axios.get(`/users?lastName=${lastName}`);
  }
}

export default new UserService();