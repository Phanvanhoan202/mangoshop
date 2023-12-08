import { BsArrowRight } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/mangoSlice';
import { ToastContainer, toast } from 'react-toastify';

export const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const _id = product.title;
    const stringId = (_id) => {
        return String(_id).toLowerCase().split(' ').join('');
    };
    const rootId = stringId(_id);

    const handleDetail = () => {
        navigate(`product/${rootId}`, {
            state: product,
        });
    };

    return (
        <div className="group relative">
            <div onClick={handleDetail} className="w-full h-96 cursor-pointer overflow-hidden">
                <img
                    className="w-full h-full object-cover group-hover:scale-110 duration-500"
                    src={product.image}
                    alt="productImg"
                />
            </div>
            <div className="w-full border-[1px] px-2 py-4">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="font-titleFont text-base font-bold">{product.title.substring(0, 15)}</h2>
                    </div>
                    <div className="flex justify-end gap-2 relative w-28 overflow-hidden text-sm">
                        <div className="flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500">
                            <p className="line-through text-gray-500">${product.oldPrice}</p>
                            <p className="font-semibold">${product.price}</p>
                        </div>
                        <p
                            onClick={() =>
                                dispatch(
                                    addToCart({
                                        _id: product._id,
                                        title: product.title,
                                        image: product.image,
                                        price: product.price,
                                        quantity: 1,
                                        description: product.description,
                                    }),
                                ) && toast.success(`${product.title} đã được thêm vào giỏ hàng`)
                            }
                            className="absolute w-[100px] z-20 text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500 "
                        >
                            add to cart <BsArrowRight />
                        </p>
                    </div>
                </div>
                <div>
                    <p>{product.category}</p>
                </div>
                <div className="absolute top-4 right-0 z-20">
                    {product.isNew && (
                        <span className="  bg-black text-white font-semibold font-titleFont  px-6 py-1">sale</span>
                    )}
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
