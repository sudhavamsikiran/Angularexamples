import { Component, OnInit } from '@angular/core';
import { Category } from '../../../models/category/category.model'
import { TodoCRUDService } from '../../../services/todo/todo-crud.service'
import { FormControl, FormGroup, FormBuilder,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {

  constructor(private todoService: TodoCRUDService, private formBuilder: FormBuilder, private router: Router) { }
  createCategoryForm = new FormGroup({
    newcategoryNM: new FormControl(''),
    categoryDescription: new FormControl('')
  });
  public categoryData: Category[];
  public newCategory:Category;
  public newCategoryName:any='';
  public newcategoryDescription:any='';
  public latestCateogoryId: any;
  ngOnInit(): void {
    this.todoService.GetAllCategories().subscribe(
      data => {
        this.categoryData = data.listOfItems;
        if (this.categoryData?.length > 0) {
          this.latestCateogoryId = this.categoryData[this.categoryData.length-1].categoryID+1;
           
        }
      }
    );
  }
  CreateCategory (): void {
    this.newCategoryName = this.createCategoryForm.value.newcategoryNM;
    this.newcategoryDescription = this.createCategoryForm.value.newcategoryDescription;
     
    this.newCategory = {
       
      categoryID: this.latestCateogoryId,
       categoryName:this.createCategoryForm.value.newcategoryNM,
       description:this.createCategoryForm.value.newcategoryDescription
    } as Category;
     this.todoService.CreateProduct(this.newCategory).subscribe();
    this.router.navigate(['retrieveproducts']);

  }
}
