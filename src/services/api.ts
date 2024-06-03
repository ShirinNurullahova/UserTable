import { AxiosResponse } from "axios";
import { api } from "./api.config";

export const getUsersData = async (): Promise<AxiosResponse<User[]>> => api.get('/user');
