import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/productConstant";

export const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ALL_PRODUCT_REQUEST:
      return {
        loading: true,
        product: [],
      };
    case ALL_PRODUCT_SUCCESS:
      return {
        loading: false,
        product: action.payload.products,
        productCounts: action.payload.productCounts,
      };
    case ALL_PRODUCT_FAIL:
      return {
        loading: true,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
