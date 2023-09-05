import { Component } from '@angular/core';
import {OrderDetails} from "../model/order-detail.model";
import {Product} from "../model/product.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../services/product.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent {
  isSingleProductCheckout : string | null = "";
  productDetails : Product[]=[];
  orderDetails: OrderDetails={
    fullName : '',
    fullAddress: '',
    contactNumber : '',
    alternateContactNumber : '',
    orderProductQuantityList : []
  }
  constructor( private activatedRoute: ActivatedRoute,
               private productService : ProductService,
               private router: Router) { }

  ngOnInit(): void {
    this.productDetails= this.activatedRoute.snapshot.data['productDetails'];

    this.isSingleProductCheckout = this.activatedRoute.snapshot.paramMap.get("isSingleProductCheckout");
    this.productDetails.forEach(
      (x: Product) => this.orderDetails.orderProductQuantityList.push(
        {productId: x.productId, quantity: 1
        }
      )
    );
    console.log(this.productDetails);
    console.log(this.orderDetails);
  }

  public placeOrder(orderForm : NgForm){
    this.productService.placeOrder(this.orderDetails, this.isSingleProductCheckout).subscribe(
      (resp) => {
        console.log(resp);
        orderForm.reset();
        this.router.navigate(["/orderConfirm"])
      },
      (err) => {
        console.log(err);
      }
    );

  }

  getQuantityForProduct(productId : number){
    const filterProduct = this.orderDetails.orderProductQuantityList.filter(
      (productQuantity) => productQuantity.productId === productId
    );
    return filterProduct[0].quantity;

  }

  getCalculatedTotal(productId:number, productDiscountedPrice:number){
    const filterProduct = this.orderDetails.orderProductQuantityList.filter(
      (productQuantity) => productQuantity.productId === productId
    );
    return filterProduct[0].quantity*productDiscountedPrice;

  }

  onQuantityChanged(q:number, productId:number){
    this.orderDetails.orderProductQuantityList.filter(
      (orderProduct) => orderProduct.productId === productId
    )[0].quantity=q;
  }

  getCalculatedGrandTotal(){
    let grandTotal = 0;
    this.orderDetails.orderProductQuantityList.forEach(
      (productQuantity) => {
        const price=this.productDetails.filter(product => product.productId === productQuantity.productId)[0].productDiscountedPrice
        grandTotal+=price*productQuantity.quantity;
      }
    );
    return grandTotal;
  }
}
