import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  
  @Input() isToggle!: boolean;

  public href: string = "";

  links: {[key: string]: boolean} = {
    'dashboard': false,
    'user-management': false,
    'product': false
  }

  constructor(private router: Router) { 

  }


  ngOnInit(): void {
    this.href = this.router.url;
    this.href = this.href.slice(1)
    
    for (const linkItem in this.links){
      if(linkItem === this.href){
        this.links[linkItem] = true
      } else {
        this.links[linkItem] = false
      }
    }
  }

  setActiveLink(link: string){
    for (const linkItem in this.links){
      if(link === linkItem){
        this.links[linkItem] = true
      } else {
        this.links[linkItem] = false
      }
    }
  }

}
