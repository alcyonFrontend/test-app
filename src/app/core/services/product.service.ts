import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct} from "@core/models";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly _endPoint = '/assets/data/products.json';

  constructor(private _http: HttpClient) {}

  public list() : Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this._endPoint);
  }

}
