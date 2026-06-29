import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Header.component';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app welcome you! i am pavan karthik');
}
