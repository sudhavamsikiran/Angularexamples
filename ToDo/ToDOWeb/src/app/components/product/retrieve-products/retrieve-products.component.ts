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

import { MatIcon } from "@angular/material/icon"
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdateProductComponent } from '../update-product/update-product.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './retrieve-products.component.html',
  styleUrls: ['./retrieve-products.component.scss']
})
export class RetriveProductComponent implements OnInit {
  retrieveproductform = new FormGroup({
    searchproductinput: new FormControl('')
  });
  products?: Product[];
  productList: ProductList = new ProductList;
  searchedproductList?: ProductList[];
  category?: Category[];
  currentProduct?: ProductList;
  currentIndex = -1;
  productName = '';
  categoryName = '';
  public searchInput: any = '';
  public showsearchdetails = 0;
  displayedColumns: string[] = ['action', 'productID', 'productName', 'category', 'description', 'unitPrice'];
  dataSource = new MatTableDataSource<ProductList>();
  @ViewChild(MatPaginator) set paginator(value: MatPaginator) { this.dataSource.paginator = value };
  @ViewChild(MatSort) set sort(value: MatSort) { this.dataSource.sort = value };

  constructor(public todoService: TodoCRUDService, public dialog: MatDialog, private route: ActivatedRoute, private router: Router,) { }
  //public browseranimationmodule:BrowserAnimationsModule,private noopAnimationsModule:NoopAnimationsModule
  ngOnInit(): void {
    this.retrieveAllProducts();

  }
  retrieveAllProducts(): void {
    this.todoService.RetrieveProducts()
      .subscribe(
        data => {
          if (data.listOfItems != null) {
            this.dataSource = new MatTableDataSource(data.listOfItems);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            this.productList = data.listOfItems;
          }
          else {
            this.dataSource = new MatTableDataSource<ProductList>([]);

          }

        },
        error => {
          console.log(error);
        });
  }

  searchProductByName(): void {
    this.showsearchdetails = 1;
    this.currentProduct = undefined;
    this.currentIndex = -1;
    this.searchInput = this.retrieveproductform.controls["searchproductinput"].value;
    this.todoService.SearchProductByName(this.retrieveproductform.controls["searchproductinput"].value).subscribe(data => {
      this.searchedproductList = data.listOfItems;
   },
      error => { console.log(error); }
    );
    console.log(this.searchInput);
    this.retrieveproductform.controls["searchproductinput"].setValue(this.searchInput);
  }
  selectActiveProduct(product: ProductList, index: number): void {
    this.currentProduct = product;
    this.currentIndex = index;
    this.searchInput = product.productName;
  }
  ClearSearchResults() {
    this.showsearchdetails = 0;
    this.searchInput = '';
    this.currentProduct = undefined;
    this.retrieveproductform.controls["searchproductinput"].setValue(this.searchInput);
    this.searchedproductList?.splice(0, this.searchedproductList.length);
  }

  UpdateProduct(prodID: any, prodName: any, cate: any, desc: any, uPrice: any): void {
    this.todoService.retrievedProductRecord = {
      productID: prodID,
      productName: prodName,
      category: cate,
      description: desc,
      unitPrice: uPrice
    } as ProductList;
    this.router.navigate(['updateproduct']);
  }

  DeleteProduct(prodId:any):void
  {
    
    var op= this.todoService.DeleteProduct(prodId).subscribe();
   this.router.navigate(['/retrieveproducts']);
   console.log(this.router);
  }
  CreateProduct()
  {
    this.router.navigate(['createproduct']);
  }
}
