import React from 'react';
import { logoDark, cart } from '../assets';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Header = () => {
    const productData = useSelector((state) => state.mango.productData);
    const userInfo = useSelector((state) => state.mango.userInfo);
    console.log(userInfo);
    return (
        <div className="h-20 w-full bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
            <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
                <Link to="/">
                    <div>
                        <img src={logoDark} className="w-28 " alt="logo" />
                    </div>
                </Link>
                <div className="flex gap-8 items-center ">
                    <ul className="flex gap-8 items-center ">
                        <Link>
                            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline  underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                                Home
                            </li>
                        </Link>
                        <li className="text-base text-black font-bold hover:text-orange-900 hover:underline  underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                            Pages
                        </li>
                        <li className="text-base text-black font-bold hover:text-orange-900 hover:underline  underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                            Shop
                        </li>
                        <li className="text-base text-black font-bold hover:text-orange-900 hover:underline  underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                            Element
                        </li>
                        <li className="text-base text-black font-bold hover:text-orange-900 hover:underline  underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                            Blog
                        </li>
                    </ul>
                    <Link to={'/cart'}>
                        <div className="relative cursor-pointer">
                            <img className="w-9" src={cart} alt="cart" />
                            <span className="absolute w-8 top-3.5 left-0.5 text-xs font-bold flex items-center justify-center">
                                {productData.length}
                            </span>
                        </div>
                    </Link>
                    <Link to="/login" className="flex items-center gap-2">
                        <img
                            src={
                                userInfo
                                    ? userInfo.image
                                    : 'https://images.pexels.com/photos/18628885/pexels-photo-18628885/free-photo-of-dan-ba-d-ng-chan-dung-thanh-th.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            }
                            alt="avt-user"
                            className="w-8 h-8 rounded-full object-cover mr-1 cursor-pointer"
                        />
                        {userInfo && (
                            <p className="text-base font-titleFont font-semibold underline underline-offset-2">
                                {userInfo.name}
                            </p>
                        )}
                    </Link>
                </div>
            </div>
        </div>
    );
};
