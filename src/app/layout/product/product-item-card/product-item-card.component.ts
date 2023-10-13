import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item-card',
  templateUrl: './product-item-card.component.html',
  styleUrls: ['./product-item-card.component.scss']
})
export class ProductItemCardComponent implements OnInit {
  @Input() img!: string
  @Input() productName!: string
  @Input() price!: number
  @Input() rating!: number
  constructor() { }

  ngOnInit(): void {
  }

}
