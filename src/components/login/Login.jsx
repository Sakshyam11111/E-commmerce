import React, { useEffect, useState } from 'react';
import { FaGoogle, FaFacebook, FaEnvelope, FaLock, FaUserCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Move InputField outside to prevent recreation on render
const InputField = ({ formData, handleInputChange, label, name, type, placeholder, icon: Icon, error, showPasswordToggle = false }) => {
    const [showPassword, setShowPassword] = useState(false); // Local state for each input

    return (
        <div className="relative mb-6 group">
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <Icon className="text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                {label}
            </label>
            <div className="relative">
                <input
                    type={showPasswordToggle && name === 'password' ? (showPassword ? 'text' : 'password') : type}
                    name={name}
                    value={formData[name] || ''} // Ensure value is always a string
                    onChange={handleInputChange}
                    placeholder={placeholder}
                    className={`
                        w-full px-4 py-4 ${
                            showPasswordToggle 
                                ? 'pr-12'  
                                : 'pr-4'   
                        } bg-white/50 backdrop-blur-sm
                        border-2 rounded-2xl text-gray-800 font-medium
                        focus:outline-none focus:ring-4 focus:ring-blue-500/20
                        focus:border-blue-500 transition-all duration-300
                        placeholder:text-gray-400
                        ${error ? 'border-red-500' : 'border-gray-200 hover:border-gray-300'}
                    `}
                    required
                />
                {showPasswordToggle && (
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                    >
                        {showPassword ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        )}
                    </button>
                )}
            </div>
            {error && (
                <p className="mt-2 text-sm text-red-500 flex items-center gap-2 animate-pulse">
                    <span className="w-4 h-4 bg-red-500 rounded-full"></span>
                    {error}
                </p>
            )}
        </div>
    );
};

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // AOS removed - no initialization needed
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsLoading(true);
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));
            console.log('Login submitted:', formData);
        } catch (error) {
            console.error('Login error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-emerald-300 to-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-10 w-64 h-64 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-6xl w-full flex flex-col lg:flex-row bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden">
                {/* Left Column - Form */}
                <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="max-w-md mx-auto w-full">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full mb-6 shadow-lg">
                                <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
                                <span className="text-sm font-semibold uppercase tracking-wider">Welcome Back</span>
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                                Log In
                            </h1>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Access your account and continue building your amazing store
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <InputField
                                formData={formData}
                                handleInputChange={handleInputChange}
                                label="Email Address"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                icon={FaEnvelope}
                                error={errors.email}
                            />

                            <InputField
                                formData={formData}
                                handleInputChange={handleInputChange}
                                label="Password"
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                                icon={FaLock}
                                error={errors.password}
                                showPasswordToggle={true}
                            />

                            {/* Forgot Password */}
                            <div className="text-right mb-6">
                                <Link
                                    to="/forgot-password"
                                    className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors flex items-center justify-end gap-1 group"
                                >
                                    Forgot Password?
                                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`
                                    w-full relative overflow-hidden group
                                    bg-gradient-to-r from-blue-600 to-indigo-700
                                    hover:from-blue-700 hover:to-indigo-800
                                    text-white font-semibold py-4 px-8 rounded-2xl
                                    shadow-lg hover:shadow-xl transform hover:-translate-y-0.5
                                    transition-all duration-300 flex items-center justify-center gap-2
                                    disabled:opacity-50 disabled:cursor-not-allowed
                                    ${isLoading ? 'animate-pulse' : ''}
                                `}
                            >
                                {isLoading ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Logging In...
                                    </>
                                ) : (
                                    <>
                                        <FaUserCheck className="w-5 h-5" />
                                        <span>Login</span>
                                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </>
                                )}

                                {/* Button Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            </button>
                        </form>

                        {/* Signup Link */}
                        <div className="text-center mt-8">
                            <p className="text-gray-600">
                                Don't have an account?{' '}
                                <Link
                                    to="/signup"
                                    className="font-semibold text-blue-600 hover:text-blue-700 transition-colors flex items-center justify-center gap-1 mx-auto"
                                >
                                    Create Account
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </p>
                        </div>

                        {/* Legal Text */}
                        <div className="mt-8 pt-6 border-t border-gray-100">
                            <p className="text-xs text-gray-500 text-center leading-relaxed">
                                By logging in, you agree to our{' '}
                                <a href="#" className="text-blue-600 hover:underline">Terms of Use</a>{' '}
                                and acknowledge you've read our{' '}
                                <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
                            </p>
                            <p className="text-xs text-gray-500 text-center mt-2">
                                Protected by{' '}
                                <a href="#" className="text-blue-600 hover:underline font-semibold">reCAPTCHA</a>{' '}
                                -{' '}
                                <a href="#" className="text-blue-600 hover:underline">Google's Privacy Policy</a>{' '}
                                and{' '}
                                <a href="#" className="text-blue-600 hover:underline">Terms</a>{' '}
                                apply.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column - Visual & Social Login */}
                <div className="w-full lg:w-1/2 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                        }}></div>
                    </div>

                    {/* Visual Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 lg:p-12 text-white">
                        {/* Welcome Message */}
                        <div className="text-center mb-8 max-w-md">
                            <h2 className="text-3xl font-bold mb-4 bg-white/20 rounded-2xl p-4 inline-block">
                                Welcome Back! 👋
                            </h2>
                            <p className="text-blue-100 leading-relaxed">
                                We're excited to see you again. Continue where you left off and
                                grow your business with our powerful tools.
                            </p>
                        </div>

                        {/* Social Login Buttons */}
                        <div className="w-full max-w-md space-y-4">
                            <button className="w-full group relative overflow-hidden bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl px-6 py-4 text-white font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1">
                                <div className="flex items-center justify-center gap-3">
                                    <div className="p-2 bg-white/20 rounded-xl group-hover:bg-white/30 transition-colors">
                                        <FaGoogle className="text-yellow-400" size={20} />
                                    </div>
                                    <span>Continue with Google</span>
                                </div>
                                {/* Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                            </button>

                            <div className="text-center">
                                <span className="relative px-6 py-2">
                                    <span className="absolute inset-0 bg-white/10 rounded-full"></span>
                                    <span className="relative text-blue-100 font-medium">or sign in with</span>
                                </span>
                            </div>

                            <button className="w-full group relative overflow-hidden bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl px-6 py-4 text-white font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1">
                                <div className="flex items-center justify-center gap-3">
                                    <div className="p-2 bg-white/20 rounded-xl group-hover:bg-white/30 transition-colors">
                                        <FaFacebook className="text-blue-300" size={20} />
                                    </div>
                                    <span>Continue with Facebook</span>
                                </div>
                                {/* Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                            </button>
                        </div>

                        {/* Features */}
                        <div className="mt-12 grid grid-cols-1 gap-4 text-center max-w-md w-full">
                            <div className="flex items-center justify-center gap-3 text-blue-100">
                                <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                                <span className="text-sm">Two-Factor Authentication</span>
                                <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                            </div>
                            <div className="flex items-center justify-center gap-3 text-blue-100">
                                <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                                <span className="text-sm">Encrypted Sessions</span>
                                <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                            </div>
                            <div className="flex items-center justify-center gap-3 text-blue-100">
                                <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                                <span className="text-sm">Remember Me Option</span>
                                <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Styles */}
            <style jsx>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                
                .animate-blob {
                    animation: blob 7s infinite;
                }
                
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </section>
    );
};

export default Login;