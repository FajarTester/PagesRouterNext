import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


type productType = {
    id: number;
    name: string;
    price: number;
    size: string;
};


const ProductPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const { push } = useRouter()
    const [products, setProducts] = useState([])
    useEffect(() => {
        if (!isLogin) {
            push('/auth/login');
        }
    }, [isLogin, push, setIsLogin]);

    useEffect(() => {
        const Data = async () => {
            try {
                const response = await axios.get('/api/product');
                const json = response.data;
                setProducts(json.data)
            } catch (err) {
                console.log(err)
            }
        }
        Data()
    }, [])

    return (
        <div>
            <h1>Product Page</h1>
            {products.map((product: productType) => {
                return (
                    <div key={product.id}>{product.name}</div>
                )
            })}
        </div>
    )
}

export default ProductPage;