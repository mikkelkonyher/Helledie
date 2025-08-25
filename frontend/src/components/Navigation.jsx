import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ExternalLink } from "lucide-react";

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navigationItems = [
        { name: "Forside", path: "/", internal: true },
        { name: "Ole Helledie", path: "/about", internal: true },
        { name: "Lene Helledie", path: "/mothers-art", internal: true },
        { name: "DJ Junior", path: "https://example.com/daughter-dj", internal: false }
    ];

    const isActive = (path) => {
        if (path === "/" && location.pathname === "/") return true;
        if (path !== "/" && location.pathname.startsWith(path)) return true;
        return false;
    };

    return (
        <nav className="bg-black/80 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo - left */}
                    <div className="flex-shrink-0">
                        <Link
                            to="/"
                            className="flex items-center gap-3 group"
                        >

                            <span className="text-xl font-light bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent tracking-wide" style={{ fontFamily: 'serif' }}>

                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation - centered */}
                    <div className="hidden md:flex flex-1 justify-center items-center gap-8">
                        {navigationItems.map((item) => (
                            item.internal ? (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                                        isActive(item.path)
                                            ? "bg-purple-600/20 text-purple-400 border border-purple-500/30"
                                            : "text-gray-300 hover:text-purple-400 hover:bg-purple-600/10"
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            ) : (
                                <a
                                    key={item.name}
                                    href={item.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-indigo-400 hover:bg-indigo-600/10 rounded-lg transition-all duration-300"
                                >
                                    {item.name}
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            )
                        ))}
                    </div>

                    {/* Mobile Menu Button - right */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-gray-300 hover:text-purple-400 transition-colors duration-300"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-800">
                        <div className="flex flex-col gap-2">
                            {navigationItems.map((item) => (
                                item.internal ? (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                                            isActive(item.path)
                                                ? "bg-purple-600/20 text-purple-400 border border-purple-500/30"
                                                : "text-gray-300 hover:text-purple-400 hover:bg-purple-600/10"
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                ) : (
                                    <a
                                        key={item.name}
                                        href={item.path}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex items-center gap-2 px-4 py-3 text-gray-300 hover:text-indigo-400 hover:bg-indigo-600/10 rounded-lg transition-all duration-300"
                                    >
                                        {item.name}
                                        <ExternalLink className="w-3 h-3" />
                                    </a>
                                )
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;