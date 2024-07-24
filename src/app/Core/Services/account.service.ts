import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../../Shared/Models/Register';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {}
  Register(registerData: Register): Observable<boolean> {
    let headers = new HttpHeaders();
    headers = headers.set('xxxxx-key', 'cxawasdfafs');
    return this.http.post<boolean>(
      'https://xdadasdasds/api/Account/Login',
      registerData,
      {
        headers: { 'xxxxx-key': environment.subscriptionKey },
      }
    );
  }
}
