import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../model/Admin';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  

  constructor( private _http : HttpClient) { }

  public loginadminFormRemote(admin : Admin):Observable<any>{
     
   return this._http.post<any>("http://localhost:8051/loginadmin",admin)
  }
}
