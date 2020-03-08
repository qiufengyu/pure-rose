import {Product} from '../product';
import * as fromRoot from '../../state/app.state';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ProductAction, ProductActionType} from './product.action';

export interface State extends fromRoot.State {
  product: ProductState;
}

export interface ProductState {
  showProductCode: boolean;
  currentProduct: Product;
  products: Product[];
  error: string;
}

const initialState: ProductState = {
  showProductCode: true,
  currentProduct: null,
  products: [],
  error: ''
};

const getProductFeatureState = createFeatureSelector<ProductState>('product');

export const getShowProductCode = createSelector(
  getProductFeatureState,
  state => state.showProductCode
);

export const getCurrentProduct = createSelector(
  getProductFeatureState,
  state => state.currentProduct
);

export const getProducts = createSelector(
  getProductFeatureState,
  state => state.products
);

export const getError = createSelector(
  getProductFeatureState,
  state => state.error
);

export const defaultCurrentProduct: Product = {
  id: 0,
  productName: '',
  productCode: 'New',
  description: '',
  starRating: 0
};

export function reducer(state = initialState, action: ProductAction): ProductState {
  switch (action.type) {
    case ProductActionType.ToggleProductCode:
      return {
        ...state,
        showProductCode: action.payload
      };
    case ProductActionType.InitializeCurrentProduct:
        return {
          ...state,
          currentProduct: defaultCurrentProduct
        };
    case ProductActionType.ClearCurrentProduct:
      return {
        ...state,
        currentProduct: null
      };
    case ProductActionType.SetCurrentProduct: {
      return {
        ...state,
        currentProduct: action.payload
      };
    }
    case ProductActionType.LoadSuccess:
      return {
        ...state,
        products: action.payload,
        error: ''
      };
    case ProductActionType.LoadFail:
      return {
        ...state,
        products: [],
        error: action.payload
      };
    default:
      return state;
  }
}
