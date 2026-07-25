import { Injectable, signal } from '@angular/core';

export interface UserModel {
  name: string;
  email: string;
  age: number;
  birthDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class User {

  readonly profile = signal<UserModel>({
    name: 'John Doe',
    email: 'john@example.com',
    age: 25,
    birthDate: '2001-01-01'
  });

  update(user: UserModel) {
    this.profile.set(user);
  }

}