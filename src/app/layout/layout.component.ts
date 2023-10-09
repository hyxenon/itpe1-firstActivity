import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  isToggle: boolean = false;

  ngOnInit(): void {
  }

  onToggleBar(event: any){
    this.isToggle = !this.isToggle
    console.log(this.isToggle);
    
    
  }
}
