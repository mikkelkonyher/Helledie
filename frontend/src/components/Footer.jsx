import React from "react";
import { Instagram, Facebook, Linkedin, Mail, ExternalLink } from "lucide-react";
import { useI18n } from "../lib/i18n";

const Footer = () => {
    const { t } = useI18n();

    const socialLinks = [
        {
            name: "Instagram",
            icon: Instagram,
            url: "https://instagram.com/djolehelledie",
            color: "hover:text-purple-400"
        },
        {
            name: "Facebook",
            icon: Facebook,
            url: "https://facebook.com/djolehelledie",
            color: "hover:text-indigo-400"
        },
        {
            name: "LinkedIn",
            icon: Linkedin,
            url: "https://linkedin.com/in/djolehelledie",
            color: "hover:text-blue-400"
        },
    ];

    return (
        <footer className="bg-gradient-to-t from-black to-gray-900 border-t border-gray-800 py-8 mt-auto">
            <div className="max-w-6xl mx-auto px-6">
                {/* Main Footer Content */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* Logo/Name Section */}
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                            {t('footer.title')}
                        </h3>
                        <p className="text-gray-400 text-sm">
                            {t('footer.tagline')}
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-col items-center w-full md:w-auto">
                        <div className="flex justify-center items-center gap-6">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full transition-all duration-300 hover:scale-110 hover:bg-gray-700 ${social.color}`}
                                    aria-label={social.name}
                                >
                                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-current transition-colors duration-300" />
                                    <ExternalLink className="w-3 h-3 text-gray-500 opacity-0 group-hover:opacity-100 absolute translate-x-3 -translate-y-3 transition-all duration-200" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Email Contact */}
                    <div className="text-center md:text-right">
                        <div className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors duration-300">
                            <Mail className="w-4 h-4" />
                            <a
                                href="mailto:contact@olehelledie.com"
                                className="text-sm hover:underline"
                            >
                                contact@olehelledie.com
                            </a>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                            {t('footer.email.note')}
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-6 pt-6 text-center">
                    <div className="text-sm text-gray-500">
                        <span>&copy; 2025 DJ Ole Helledie. All rights reserved.</span>
                    </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-2">
                    <div className="w-16 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 rounded-full"></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;