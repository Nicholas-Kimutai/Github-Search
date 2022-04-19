import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { Users } from '../users';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public usersQuery!: string;
  @Output() searchResult = new EventEmitter<any>()

  constructor() { }
  searchUsers(){
    this.searchResult.emit(this.usersQuery);
  }

  ngOnInit(): void {
  }

}
