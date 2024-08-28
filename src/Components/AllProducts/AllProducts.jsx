import React from 'react'
import all_product from '../Assets/all_product'
import Item from '../Item/Item'
const AllProducts = () => {

    return (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
            {
                all_product.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })
            }
        </div>
    )
}

export default AllProducts
