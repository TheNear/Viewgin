export interface LoginPayload {
  login: string,
  password: string,
}

export interface LoginResponse {
  login: string,
  token: string,
}

export type GraphPointData = [string, number];

export interface GraphData {
  id: number,
  title: string,
  data: GraphPointData[]
}

export interface GetGraphResponse {
  list: GraphData[]
}
