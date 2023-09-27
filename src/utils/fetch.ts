import { baseUrl } from "../config";
import FormValue from "../hooks/type";
import { request } from "../lib/request";

const fetchDataFromServer = async () => {
  return await baseUrl.get(request.requestapplication);
};

const updateServerData = async (payload: FormValue) => {
  return await baseUrl.put(request.requestapplication, payload);
};

export { fetchDataFromServer };
