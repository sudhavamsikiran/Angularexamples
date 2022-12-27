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
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
  updateproductform = new FormGroup({
    updatedproductName: new FormControl(''),
    categoryDetailsList:new FormControl(''),
    //descriptionInfo:new FormControl(''),
    unitPrice:new FormControl('')
  });
  public productData: Product[];
  public categoryData: Category[];
  public recordforUpdate: Product;
  public retrievedProductID: any;
  public retrievedProductName: any;
  public retrievedCategoryDescription: any;
  public retrievedProductCategory: any;
  public retrievedProductCategoryID:any
  public retrievedProductUnitprice: any;
  public updatedProductName:any;
  public updatedCategory:any;
  public updatedDescription:any;
  public updatedUnitPrice:any;
 public responseStatus: any;
  constructor(private todoService: TodoCRUDService, private formBuilder: FormBuilder,private router: Router) {
  }

  ngOnInit(): void {
    this.retrievedProductID = this.todoService.retrievedProductRecord.productID;
    this.retrievedProductName = this.todoService.retrievedProductRecord.productName;
    this.retrievedCategoryDescription = this.todoService.retrievedProductRecord.description;
    this.retrievedProductCategory = this.todoService.retrievedProductRecord.category;
    this.retrievedProductUnitprice = this.todoService.retrievedProductRecord.unitPrice;
    this.updateproductform.controls['updatedproductName'].setValue(this.retrievedProductName)
    this.todoService.GetAllCategories().subscribe(
      data => {
        this.categoryData = data.listOfItems;
        if (this.categoryData?.length > 0) {
          this.retrievedProductCategoryID=this.categoryData.find(x=>x.categoryName==this.retrievedProductCategory).categoryID;
          this.updateproductform.controls['categoryDetailsList'].setValue( this.retrievedProductCategory, { onlyself: true })
        }
      }
    );
    this.updateproductform.controls["unitPrice"].setValue(this.retrievedProductUnitprice);
   }
  UpdateProduct(): void {
   
   
    this.updatedProductName=this.updateproductform.value.updatedproductName;
    this.updatedCategory=this.updateproductform.value.categoryDetailsList;
    this.updatedDescription=this.updateproductform.value.descriptionInfo;
    this.updatedUnitPrice=this.updateproductform.value.unitPrice;
     this.recordforUpdate={
       productID:this.retrievedProductID,
      categoryID:this.categoryData.find(x=>x.categoryName==this.updateproductform.value.categoryDetailsList).categoryID,
      productName:this.updateproductform.value.updatedproductName,
      unitPrice:this.updateproductform.value.unitPrice
      } as Product;
        this.todoService.UpdateProduct(this.recordforUpdate).subscribe ();
        this.router.navigate(['retrieveproducts']);

  }
  
   
}
