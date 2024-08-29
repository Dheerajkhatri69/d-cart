import React from 'react'
import all_product from '../Assets/all_product'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Breadcrum/Breadcrum';
import RelativeProducts from '../RelativeProducts/RelativeProducts';
import DisplayProduct from '../DisplayProduct/DisplayProduct';
const Product = () => {
    const { productId } = useParams(all_product);
    const product = all_product.find((e) => e.id === Number(productId));
    return (
        <div>
            <Breadcrum product={product} />
            <DisplayProduct product={product} />
            <RelativeProducts category={product.category}/>
        </div>
    )
}

export default Product
