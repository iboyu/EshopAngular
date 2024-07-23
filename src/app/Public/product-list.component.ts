import { Component, OnInit } from '@angular/core';
import { Product } from '../Shared/Models/Product';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../Core/Services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) {}

  productsList: Product[] = [];
  sampleProduct: Product = { Id: 50000000, Name: 'Testttttttt' };

  ngOnInit(): void {
    for (let i = 0; i < 5; i++) {
      this.productsList.push({ Id: i, Name: 'Example' });
    }
    //console.log(this.productsList);
    //var ourProductsList = this.productService.GetProductList();
  }
}
