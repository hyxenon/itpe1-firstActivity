import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  salesPerWeekData = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets:[
      {
        data: [89, 34, 43, 54, 28, 74, 93],
        label: 'Sales Per Week',
      }
    ]

  }

  salesByMonth = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets:[{
      data: [1,2,3,4,5,6,7,8,9,10,11,12],
      label: 'Monthly Sales'
    },
    
  ]
  }


  salesByCategory = {
    labels: ['Mobiles & Gadgets', 'Laptops & Computers', "Men's Apparel", "Women's Apparel", 'Men Shoes', 'Women Shoes', 'Makeup & Fragnances', 'Health & Personal Care', "Men's Bags & Accessories", "Women's Bags & Accessories"],
    datasets:[{
      data: [10,5,20,21,5,10,50,30,20,100],
      label: 'Sales by Category'
    },
    
  ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
