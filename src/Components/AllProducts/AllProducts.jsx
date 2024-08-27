import React from 'react'
import all_product from '../Assets/all_product'
import Item from '../Item/Item'
const AllProducts = () => {

    return (
        <div className='mt-14 mb-12'>
            <div className='container'>
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <p data-aos='fade-up' className='text-sm text-primary'>Top Selling Products for you</p>
                    <h1 data-aos='fade-up' className='text-3xl font-bold'>Avilable Products</h1>
                    <p data-aos='fade-up' className='text-xs text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum fuga odit magni?</p>
                </div>
                <div>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                        {
                            all_product.map((item, i) => {
                                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                            })
                        }
                    </div>
                    <div className="flex justify-center">
                        <button className='text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md'>
                            View All
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllProducts
