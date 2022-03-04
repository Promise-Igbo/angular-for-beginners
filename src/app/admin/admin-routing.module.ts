import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { UpdateCategoryComponent } from './category/edit/index.component';
import { CreateCuisineComponent } from './create-cuisine/create-cuisine.component';
import { CuisineViewComponent } from './cuisine-view/cuisine-view.component';
import { EditCuisineComponent } from './edit-cuisine/edit-cuisine.component';

const routes: Routes = [  
  {
    path: 'cuisine',
    component: CuisineViewComponent,
  }  ,
  {
    path: 'category',
    component: CategoryComponent,
  },
  {
    path: 'cuisine/create',
    component: CreateCuisineComponent,
  } ,
  {
    path: 'cuisine/edit/:cuisineId',
    component: EditCuisineComponent,
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

export const routedComponents = [
    CuisineViewComponent  ,
    CreateCuisineComponent,
    UpdateCategoryComponent,
    CategoryComponent
];