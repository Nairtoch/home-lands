import axios from "axios";
import { useEffect, useState } from "react";
import { Layout } from "../../App/Layout/Layout"
import { ProductListItem } from "./ProductListItem";
import Style from "./ProductListItem.module.scss";

export const ProductList = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const getProductList = async () => {
            const result = await axios.get(`https://api.mediehuset.net/homelands/homes`)
            setProductList(result.data.items)
        }
        getProductList();
    }, [setProductList])

    return (
        <Layout title="Boliger til salg" description="Boliger til salg på HomeLands">
            <div className={Style.ProductListWrapper}>
                {productList && productList.map(product => {
                    return (
                        <ProductListItem key={product.id} data={product} />
                    )
                })
                }
            </div>
        </Layout>
    )
}