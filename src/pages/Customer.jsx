import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Sparkles, Zap, Hexagon } from 'lucide-react';

const Customer = () => {
    return (
        <div className="space-y-12 pb-20">
            <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10"></div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-4xl font-display text-white mb-2">Digital Asset Exchange</h1>
                    <div className="flex gap-4 mb-8">
                        <button className="bg-white/10 border border-white/10 px-4 py-2 rounded-full text-sm hover:bg-white/20 transition-colors active">Generative Blueprints</button>
                        <button className="text-gray-400 hover:text-white px-4 py-2 rounded-full text-sm">Smart Materials</button>
                        <button className="text-gray-400 hover:text-white px-4 py-2 rounded-full text-sm">NFT Deeds</button>
                    </div>
                </motion.div>

                {/* Search Bar */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative max-w-2xl"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent blur opacity-25 rounded-xl"></div>
                    <div className="relative bg-black/50 border border-white/10 rounded-xl flex items-center p-2 backdrop-blur-md">
                        <Search className="text-gray-400 ml-3" />
                        <input
                            type="text"
                            placeholder="Search by neural tag (e.g., 'cyberpunk', 'modular', 'kinetic')..."
                            className="bg-transparent border-none text-white w-full px-4 py-2 focus:ring-0 focus:outline-none outline-none placeholder:text-gray-600"
                        />
                        <button className="bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg text-xs font-mono text-gray-300">CMD+K</button>
                    </div>
                </motion.div>
            </div>

            {/* Asset Grid */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                    <AssetCard key={i} index={i} />
                ))}
            </motion.div>
        </div>
    );
};

const AssetCard = ({ index }) => (
    <Link to={`/detail/asset/${index}`} className="block group relative bg-[#0F0F13] border border-white/5 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

        {/* Image Placeholder */}
        <div className="aspect-square bg-black/50 relative overflow-hidden">
            <img src={`https://source.unsplash.com/random/400x400?neon,cyberpunk&sig=${index}`} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity mix-blend-screen" onError={(e) => e.target.style.display = 'none'} />
            <div className="absolute inset-0 flex items-center justify-center text-xs font-mono text-white/20">ASSET_PREVIEW_{index}</div>

            {/* Match Score Pill */}
            <div className="absolute top-3 right-3 bg-black/80 backdrop-blur border border-green-500/30 px-2 py-1 rounded text-[10px] font-mono text-green-400 flex items-center gap-1">
                <Sparkles size={10} /> 98% MATCH
            </div>
        </div>

        <div className="p-4 relative">
            <div className="flex justify-between items-start mb-2">
                <div>
                    <h3 className="font-display font-medium text-white group-hover:text-primary transition-colors">Neo-Tokyo Unit {index}</h3>
                    <div className="text-xs text-gray-500 font-mono">GEN-3 • #882{index}</div>
                </div>
                <div className="text-right">
                    <div className="font-bold text-white">2.5 ETH</div>
                    <div className="text-[10px] text-gray-500">Last Sale</div>
                </div>
            </div>

            <div className="flex gap-2 mt-4">
                <button className="flex-1 bg-white/5 hover:bg-white/10 border border-white/5 py-2 rounded-lg text-xs font-bold text-white transition-colors">
                    View 3D
                </button>
                <button className="flex-1 bg-primary/20 hover:bg-primary/30 border border-primary/20 py-2 rounded-lg text-xs font-bold text-primary transition-colors flex items-center justify-center gap-1">
                    <Zap size={12} /> Acquire
                </button>
            </div>
        </div>
    </Link>
);

export default Customer;
