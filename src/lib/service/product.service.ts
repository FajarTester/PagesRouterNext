import { ProductType } from "@/types/product.type";
import axios from "axios";

export const getAllProducts = async () => {
    try {
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/product`
        );
        const data = response.data.data;
        return data;
    } catch (err) {
        if (err instanceof Error) {
            console.error("Error in getProducts:", err.message || err);
        } else {
            console.error("Unknown error in getProducts:", err);
        }
    }
    return [];
};

export const getProductsByParams = async (
    params: string
): Promise<ProductType | null> => {
    try {
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/${params}`
        );
        const data = response.data.data;
        return data;
    } catch (err) {
        if (err instanceof Error) {
            console.error("Error in getProducts:", err.message || err);
        } else {
            console.error("Unknown error in getProducts:", err);
        }
    }
    return null;
};
