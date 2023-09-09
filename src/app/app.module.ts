import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from "@angular/common";
import {SharedModule} from "./shared/shared.module";
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductImageDialogComponent } from './product-image-dialog/product-image-dialog.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AdminComponent } from './admin/admin.component';
import { AddNewItemComponent } from './add-new-item/add-new-item.component';
import { ProductViewDetailComponent } from './product-view-detail/product-view-detail.component';
import { UserComponent } from './user/user.component';
import { UserOrderComponent } from './user-order/user-order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { DragDirective } from './derective/drag.directive';
import {AuthGuard} from "./auth/auth.guard";
import {AuthInterceptor} from "./auth/auth.interceptor";
import {UserService} from "./services/user.service";
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { VerifyYourEmailComponent } from './verify-your-email/verify-your-email.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CartComponent,
    ProductDetailComponent,
    ProductImageDialogComponent,
    ForbiddenComponent,
    AdminComponent,
    AddNewItemComponent,
    ProductViewDetailComponent,
    UserComponent,
    UserOrderComponent,
    OrderDetailsComponent,
    OrderConfirmationComponent,
    BuyProductComponent,
    DragDirective,
    EmailVerificationComponent,
    VerifyYourEmailComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    UserService
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
