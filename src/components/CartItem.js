import React, { useEffect, useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, deleteCart, increamentQuantity, resetCart } from '../redux/mangoSlice';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi';

export const CartItem = () => {
    const productData = useSelector((state) => state.mango.productData);
    const dispatch = useDispatch();

    return (
        <div className="w-2/3 pr-10">
            <div className="w-full">
                <h2 className="font-titleFont text-2xl">Shopping cart</h2>
            </div>
            <div className="flex flex-col gap-4 py-6">
                {productData.map((item) => (
                    <div key={item._id} className="mt-6 flex items-center justify-between gap-6">
                        <div className="flex items-center gap-2">
                            <MdOutlineClose
                                onClick={() =>
                                    dispatch(deleteCart(item._id)) &&
                                    toast.success(`Đã xóa ${item.title} khỏi giỏ hàng`)
                                }
                                className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"
                            />
                            <img className="w-32 h-32 object-cover" src={item.image} alt="productImg" />
                        </div>
                        <p className="w-52">{item.title}</p>
                        <p className="w-10">${item.price}</p>

                        <div className="flex items-center gap-4 text-sm font-semibold border p-2">
                            <span
                                onClick={() =>
                                    dispatch(
                                        decrementQuantity({
                                            _id: item._id,
                                            title: item.title,
                                            image: item.image,
                                            price: item.price,
                                            quantity: 1,
                                            description: item.description,
                                        }),
                                    )
                                }
                                className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                            >
                                -
                            </span>
                            <span className="w-3 flex items-center justify-center">{item.quantity}</span>
                            <span
                                onClick={() =>
                                    dispatch(
                                        increamentQuantity({
                                            _id: item._id,
                                            title: item.title,
                                            image: item.image,
                                            price: item.price,
                                            quantity: 1,
                                            description: item.description,
                                        }),
                                    )
                                }
                                className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                            >
                                +
                            </span>
                        </div>
                        <p>${item.price * item.quantity}</p>
                    </div>
                ))}
            </div>
            {productData.length >= 1 && (
                <button
                    onClick={() => dispatch(resetCart()) & toast.error('Giỏ hàng của bạn trống!')}
                    className="bg-red-500 mt-8 ml-7 hover:bg-red-800 text-white px-6 py-1 duration-300"
                >
                    Reset Cart
                </button>
            )}
            <Link to="/">
                <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
                    <span>
                        <HiOutlineArrowLeft />
                    </span>
                    go shopping
                </button>
            </Link>

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
