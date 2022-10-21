import { CategoryItem } from "../categories/category.types";

export enum CART_ACTION_TYPES {
  SET_CART_ITEMS = "CART/SET_CART_ITEMS",
  TOGGLE_OPEN_CART_DROPDOWN = "CART/TOGGLE_OPEN_CART_DROPDOWN",
}

export interface CartItem extends CategoryItem {
  quantity: number;
}
