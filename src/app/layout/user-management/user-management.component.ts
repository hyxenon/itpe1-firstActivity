import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  onShowLinkContent: string = 'profile'



  constructor() { }

  ngOnInit(): void {
  }

  onLinkClick(link: string){
    this.onShowLinkContent = link
  }

}
