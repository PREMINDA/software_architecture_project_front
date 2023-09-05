import { Injectable } from '@angular/core';
import {ImageProcessingService} from "./image-processing.service";
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Product} from "../model/product.model";
import {map, Observable} from "rxjs";
import {ProductService} from "./product.service";

@Injectable({
  providedIn: 'root'
})
export class BuyProductResolverService {

  constructor(private ProductService: ProductService,
              private imageProcessingService: ImageProcessingService) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product[] | Observable<Product[]> | Promise<Product[]> {
    const id= route.paramMap.get("id");
    const isSingleProductCheckout = route.paramMap.get("isSingleProductCheckout")
    return this.ProductService.getProductDetails(isSingleProductCheckout, id)
      .pipe(
        map(
          (x: Product[], i)=> x.map((product : Product) => this.imageProcessingService.createImages(product))
        )
      );

  }
}
