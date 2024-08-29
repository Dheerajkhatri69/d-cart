import React from 'react'
import Item from '../Item/Item'
import all_product from '../Assets/all_product'

const RelativeProducts = (props) => {
    return (
        <div className='mb-5'>
            <div className='container' >
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <p data-aos='fade-up' className='text-sm text-primary'>New Shirt, Pants and T-Shirt</p>
                    <h1 data-aos='fade-up' className='text-3xl font-bold'>Related Products</h1>
                    <p data-aos='fade-up' className='text-xs text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum fuga odit magni?</p>
                </div>
                <div>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                        {
                            all_product.map((item, i) => {
                                if (props.category === item.category) {
                                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                                } else if (props.category === "banner") {
                                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                                } else {
                                    null
                                }
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RelativeProducts
