import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Star, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';

const MOCK_DESIGNERS = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    name: i === 0 ? "James Harrison" : `Architect ${i + 1}`,
    role: ['Senior Architect', 'Interior Designer', 'Urban Planner', 'Landscape Architect'][i % 4],
    location: ['Da Lat, VN', 'HCMC, VN', 'Hanoi, VN', 'Danang, VN'][i % 4],
    rating: (4.5 + Math.random() * 0.5).toFixed(1),
    projects: Math.floor(Math.random() * 50) + 10,
    image: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 100}`,
    tags: ['Modern', 'Eco-friendly', 'Minimalist', 'Luxury'].slice(0, 2 + (i % 2))
}));

const DesignerList = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const filteredDesigners = useMemo(() => {
        const query = searchQuery.toLowerCase().trim();
        if (!query) return MOCK_DESIGNERS;

        return MOCK_DESIGNERS.filter(d =>
            d.name.toLowerCase().includes(query) ||
            d.role.toLowerCase().includes(query)
        );
    }, [searchQuery]);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const itemVariant = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="px-6 max-w-7xl mx-auto py-10 space-y-12">
            {/* Header / Search */}
            <div className="space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center space-y-4"
                >
                    <h1 className="text-5xl md:text-6xl font-display font-medium text-white tracking-tight">
                        Our <span className="text-primary italic">Creators</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Connect with top architectural talent and visualization experts in the Nhachill ecosystem.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto"
                >
                    <div className="flex-1 relative group">
                        <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative bg-[#0F0F13] border border-white/10 rounded-2xl flex items-center p-2 backdrop-blur-md focus-within:border-primary/50 transition-colors shadow-2xl">
                            <Search className="text-gray-500 ml-3" size={20} />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search by name, role or style..."
                                className="bg-transparent border-none text-white w-full px-4 py-3 focus:ring-0 focus:outline-none outline-none placeholder:text-gray-600 text-lg"
                            />
                        </div>
                    </div>
                    <button className="bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-4 rounded-2xl text-white font-medium flex items-center justify-center gap-2 transition-all">
                        <Filter size={20} />
                        Filters
                    </button>
                </motion.div>
            </div>

            {/* Grid */}
            <motion.div

                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6"
            >
                <AnimatePresence mode="popLayout">
                    {filteredDesigners.map((designer) => (
                        <motion.div
                            key={designer.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            variants={itemVariant}
                            onClick={() => navigate(`/architect/${designer.id}`)}
                            className="cursor-pointer"
                        >
                            <div className="group relative bg-[#0F0F13] border border-white/5 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-2">
                                <div className="aspect-[4/5] overflow-hidden relative">
                                    <img
                                        src={designer.image}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        alt={designer.name}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F13] via-transparent to-transparent opacity-60"></div>

                                    <div className="absolute top-3 left-3 flex gap-2">
                                        {designer.tags.map(tag => (
                                            <span key={tag} className="px-2 py-1 bg-black/60 backdrop-blur border border-white/10 rounded text-[10px] uppercase font-mono text-gray-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-5 space-y-3">
                                    <div>
                                        <h3 className="font-display font-medium text-white group-hover:text-primary transition-colors text-lg">{designer.name}</h3>
                                        <p className="text-sm text-gray-500 font-mono">{designer.role}</p>
                                    </div>

                                    <div className="flex items-center justify-between pt-2 border-t border-white/5">
                                        <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                                            <MapPin size={12} className="text-secondary" />
                                            {designer.location}
                                        </div>
                                        <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                                            <Star size={12} className="text-accent fill-accent/20" />
                                            {designer.rating}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>


            {filteredDesigners.length === 0 && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 bg-white/[0.02] rounded-3xl border border-white/5"
                >
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Search size={24} className="text-gray-600" />
                    </div>
                    <h3 className="text-xl font-display font-medium text-white mb-1">No Creators Found</h3>
                    <p className="text-gray-400 max-w-xs mx-auto text-sm">
                        We couldn't find any designers matching "<span className="text-primary font-mono">{searchQuery}</span>".
                    </p>
                    <button
                        onClick={() => setSearchQuery('')}
                        className="mt-8 text-sm text-primary hover:text-white transition-colors font-mono underline underline-offset-8"
                    >
                        RESET_FILTER
                    </button>
                </motion.div>
            )}
        </div>
    );
};

export default DesignerList;
