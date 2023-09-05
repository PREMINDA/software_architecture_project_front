import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-product-image-dialog',
  templateUrl: './product-image-dialog.component.html',
  styleUrls: ['./product-image-dialog.component.css']
})
export class ProductImageDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.receiveImages();
  }

  receiveImages(){
    console.log(this.data);
  }
}
