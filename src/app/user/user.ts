import { Component } from '@angular/core';
import {HeaderComponent} from '../Header.component';

@Component({
  selector: 'app-user',
  imports: [HeaderComponent],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {}
