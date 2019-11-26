import { Component } from '@angular/core';
import { PushNotificationsService } from 'ng-push'; // Importar

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-push';
  constructor(private  pushNotifications: PushNotificationsService) {
    this.pushNotifications.requestPermission(); // Me imagino que aqui pedira permiso al usuario para poder enviar notificaciones
  }
  notify() { // our function to be called on click
    let options = { // set options
      body: 'Enhorabuena! Has mutilado a una feminazi!',
      icon: 'assets/vaultBoy.jpg' // adding an icon

    };
    this.pushNotifications.create('Vault Boy', options).subscribe(// creates a notification
        res => console.log(res),
        err => console.log(err)
      );
  }
}
