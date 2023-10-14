import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-latest-costumer-card',
  templateUrl: './latest-costumer-card.component.html',
  styleUrls: ['./latest-costumer-card.component.scss']
})
export class LatestCostumerCardComponent implements OnInit {
  @Output() onModalClick = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }

  onClickModal(){
    this.onModalClick.emit()
  }
}
