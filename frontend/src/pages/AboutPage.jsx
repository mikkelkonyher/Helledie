import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Music, Heart, Users } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Navigation */}
      <nav className="p-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-lime-400 hover:text-lime-300 transition-colors duration-300"
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
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-lime-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
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
          <h2 className="text-3xl md:text-4xl font-bold text-lime-400 mb-6">The Story Behind the Music</h2>
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
          <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 rounded-xl p-6 backdrop-blur-sm border border-cyan-500/20 transform transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/20">
            <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center mb-4">
              <Music className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-cyan-400 font-semibold text-xl mb-3">Musical Legacy</h3>
            <p className="text-gray-400">
              Over 20 years of crafting unforgettable musical experiences and pushing the boundaries of electronic music.
            </p>
          </div>

          <div className="bg-gradient-to-br from-lime-500/20 to-lime-600/10 rounded-xl p-6 backdrop-blur-sm border border-lime-500/20 transform transition-all duration-300 hover:scale-105 hover:shadow-lime-400/20">
            <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-lime-400 font-semibold text-xl mb-3">Artistic Heritage</h3>
            <p className="text-gray-400">
              Deeply influenced by his mother's artistic vision, bringing visual storytelling into musical performance.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl p-6 backdrop-blur-sm border border-blue-500/20 transform transition-all duration-300 hover:scale-105 hover:shadow-blue-400/20">
            <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-blue-400 font-semibold text-xl mb-3">Family Connection</h3>
            <p className="text-gray-400">
              Bridging generations through music, connecting his mother's art with his daughter's modern DJ style.
            </p>
          </div>
        </div>

        {/* Quote Section */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-gray-800/30 to-gray-700/30 rounded-2xl backdrop-blur-sm">
          <blockquote className="text-2xl md:text-3xl font-light text-gray-300 italic mb-4">
            "Music is the language that connects us all – past, present, and future. Every beat I drop carries 
            the artistic soul of my mother and the innovative spirit of my daughter."
          </blockquote>
          <cite className="text-lime-400 font-semibold">– DJ Ole Helledie</cite>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;