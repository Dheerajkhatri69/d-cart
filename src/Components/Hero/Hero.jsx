import React from 'react';
import imgage1 from '../../assets/hero/women.png';
import imgage2 from '../../assets/hero/shopping.png';
import imgage3 from '../../assets/hero/sale.png';
import Slider from 'react-slick';

const ImageList = [
    {
        id: 1,
        img: imgage1,
        titel: "Upto 50% off Men's Wear",
        discription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa consequuntur, eum totam neque nihil sapiente maxime fuga harum assumenda fugit aliquid ipsa cumque ut similique incidunt quibusdam inventore aut minus illum. Sequi ex autem soluta."
    },
    {
        id: 2,
        img: imgage2,
        titel: "Upto 30% off Women's Wear",
        discription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa consequuntur, eum totam neque nihil sapiente maxime fuga harum assumenda fugit aliquid ipsa cumque ut similique incidunt quibusdam inventore aut minus illum. Sequi ex autem soluta."
    },
    {
        id: 3,
        img: imgage3,
        titel: "25% off on all products sale",
        discription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa consequuntur, eum totam neque nihil sapiente maxime fuga harum assumenda fugit aliquid ipsa cumque ut similique incidunt quibusdam inventore aut minus illum. Sequi ex autem soluta."
    }
]
const Hero = ({handleOrderPopup}) => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: 'ease-in-out',
        pauseonHover: false,
        pauseOnFocus: true
    }
    return (
        <div className='relative overflow-hidden min-h-[500px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-slate-950 dark:text-white duration-300'>
            <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]'></div>
            <div className='container pb-8 sm:pb-0'>
                <Slider {...settings}>
                    {
                        ImageList.map((data)=>(
                            <div key={data.id}>
                                <div className='grid grid-cols-1 sm:grid-cols-2'>
                                    <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                                        <h1 data-aos='zoom-out' data-aos-duration='500' data-aos-once='true' className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.titel}</h1>
                                        <p data-aos='fade-up' data-aos-duration='500' data-aos-delay='100' className='text-sm'>{data.discription}</p>
                                        <div data-aos='fade-up' data-aos-duration='500' data-aos-delay='300'>
                                            <button onClick={() => { handleOrderPopup }} className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-2 rounded-full'>Order Now</button>
                                        </div>
                                    </div>
                                    <div className='order-1 sm:-order-2'>
                                        <div data-aos='zoom-in' data-aos-once='true' className='relative z-10'>
                                            <img src={data.img} alt="" className='w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-105 lg:*:scale-120 object-center mx-auto'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}

export default Hero
