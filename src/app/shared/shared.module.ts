import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatTableModule} from "@angular/material/table";
import { HeaderComponent } from './header/header.component';
import {RouterLink} from "@angular/router";

const components = [
  HeaderComponent,
];

const modules = [
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatGridListModule,
  MatTableModule,
  MatIconModule,
  MatDialogModule
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    ...modules,
    ...components
  ],
})
export class SharedModule { }
