import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { useI18n } from "../lib/i18n";

const featureImages = [
    {
        src: "/assets/ole/278856634_2242627119208749_8480187824424237634_n.jpg",
        alt: "DJ Performance",
        className: "object-top"
    },
    {
        src: "/assets/ole/480952256_3076331369171649_5175806130906190233_n.jpg",
        alt: "events",
        className: ""
    },
    {
        src: "/assets/ole/B76E835B-6FF0-43DD-AF91-F1A412827003.JPG",
        alt: "Collaboration",
        className: ""
    }
];

const AboutPage = () => {
    const [modalImg, setModalImg] = useState(null);
    const { t } = useI18n();

    return (
        <div className="flex flex-col min-h-screen">
            <Navigation />
            <div className="flex-grow bg-gradient-to-br from-gray-900 via-gray-800 to-black">
                {/* Navigation */}
                <nav className="p-6">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        {t('about.back')}
                    </Link>
                </nav>

                {/* Hero Banner */}
                <div className="relative h-96 mb-16 overflow-hidden">
                    <img
                        src="/assets/ole/480952256_3076331369171649_5175806130906190233_n.jpg"
                        alt="DJ Ole Helledie Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-600 bg-clip-text text-transparent mb-4">
                                {t('about.hero.title')}
                            </h1>
                            <p className="text-gray-300 text-xl md:text-2xl">
                                {t('about.hero.subtitle')}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Biography Content */}
                <div className="max-w-4xl mx-auto px-6 pb-16">
                    {/* Main Story */}
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 md:p-12 backdrop-blur-sm shadow-2xl mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 mb-6">{t('about.story.title')}</h2>
                        <div className="prose prose-lg text-gray-300 max-w-none">
                            <p className="mb-6 leading-relaxed">
                                {t('about.story.text')}
                            </p>

                        </div>
                    </div>

                    {/* Feature Images */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {featureImages.map((img, i) => (
                            <div
                                key={i}
                                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden backdrop-blur-sm shadow-2xl h-64 w-full cursor-pointer"
                                onClick={() => setModalImg(img.src)}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className={`w-full h-full object-cover ${img.className} transition-transform duration-700 hover:scale-110`}
                                />
                            </div>
                        ))}
                    </div>
                    {/* Modal for full-screen image */}
                    {modalImg && (
                        <div
                            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-pointer"
                            onClick={() => setModalImg(null)}
                        >
                            <img src={modalImg} alt="" className="max-w-full max-h-full rounded-2xl shadow-2xl" />
                        </div>
                    )}

                    {/* Event Booking Section */}
                    <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/30 text-center mb-12">
                        <h3 className="text-2xl font-semibold text-purple-300 mb-4">{t('about.booking.title')}</h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            {t('about.booking.text')}
                        </p>
                        <a
                            href="https://example.com/booking"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold px-8 py-4 rounded-full transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/30"
                        >
                            {t('about.booking.btn')}
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    </div>

                    {/* Quote Section */}
                    <div className="text-center mt-16 p-8 bg-gradient-to-r from-gray-800/30 to-gray-700/30 rounded-2xl backdrop-blur-sm">
                        <blockquote className="text-2xl md:text-3xl font-light text-gray-300 italic mb-4">
                            {t('about.quote')}
                        </blockquote>
                        <cite className="text-indigo-400 font-semibold">– DJ Ole Helledie</cite>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default AboutPage;