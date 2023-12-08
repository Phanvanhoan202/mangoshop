import React, { useEffect, useState } from 'react';
import { MdOutlineStar } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addToCart } from '../redux/mangoSlice';
import { ToastContainer, toast } from 'react-toastify';

export const Product = () => {
    const [details, setDetails] = useState({});
    const [baseQty, setBaseQty] = useState(1);

    const dispatch = useDispatch();

    const location = useLocation();
    useEffect(() => {
        setDetails(location.state);
    }, []);

    console.log(details);

    return (
        <div>
            <div className="max-w-screen-xl mx-auto my-10 flex gap-10">
                <div className="w-2/5 relative">
                    <img className="w-full h-[550px] object-cover" src={details.image} alt="productImage" />
                    <div className="absolute top-4 right-0">
                        {details.isNew && (
                            <span className="  bg-black text-white font-semibold font-titleFont  px-6 py-1">sale</span>
                        )}
                    </div>
                </div>
                <div className="w-3/5 flex flex-col gap-12 justify-center">
                    <div>
                        <h2 className="text-4xl font-semibold">{details.title}</h2>
                        <div className="flex gap-4 items-center mt-3">
                            <p className="line-through font-base text-gray-500">${details.oldPrice}</p>
                            <p className="text-2xl font-medium text-gray-900">${details.price}</p>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center text-base">
                        <div className="flex">
                            <MdOutlineStar />
                            <MdOutlineStar />
                            <MdOutlineStar />
                            <MdOutlineStar />
                            <MdOutlineStar />
                        </div>
                        <p className="text-sm text-gray-500">(1 customer review)</p>
                    </div>
                    <p className="text-gray-500 text-base -mt-3">{details.description}</p>
                    <div className="flex gap-4">
                        <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
                            <p className="text-sm">Quatity</p>
                            <div className="flex items-center gap-4 text-sm font-semibold">
                                <button
                                    onClick={() => setBaseQty(baseQty === 1 ? 1 : baseQty - 1)}
                                    className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                                >
                                    -
                                </button>
                                <span className="w-3 flex items-center justify-center">{baseQty}</span>
                                <button
                                    onClick={() => setBaseQty(baseQty + 1)}
                                    className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <button
                            onClick={() =>
                                dispatch(
                                    addToCart({
                                        _id: details._id,
                                        title: details.title,
                                        image: details.image,
                                        price: details.price,
                                        quantity: baseQty,
                                        description: details.description,
                                    }),
                                ) && toast.success(`${details.title} đã được thêm vào giỏ hàng`)
                            }
                            className="bg-black text-white py-3 px-6 active:bg-gray-800"
                        >
                            add to cart
                        </button>
                    </div>
                    <p className="text-base text-gray-500">
                        <span className="font-medium capitalize">Category: {details.category}</span>
                    </p>
                </div>
            </div>
            <ToastContainer
                position="top-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    );
};
