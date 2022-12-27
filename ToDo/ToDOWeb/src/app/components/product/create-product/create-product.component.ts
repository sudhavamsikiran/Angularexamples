import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../../models/product/product.model'
import { ProductList } from '../../../models/product/product-list.model';
import { Category } from '../../../models/category/category.model'
import { TodoCRUDService } from '../../../services/todo/todo-crud.service'
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { productModule } from '../product.module';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIcon } from "@angular/material/icon"
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  createproductform = new FormGroup({
    newproductNM: new FormControl(''),
    categoryDetailsList: new FormControl(''),
    unitPrice: new FormControl('')
  });
  public productData: Product[];
  public allProductData: Product[];
  public categoryData: Category[];
  public newProduct: Product;
  public newProductName: any ;
  public retrievedProductCategory: any;
  public retrievedProductCategoryID: any
  public newProductUnitprice: any = 0.00;
  public updatedCategory: any;
  public responseStatus: any;
  public latestProductId: any;
  constructor(private todoService: TodoCRUDService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
     
    this.todoService.GetAllProducts().subscribe(data => {
      this.allProductData = data.listOfItems;
       
      if (this.allProductData?.length > 0) {
          this.latestProductId=this.allProductData[this.allProductData.length-1].productID+1;
      }
    })
    this.todoService.GetAllCategories().subscribe(
      data => {
        this.categoryData = data.listOfItems;
        if (this.categoryData?.length > 0) {
          this.retrievedProductCategoryID = this.categoryData.find(x => x.categoryName == this.retrievedProductCategory).categoryID;
          this.createproductform.controls['categoryDetailsList'].setValue(this.retrievedProductCategory, { onlyself: true })
        }
      }
    );
  }
  CreateProduct (): void {
    // this.newProductName = this.createproductform.value.newproductNM;
    // this.updatedCategory = this.createproductform.value.categoryDetailsList;
    // this.newProductUnitprice = this.createproductform.value.unitPrice;
    this.newProduct = {
      productID: this.latestProductId,
      categoryID: this.categoryData.find(x => x.categoryName == this.createproductform.value.categoryDetailsList).categoryID,
      productName: this.createproductform.value.newproductNM,
      unitPrice: this.createproductform.value.unitPrice
    } as Product;
     this.todoService.CreateProduct(this.newProduct).subscribe();
    this.router.navigate(['retrieveproducts']);

  }

}
