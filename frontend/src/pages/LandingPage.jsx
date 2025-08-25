import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <div className="flex-grow bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
        {/* DJ Mixing Table Container */}
        <div className="w-full max-w-6xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-center gap-8">
          {/* Left Turntable - Mother's Art */}
          <div className="relative group">
            <Link
              to="/mothers-art"
              className="block relative w-80 h-80 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-purple-500/20"
            >
              {/* Turntable Base */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 shadow-inner">
                {/* Vinyl Record */}
                <div className="absolute inset-4 rounded-full overflow-hidden">
                  <img
                    src="https://picsum.photos/600/600?random=10"
                    alt="Lene Helledie Turntable"
                    className="w-full h-full object-cover rounded-full group-hover:animate-spin transition-all duration-1000"
                  />
                  {/* Center Hole */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gray-900 rounded-full shadow-lg">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              {/* Label */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-purple-400 font-semibold text-lg">Lene Helledie</p>
                <p className="text-gray-400 text-sm">Art Gallery</p>
              </div>
            </Link>
          </div>

          {/* Center Mixer - About */}
          <div className="relative group">
            <Link
              to="/about"
              className="block relative w-64 h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-indigo-500/20"
            >
              {/* Mixer Panel */}
              <div className="absolute inset-4 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl shadow-inner p-6">
                {/* DJ Logo */}
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-black rounded border border-indigo-400/40 shadow-2xl flex items-center justify-center group-hover:shadow-indigo-500/30 transition-all duration-500">
                    <div className="text-indigo-300 font-light text-sm tracking-widest" style={{ fontFamily: 'serif' }}>
                      OLE
                    </div>
                  </div>
                </div>
                
                {/* Faders/Sliders */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex flex-col items-center">
                      {/* Knob */}
                      <div className="w-6 h-6 bg-gray-600 rounded-full shadow-inner mb-2 group-hover:bg-indigo-500 transition-colors duration-300"></div>
                      {/* Fader Track */}
                      <div className="w-2 h-16 bg-gray-600 rounded-full relative shadow-inner">
                        <div 
                          className="absolute w-4 h-3 bg-gradient-to-r from-indigo-400 to-purple-500 rounded shadow-lg group-hover:shadow-indigo-400/50 transition-all duration-300"
                          style={{ 
                            left: '-4px', 
                            top: `${20 + (i * 15)}px`,
                            transform: 'translateY(-50%)'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Bottom Controls */}
                <div className="flex justify-center gap-2">
                  {[...Array(2)].map((_, i) => (
                    <div 
                      key={i}
                      className="w-4 h-4 bg-gray-600 rounded-full shadow-inner group-hover:bg-purple-500 transition-colors duration-300"
                    ></div>
                  ))}
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/0 via-indigo-500/20 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              {/* Label */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-indigo-400 font-semibold text-lg">About</p>
                <p className="text-gray-400 text-sm">DJ Ole Helledie</p>
              </div>
            </Link>
          </div>

          {/* Right Turntable - Daughter's DJ */}
          <div className="relative group">
            <a
              href="https://example.com/daughter-dj"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-80 h-80 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-indigo-500/20"
            >
              {/* Turntable Base */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 shadow-inner">
                {/* Vinyl Record */}
                <div className="absolute inset-4 rounded-full overflow-hidden">
                  <img
                    src="https://picsum.photos/600/600?random=11"
                    alt="Daughter's DJ Turntable"
                    className="w-full h-full object-cover rounded-full group-hover:animate-spin transition-all duration-1000"
                  />
                  {/* Center Hole */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gray-900 rounded-full shadow-lg">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-indigo-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/0 via-indigo-500/20 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              {/* External Link Icon */}
              <div className="absolute top-4 right-4">
                <ExternalLink className="w-6 h-6 text-indigo-400" />
              </div>
              {/* Label */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-indigo-400 font-semibold text-lg">Daughter's DJ</p>
                <p className="text-gray-400 text-sm">External Site</p>
              </div>
            </a>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center gap-8">
          {/* Mobile Turntables Stack */}
          <div className="relative group">
            <Link
              to="/mothers-art"
              className="block relative w-64 h-64 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-purple-500/20"
            >
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 shadow-inner">
                <div className="absolute inset-4 rounded-full overflow-hidden">
                  <img
                    src="https://picsum.photos/600/600?random=10"
                    alt="Lene Helledie"
                    className="w-full h-full object-cover rounded-full group-hover:animate-spin transition-all duration-1000"
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gray-900 rounded-full">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-purple-400 font-semibold">Lene Helledie</p>
              </div>
            </Link>
          </div>

          <div className="relative group">
            <Link
              to="/about"
              className="block relative w-48 h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-indigo-500/20"
            >
              <div className="absolute inset-4 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl shadow-inner p-4">
                {/* Mobile DJ Controls */}
                <div className="flex flex-col items-center h-full justify-center gap-3">
                  {/* DJ Logo */}
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-black rounded border border-indigo-400/40 shadow-lg flex items-center justify-center">
                    <div className="text-indigo-300 font-light text-xs tracking-wide" style={{ fontFamily: 'serif' }}>OLE</div>
                  </div>
                  
                  {/* Mini Faders */}
                  <div className="flex gap-2">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <div className="w-1 h-12 bg-gray-600 rounded-full relative shadow-inner">
                          <div 
                            className="absolute w-2 h-2 bg-indigo-400 rounded shadow"
                            style={{ 
                              left: '-2px', 
                              top: `${8 + (i * 4)}px`,
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-indigo-400 font-semibold">About</p>
              </div>
            </Link>
          </div>

          <div className="relative group">
            <a
              href="https://example.com/daughter-dj"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-64 h-64 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-indigo-500/20"
            >
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 shadow-inner">
                <div className="absolute inset-4 rounded-full overflow-hidden">
                  <img
                    src="https://picsum.photos/600/600?random=11"
                    alt="Daughter's DJ"
                    className="w-full h-full object-cover rounded-full group-hover:animate-spin transition-all duration-1000"
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gray-900 rounded-full">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-indigo-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <ExternalLink className="w-5 h-5 text-indigo-400" />
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-indigo-400 font-semibold">Daughter's DJ</p>
              </div>
            </a>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center mt-16">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-600 bg-clip-text text-transparent mb-4">
            DJ OLE HELLEDIE
          </h1>
          <p className="text-gray-400 text-lg md:text-xl">
            Experience the Music • Explore the Art • Discover the Story
          </p>
        </div>
      </div>
    </div>
      
      <Footer />
    </div>
  );
};

export default LandingPage;