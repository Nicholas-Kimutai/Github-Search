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
  users!:Users;
  repos:any;

  constructor(public DataService:DataService) { }
  searchUsers(usersname:string){
    this.DataService.getProfile(usersname).then((success)=>{
     this.users = this.DataService.users;
    },
    (error)=>{
      console.log(error)
    });
    this.DataService.getRepo(usersname).then((success)=>{
     this.repos = this.DataService.repos;
    },
    (error)=>{
      console.log(error)
    });
  }


  ngOnInit(): void {
    this.searchUsers('Nicholas-Kimutai');
  }

}
