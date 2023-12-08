import React, { useEffect, useState } from 'react';
import { CartItem } from '../components/CartItem';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import StripeCheckout from 'react-stripe-checkout';

export const Cart = () => {
    const [totalAmt, setTotalAmt] = useState();
    const productData = useSelector((state) => state.mango.productData);
    const userInfo = useSelector((state) => state.mango.userInfo);
    const [payNow, setPayNow] = useState(false);

    useEffect(() => {
        const sumWithInitial = productData.reduce(
            (accumulator, currentValue) => accumulator + currentValue.price * currentValue.quantity,
            0,
        );
        setTotalAmt(sumWithInitial);
    }, [productData]);

    const handleCheckout = () => {
        if (userInfo) {
            setPayNow(true);
        } else {
            toast.error('Vui lòng đăng nhập để thanh toán!');
        }
    };

    return (
        <div>
            <img
                className="w-full h-48 object-cover"
                src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="bg"
            />
            {productData.length === 0 ? (
                <div className="text-red-500 text-center py-10 text-xl">Your shopping cart is empty</div>
            ) : (
                <div className="max-w-screen-xl mx-auto flex py-20 ">
                    <CartItem />
                    <div className="w-1/3 bg-[#fafafa] py-6 px-4">
                        <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
                            <h2 className="text-2xl font-medium">cart totals</h2>
                            <p className="flex gap-4 items-center text-base">
                                Subtotal{''}{' '}
                                <span className="font-titleFont font-bold text-lg">$ {totalAmt?.toFixed(2)}</span>
                            </p>
                            <p className="flex gap-4 items-center text-base">
                                Shipping{''}{' '}
                                <span>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum
                                </span>
                            </p>
                        </div>
                        <p className="flex justify-between mt-6 font-semibold font-titleFont">
                            Total <span className="text-xl font-bold">$ {totalAmt?.toFixed(2)}</span>
                        </p>
                        <button
                            onClick={handleCheckout}
                            className="text-base w-full text-center bg-black text-white py-3 mt-6 hover:bg-gray-800 duration-300"
                        >
                            proceed to checkout
                        </button>
                        {payNow && (
                            <div className="flex items-center justify-center mt-6 w-full">
                                <StripeCheckout
                                    stripeKey="pk_test_51OICnFFDxTYWT6m48qCPjfCkT6AoznvzHUwhHUgNt3tGdZZtZh7buSdbsPsRBMollrdUrlKNF0W0wbPLD53kYQyS00KCQeDwRw"
                                    name="Mango Fashion Shop" // the pop-in header title
                                    amount={totalAmt * 100} // cents
                                    email={userInfo.email}
                                    description={`Your Payment amount is $${totalAmt}`}
                                    label="Pay to Mango"
                                />
                            </div>
                        )}
                    </div>
                </div>
            )}
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
