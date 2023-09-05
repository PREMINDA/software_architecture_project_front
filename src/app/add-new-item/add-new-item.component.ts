import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "../model/product.model";
import {ProductService} from "../services/product.service";
import {DomSanitizer} from "@angular/platform-browser";
import {NgForm} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";
import {FileHandel} from "../model/file-handle";

@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.css']
})
export class AddNewItemComponent {
  isNewProduct = true;
  product: Product = {
    productId: null,
    productName: "",
    productDescription: "",
    productDiscountedPrice: 0,
    productActualPrice: 0,
    productImages:[]
  }

  constructor(private productService: ProductService,
              private sanitizer: DomSanitizer,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.product = this.activatedRoute.snapshot.data['product'];

    if(this.product && this.product.productId){
      this.isNewProduct=false;
    }

  }

  addProduct(productForm: NgForm){
    const productFormData = this.prepareFormData(this.product);
    this.productService.addProduct(productFormData).subscribe(
      (response: Product)=>{
        productForm.reset();
        this.product.productImages = [];
      },
      (error: HttpErrorResponse)=>{
        console.log(error)
      }
    );

  }

  prepareFormData(product: Product): FormData {
    const formData = new FormData();

    formData.append(
      'product',
      new Blob([JSON.stringify(product)], {type: 'application/json'})
    );

    for(var i=0; i<product.productImages.length; i++){
      formData.append(
        'imageFile',
        product.productImages[i].file,
        product.productImages[i].file.name
      );
    }

    return formData;
  }

  onFileSelected(event: any){
    if(event.target.files){
      const file= event.target.files[0];
      const fileHandel: FileHandel ={
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        ),
      };
      this.product.productImages.push(fileHandel);
    }
  }

  removeImages(i: number){
    this.product.productImages.splice(i,1);
  }

  fileDropped(fileHandel : FileHandel) {
    this.product.productImages.push(fileHandel);
  }
}
