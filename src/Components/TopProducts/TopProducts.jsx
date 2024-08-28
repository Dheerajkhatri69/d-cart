import React from 'react'
import Img1 from '../../assets/shirt/shirt.png'
import Img2 from '../../assets/shirt/shirt2.png'
import Img3 from '../../assets/shirt/shirt3.png'
import { FaStar } from 'react-icons/fa'
const ProductData = [
    {
        id: 1,
        img: Img1,
        title: "Casual Wear",
        discription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio doloribus nam ducimus cumque fugiat id"    
    },
    {
        id: 2,
        img: Img2,
        title: "Printed Shirts",
        discription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio doloribus nam ducimus cumque fugiat id"    
    },
    {
        id: 3,
        img: Img3,
        title: "Women Shirts",
        discription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio doloribus nam ducimus cumque fugiat id"    
    },
]
const TopProducts = (props) => {
  return (
    <div className='container'>
        <div className='text-left mg-24'>
            <div className='mb-20'>
            <p data-aos='fade-up' className='text-sm text-primary'>Top Rated Products for you</p>
            <h1 data-aos='fade-up' className='text-3xl font-bold'>Best Products</h1>
            <p data-aos='fade-up' className='text-xs text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus voluptatum iusto, cum, dignissimos nihil atque officiis consequatur ab quae nostrum tempore.</p>
            </div>
            <div>
                <div className='grid grid-cols-1 text-center sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
                    {ProductData.map((data)=>(
                        <div data-aos="zoom-in" key={data.id} className='rounded-2xl p-2 bg-white dark:bg-gray-800 hover:bg-primary/60 hover:bg-gray/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]'>
                            <div>
                                <img src={data.img} alt="" className='max-w-[140px] block mx-auto transform -translate-y-10 group-hover:scale-105 duration-300 drop-shadow-md'/>
                            </div>
                            <div className='w-full flex justify-center items-center gap-1'>
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                            </div>
                            <h1 className='text-xl font-bold'>{data.title}</h1>
                            <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.discription}</p>
                            <button className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary' onClick={props.handleOrderPopup}>Order Now</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopProducts
