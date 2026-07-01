import { Component } from '@angular/core';
import {HeaderComponent} from '../Header.component';
import { DUMMY_USERS } from './DummyUsers';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [HeaderComponent],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  selectedUser = DUMMY_USERS[randomIndex];
   
  
  onUserClick() {

   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
   this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
