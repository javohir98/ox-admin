import type { ProductType } from "../helpers/types";
import api from "./mainCaller";

export const getProducts = async (params?: object) => {
  try {
    const { data } = await api.get<{
      items: ProductType[];
      page: number;
      total_count: number;
    }>("variations", { params });
    return data;
  } catch (error) {
    console.log(error);
    return { items: [], page: 1, total_count: 0 };
  }
};
