import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Media} from '../Models/Media.model';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private http: HttpClient) { }

  pushFileToStorage(file: File , userId , type){
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Authorization': this.authService.jwt,
      })
    };

    const formdata: FormData = new FormData();

    formdata.append('file', file);
    formdata.append('userId', userId);
    formdata.append('type', type);

    const req = new HttpRequest('POST', 'http://localhost:8180/api/file/upload', formdata , httpOptions);

    return this.http.post<Media>('http://localhost:8180/api/file/upload', formdata , httpOptions);
  }

  getFiles(): Observable<any> {
    return this.http.get('http://localhost:8080/api/file/all');
  }
}
