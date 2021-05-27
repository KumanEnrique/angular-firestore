import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

import {ProductService} from '../../services/product.service'

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product = {} as Product
  constructor(public productServive: ProductService) { }
  
  ngOnInit(): void {
  }
  
  addProduct(){
    if(this.product.name !== "" && this.product.description !== "" && this.product.price !== 0){
      this.productServive.addProducts(this.product)
      console.log("se agrego",this.product)
    }else{
      console.log("salio mal",)
    }
    this.product = {} as Product
    
    return false
  }
  // addProduct(name:HTMLInputElement,desciption:HTMLInputElement,price:HTMLInputElement){
  //   console.log(name.value,desciption.value,price.value)
  //   return false
  // }
}
