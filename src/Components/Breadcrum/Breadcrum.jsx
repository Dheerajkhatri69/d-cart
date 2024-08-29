import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';
const Breadcrum = (props) => {
    const { product } = props;
    return (

        <div className='container flex items-center '>
            <Link to='/d-cart/'>HOME</Link>  
            <MdKeyboardDoubleArrowRight size={40}/> 
            <Link>SHOP</Link>  
            <MdKeyboardDoubleArrowRight size={40}/> 
            <Link to={`/d-cart/${product.category}`} className='capitalize'>{product.category}</Link> 
            <MdKeyboardDoubleArrowRight size={40}/> 
            <Link title={product.name} className='w-[100%] text-nowrap overflow-hidden'>
            {product.name}
            </Link>
        </div>
    )
}

export default Breadcrum
