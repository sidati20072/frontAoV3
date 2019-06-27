import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  constructor() { }

  public connect() {
    let socket = new SockJS(`http://localhost:8180/socket`);

    let stompClient = Stomp.over(socket);

    return stompClient;
  }
}
