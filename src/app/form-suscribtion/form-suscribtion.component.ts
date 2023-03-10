import { Component } from '@angular/core';
import {User} from "../user";
import {UserServiceService} from "../user-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-form-suscribtion',
  templateUrl: './form-suscribtion.component.html',
  styleUrls: ['./form-suscribtion.component.scss']
})
export class FormSuscribtionComponent {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserServiceService) {
    this.user = new User();
  }

  onSubmit() {
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }
}
