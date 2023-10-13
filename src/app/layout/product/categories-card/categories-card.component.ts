import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-categories-card',
  templateUrl: './categories-card.component.html',
  styleUrls: ['./categories-card.component.scss']
})
export class CategoriesCardComponent implements OnInit {
  @Output() categoryClick = new EventEmitter<string>()
  categories = [
    {
    img: 'https://kappa.ph/cdn/shop/files/KPMKN4TS94123-2-1-KappaSportsLogoTshirt-DrkBl-Web1_1200x.jpg?v=1694051545',
    categoryName: "Men's Apparel"
    },
    {
      img: 'https://previews.123rf.com/images/innarevyako/innarevyako1911/innarevyako191100069/134744122-full-length-portrait-of-young-woman-in-a-white-shirt-and-black-pants-isolated-at-white-background.jpg',
      categoryName: "Women's Apparel"
    },
    {
      img: 'https://scontent.fmnl17-1.fna.fbcdn.net/v/t39.30808-6/299790039_977889266378787_5970308197098454786_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGWBYG7VKCfA6CYy4MW8RcL03OiyqtQP4LTc6LKq1A_gudjMPYmVfpqCt1UWeyEmxE-sXBM3N--XTFJ5esRE3tA&_nc_ohc=Obde6f5ORu4AX-YedUX&_nc_ht=scontent.fmnl17-1.fna&oh=00_AfCV80X2XG0_tH6Xu3r-ExdRzDpY_kwqQY2My8K9IwthrQ&oe=652D4824',
      categoryName: "Mobile & Gadgets"
    },
    {
      img: 'https://as1.ftcdn.net/v2/jpg/05/24/23/84/1000_F_524238409_bhBWK45g7JQn9PI2TuUgzT8iZkLhTro5.jpg',
      categoryName: "Laptop & Computers"
    },
    {
      img: 'https://img.freepik.com/premium-vector/men-s-shoes-logo-icon-design-illustration_586739-2843.jpg?w=826',
      categoryName: "Men Shoes"
    },
    {
      img: 'https://img.freepik.com/premium-vector/high-heels-shoes-logo-design-vector_523404-797.jpg?w=1380',
      categoryName: "Women Shoes"
    },
    {
      img: 'https://previews.123rf.com/images/olegtoka/olegtoka1510/olegtoka151000016/47186286-makeup-and-perfumes.jpg',
      categoryName: "Makeup & Fragnances"
    },
    {
      img: 'https://img.freepik.com/premium-vector/circle-label-hygienic-supplies-cosmetics-department-grocery-store-personal-care-goods_172149-457.jpg',
      categoryName: "Health & Personal Care"
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0514/2858/9720/files/mens-bags-wallets-featured-thumb.jpg?v=a1',
      categoryName: "Men's Bags & Accessories"
    },
    {
      img: 'https://colehaan.com.ph/cdn/shop/products/BaseTransform1_e9279c7d-1594-4daf-ae36-f33dfb180fa7_1200x1200.jpg?v=1693294968',
      categoryName: "Women's Bags & Accessories"
    },
    
]
  constructor() { }

  ngOnInit(): void {
  }

  onCategoryClick(categoryName: string){
    this.categoryClick.emit(categoryName)
  }
}
