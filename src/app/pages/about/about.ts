import { Component } from '@angular/core';
import { UserForm } from '../../components/user-form/user-form';

@Component({
  selector: 'app-about',
  imports: [
    UserForm
  ],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {}