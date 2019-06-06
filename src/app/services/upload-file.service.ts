import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private http: HttpClient) { }

  pushFileToStorage(file: File , userId , type): Observable<any> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);
    formdata.append('userId', userId);
    formdata.append('type', type);

    const req = new HttpRequest('POST', 'http://localhost:8180/api/file/upload', formdata);

    return this.http.request<any>(req);
  }

  getFiles(): Observable<any> {
    return this.http.get('http://localhost:8080/api/file/all');
  }
}
