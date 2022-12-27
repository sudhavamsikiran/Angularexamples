import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
// import { CreateProductComponent } from './components/product/create-product/create-product.component';
// import { RetrieveProductComponent } from './components/product/retrieve-product/retrieve-product.component';
// import { ProductListComponent } from './components/product/product-list/product-list.component';
// import { CreateCategoryComponent } from './components/category/create-category/create-category.component';
// import { RetrieveCategoryComponent } from './components/category/retrieve-category/retrieve-category.component';
// import { CategoryListComponent } from './components/category/category-list/category-list.component';
import {productModule} from './components/product/product.module';
import { categoryModule } from './components/category/category.module';
import { from } from 'rxjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule,productModule, NgbModule,MatFormFieldModule,
    MatInputModule,MatTableModule,MatPaginatorModule,categoryModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
