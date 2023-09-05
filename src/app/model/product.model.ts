import {FileHandel} from "./file-handle";

export interface Product {
  productImages: FileHandel[];
  productId: number,
  productName: String,
  productDescription: String,
  productDiscountedPrice: number,
  productActualPrice: number,
}
