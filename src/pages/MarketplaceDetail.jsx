import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    ArrowLeft,
    Star,
    Share2,
    ShoppingCart,
    Package,
    Layers,
    ShieldCheck,
    ChevronRight,
    Download,
    Eye,
    Zap,
    Hexagon
} from 'lucide-react';

const MarketplaceDetail = () => {
    const { type, id } = useParams();
    const navigate = useNavigate();

    // Mock Data based on type/id
    const item = useMemo(() => {
        const isBlueprint = type === 'blueprint' || type === 'designs';
        const isFurniture = type === 'furnitures';
        const isMaterial = type === 'materials';

        let mockData = {};

        if (isBlueprint) {
            const names = ['Eco-Villa Concept A', 'Eco-Villa Concept B', 'Skyline Tower v1', 'Modern Loft X'];
            const nameIndex = (parseInt(id) - 1) % names.length;
            mockData = {
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
        } else if (isFurniture) {
            const names = ['Lounge Chair 01', 'Modular Sofa System', 'Oak Dining Table', 'Minimalist Lamp'];
            const nameIndex = (parseInt(id) - 1) % names.length;
            mockData = {
                name: names[nameIndex] || `Furniture Item #${id}`,
                category: 'Interior / Living',
                price: '$1,299',
                rating: 4.9,
                reviews: 128,
                author: 'Nordic Studio',
                description: "Crafted from sustainable oak and upholstered in premium Kvadrat fabric. This piece combines timeless Scandinavian design with modern ergonomic principles for ultimate comfort.",
                features: ['Solid Oak Frame', 'Kvadrat Textiles', 'Ergonomic Support', 'Hand-finished'],
                specs: { width: '85 cm', depth: '90 cm', height: '75 cm', weight: '18 kg' },
                image: `https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=1200`
            };
        } else {
            // Material
            const names = ['Carbon Composite X1', 'Self-Healing Bio-Concrete', 'Aerogel Insulation Panel', 'Smart Glass Laminate'];
            const nameIndex = (parseInt(id) - 1) % names.length;
            mockData = {
                name: names[nameIndex] || `Advanced Material #${id}`,
                category: 'Industrial / Construction',
                price: '$45 / sqm',
                rating: 4.9,
                reviews: 85,
                author: 'Global Materials Lab',
                description: "Next-generation composite material designed for high-performance structural applications. Features embedded sensor networks for real-time stress monitoring and superior thermal resistance properties.",
                features: ['High Tensile Strength', 'Thermal Resistance', 'Sensor Integrated', 'Chemically Inert'],
                specs: { density: '1.8 g/cm3', tensileStrength: '2500 MPa', origin: 'Germany' },
                image: `https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80&w=1200`
            };
        }

        return {
            id,
            type,
            ...mockData
        };
    }, [type, id]);

    return (
        <div className="px-6 max-w-7xl mx-auto py-10 space-y-12 pb-32">
            {/* Navigation Header */}
            <div className="flex items-center justify-between">
                <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/10"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-mono text-xs uppercase tracking-widest">Back to Marketplace</span>
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

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                {/* Visual Area (Left) */}
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

                        {/* Interactive Overlays */}
                        <div className="absolute bottom-6 left-6 flex gap-3">
                            <button className="px-4 py-2 bg-black/60 backdrop-blur border border-white/10 rounded-xl text-xs font-mono text-white flex items-center gap-2 hover:bg-white/20 transition-all">
                                <Eye size={14} /> VIEW_3D
                            </button>
                            <button className="px-4 py-2 bg-black/60 backdrop-blur border border-white/10 rounded-xl text-xs font-mono text-white flex items-center gap-2 hover:bg-white/20 transition-all">
                                <Layers size={14} /> EXPLODE_MODELS
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="aspect-square rounded-2xl bg-[#0F0F13] border border-white/5 overflow-hidden hover:border-secondary/50 cursor-pointer transition-colors">
                                <img src={item.image} className="w-full h-full object-cover opacity-50 hover:opacity-100 grayscale hover:grayscale-0 transition-all" alt="thumbnail" />
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
                            <ShieldCheck size={14} /> Verified {type}
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
                            <div className="w-1 h-1 bg-white/10 rounded-full"></div>
                            <div className="text-gray-400 text-sm font-mono uppercase">by {item.author}</div>
                        </div>
                    </div>

                    <div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl space-y-6">
                        <div className="flex items-end justify-between">
                            <div className="space-y-1">
                                <div className="text-xs text-gray-500 font-mono uppercase">Current Price</div>
                                <div className="text-4xl font-display font-bold text-white">{item.price}</div>
                            </div>
                            <div className="text-right">
                                <div className="text-xs text-emerald-400 font-mono">+12.4%</div>
                                <div className="text-[10px] text-gray-600 font-mono uppercase">Weekly Volume</div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button className="bg-secondary text-black font-bold py-4 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-secondary/10">
                                <ShoppingCart size={20} /> Checkout
                            </button>
                            <button className="bg-white/5 hover:bg-white/10 text-white font-bold py-4 rounded-2xl border border-white/10 transition-all flex items-center justify-center gap-2">
                                <Download size={20} /> Download
                            </button>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex gap-4 border-b border-white/5 pb-4">
                            <button className="text-sm font-mono text-white border-b-2 border-secondary pb-4 -mb-[18px]">DESCRIPTION</button>
                            <button className="text-sm font-mono text-gray-500 hover:text-white pb-4 transition-colors">TECHNICAL_SPECS</button>
                        </div>
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

                    {/* Meta Stats */}
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

            {/* Suggested Section */}
            <div className="pt-20 space-y-10">
                <div className="flex justify-between items-end">
                    <h2 className="text-3xl font-display font-medium text-white uppercase tracking-tight">Similar {type}s</h2>
                    <button className="text-xs font-mono text-gray-500 hover:text-secondary transition-colors uppercase tracking-widest flex items-center gap-2 group">
                        View All <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="bg-[#0F0F13] border border-white/5 rounded-2xl overflow-hidden hover:border-secondary/30 transition-all p-4 space-y-4">
                            <div className="aspect-square bg-black/40 rounded-xl overflow-hidden">
                                <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center">
                                    <Zap className="text-gray-700" size={32} />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-white font-medium text-sm uppercase">Related Item {i}</h4>
                                <div className="text-[10px] text-secondary font-mono uppercase mt-1">2.1 ETH</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MarketplaceDetail;
