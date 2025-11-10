import ProductView from "@/views/product";

import { ProductType } from "../../types/product.type";

import { getAllProducts } from "@/lib/service/product.service";
const ProductPage = ({ products }: { products: ProductType[] }) => {
    return (
        <div>
            <ProductView products={products} />
        </div>
    )
}

export default ProductPage;


export async function getStaticProps() {

    const products = await getAllProducts()
    console.log(products, "Data Baru Dari Static Props")
    return {
        props: {
            products
        },
        // revalidate: 10
    }
}