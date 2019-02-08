import { AuthService } from './../../_services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from './../../_services/alertify.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService, private alertify: AlertifyService,
              private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.users = data['users'];
    });
    for (let i = 0; i < this.users.length; i++)  {
      if (this.users[i].id === +this.authService.decodedToken.nameid ) {
        this.users.splice(i, 1);
      }
    }
  }

}
