import React from 'react';
import { facebookLogo, githubLogo, googleLogo } from '../assets';
import { FacebookAuthProvider, getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../redux/mangoSlice';

export const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const handleGoogleLogin = async (e) => {
        await signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                dispatch(
                    addUser({
                        _id: user.uid,
                        name: user.displayName,
                        email: user.email,
                        image: user.photoURL,
                    }),
                );
                setTimeout(() => {
                    navigate('/');
                }, 1000);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const handleFacebookLogin = async (e) => {
        //cài đặt provider đăng nhập facebook
        const facebookProvider = new FacebookAuthProvider();
        
        await signInWithPopup(auth, facebookProvider)
            .then(function (result) {
                const user = result.user;
                dispatch(
                    addUser({
                        _id: user.uid,
                        name: user.displayName,
                        email: user.email,
                        image: user.photoURL,
                    }),
                );
            })
            .catch(function (error) {
                console.error('Error: hande error here>>>', error.code);
            });
    };

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                dispatch(removeUser());
                toast.success('Đăng xuất thành công!');
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
            <div className="w-full flex gap-10 items-center justify-center ">
                <div
                    onClick={handleFacebookLogin}
                    className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300"
                >
                    <img className="w-8 " src={facebookLogo} alt="googleLogo" />
                    <span className="text-sm text-gray-900">Sign in with Facebook</span>
                </div>
                <button
                    onClick={handleSignOut}
                    className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300"
                >
                    Sign out
                </button>
            </div>
            <div className="w-full flex gap-10 items-center justify-center ">
                <div
                    onClick={handleGoogleLogin}
                    className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300"
                >
                    <img className="w-8 " src={googleLogo} alt="googleLogo" />
                    <span className="text-sm text-gray-900">Sign in with Google</span>
                </div>
                <button
                    onClick={handleSignOut}
                    className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300"
                >
                    Sign out
                </button>
            </div>
            <div className="w-full flex gap-10 items-center justify-center ">
                <div className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300">
                    <img className="w-8 " src={githubLogo} alt="googleLogo" />
                    <span className="text-sm text-gray-900">Sign in with Github</span>
                </div>
                <button className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">
                    Sign out
                </button>
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
