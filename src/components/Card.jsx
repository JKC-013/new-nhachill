import React from 'react';
import { ArrowRight } from 'lucide-react';

const Card = ({ title, subtitle, imageUrl, rank, onMore, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 ${onClick ? 'cursor-pointer' : ''}`}
        >
            {/* Image Placeholder */}
            <div className="aspect-[4/3] w-full bg-black/50 relative overflow-hidden">
                {imageUrl ? (
                    <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 flex items-center justify-center text-white/20">
                        No Image
                    </div>
                )}
                {rank && (
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-bold px-2 py-1 rounded-md">
                        #{rank}
                    </div>
                )}
            </div>

            <div className="p-5">
                <h3 className="text-lg font-display font-medium text-white mb-1 group-hover:text-primary transition-colors truncate">{title}</h3>
                <p className="text-sm text-gray-400 truncate">{subtitle}</p>
            </div>

            {/* Action Overlay (Desktop) */}
            <div className="absolute inset-x-0 bottom-0 top-auto p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black via-black/90 to-transparent flex justify-end">
                <button
                    onClick={(e) => {
                        if (onClick) {
                            e.stopPropagation();
                            onClick();
                        } else if (onMore) {
                            e.stopPropagation();
                            onMore();
                        }
                    }}
                    className="bg-white text-black p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
                >
                    <ArrowRight size={16} />
                </button>
            </div>
        </div>
    );
};

export default Card;
