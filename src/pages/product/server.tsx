import ProductView from "@/views/product";
import { ProductType } from "@/types/product.type";
import { getAllProducts } from "@/lib/service/product.service";
const ProductPage = ({ product }: { product: ProductType[] }) => {
    return (
        <div>
            <ProductView products={product} />
        </div>
    )
}

export default ProductPage;

// Memanggil setiap melakukan request ke server, maka dibutuhkan server-side rendering.

export async function getServerSideProps() {
    // Mengambil data dari server
    const res = await getAllProducts();
    const product = Array.isArray(res) ? res : []
    console.log(product, "Data Baru Dari Server Side Props")
    return {
        props: {
            product
        }
    }
}