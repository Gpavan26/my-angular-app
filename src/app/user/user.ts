import { Component,computed,input } from '@angular/core';
import {HeaderComponent} from '../Header.component';

@Component({
  selector: 'app-user',
  imports: [HeaderComponent],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

    avatar=input.required<string>();
    name=input.required<string>();


  imagePath=computed(() => {
    return  'app/users/' + this.avatar();
  });
}
