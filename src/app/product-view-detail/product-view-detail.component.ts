import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../model/product.model";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-product-view-detail',
  templateUrl: './product-view-detail.component.html',
  styleUrls: ['./product-view-detail.component.css']
})
export class ProductViewDetailComponent {
  selectProductIndex = 0;
  product!: Product;

  constructor(private activatedRoute: ActivatedRoute, private router : Router,
              private productService: ProductService) { }

  ngOnInit(): void {

    this.product = this.activatedRoute.snapshot.data['product'];

  }

  changeIndex(index:number){
    this.selectProductIndex=index;
  }

  buyProduct(productId:number){
    this.router.navigate(['/buyProduct', {
      isSingleProductCheckout: true, id: productId
    }]);
  }

  addToCart(productId:number){
    this.productService.addToCart(productId).subscribe(
      (response) => {
        console.log(response);
      },(error) => {
        console.log(error)
      }
    )

  }
}
