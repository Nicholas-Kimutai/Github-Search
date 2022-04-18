import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';
import { DataService } from '../data.service';
import { Users } from '../users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user!:Users;
  repos:any;

  constructor() { }

  ngOnInit(): void {
  }

}
