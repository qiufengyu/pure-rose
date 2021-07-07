import {Product} from '../product';
import {ProductAction, ProductActionType} from './product.action';

export interface ProductState {
  showProductCode: boolean;
  currentProductId: number | null;
  products: Product[];
  error: string;
}

const initialState: ProductState = {
    showProductCode: true,
    currentProductId: null,
    products: [],
    error: ''
};

export const reducer = (state = initialState, action: ProductAction): ProductState => {

    switch (action.type) {

    case ProductActionType.ToggleProductCode:
        return {
            ...state,
            showProductCode: action.payload
        };
    case ProductActionType.InitializeCurrentProduct:
        return {
            ...state,
            currentProductId: 0
        };
    case ProductActionType.ClearCurrentProduct:
        return {
            ...state,
            currentProductId: null
        };
    case ProductActionType.SetCurrentProduct:
        return {
            ...state,
            currentProductId: action.payload.id
        };
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
    case ProductActionType.UpdateProductSuccess:
        return {
            ...state,
            currentProductId: action.payload.id,
            products: state.products.map(item => action.payload.id === item.id ? action.payload : item
            ),
            error: ''
        };
    case ProductActionType.UpdateProductFail:
        return {
            ...state,
            error: action.payload
        };
    case ProductActionType.CreateProductSuccess:
        return {
            ...state,
            currentProductId: action.payload.id,
            products: [
                ...state.products,
                action.payload
            ]
        };
    case ProductActionType.CreateProductFail:
        return {
            ...state,
            error: action.payload
        };
    case ProductActionType.DeleteProductSuccess:
        return {
            ...state,
            currentProductId: null,
            products: state.products.filter((p: Product) => p.id !== action.payload),
            error: ''
        };
    case ProductActionType.DeleteProductFail:
        return {
            ...state,
            error: action.payload
        };
    default:
        return state;

    }

};
