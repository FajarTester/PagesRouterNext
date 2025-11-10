// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";
import { retrieveData, retrieveDataById } from "../../lib/firebase/service";

type Product = {
    id: string;
    category: string;
    image: string;
    name: string;
    price: number;
};

type ApiResponse = {
    status: boolean;
    statusCode: number;
    data: Product[];
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ApiResponse>
) {
    if (req.query.product![1]) {
        const result = await retrieveDataById(
            "products",
            req.query.product![1]
        );
        res.status(200).json({
            status: true,
            statusCode: 200,
            data: result as Product[],
        });
    }
    const result = await retrieveData("products");
    const productData = result as Product[];
    res.status(200).json({ status: true, statusCode: 200, data: productData });
}
