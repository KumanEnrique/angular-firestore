import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {ProductService} from '../../services/product.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = [];
  editingProduct:Product;
  editing: boolean = false

  constructor(public productService:ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(product =>{
      console.log(product)
      this.products = product
    })
  }

  deleteProduct(product){
    this.productService.deleteProduct(product)
  }
  editProduct(product){
    this.editingProduct = product
    // console.log("p",product)
    // console.log("e",this.editingProduct)
    this.editing = true
  }
  updateProduct(){
    this.productService.updateProduct(this.editingProduct)
    this.editingProduct = {}
    this.editing = false
  }
}
