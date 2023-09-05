import { Component } from '@angular/core';
import {MyOrderDetails} from "../model/order.model";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {
  displayedColumns: string[] = ['Id', 'Product Name', 'Name', 'Address', 'Contact No' ,'Status'];
  dataSource:any = [];
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.getAllOrderDetailsForAdmin();
  }

  getAllOrderDetailsForAdmin(){
    this.productService.getAllOrderDetailsForAdmin().subscribe(
      (resp) => {
        console.log(resp);
        this.dataSource = resp;
      }, (error) => {
        console.log(error);
      }
    );
  }
}
