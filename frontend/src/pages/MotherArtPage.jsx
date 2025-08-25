import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";

const MotherArtPage = () => {
  const artPieces = [
    { id: 1, image: "https://picsum.photos/400/400?random=1", title: "Abstract Harmony" },
    { id: 2, image: "https://picsum.photos/400/400?random=2", title: "Digital Dreams" },
    { id: 3, image: "https://picsum.photos/400/400?random=3", title: "Color Symphony" },
    { id: 4, image: "https://picsum.photos/400/400?random=4", title: "Modern Expression" },
    { id: 5, image: "https://picsum.photos/400/400?random=5", title: "Vibrant Vision" },
    { id: 6, image: "https://picsum.photos/400/400?random=6", title: "Creative Flow" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Navigation */}
      <nav className="p-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to DJ Table
        </Link>
      </nav>

      {/* Header */}
      <div className="text-center py-12 px-4">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-lime-400 to-blue-400 bg-clip-text text-transparent mb-4">
          Mother's Art Gallery
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          Explore the beautiful artistic creations and masterpieces from DJ Ole Helledie's mother.
          Each piece tells a unique story through color, form, and emotion.
        </p>
      </div>

      {/* Art Gallery Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artPieces.map((piece) => (
            <div
              key={piece.id}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-cyan-400/20"
            >
              <a
                href="https://example.com/mother-art"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative"
              >
                {/* Art Image */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={piece.image}
                    alt={piece.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* External Link Icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-cyan-400 p-2 rounded-full">
                      <ExternalLink className="w-4 h-4 text-black" />
                    </div>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white font-semibold text-xl mb-2">{piece.title}</h3>
                    <p className="text-gray-300 text-sm">Click to view full artwork</p>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </a>
            </div>
          ))}
        </div>

        {/* Visit Gallery CTA */}
        <div className="text-center mt-16">
          <a
            href="https://example.com/mother-art"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-semibold px-8 py-4 rounded-full transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-400/30"
          >
            Visit Full Gallery
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MotherArtPage;