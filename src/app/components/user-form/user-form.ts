import { Component, effect, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';

import { User } from '../../services/user';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss'
})
export class UserForm {

  private user = inject(User);

  readonly form = new FormGroup({

    name: new FormControl(this.user.profile().name, {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(3)
      ]
    }),

    email: new FormControl(this.user.profile().email, {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.email
      ]
    }),

    age: new FormControl(this.user.profile().age, {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.min(18),
        Validators.max(120)
      ]
    }),

    birthDate: new FormControl(this.user.profile().birthDate, {
      nonNullable: true,
      validators: [
        Validators.required
      ]
    })

  });

  readonly value = toSignal(
    this.form.valueChanges,
    {
      initialValue: this.form.getRawValue()
    }
  );

  readonly changes = toSignal(this.form.valueChanges);

  constructor() {

    effect(() => {

      this.changes();

      if (!this.form.valid) return;

      this.user.update(this.form.getRawValue());

    });

  }

}