import {CommonModule} from "@angular/common";
import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { CreateCategoryComponent } from "./create-category/create-category.component";

@NgModule({
imports:[
    FormsModule,
    ReactiveFormsModule,HttpClientModule,BrowserModule,CommonModule,MatFormFieldModule,MatInputModule,MatTableModule,MatPaginatorModule,MatIconModule,
    MatDialogModule
     
],
declarations:[
    // RetriveProductComponent,
    // CreateProductComponent,
    // UpdateProductComponent,
    // DeleteProductComponent,
    CreateCategoryComponent
    
    
],
providers:[],
bootstrap:[CreateCategoryComponent]
})
export class categoryModule{}
 