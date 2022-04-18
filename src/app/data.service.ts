import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Users} from './users';
import {Repo} from './repo';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  repos!: Repo;
  users!:Users;

  constructor() {
    this.users = new Users("",0,0,0,"","","");
    this.repos = new Repo("","","","",new Date());
   }
}
