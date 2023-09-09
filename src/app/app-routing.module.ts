import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {HomeComponent} from "./home/home.component";
import {AdminComponent} from "./admin/admin.component";
import {AuthGuard} from "./auth/auth.guard";
import {UserComponent} from "./user/user.component";
import {ForbiddenComponent} from "./forbidden/forbidden.component";
import {AddNewItemComponent} from "./add-new-item/add-new-item.component";
import {ProductResolverService} from "./services/product-resolver.service";
import {UserOrderComponent} from "./user-order/user-order.component";
import {BuyProductComponent} from "./buy-product/buy-product.component";
import {ProductViewDetailComponent} from "./product-view-detail/product-view-detail.component";
import {BuyProductResolverService} from "./services/buy-product-resolver.service";
import {CartComponent} from "./cart/cart.component";
import {OrderDetailsComponent} from "./order-details/order-details.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {OrderConfirmationComponent} from "./order-confirmation/order-confirmation.component";
import {EmailVerificationComponent} from "./email-verification/email-verification.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate:[AuthGuard], data:{roles:['Admin']} },
  { path: 'user', component: UserComponent ,  canActivate:[AuthGuard], data:{roles:['User']} },
  { path: 'login', component: LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'addNewProduct', component: AddNewItemComponent , canActivate:[AuthGuard], data:{roles:['Admin']},
    resolve: {
      product: ProductResolverService
    }},
  { path: 'showProductDetailes' , component: ProductDetailComponent ,  canActivate:[AuthGuard], data:{roles:['Admin']}},
  { path: 'orderInformation' , component: OrderDetailsComponent ,  canActivate:[AuthGuard], data:{roles:['Admin']}},
  { path: 'productViewDetails', component: ProductViewDetailComponent, resolve: { product: ProductResolverService }},
  { path: 'buyProduct' , component: BuyProductComponent, canActivate:[AuthGuard], data:{roles:['User']},
    resolve: {
      productDetails: BuyProductResolverService} },
  { path: 'cart' , component: CartComponent, canActivate:[AuthGuard], data:{roles:['User']} },
  { path: 'orderConfirm', component: OrderConfirmationComponent ,  canActivate:[AuthGuard], data:{roles:['User']} },

  { path: 'myOrders', component: UserOrderComponent ,  canActivate:[AuthGuard], data:{roles:['User']} },
  { path: 'register', component: RegisterComponent },
  { path: 'verification/:id', component: EmailVerificationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
