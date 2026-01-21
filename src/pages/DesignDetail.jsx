import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    ArrowLeft,
    Star,
    Share2,
    Hexagon,
    ShieldCheck,
    Eye,
    Layers,
    ShoppingCart,
    Download,
    ChevronRight,
    Play,
    FileText
} from 'lucide-react';

const DesignDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Mock Data for Designs
    const item = useMemo(() => {
        const names = ['Eco-Villa Concept A', 'Eco-Villa Concept B', 'Skyline Tower v1', 'Modern Loft X'];
        const nameIndex = (parseInt(id) - 1) % names.length;
        return {
            id,
            name: names[nameIndex] || `Blueprint Concept #${id}`,
            category: 'Architecture / Residential',
            price: '3.5 ETH',
            rating: 4.8,
            reviews: 42,
            author: 'James Harrison',
            description: "A revolutionary residential concept focused on biophilic principles and regenerative energy systems. This blueprint includes full 3D BIM models, generative structural calculations, and permit-ready documentation.",
            features: ['Net-Zero Energy', 'Passive Cooling', 'Modular Layout', 'Recycled Materials'],
            specs: { area: '450 sqm', levels: '2', bedrooms: '4', format: 'Revit / IFC' },
            image: `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200`
        };
    }, [id]);

    return (
        <div className="px-6 max-w-7xl mx-auto py-10 space-y-12 pb-32">
            {/* Header */}
            <div className="flex items-center justify-between">
                <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => navigate('/products/designs')}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/10"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-mono text-xs uppercase tracking-widest">Back to Designs</span>
                </motion.button>

                <div className="flex gap-4">
                    <button className="p-3 bg-white/5 rounded-2xl border border-white/10 text-gray-400 hover:text-white transition-colors">
                        <Share2 size={18} />
                    </button>
                    <button className="p-3 bg-white/5 rounded-2xl border border-white/10 text-gray-400 hover:text-white transition-colors">
                        <Hexagon size={18} />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Visual Area (Left) - Optimized for 3D/Blueprint viewing */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="lg:col-span-7 space-y-6"
                >
                    <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden border border-white/10 bg-[#0F0F13] group">
                        <img
                            src={item.image}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                            alt={item.name}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0E] via-transparent to-transparent opacity-60"></div>

                        {/* Design Specific Action Overlay */}
                        <div className="absolute bottom-6 left-6 flex gap-3">
                            <button className="px-5 py-3 bg-primary text-black font-bold rounded-xl text-xs font-mono flex items-center gap-2 hover:bg-white transition-all shadow-lg shadow-primary/20">
                                <Play size={14} fill="currentColor" /> WALKTHROUGH_DEMO
                            </button>
                            <button className="px-5 py-3 bg-black/60 backdrop-blur border border-white/10 rounded-xl text-xs font-mono text-white flex items-center gap-2 hover:bg-white/20 transition-all">
                                <Layers size={14} /> EXPLODE_LAYERS
                            </button>
                        </div>
                    </div>

                    {/* Thumbnail Grid */}
                    <div className="grid grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="aspect-square rounded-2xl bg-[#0F0F13] border border-white/5 overflow-hidden hover:border-secondary/50 cursor-pointer transition-colors relative group">
                                <img src={item.image} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all" alt="thumbnail" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Eye size={20} className="text-white drop-shadow-lg" />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Info Area (Right) */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="lg:col-span-5 space-y-8"
                >
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-secondary font-mono text-xs tracking-[0.2em] uppercase">
                            <ShieldCheck size={14} /> Verified Blueprint
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-medium text-white leading-tight uppercase">
                            {item.name}
                        </h1>
                        <div className="flex items-center gap-6 pt-2">
                            <div className="flex items-center gap-2">
                                <Star size={16} className="text-secondary fill-secondary" />
                                <span className="text-white font-mono">{item.rating}</span>
                                <span className="text-gray-500 text-xs">({item.reviews} Reviews)</span>
                            </div>
                            <div className="text-gray-400 text-sm font-mono uppercase">by {item.author}</div>
                        </div>
                    </div>

                    {/* Purchase/Download Card */}
                    <div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl space-y-6">
                        <div className="flex items-end justify-between">
                            <div className="space-y-1">
                                <div className="text-xs text-gray-500 font-mono uppercase">Purchase License</div>
                                <div className="text-4xl font-display font-bold text-white">{item.price}</div>
                            </div>
                            <div className="text-right">
                                <span className="px-2 py-1 bg-green-500/10 text-green-400 text-[10px] font-bold uppercase rounded border border-green-500/20">
                                    Ready to Build
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button className="bg-secondary text-black font-bold py-4 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-secondary/10">
                                <ShoppingCart size={20} /> Checkout
                            </button>
                            <button className="bg-white/5 hover:bg-white/10 text-white font-bold py-4 rounded-2xl border border-white/10 transition-all flex items-center justify-center gap-2">
                                <FileText size={20} /> Spec Sheet
                            </button>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-sm font-mono text-white border-b border-white/10 pb-4">ARCHITECT_NOTES</h3>
                        <p className="text-gray-400 leading-relaxed">
                            {item.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {item.features.map(f => (
                                <span key={f} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-mono text-gray-400 uppercase">
                                    {f}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Specs */}
                    <div className="grid grid-cols-2 gap-4 pt-4">
                        {Object.entries(item.specs).map(([key, value]) => (
                            <div key={key} className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl">
                                <div className="text-[10px] text-gray-500 font-mono uppercase mb-1">{key}</div>
                                <div className="text-white font-display uppercase">{value}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default DesignDetail;
