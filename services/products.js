import { get } from "api";

export const getProductById = async (id) => {
  const response = await get(`/api/products/${id}`);
  return response;
};
