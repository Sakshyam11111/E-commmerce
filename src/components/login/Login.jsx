import React, { useEffect } from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Login = () => {
    // Initialize AOS when the component mounts
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Set animation duration to 1000ms
    }, []);

    return (
        <section className="flex items-center justify-center h-screen bg-white">
            <div className="max-w-5xl w-full p-8 flex">
                {/* Left Column - Form Fields */}
                <div className="w-1/2 pr-8">
                    <h1 data-aos="fade-down" className="text-5xl font-bold mb-6 text-gray-900">Log In</h1>
                    <p data-aos="fade-up" className="text-sm text-gray-600 mb-6">
                        Don't have an account? <Link to="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
                    </p>
                    <form data-aos="fade-up" className="flex flex-col space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="mt-1 block w-full border-b-2 border-gray-500 bg-transparent p-2 focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="mt-1 block w-full border-b-2 border-gray-500 bg-transparent p-2 focus:outline-none"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 rounded-full hover:bg-blue-600 transition-colors"
                        >
                            Log In
                        </button>
                    </form>
                    <p data-aos="fade-up" className="mt-4 text-xs text-gray-500">
                        * By logging in, you agree to our Terms of Use and acknowledge you've read our Privacy Policy.
                    </p>
                    <p data-aos="fade-up" className="mt-1 text-xs text-gray-500">
                        This site is protected by reCAPTCHA Enterprise. Google's Privacy Policy and Terms of Service apply.
                    </p>
                </div>

                {/* Right Column - Social Login */}
                <div className="w-1/2 pl-8 flex flex-col items-center justify-center">
                    <div data-aos="fade-up" className="mb-6">
                        <span className="text-gray-500">or</span>
                    </div>
                    <button data-aos="fade-up" data-aos-delay="200" className="flex items-center justify-center w-72 bg-blue-600 text-white font-semibold py-2 mb-4 rounded-md hover:bg-blue-700 transition-colors">
                        <FaGoogle className="mr-2" /> Continue with Google
                    </button>
                    <button data-aos="fade-up" data-aos-delay="400" className="flex items-center justify-center w-72 bg-blue-800 text-white font-semibold py-2 rounded-md hover:bg-blue-900 transition-colors">
                        <FaFacebook className="mr-2" /> Continue with Facebook
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Login;