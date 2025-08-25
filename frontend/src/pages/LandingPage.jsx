import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
      {/* DJ Mixing Table Container */}
      <div className="w-full max-w-6xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-center gap-8">
          {/* Left Turntable - Mother's Art */}
          <div className="relative group">
            <Link
              to="/mothers-art"
              className="block relative w-80 h-80 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-cyan-400/20"
            >
              {/* Turntable Base */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 shadow-inner">
                {/* Vinyl Record */}
                <div className="absolute inset-4 rounded-full overflow-hidden">
                  <img
                    src="https://picsum.photos/600/600?random=10"
                    alt="Mother's Art Turntable"
                    className="w-full h-full object-cover rounded-full group-hover:animate-spin transition-all duration-1000"
                  />
                  {/* Center Hole */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gray-900 rounded-full shadow-lg">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              {/* Label */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-cyan-400 font-semibold text-lg">Mother's Art</p>
                <p className="text-gray-400 text-sm">Gallery</p>
              </div>
            </Link>
          </div>

          {/* Center Mixer - About */}
          <div className="relative group">
            <Link
              to="/about"
              className="block relative w-64 h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-lime-400/20"
            >
              {/* Mixer Panel */}
              <div className="absolute inset-4 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl shadow-inner p-6">
                <img
                  src="https://picsum.photos/400/400?random=12"
                  alt="DJ Mixer"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                {/* Control Knobs */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 bg-gray-600 rounded-full shadow-inner group-hover:bg-lime-400 transition-colors duration-300"
                    ></div>
                  ))}
                </div>
                {/* Slider */}
                <div className="h-16 bg-gray-600 rounded-lg relative overflow-hidden">
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-12 bg-lime-400 rounded shadow-lg group-hover:animate-pulse"></div>
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-lime-400/0 via-lime-400/20 to-lime-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              {/* Label */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-lime-400 font-semibold text-lg">About</p>
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
              className="block relative w-80 h-80 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-blue-400/20"
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
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/0 via-blue-400/20 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              {/* External Link Icon */}
              <div className="absolute top-4 right-4">
                <ExternalLink className="w-6 h-6 text-blue-400" />
              </div>
              {/* Label */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-blue-400 font-semibold text-lg">Daughter's DJ</p>
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
              className="block relative w-64 h-64 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-cyan-400/20"
            >
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 shadow-inner">
                <div className="absolute inset-4 rounded-full overflow-hidden">
                  <img
                    src="https://picsum.photos/600/600?random=10"
                    alt="Mother's Art"
                    className="w-full h-full object-cover rounded-full group-hover:animate-spin transition-all duration-1000"
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gray-900 rounded-full">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-cyan-400 font-semibold">Mother's Art</p>
              </div>
            </Link>
          </div>

          <div className="relative group">
            <Link
              to="/about"
              className="block relative w-48 h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-lime-400/20"
            >
              <div className="absolute inset-4 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl shadow-inner p-4">
                <img
                  src="https://picsum.photos/400/400?random=12"
                  alt="About"
                  className="w-full h-20 object-cover rounded mb-4"
                />
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-6 h-6 bg-gray-600 rounded-full group-hover:bg-lime-400 transition-colors"></div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-lime-400 font-semibold">About</p>
              </div>
            </Link>
          </div>

          <div className="relative group">
            <a
              href="https://example.com/daughter-dj"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-64 h-64 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-blue-400/20"
            >
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 shadow-inner">
                <div className="absolute inset-4 rounded-full overflow-hidden">
                  <img
                    src="https://picsum.photos/600/600?random=11"
                    alt="Daughter's DJ"
                    className="w-full h-full object-cover rounded-full group-hover:animate-spin transition-all duration-1000"
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gray-900 rounded-full">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <ExternalLink className="w-5 h-5 text-blue-400" />
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-blue-400 font-semibold">Daughter's DJ</p>
              </div>
            </a>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center mt-16">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-lime-400 to-blue-400 bg-clip-text text-transparent mb-4">
            DJ OLE HELLEDIE
          </h1>
          <p className="text-gray-400 text-lg md:text-xl">
            Experience the Music • Explore the Art • Discover the Story
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;