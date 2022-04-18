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
   getProfile(username:string){
    interface ApiResponse{
        name:string;
        login: string;
        url:string
        avatar_url:string;
        followers:number;
        following:number;
        public_repos:number;
    } let userUrl = 'https://api.github.com/users/'+username+'?client_id='+environment.clientId + "&client_secret="+environment.clientSecret;

    let promise = new Promise<void>((resolve,reject) =>{
      this.http.get<ApiResponse>(userUrl).toPromise().then
      (response => {
        this.user = response;

        resolve()
      },
      error=>{
        this.user.name = "We couldn’t find any users matching the name given"

        reject(error)
        })
      })
      return promise;
    }
}
