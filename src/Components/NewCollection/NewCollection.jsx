import React, { useRef, useState } from 'react'
import all_product from '../Assets/new_collections'
import Item from '../Item/Item'
import AllProducts from '../AllProducts/AllProducts'

const NewCollection = () => {
    const [showProduct, setShowProduct] = useState(false);
    
    var ref = useRef(null);
    const showP = () => {
        setShowProduct(!showProduct);
        ref.current?.scrollIntoView({behavior: 'smooth'})
    };
    return (
        <div className='mt-14 mb-12' ref={ref}>
            <div className='container' >
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <p data-aos='fade-up' className='text-sm text-primary'>New Shirt, Pants and T-Shirt for everyone!</p>
                    <h1 data-aos='fade-up' className='text-3xl font-bold'>New Collection</h1>
                    <p data-aos='fade-up' className='text-xs text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum fuga odit magni?</p>
                </div>
                <div >
                    <div className={`${showProduct ? "hidden" : "block"} grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5`}>
                        {
                            all_product.map((item, i) => {
                                return <Item key={i} item={item} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                            })
                        }
                    </div>
                    <div className={`${showProduct ? "block" : "hidden"}`}>
                            <AllProducts/>
                    </div>
                    <div className="flex justify-center">
                        <button onClick={showP}className='text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md'>
                            {showProduct ? <>See Less</> : <>View ALL</>  }
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NewCollection
