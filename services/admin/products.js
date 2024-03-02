import { put } from "api";
import { PRODUCTS_ADMIN } from "config/constants/admin/products";

export async function updateProduct() {
  try {
    const { data } = await put(PRODUCTS_ADMIN.updateProduct);
    return data;
  } catch (error) {
    return error;
  }
}
