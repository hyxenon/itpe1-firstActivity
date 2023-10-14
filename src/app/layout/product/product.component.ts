import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  categoryTitle = 'Please Select a Category'

  mobileAndGadgets = [
    {
      img: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT5Y3ref_VW_34FR+watch-49-titanium-ultra2_VW_34FR+watch-face-49-trail-ultra2_VW_34FR?wid=2560&hei=1640&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=eldNbTRJWU9nOWtKVVpzaVh6WGlzQkZPYUtzeTRQVVJ5RG0wcnpadi96L1VYSXRUN1VQK3Nhb1hTK1VFYms2a0IzMDBvaSthcUJDc2lUMklaVFdPN1lxMHdmWUhUbHhWZXRCWndOTDlaS2tRN1BKa3NWQnFteTFKeXFMY0xRbXcwYktJSmlYYUtjV05UMDczSEc4bGFUdzg4cVc5U0dOMmdVeFY1aDl2U2dFMGNEU1JIYXljb0dUV1hSdjZEUmJQRlRnMEwxeUxkbkc1bzljcGxmSzdVQT09',
      productName: 'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport',
      price: 599,
      rating: 5
    },
    {
      img: 'https://down-ph.img.susercontent.com/file/c98037e5a60e60ec4c85e2fb73788b01',
      productName: 'Apple iPhone 14 Pro Max (6.7 inch)',
      price: 1302,
      rating: 5
    },
    {
      img: 'https://down-ph.img.susercontent.com/file/539ae1360cf9433fceeb0b507d6e185e',
      productName: 'Apple iPhone 13 6.1-inches',
      price: 809,
      rating: 4
    },
    {
      img: 'https://down-ph.img.susercontent.com/file/539ae1360cf9433fceeb0b507d6e185e',
      productName: 'Apple iPhone 13 6.1-inches',
      price: 809,
      rating: 4
    },
    {
      img: 'https://down-ph.img.susercontent.com/file/539ae1360cf9433fceeb0b507d6e185e',
      productName: 'Apple iPhone 13 6.1-inches',
      price: 809,
      rating: 4
    },{
      img: 'https://down-ph.img.susercontent.com/file/539ae1360cf9433fceeb0b507d6e185e',
      productName: 'Apple iPhone 13 6.1-inches',
      price: 809,
      rating: 4
    },
    {
      img: 'https://down-ph.img.susercontent.com/file/539ae1360cf9433fceeb0b507d6e185e',
      productName: 'Apple iPhone 13 6.1-inches',
      price: 809,
      rating: 4
    },
  ]

  laptopAndComputers = [
    {
      img: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT5Y3ref_VW_34FR+watch-49-titanium-ultra2_VW_34FR+watch-face-49-trail-ultra2_VW_34FR?wid=2560&hei=1640&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=eldNbTRJWU9nOWtKVVpzaVh6WGlzQkZPYUtzeTRQVVJ5RG0wcnpadi96L1VYSXRUN1VQK3Nhb1hTK1VFYms2a0IzMDBvaSthcUJDc2lUMklaVFdPN1lxMHdmWUhUbHhWZXRCWndOTDlaS2tRN1BKa3NWQnFteTFKeXFMY0xRbXcwYktJSmlYYUtjV05UMDczSEc4bGFUdzg4cVc5U0dOMmdVeFY1aDl2U2dFMGNEU1JIYXljb0dUV1hSdjZEUmJQRlRnMEwxeUxkbkc1bzljcGxmSzdVQT09',
      productName: 'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport',
      price: 599,
      rating: 5
    },
    {
      img: 'https://down-ph.img.susercontent.com/file/c98037e5a60e60ec4c85e2fb73788b01',
      productName: 'Apple iPhone 14 Pro Max (6.7 inch)',
      price: 1302,
      rating: 5
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onCategoryClick(categoryTitle: string){
    this.categoryTitle = categoryTitle
  }

}
