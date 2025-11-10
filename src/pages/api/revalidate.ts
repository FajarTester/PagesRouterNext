// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    revalidated: boolean;
};

type ErrorData = {
    error: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data | ErrorData>
) {
    try {
        await res.revalidate("/product/static");
        return res.status(200).json({ revalidated: true });
    } catch (err) {
        return res
            .status(300)
            .send({ revalidated: false, error: "Failed to revalidate" });
    } finally {
        return res
            .status(500)
            .send({ revalidated: false, error: "Failed to revalidate" });
    }
}
