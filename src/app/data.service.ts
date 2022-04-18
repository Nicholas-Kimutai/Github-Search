import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
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
      ((response: Users) => {
        this.users = response;

        resolve()
      },
        (error: any)=>{
        this.users.name = "Oops! We can't find a match!"

        reject(error)
        })
      })
      return promise;
    }
    getRepo(username:string){
      interface ApiResponse{
        name:string;
        html_url:string;
        description:string;
        language:string;
        created_at:Date
        
      }
      let repoUrl = 'https://api.github.com/users/'+username+'/repos?order=created&sort=asc?client_id='+environment.clientId + '&client_secret='+environment.clientSecret;
      let promise = new Promise<void>((resolve,reject) =>{
        this.http.get<ApiResponse>(repoUrl).toPromise().then
        ((response: Repo) => {
            this.repos = response;
            console.log(this.repos);
          resolve()
        },
          (error: any)=>{
          this.repos.name = "Oops! We can't find a match!"
  
          reject(error)
          })
        })
        return promise;
      }
}
