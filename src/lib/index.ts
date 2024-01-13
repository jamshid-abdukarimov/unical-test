import axios from "../api";
import { Endpoints } from "../config/endpoints";
import { authToken } from "../utils/getToken";

const PostRequest = async <D, R, P = {}>(
  endpoint: Endpoints,
  data: D,
  params?: P
) => {
  return await axios.post<R>(endpoint, data, {
    headers: authToken(),
    params: params || {},
  });
};

const GetRequest = async <R, P = {}>(endpoint: Endpoints, params?: P) => {
  return await axios.get<R>(endpoint, {
    headers: authToken(),
    params: params || {},
  });
};

const DeleteRequest = async <R, P = {}>(
  endpoint: Endpoints,
  id: string,
  params?: P
) => {
  return await axios.delete<R>(`${endpoint}/` + id, {
    headers: authToken(),
    params: params || {},
  });
};

const GetOneRequest = async <R, P = {}>(
  endpoint: Endpoints,
  id: string,
  params?: P
) => {
  return await axios.get<R>(`${endpoint}/${id}`, {
    headers: authToken(),
    params: params || {},
  });
};

const UpdateRequest = async <D, R, P = {}>(
  endpoint: Endpoints,
  id: string,
  data: D,
  params?: P
) => {
  return await axios.patch<R>(`${endpoint}/${id}`, data, {
    headers: authToken(),
    params: params || {},
  });
};

export { PostRequest, DeleteRequest, GetRequest, GetOneRequest, UpdateRequest };
