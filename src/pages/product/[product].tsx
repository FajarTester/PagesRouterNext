import { getAllProducts, getProductsByParams } from "@/lib/service/product.service";
import { fetcher } from "@/lib/swr/fetcher";
import { ProductType } from "@/types/product.type";
import DetailProduct from "@/views/DetailProduct";
import axios from "axios";
import { query } from "firebase/firestore";
import { useRouter } from "next/router";
import useSWR from "swr";

const DetailProductPage = ({ product }: { product: ProductType }) => {
    // Client-side
    // const { query } = useRouter();
    // const { data, error, isLoading } = useSWR(
    //     `/api/product/${query.product}`, fetcher
    // );

    // if (isLoading) return <div>Loading...</div>;
    // if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            {/* client-side */}
            {/* <DetailProduct product={data.data}></DetailProduct> */}
            {/* server-side & static-side */}
            <DetailProduct product={product} />
        </div>
    );
};

export default DetailProductPage;

// Server-side
// export async function getServerSideProps({ params }: { params: { product: string } }) {
//     try {
//         const res = await axios.get(`http://localhost:3000/api/product/${params.product}`)
//         const product = res.data.data
//         return {
//             props: {
//                 product
//             }
//         }
//     } catch (err) {
//         console.log(err)
//         return {
//             props: {
//                 product: []
//             }
//         }
//     }
// }

// Static-side

export async function getStaticPaths() {
    const response = await getAllProducts();
    const paths = response.map((product: ProductType) => ({
        params: {
            product: String(product.id),
        }

    }))

    return { paths, fallback: false }
}


export async function getStaticProps({ params }
    :
    {
        params: { product: string }
    }) {

    const product = await getProductsByParams(params.product)

    console.log(product)
    return {
        props: {
            product
        }
    }
}