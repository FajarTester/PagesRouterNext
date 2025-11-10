import ProductView from "@/views/product";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../lib/swr/fetcher";


const ProductPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const { push } = useRouter()
    const [products, setProducts] = useState([])
    console.log(products)
    useEffect(() => {
        if (!isLogin) {
            push('/auth/login');
        }
    }, [isLogin, push, setIsLogin]);

    const { data, error, isLoading } = useSWR(
        "/api/product", fetcher
    )
    console.log(data, "Data Dari SWR")
    // useEffect(() => {
    //     const Data = async () => {
    //         try {
    //             const response = await axios.get('/api/product');
    //             const json = response.data;
    //             setProducts(json.data)
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     }
    //     Data()
    // }, [])

    return (
        <div>
            <ProductView products={isLoading || error ? [] : data.data} />
        </div>
    )
}

export default ProductPage;