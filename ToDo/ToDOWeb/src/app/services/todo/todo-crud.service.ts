import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../models/product/product.model';
import { Category } from '../../models/category/category.model';
import { environment } from 'src/environments/environment';
import { ProductList } from 'src/app/models/product/product-list.model';

//const baseUrl = environment.APIUrl;
@Injectable({
  providedIn: 'root'
})
export class TodoCRUDService {
  public retrievedProductRecord: ProductList;
  public allProductDetails: Product[];
  public allCategory: Category[];
  private baseUrl = environment.APIUrl;
  public selectedProductID: any;
  public selectedProductName: any;
  public selectedProductCategory: any;
  public selectedProductDescription: any;
  public selectedProductUnitPrice: any;
  constructor(private http: HttpClient) { }
  GetAllProducts(): Observable<any> {
    return this.http.get(this.baseUrl + '/TODOProducts/GetAllProducts');
  }
  GetAllCategories(): Observable<any> {
    return this.http.get(this.baseUrl + '/TODOProducts/GetAllCategories');
  }
  SearchProductByName(productName: string): Observable<any> {

    return this.http.get(this.baseUrl + '/TODOProducts/SearchProductByName?productName=' + productName);
  }
  RetrieveProducts(): Observable<any> {
    return this.http.get(this.baseUrl + '/TODOProducts/RetrieveProducts')
  }
  UpdateProduct(product: Product) {
    return this.http.put(this.baseUrl + '/TODOProducts/UpdateProduct', product);
  }
  DeleteProduct(productID: any) {
    return this.http.delete(this.baseUrl+'/TODOProducts/DeleteProduct?productID='+productID)
  }
  CreateProduct(product:Product)
  {
    return this.http.post(this.baseUrl+'/TODOProducts/CreateProduct',product)
  }
  CreateCategory(category:Category)
  {
    return this.http.post(this.baseUrl+'/TODOProducts/CreateCategory',category)
  }
}
