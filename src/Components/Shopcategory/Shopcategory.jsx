import React from 'react'
import Slider from 'react-slick'
import banner1 from './Banners/banner_1.png'
import banner2 from './Banners/banner_2.png'
import banner3 from './Banners/banner_3.png'
import men1 from './Banners/banner_men1.png'
import men2 from './Banners/banner_men2.png'
import men3 from './Banners/banner_men3.png'
import women1 from './Banners/banner_women1.png'
import women2 from './Banners/banner_women2.png'
import women3 from './Banners/banner_women3.png'
import kid1 from './Banners/banner_kid1.png'
import kid2 from './Banners/banner_kid2.png'
import kid3 from './Banners/banner_kid3.png'
import Item from '../Item/Item'
import all_product from '../Assets/all_product'
const Testimonialsdata = [
    {
        id: 1,
        type: 'men',
        img: men1
    },
    {
        id: 2,
        type: 'men',
        img: men2
    },
    {
        id: 3,
        type: 'men',
        img: men3
    },
    {
        id: 4,
        type: 'women',
        img: women1
    },
    {
        id: 5,
        type: 'women',
        img: women2
    },
    {
        id: 6,
        type: 'women',
        img: women3
    },
    {
        id: 7,
        type: 'kid',
        img: kid1
    },
    {
        id: 8,
        type: 'kid',
        img: kid2
    },
    {
        id: 9,
        type: 'kid',
        img: kid3
    },
    {
        id: 10,
        type: 'banner',
        img: banner1
    },
    {
        id: 11,
        type: 'banner',
        img: banner2
    },
    {
        id: 12,
        type: 'banner',
        img: banner3
    }
]

const Shopcategory = (props) => {
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
        <div className='mb-12'>
            <div className='container max-w-[1000px] mb-20'>
                <div data-aos="zoom-in">
                    <Slider {...settings}>
                        {
                            Testimonialsdata.map((data) => (
                                data.type === props.category ? (
                                    <div key={data.id} className="my-6">
                                        <div className='flex flex-col gap-4 shadow-lg py-6 px-6 mx-4 rounded-xl dark:bg-slate-600 bg-primary/10 relative'>
                                            <div className='flex justify-center'>
                                                <img src={data.img} alt="Sorry image not loaded" className='rounded-xl m-200 h-200' />
                                            </div>
                                            <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'></p>
                                        </div>
                                    </div>
                                ) : null
                            ))

                        }
                    </Slider>
                </div>
            </div>
            <div className='container' >
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <p data-aos='fade-up' className='text-sm text-primary'>New Shirt, Pants and T-Shirt</p>
                    <h1 data-aos='fade-up' className='text-3xl font-bold'>{
                        props.category === "men" ? "MEN COLLECTION" :
                        props.category === "women" ? "WOMEN COLLECTION" :
                        props.category === "kid" ? "KIDS COLLECTION" : 
                        "TOP RATED"
                    }</h1>
                    <p data-aos='fade-up' className='text-xs text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum fuga odit magni?</p>
                </div>
                <div >
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

export default Shopcategory
