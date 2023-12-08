import React, { useState } from 'react';
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';

export const Banner = () => {
    const [currentSlide, setCurrentSlile] = useState(0);

    const data = [
        'https://marketplace.canva.com/EAFNOTPz1ZY/1/0/1600w/canva-beige-modern-fashion-collection-promo-banner-z8oqB6n7Bjg.jpg',
        'https://marketplace.canva.com/EAFfICXrCR8/1/0/1600w/canva-brown-minimalist-fashion-sale-banner-QHCu0s8uFSw.jpg',
        'https://marketplace.canva.com/EAFoEJMTGiI/1/0/1600w/canva-beige-aesthetic-new-arrival-fashion-banner-landscape-cNjAcBMeF9s.jpg',
        'https://marketplace.canva.com/EAFGKRRskMs/1/0/1600w/canva-brown-and-beige-minimalist-fashion-banner-lYcbGpUSVGo.jpg',
    ];

    const prevSlide = () => {
        setCurrentSlile(currentSlide === 0 ? 3 : (prev) => prev - 1);
    };

    const nextSlide = () => {
        setCurrentSlile(currentSlide === 3 ? 0 : (prev) => prev + 1);
    };

    return (
        <div className="overflow-x-hidden w-full h-auto ">
            <div className="w-screen h-[650px] relative">
                <div
                    style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
                    className="flex w-[400vw] h-full transition-transform duration-1000"
                >
                    <img className="w-screen h-full object-cover" src={data[0]} alt="banner" />
                    <img className="w-screen h-full object-cover" src={data[1]} alt="banner" />
                    <img className="w-screen h-full object-cover" src={data[2]} alt="banner" />
                    <img className="w-screen h-full object-cover" src={data[3]} alt="banner" />
                </div>
                <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
                    <div
                        onClick={prevSlide}
                        className="w-12 h-14 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
                    >
                        <HiArrowLeft />
                    </div>
                    <div
                        onClick={nextSlide}
                        className="w-12 h-14 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
                    >
                        <HiArrowRight />
                    </div>
                </div>
            </div>
        </div>
    );
};
