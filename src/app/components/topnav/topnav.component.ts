import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

  @Output() onToggleSideBar = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }

  onToggle(){
    this.onToggleSideBar.emit()
  }
}
