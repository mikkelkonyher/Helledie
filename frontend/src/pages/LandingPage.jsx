import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { useI18n } from "../lib/i18n";

const LandingPage = () => {
    const { t } = useI18n();
    return (
        <div className="flex flex-col min-h-screen">
            <Navigation />

            {/* Main Title */}
            <div className="text-center mt-16">
                <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-600 bg-clip-text text-transparent mb-4">
                 {t('landing.title')}
                </h1>
                <p className="text-gray-400 text-lg md:text-xl">
                    {t('landing.subtitle')}
                </p>
            </div>
            <div className="flex-grow bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
                {/* DJ Mixing Table Container */}
                <div className="w-full max-w-6xl mx-auto my-12 mb-20">
                    {/* Desktop Layout */}
                    <div className="hidden md:flex items-center justify-center gap-10">
                        {/* Left Turntable */}
                        <div className="relative group">
                            <Link
                                to="/about"
                                className="block relative w-96 h-96 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-indigo-500/20"
                            >
                                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 shadow-inner">
                                    <div className="absolute inset-8 rounded-full overflow-hidden">
                                        <img
                                            src="/assets/ole/8A2578A5-D5EC-48BC-A57A-2337C04C9A1A.JPG"
                                            alt="Ole Helledie's DJ Turntable"
                                            className="w-full h-full object-cover rounded-full group-hover:animate-spin transition-all duration-1000"
                                        />
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-900 rounded-full shadow-lg">
                                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-indigo-400 rounded-full animate-pulse"></div>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/0 via-indigo-500/20 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                                <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 text-center">
                                    <p className="text-indigo-400 font-semibold text-xl">Ole Helledie</p>
                                    <p className="text-gray-400 text-base">{t('landing.ole.role')}</p>
                                </div>
                            </Link>
                        </div>

                        {/* Center Mixer */}
                        <div className="relative group">
                            <a
                                href="https://example.com/daughter-dj"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block relative w-80 h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-indigo-500/20"
                            >
                                <div className="absolute inset-8 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl shadow-inner p-8">
                                    <div className="flex justify-center mb-6">
                                        <div className="w-20 h-20 bg-gradient-to-br from-gray-900 to-black rounded border border-indigo-400/40 shadow-2xl flex items-center justify-center group-hover:shadow-indigo-500/30 transition-all duration-500">
                                            <div className="text-indigo-300 font-light text-lg tracking-widest" style={{ fontFamily: 'serif' }}>
                                                Pioneer
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-6 mb-6">
                                        {[...Array(3)].map((_, i) => (
                                            <div key={i} className="flex flex-col items-center">
                                                <div className="w-8 h-8 bg-gray-600 rounded-full shadow-inner mb-3 group-hover:bg-indigo-500 transition-colors duration-300"></div>
                                                <div className="w-3 h-24 bg-gray-600 rounded-full relative shadow-inner">
                                                    <div
                                                        className="absolute w-6 h-4 bg-gradient-to-r from-indigo-400 to-purple-500 rounded shadow-lg group-hover:shadow-indigo-400/50 transition-all duration-300"
                                                        style={{
                                                            left: '-6px',
                                                            top: `${32 + (i * 24)}px`,
                                                            transform: 'translateY(-50%)'
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/0 via-indigo-500/20 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                                <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 text-center">
                                    <p className="text-indigo-400 font-semibold text-xl">{t('landing.djJunior.name')}</p>
                                    <p className="text-gray-400 text-base">{t('landing.djJunior.tagline')}</p>
                                </div>
                            </a>
                        </div>

                        {/* Right Turntable */}
                        <div className="relative group">
                            <Link
                                to="/mothers-art"
                                className="block relative w-96 h-96 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-purple-500/20"
                            >
                                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 shadow-inner">
                                    <div className="absolute inset-8 rounded-full overflow-hidden">
                                        <img
                                            src="/assets/Lene/Lene3 kopier.jpeg"
                                            alt="Lene Helledie Turntable"
                                            className="w-full h-full object-cover rounded-full group-hover:animate-spin transition-all duration-1000"
                                        />
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-900 rounded-full shadow-lg">
                                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-purple-400 rounded-full animate-pulse"></div>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                                <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 text-center">
                                    <p className="text-purple-400 font-semibold text-xl">Lene Helledie</p>
                                    <p className="text-gray-400 text-base">{t('landing.lene.role')}</p>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="md:hidden flex flex-col items-center gap-10">
                        <div className="relative group">
                            <Link
                                to="/about"
                                className="block relative w-80 h-80 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-indigo-500/20"
                            >
                                <div className="absolute inset-6 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 shadow-inner">
                                    <div className="absolute inset-6 rounded-full overflow-hidden">
                                        <img
                                            src="/assets/ole/480952256_3076331369171649_5175806130906190233_n.jpg"
                                            alt="Ole Helledie"
                                            className="w-full h-full object-cover rounded-full group-hover:animate-spin transition-all duration-1000"
                                        />
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-gray-900 rounded-full">
                                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-indigo-400 rounded-full animate-pulse"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-center">
                                    <p className="text-indigo-400 font-semibold text-lg">Ole Helledie</p>
                                </div>
                            </Link>
                        </div>

                        <div className="relative group">
                            <a
                                href="https://example.com/daughter-dj"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block relative w-64 h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-indigo-500/20"
                            >
                                <div className="absolute inset-6 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl shadow-inner p-6">
                                    <div className="flex flex-col items-center h-full justify-center gap-4">
                                        <div className="w-14 h-14 bg-gradient-to-br from-gray-900 to-black rounded border border-indigo-400/40 shadow-lg flex items-center justify-center">
                                            <div className="text-indigo-300 font-light text-base tracking-wide" style={{ fontFamily: 'serif' }}>DJ</div>
                                        </div>
                                        <div className="flex gap-4">
                                            {[...Array(3)].map((_, i) => (
                                                <div key={i} className="flex flex-col items-center">
                                                    <div className="w-2 h-16 bg-gray-600 rounded-full relative shadow-inner">
                                                        <div
                                                            className="absolute w-3 h-3 bg-indigo-400 rounded shadow"
                                                            style={{
                                                                left: '-3px',
                                                                top: `${12 + (i * 8)}px`,
                                                            }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-center">
                                    <p className="text-indigo-400 font-semibold text-lg">{t('landing.djJunior.name')}</p>
                                </div>
                            </a>
                        </div>

                        <div className="relative group">
                            <Link
                                to="/mothers-art"
                                className="block relative w-80 h-80 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-purple-500/20"
                            >
                                <div className="absolute inset-6 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 shadow-inner">
                                    <div className="absolute inset-6 rounded-full overflow-hidden">
                                        <img
                                            src="/assets/Lene/Lene3 kopier.jpeg"
                                            alt="Lene Helledie"
                                            className="w-full h-full object-cover rounded-full group-hover:animate-spin transition-all duration-1000"
                                        />
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-gray-900 rounded-full">
                                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-center">
                                    <p className="text-purple-400 font-semibold text-lg">Lene Helledie</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default LandingPage;