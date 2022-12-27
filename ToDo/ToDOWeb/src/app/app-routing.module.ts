import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateProductComponent} from './components/product/create-product/create-product.component';
import {RetriveProductComponent} from './components/product/retrieve-products/retrieve-products.component';
import {CreateCategoryComponent} from './components/category/create-category/create-category.component';
import { UpdateProductComponent } from './components/product/update-product/update-product.component';
const routes: Routes = [
  { path: '', redirectTo: 'retrieveproducts', pathMatch: 'full' },
  { path: 'retrieveproducts', component: RetriveProductComponent },
  { path: 'updateproduct', component: UpdateProductComponent },
  { path: 'createproduct', component: CreateProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
