import {CommonModule} from "@angular/common";
import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RetriveProductComponent} from "../product/retrieve-products/retrieve-products.component";
import { CreateProductComponent } from "../product/create-product/create-product.component";
import { UpdateProductComponent } from '../product/update-product/update-product.component';
import { DeleteProductComponent } from '../product/delete-product/delete-product.component'
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
imports:[
    FormsModule,
    ReactiveFormsModule,HttpClientModule,BrowserModule,CommonModule,MatFormFieldModule,MatInputModule,MatTableModule,MatPaginatorModule,MatIconModule,
    MatDialogModule
     
],
declarations:[
    RetriveProductComponent,
    CreateProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    
    
],
providers:[],
bootstrap:[RetriveProductComponent]
})
export class productModule{}
 