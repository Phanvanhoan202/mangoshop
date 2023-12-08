import React from 'react';
import { ProductCard } from './ProductCard';

export const Products = ({ products }) => {
    return (
        <div className="py-10">
            <div className="flex flex-col items-center gap-4">
                <h1 className="text-2xl bg-black py-2 text-white w-80 text-center">Shopping Everyday</h1>
                <span className="w-20 h-[3px] bg-black"></span>
                <p className="max-w-[700px] text-gray-600 text-center">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                </p>
            </div>
            <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
                {products.map((item) => (
                    <ProductCard key={item._id} product={item} />
                ))}
            </div>
        </div>
    );
};
