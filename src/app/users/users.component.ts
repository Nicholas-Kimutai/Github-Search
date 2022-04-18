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

  constructor(public DataService:DataService) { }
  searchUser(username:string){
    this.DataService.getProfile(username).then((success)=>{
     this.user = this.DataService.users;
    },
    (error)=>{
      console.log(error)
    });
    this.DataService.getRepo(username).then((success)=>{
     this.repos = this.DataService.repos;
    },
    (error)=>{
      console.log(error)
    });
  }


  ngOnInit(): void {
    this.searchUser('Nicholas-Kimutai');
  }

}
