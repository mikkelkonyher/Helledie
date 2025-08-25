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
                    alt="Lene Helledie Turntable"
                    className="w-full h-full object-cover rounded-full group-hover:rotate-12 transition-all duration-700"
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
                {/* Simple Center Logo/Icon */}
                <div className="flex items-center justify-center h-full">
                  <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-full shadow-lg flex items-center justify-center group-hover:shadow-indigo-500/30 transition-all duration-500">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                      <div className="text-white font-bold text-xl">DJ</div>
                    </div>
                  </div>
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
              className="block relative w-80 h-80 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-blue-400/20"
            >
              {/* Turntable Base */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 shadow-inner">
                {/* Vinyl Record */}
                <div className="absolute inset-4 rounded-full overflow-hidden">
                  <img
                    src="https://picsum.photos/600/600?random=11"
                    alt="Daughter's DJ Turntable"
                    className="w-full h-full object-cover rounded-full group-hover:rotate-12 transition-all duration-700"
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