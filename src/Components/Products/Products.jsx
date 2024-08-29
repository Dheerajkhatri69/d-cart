import React from 'react'
import p37_img from "../Assets/women.png";
import p38_img from "../Assets/product_38.jpeg";
import p39_img from "../Assets/women3.jpg";
import p40_img from "../Assets/women4.jpg";
import p41_img from "../Assets/product_41.jpeg";
import { FaStar } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const ProductData = [
    {
        id: 37,
        img: p37_img,
        title: "Women Ethnic",
        rating: 5.0,
        new_price: 50,
        old_price: 90,
        color: "white",
        aosDelay: 0
    },
    {
        id: 38,
        img: p38_img,
        title: "Women Western",
        rating: 4.9,
        new_price: 50,
        old_price: 80,
        color: "Red",
        aosDelay: 200
    },
    {
        id: 39,
        img: p39_img,
        title: "Goggles",
        rating: 4.5,
        new_price: 25,
        old_price: 60,
        color: "Brown",
        aosDelay: 400
    },
    {
        id: 40,
        img: p40_img,
        title: "Women Ethnic",
        rating: 5.0,
        new_price: 50,
        old_price: 80,
        color: "Yello",
        aosDelay: 600
    },
    {
        id: 41,
        img: p41_img,
        title: "Women Ethnic",
        rating: 4.7,
        new_price: 60,
        old_price: 100,
        color: "black",
        aosDelay: 800
    }
]
const Products = () => {
  return (
    <div className='mt-14 mb-12'>
        <div className='container'>
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p data-aos='fade-up' className='text-sm text-primary'>Top Selling Products for you</p>
                <h1 data-aos='fade-up' className='text-3xl font-bold'>Products</h1>
                <p data-aos='fade-up' className='text-xs text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum fuga odit magni?</p>
            </div>
            <div>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                    {ProductData.map((data)=>(
                        <Link to={`/d-cart/product/${data.id}/`} key={data.id}>
                        <div data-aos='fade-up' data-aos-delay={data.aosDelay}  className='space-y-3'>
                            <img src={data.img} alt="" className='h-[220px] w-[150px] object-cover rounded-md cursor-pointer hover:scale-105 duration-300'/>
                            <div>
                                <h3 className='font-semibold'>{data.title}</h3>
                                <p className='text-sm text-gray-600'>{data.color}</p>
                                <div className='flex gap-1'>
                                    <span className='line-through text-red-400'>{data.old_price}$</span>
                                    <span>{data.new_price}$</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <FaStar className="text-yellow-400"/>
                                    <span>{data.rating}</span>
                                </div>
                            </div>
                        </div>
                        </Link>
                    ))}
                </div>
                {/* <div className="flex justify-center">
                    <button className='text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md'>
                        View All
                    </button>
                </div> */}
            </div>
        </div>
    </div>
  )
}
export default Products
