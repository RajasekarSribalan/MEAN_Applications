import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateResgister(user) {
    console.log(user);
    if (this.isEmpty(user.name) || this.isEmpty(user.username) || this.isEmpty(user.email) || this.isEmpty(user.password)) {
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  isEmpty(value) {
    return (value == null || value === '');
  }
}
