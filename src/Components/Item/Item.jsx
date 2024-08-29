import React from 'react'
import { FaStar } from 'react-icons/fa6'
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from 'react-router-dom';
const Item = (props) => {
    return (
        <div data-aos="zoom-in" key={props.id} className='rounded-2xl mt-10 p-2 bg-white dark:bg-gray-800 hover:bg-primary/60 hover:bg-gray/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[180px]'>
            <Link to={`/d-cart/product/${props.id}/`}>

                <div>
                    {/* <img src={props.image} alt="" className='max-w-[140px] rounded-2xl block mx-auto transform -translate-y-10 group-hover:scale-105 duration-300 drop-shadow-md' /> */}
                    <LazyLoadImage src={props.image} alt="" className='mx-w-[140px] rounded-2xl block mx-auto transform -translate-y-10 group-hover:scale-105 duration-300 drop-shadow-md' />
                </div>
                <div className='flex flex-col '>
                    <div className='w-full flex justify-center items-center gap-1'>
                        <FaStar className='text-yellow-500' />
                        <FaStar className='text-yellow-500' />
                        <FaStar className='text-yellow-500' />
                        <FaStar className='text-yellow-500' />
                    </div>
                    <h1 className='text-xs font-bold text-center'>{props.name}</h1>
                    <div className='flex gap-1 justify-center'>
                        <span className='line-through text-red-400'>{props.old_price}$</span>
                        <span>{props.new_price}$</span>
                    </div>
                    <button className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary'>Order Now</button>
                </div>
            </Link>
        </div>

    )
}

export default Item
