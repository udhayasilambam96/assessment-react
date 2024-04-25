import axios from "axios";

class HttpService {
  public static getHeader(): any {
    return {};
  }

  public static get(
    url: any,
    query: any = "",
    params: any = {},
    source: any = undefined,
  ) {
    const xhr = axios({
      method: "GET",
      url: `/api/${url}?${query}`,
      params: params,
      headers: HttpService.getHeader(),
      cancelToken: source?.token || undefined,
    }).then((res:any) => res.data);

    return xhr;
  }
}

export default HttpService;
