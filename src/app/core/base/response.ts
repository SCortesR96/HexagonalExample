export interface IHttpResponse<T> {
  status:  string;
  message: string;
  data:    T;
}
