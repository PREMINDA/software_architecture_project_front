import { Component } from '@angular/core';
import {ProductService} from "../services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  displayedColumns: string[] = ['Name', 'Description', 'Price' , 'Discounted Price' ,'Action'];
  cartDetails : any[] = [];

  constructor(private productService : ProductService,
              private router : Router) { }

  ngOnInit(): void {
    this.getCartDetails();
  }

  delete(cartId : number){
    console.log(cartId)
    this.productService.deleteCartItem(cartId).subscribe(
      (resp) => {
        console.log(resp);
        this.getCartDetails();

      },(error) =>{
        console.log(error);
      }
    )
  }

  getCartDetails(){

    this.productService.getCartDetails().subscribe(
      (response : any) => {
        console.log(response)
        this.cartDetails = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  checkout(){
    this.router.navigate(['/buyProduct', {
      isSingleProductCheckout: false, id: 0
    }]);
    // this.productService.getProductDetails(false, 0).subscribe(
    //   (resp) => {
    //     console.log(resp);
    //   },(error) =>{
    //     console.log(error);
    //   }
    // );
  }
}
