import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Music, Heart, Users } from "lucide-react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const AboutPage = () => {
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
          Back to DJ Table
        </Link>
      </nav>

      {/* Hero Banner */}
      <div className="relative h-96 mb-16 overflow-hidden">
        <img
          src="https://picsum.photos/1200/400?random=7"
          alt="DJ Ole Helledie Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-600 bg-clip-text text-transparent mb-4">
              DJ OLE HELLEDIE
            </h1>
            <p className="text-gray-300 text-xl md:text-2xl">
              Connecting Generations Through Music & Art
            </p>
          </div>
        </div>
      </div>

      {/* Biography Content */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        {/* Main Story */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 md:p-12 backdrop-blur-sm shadow-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 mb-6">The Story Behind the Music</h2>
          <div className="prose prose-lg text-gray-300 max-w-none">
            <p className="mb-6 leading-relaxed">
              DJ Ole Helledie is more than just a name in the music industry – he's a bridge between generations, 
              connecting the artistic legacy of his mother with the vibrant energy of his daughter's musical journey. 
              With over two decades of experience behind the turntables, Ole has carved out a unique space in the 
              electronic music scene.
            </p>
            <p className="mb-6 leading-relaxed">
              Born into a family where creativity flows like electricity through every generation, Ole discovered 
              his passion for mixing beats and creating atmospheric soundscapes at an early age. His mother's 
              artistic vision and his daughter's fresh perspective on modern DJ culture have profoundly influenced 
              his musical style, creating a signature sound that resonates across age groups.
            </p>
            <p className="mb-6 leading-relaxed">
              From intimate underground venues to major festival stages, DJ Ole Helledie has consistently delivered 
              performances that not only move the body but touch the soul. His sets are known for their emotional 
              depth, technical precision, and the seamless way they weave together different musical eras and genres.
            </p>
            <p className="leading-relaxed">
              Today, Ole continues to push the boundaries of electronic music while honoring the artistic traditions 
              that shaped him. His work serves as a testament to the power of family, creativity, and the unifying 
              force of music in bringing people together across generations.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-xl p-6 backdrop-blur-sm border border-purple-500/20 transform transition-all duration-300 hover:scale-105 hover:shadow-purple-500/20">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-4">
              <Music className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-purple-400 font-semibold text-xl mb-3">Musical Legacy</h3>
            <p className="text-gray-400">
              Over 20 years of crafting unforgettable musical experiences and pushing the boundaries of electronic music.
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-600/10 rounded-xl p-6 backdrop-blur-sm border border-indigo-500/20 transform transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/20">
            <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-indigo-400 font-semibold text-xl mb-3">Artistic Heritage</h3>
            <p className="text-gray-400">
              Deeply influenced by Lene Helledie's artistic vision, bringing visual storytelling into musical performance.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-600/20 to-purple-700/10 rounded-xl p-6 backdrop-blur-sm border border-purple-600/20 transform transition-all duration-300 hover:scale-105 hover:shadow-purple-600/20">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-purple-400 font-semibold text-xl mb-3">Family Connection</h3>
            <p className="text-gray-400">
              Bridging generations through music, connecting Lene Helledie's art with his daughter's modern DJ style.
            </p>
          </div>
        </div>

        {/* Quote Section */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-gray-800/30 to-gray-700/30 rounded-2xl backdrop-blur-sm">
          <blockquote className="text-2xl md:text-3xl font-light text-gray-300 italic mb-4">
            "Music is the language that connects us all – past, present, and future. Every beat I drop carries 
            the artistic soul of Lene and the innovative spirit of my daughter."
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