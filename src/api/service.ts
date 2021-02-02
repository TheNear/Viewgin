import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { URLS, URLTypes } from "./constants";
import {
  GetDonutResponse, GetGraphResponse, LoginPayload, LoginResponse,
} from "./types";

// Так как сервер блокирует CORS, и нельзя использовать заголовок авторизации,
// функция включения токена в заголовок закомментирована.

class ApiService {
  private URLS: URLTypes;

  private axiosOption: AxiosRequestConfig;

  private token: string | null;

  constructor(URLS: URLTypes) {
    this.URLS = URLS;
    this.token = localStorage.getItem("token");
    this.axiosOption = {
      baseURL: URLS.BASE,
      timeout: 2000,
      headers: {
        "Content-Type": "application/json",
        // Authorization: `${this.token ? `Barier ${this.token}` : ""}`,
      },
    };
  }

  // private refreshHeader() {
  //   this.axiosOption = {
  //     ...this.axiosOption,
  //     headers: {
  //       ...this.axiosOption.headers,
  //       Authorization: `Token ${this.token}`,
  //     },
  //   };
  // }

  private get = async <T>(url: string, options = this.axiosOption): Promise<T> => {
    const { data }: AxiosResponse<T> = await axios(url, options);
    return data;
  };

  private post = async <S, T>(
    url: string,
    postData?: T,
    options = this.axiosOption,
  ): Promise<S> => {
    const { data } = await axios.post<S>(url, postData, options);
    return data;
  };

  public login = async (loginPayload: LoginPayload): Promise<LoginResponse> => {
    const data = await this.post<LoginResponse, LoginPayload>(this.URLS.AUTH, loginPayload);
    localStorage.setItem("token", data.token);
    this.token = data.token;
    // this.refreshHeader();
    return data;
  };

  public getGraphData = async (): Promise<GetGraphResponse> => {
    const data = await this.get<GetGraphResponse>(this.URLS.GRAPH);
    return data;
  };

  public getDonutData = async (): Promise<GetDonutResponse> => {
    const data = await this.get<GetDonutResponse>(this.URLS.DONUT);
    return data;
  };
}

const Api = new ApiService(URLS);

export { Api };
