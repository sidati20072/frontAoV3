import { Component, OnInit } from '@angular/core';
import {User} from '../../Models/User.model';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import {AuthentificationService} from '../../services/authentification.service';
import {UserService} from '../../services/user.service';
import {WebSocketService} from '../../services/web-socket.service';
import {Router} from '@angular/router';
import {EntrepriseService} from '../../services/entreprise.service';
import {NotificationService} from '../../services/notification.service';

@Component({
  selector: 'app-navbar-prive',
  templateUrl: './navbar-prive.component.html',
  styleUrls: ['./navbar-prive.component.scss']
})
export class NavbarPriveComponent implements OnInit {
  notifications;
  public sidebarOpened = false;
  currentUser : User;
  notification;
  toggleOffcanvas() {
    this.sidebarOpened = !this.sidebarOpened;
    if (this.sidebarOpened) {
      document.querySelector('.sidebar-offcanvas').classList.add('active');
    }
    else {
      document.querySelector('.sidebar-offcanvas').classList.remove('active');
    }
  }
  constructor(private router: Router, config: NgbDropdownConfig , private authservice : AuthentificationService,
              private userService : UserService, private webSocketService: WebSocketService, private notificationService: NotificationService) {
    config.placement = 'bottom-right';
  }
  ngOnInit() {
    this.userService.getCurrentUser().subscribe(
        value => {
          this.currentUser = value;
          this.getNotifications();
          this.getLastNotification();
        },error1 => {
          console.log("erreur de recuperation current user");

        }
    );
  }

  isAdmin() {
    return this.authservice.isAdmin();
  }

  isUser() {
    return this.authservice.isUser();
  }

  isAuthenticated() {
    return this.authservice.isAuthenticated();
  }

  logout(){
    this.authservice.logout();
  }

  getNotifications(){

    // Open connection with server socket
    let stompClient = this.webSocketService.connect();
    stompClient.connect({}, frame => {

      // Subscribe to notification topic
      stompClient.subscribe('/topic/notification', dataNotif => {
        this.notification = JSON.parse(dataNotif.body);
      });
    });
  }

  goTo(id){
    localStorage.removeItem('idEntreprise');
    localStorage.setItem('idEntreprise', id);
    this.router.navigate(['/super/entreprises/show']);
  }


  getLastNotification(){
  this.notificationService.getLastNotfications().subscribe(value =>{
    this.notifications = value['_embedded']['notifications'];

    console.log(this.notifications);
    console.log(this.notifications[0].createAt);
  }, error =>{
    console.log('error to fetch last notification');
  });
}
}
