import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
      <br>
    <h1>{{title}}</h1>
    <nav>
    <a routerLink="/createStudent" routerLinkActive="active">Create Student</a>
    <!--<a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>-->
    </nav>
    <router-outlet></router-outlet>
    `,
    styleUrls: ['app.component.css']
})

export class AppComponent{
    title = 'DreamWaves - School Connect'
}
