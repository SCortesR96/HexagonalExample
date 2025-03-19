import { Observable } from 'rxjs';
import { IHttpResponse } from './response';

export interface Usecase<Params, Response> {
  execute(params: Params): Observable<IHttpResponse<Response>>;
}

export interface UsecasePro<Params, Response> {
  execute(params: Params): Promise<Response>;
}
