import React from 'react'
import { GiFoodTruck } from 'react-icons/gi';
import Slider from 'react-slick'

const DisplayProduct = (props) => {
    const { product } = props;

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        pauseonHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 8000,
                settings: {
                    slideToShow: 3,
                    slideToscroll: 1,
                    Infinite: true
                }
            },
            {
                breakpoint: 1042,
                settings: {
                    slideToShow: 2,
                    slideToScroll: 1,
                    initialSlider: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slideToShow: 1,
                    slideToScroll: 1
                }
            }
        ]
    }
    return (
        <div className='relative overflow-hidden bg-gray-100 dark:bg-slate-950 dark:text-white duration-300'>
            <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]'></div>

            <div className='container mb-10 '>
                <div className='rounded-md grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
                    <div data-aos="zoom-in">
                        <Slider {...settings}>
                            {
                                [...Array(5)].map((_, i) => (
                                    <div key={product.id} className="my-10">
                                        <div className='flex flex-col gap-4 shadow-lg py-6 px-6 mx-10 rounded-xl bg-primary/10 relative'>
                                            <div className='flex justify-center'>
                                                <img src={product.image} alt="Sorry image not loaded" className='rounded-xl m-200 h-200' />
                                            </div>
                                            <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'></p>
                                        </div>
                                    </div>
                                ))

                            }
                        </Slider>
                    </div>
                    <div className='container pb-4'>
                        <h1 data-aos="fade-up" className='text-xl sm:text-3xl font-bold'>{product.name}</h1>
                        <p data-aos="fade-up" className='text-gray-500 text-sm tracking-wide leading-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt explicabo numquam officia.</p>
                        <div className='flex mt-2 flex-col gap-2'>
                            <div data-aos="fade-up" className='flex items-center gap-4 text-xl'>
                                <span className='line-through text-red-400'>{product.old_price}$</span>
                                <span >{product.new_price}$</span>
                            </div>
                            <div data-aos='fade-up' className='flex flex-col gap-1'>
                                <h1>Select Size</h1>
                                <div className="flex gap-2 text-black text-l">
                                    <div className='bg-orange-100 w-10 flex justify-center py-1 items-center shadow-lg text-center rounded-md hover:bg-orange-400 cursor-pointer duration-200'>S</div>
                                    <div className='bg-orange-100 w-10 flex justify-center items-center shadow-lg text-center rounded-md hover:bg-orange-400 cursor-pointer duration-200'>M</div>
                                    <div className='bg-orange-100 w-10 flex justify-center items-center shadow-lg text-center rounded-md hover:bg-orange-400 cursor-pointer duration-200'>L</div>
                                    <div className='bg-orange-100 w-10 flex justify-center items-center shadow-lg text-center rounded-md hover:bg-orange-400 cursor-pointer duration-200'>XL</div>
                                    <div className='bg-orange-100 w-10 flex justify-center items-center shadow-lg text-center rounded-md hover:bg-orange-400 cursor-pointer duration-200'>XXL</div>
                                </div>
                            </div>
                            <button data-aos="fade-up" className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 hover:bg-white border-solid border-2 border-primary hover:text-primary'>Order Now</button>
                            <p className="text-sm capitalize"><span>{product.category}: </span>Women , T-Shirt , Crop Top</p>
                            <p className="text-sm"><span>Tags: </span>Modern , Latest</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayProduct
