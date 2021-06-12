import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from '../model/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
     
  constructor( private _http : HttpClient) { }

  public loginuserFormRemote(user : User):Observable<any>{
     
   return this._http.post<any>("http://localhost:8051/loginuser",user)
  }
  public getUsers(id: number):Observable<User> {
    return this._http.get<User>(`http://localhost:8051/getUsers/${id}`);
  }


  /*constructor(private http: HttpClient) { }
    
  public saveUsername(username: string): void {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }
    public getUsername(): string {
    return  window.sessionStorage.getItem(USERNAME_KEY);
  } */
}
