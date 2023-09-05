import { Injectable } from '@angular/core';
import {ProductService} from "./product.service";
import {ImageProcessingService} from "./image-processing.service";
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {map, Observable, of} from "rxjs";
import {Product} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService {

  constructor(private productService: ProductService,
              private imageProcessingService: ImageProcessingService) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
    const id=route.paramMap.get("productId");

    if(id){
      return this.productService.getProductDetailsById(id)
        .pipe(
          map(p => this.imageProcessingService.createImages(p))
        );
    }else{
      return of(this.getProductDetails());

    }

  }

  getProductDetails(){
    return {
      productId: null,
      productName: "",
      productDescription: "",
      productDiscountedPrice: 0,
      productActualPrice: 0,
      productImages:[],
    } as Product;
  }
}
