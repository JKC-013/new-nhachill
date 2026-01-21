import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    ArrowLeft,
    Star,
    Share2,
    ShoppingCart,
    Layers,
    ShieldCheck,
    ChevronRight,
    Download,
    Eye,
    Zap,
    Hexagon,
    FileText,
    Ruler,
    Box
} from 'lucide-react';

const ProductDetailDesign = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Mock Data for Design / Blueprint
    const item = useMemo(() => {
        const names = ['Eco-Villa Concept A', 'Eco-Villa Concept B', 'Skyline Tower v1', 'Modern Loft X'];
        const nameIndex = (parseInt(id) - 1) % names.length;

        return {
            id,
            type: 'blueprint',
            name: names[nameIndex] || `Blueprint Concept #${id}`,
            category: 'Residential Architecture',
            price: '3.5 ETH',
            rating: 4.8,
            reviews: 42,
            author: 'James Harrison',
            description: "A revolutionary residential concept focused on biophilic principles and regenerative energy systems. This blueprint includes full 3D BIM models, generative structural calculations, and permit-ready documentation.",
            image: `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200`,
            features: ['Net-Zero Energy', 'Passive Cooling', 'Modular Layout', 'Recycled Materials'],
            specs: {
                area: '450 sqm',
                levels: '2',
                bedrooms: '4',
                format: 'Revit / IFC',
                style: 'Modern Sustainable'
            },
            includedFiles: ['BIM Model (.rvt)', 'CAD Drawings (.dwg)', 'Renderings (.jpg)', 'Spec Sheet (.pdf)']
        };
    }, [id]);

    return (
        <div className="px-6 max-w-7xl mx-auto py-10 space-y-12 pb-32">
            {/* Navigation Header */}
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
            </div>

            {/* Design Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Visual Area */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="lg:col-span-8 space-y-6"
                >
                    <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden border border-white/10 bg-[#0F0F13] group">
                        <img
                            src={item.image}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                            alt={item.name}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0E] via-transparent to-transparent opacity-60"></div>
                        <div className="absolute bottom-6 left-6 flex gap-3">
                            <button className="px-4 py-2 bg-black/60 backdrop-blur border border-white/10 rounded-xl text-xs font-mono text-white flex items-center gap-2 hover:bg-white/20 transition-all">
                                <Eye size={14} /> 3D_WALKTHROUGH
                            </button>
                            <button className="px-4 py-2 bg-black/60 backdrop-blur border border-white/10 rounded-xl text-xs font-mono text-white flex items-center gap-2 hover:bg-white/20 transition-all">
                                <Layers size={14} /> EXPLODE_VIEW
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Info Area */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="lg:col-span-4 space-y-8"
                >
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-secondary font-mono text-xs tracking-[0.2em] uppercase">
                            <ShieldCheck size={14} /> Verified Blueprint
                        </div>
                        <h1 className="text-3xl md:text-4xl font-display font-medium text-white leading-tight">
                            {item.name}
                        </h1>
                        <div className="flex items-center gap-2">
                            <Star size={16} className="text-secondary fill-secondary" />
                            <span className="text-white font-mono">{item.rating}</span>
                            <span className="text-gray-500 text-xs">({item.reviews} reviews)</span>
                        </div>
                    </div>

                    <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl space-y-6">
                        <div className="flex items-end justify-between">
                            <div className="space-y-1">
                                <div className="text-xs text-gray-500 font-mono uppercase">License Price</div>
                                <div className="text-3xl font-display font-bold text-white">{item.price}</div>
                            </div>
                        </div>
                        <button className="w-full bg-secondary text-black font-bold py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-secondary/10">
                            <ShoppingCart size={20} /> Purchase License
                        </button>
                    </div>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-2 gap-3">
                        {Object.entries(item.specs).map(([key, value]) => (
                            <div key={key} className="bg-white/[0.02] border border-white/5 p-3 rounded-xl">
                                <div className="text-[10px] text-gray-500 font-mono uppercase mb-1">{key}</div>
                                <div className="text-white text-sm font-medium">{value}</div>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-sm font-mono text-white uppercase border-b border-white/10 pb-2">Included Files</h4>
                        <ul className="space-y-2">
                            {item.includedFiles.map(file => (
                                <li key={file} className="flex items-center gap-2 text-gray-400 text-sm">
                                    <FileText size={14} className="text-secondary" /> {file}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>

            {/* Detailed Description */}
            <div className="max-w-4xl mx-auto border-t border-white/5 pt-12 space-y-8">
                <h3 className="text-2xl font-display text-white">Project Overview</h3>
                <p className="text-gray-400 leading-relaxed text-lg">{item.description}</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {item.features.map(f => (
                        <div key={f} className="p-4 bg-white/[0.02] rounded-xl border border-white/5 text-center">
                            <Zap size={20} className="text-secondary mx-auto mb-2" />
                            <span className="text-xs font-mono text-white uppercase">{f}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetailDesign;
