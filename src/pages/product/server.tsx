import ProductView from "@/views/product";
import axios from "axios";
import { ProductType } from "../../types/product.type";
const ProductPage = ({ products }: { products: ProductType[] }) => {
    console.log(products)
    return (
        <div>
            <ProductView products={products} />
        </div>
    )
}

export default ProductPage;

// Memanggil setiap melakukan request ke server, maka dibutuhkan server-side rendering.

export async function getServerSideProps() {
    // Mengambil data dari server
    const res = await axios.get('http://localhost:3000/api/product')
    const products = Array.isArray(res.data.data) ? res.data.data : []
    return {
        props: {
            products
        }
    }
}