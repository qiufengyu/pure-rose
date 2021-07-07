import {Action} from '@ngrx/store';
import {Product} from '../product';

export enum ProductActionType {
  ToggleProductCode = '[Product] Toggle Product Code',
  SetCurrentProduct = '[Product] Set Current Product',
  ClearCurrentProduct = '[Product] Clear Current Product',
  InitializeCurrentProduct = '[Product] Initialize Current Product',
  Load = '[Product] Load',
  LoadSuccess = '[Product] Load Success',
  LoadFail = '[Product] Load Fail',
  UpdateProduct = '[Product] Update Product',
  UpdateProductSuccess = '[Product] Update Product Success',
  UpdateProductFail = '[Product] Update Product Fail',
  CreateProduct = '[Product] Create Product',
  CreateProductSuccess = '[Product] Create Product Success',
  CreateProductFail = '[Product] Create Product Fail',
  DeleteProduct = '[Product] Delete Product',
  DeleteProductSuccess = '[Product] Delete Product Success',
  DeleteProductFail = '[Product] Delete Product Fail'
}

export class ToggleProductCodeAction implements Action {

  readonly type = ProductActionType.ToggleProductCode;

  constructor(public payload: boolean) {
  }

}

export class SetCurrentProductAction implements Action {

  readonly type = ProductActionType.SetCurrentProduct;

  constructor(public payload: Product) {
  }

}

export class ClearCurrentProductAction implements Action {

  readonly type = ProductActionType.ClearCurrentProduct;

  constructor() {
  }

}

export class InitializeCurrentProductAction implements Action {

  readonly type = ProductActionType.InitializeCurrentProduct;

  constructor() {
  }

}

export class LoadAction implements Action {

  readonly type = ProductActionType.Load;

  constructor() {
  }

}

export class LoadSuccessAction implements Action {

  readonly type = ProductActionType.LoadSuccess;

  constructor(public payload: Product[]) {
  }

}

export class LoadFailAction implements Action {

  readonly type = ProductActionType.LoadFail;

  constructor(public payload: string) {
  }

}

export class UpdateProductAction implements Action {

  readonly type = ProductActionType.UpdateProduct;

  constructor(public payload: Product) {
  }

}

export class UpdateProductSuccessAction implements Action {

  readonly type = ProductActionType.UpdateProductSuccess;

  constructor(public payload: Product) {
  }

}

export class UpdateProductFailAction implements Action {

  readonly type = ProductActionType.UpdateProductFail;

  constructor(public payload: string) {
  }

}

export class CreateProductAction implements Action {

  readonly type = ProductActionType.CreateProduct;

  constructor(public payload: Product) {
  }

}

export class CreateProductSuccessAction implements Action {

  readonly type = ProductActionType.CreateProductSuccess;

  constructor(public payload: Product) {
  }

}

export class CreateProductFailAction implements Action {

  readonly type = ProductActionType.CreateProductFail;

  constructor(public payload: string) {
  }

}

export class DeleteProductAction implements Action {

  readonly type = ProductActionType.DeleteProduct;

  constructor(public payload: number) {
  }

}

export class DeleteProductSuccessAction implements Action {

  readonly type = ProductActionType.DeleteProductSuccess;

  constructor(public payload: number) {
  }

}

export class DeleteProductFailAction implements Action {

  readonly type = ProductActionType.DeleteProductFail;

  constructor(public payload: string) {
  }

}



export type ProductAction = ToggleProductCodeAction
  | SetCurrentProductAction
  | ClearCurrentProductAction
  | InitializeCurrentProductAction
  | LoadAction
  | LoadSuccessAction
  | LoadFailAction
  | UpdateProductAction
  | UpdateProductSuccessAction
  | UpdateProductFailAction
  | CreateProductAction
  | CreateProductSuccessAction
  | CreateProductFailAction
  | DeleteProductAction
  | DeleteProductSuccessAction
  | DeleteProductFailAction;
