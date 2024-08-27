import React from 'react'
import Slider from 'react-slick'

const Testimonialsdata = [
    {
        id: 1,
        name: "Victor",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero itaque similique quod est nulla suscipit nemo. Similique nemo fuga odio quos suscipit. Praesentium explicabo saepe cum id. Temporibus blanditiis velit reprehenderit incidunt.",
        img: "https://picsum.photos/101/101?shirt"
    },
    {
        id: 2,
        name: "Dheeraj",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero itaque similique quod est nulla suscipit nemo. Similique nemo fuga odio quos suscipit. Praesentium explicabo saepe cum id. Temporibus blanditiis velit reprehenderit incidunt.",
        img: "https://picsum.photos/109/109?shirt"
    },
    {
        id: 3,
        name: "Ali",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero itaque similique quod est nulla suscipit nemo. Similique nemo fuga odio quos suscipit. Praesentium explicabo saepe cum id. Temporibus blanditiis velit reprehenderit incidunt.",
        img: "https://picsum.photos/103/103?shirt"
    }
]

const Testimonials = () => {
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
                    slideToShow:3,
                    slideToscroll:1,
                    Infinite:true
                }
            },
            {
                breakpoint: 1042,
                settings: {
                    slideToShow:2,
                    slideToScroll:1,
                    initialSlider:2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slideToShow:1,
                    slideToScroll:1
                }
            }
        ]
    }
    return (
        <div className=' py-10 mb-10'>
            <div className='container'>
                <div className='text-center mb-10 mx-w-[600px] mx-auto'>
                    <p data-aos='fade-up' className='text-sm text-primary'>What out customers saying</p>
                    <h1 data-aos='fade-up' className='text-3xl font-bold'>Testimonials</h1>
                    <p data-aos='fade-up' className='text-xs text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, nesciunt magnam fuga saepe voluptatum, recusandae earum id ab voluptate obcaecati nostrum?</p>
                </div>
                <div data-aos="zoom-in">
                    <Slider {...settings}>
                        {Testimonialsdata.map((data)=>(
                            <div key={data.id} className="my-6">
                                <div  className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-slate-600 bg-primary/10 relative'>
                                    <div className='mb-4 flex justify-center'>
                                        <img src={data.img} alt="Soory image not load" className='rounded-full m-200 h-200' />
                                    </div>
                                    <div className='flex flex-col items-center gap-4'>
                                        <div className='space-y-3'>
                                            <p className='text-xs dark:text-slate-300 text-gray-500'>{data.text}</p>
                                            <h1 className='text-xl text-black/80 dark:text-light'>{data.name}</h1>
                                        </div>
                                    </div>
                                    <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'></p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
