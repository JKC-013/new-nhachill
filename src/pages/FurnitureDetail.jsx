import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    ArrowLeft,
    Star,
    Share2,
    Hexagon,
    ShieldCheck,
    ShoppingCart,
    Truck,
    Package,
    Ruler
} from 'lucide-react';

const FurnitureDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Mock Data for Furniture
    const item = useMemo(() => {
        const names = ['Lounge Chair 01', 'Modular Sofa System', 'Oak Dining Table', 'Minimalist Lamp'];
        const nameIndex = (parseInt(id) - 1) % names.length;
        return {
            id,
            name: names[nameIndex] || `Furniture Item #${id}`,
            category: 'Interior / Living / Collection',
            price: '$1,299',
            rating: 4.9,
            reviews: 128,
            author: 'Nordic Studio',
            description: "Crafted from sustainable oak and upholstered in premium Kvadrat fabric. This piece combines timeless Scandinavian design with modern ergonomic principles for ultimate comfort.",
            features: ['Solid Oak Frame', 'Kvadrat Textiles', 'Ergonomic Support', 'Hand-finished'],
            specs: { width: '85 cm', depth: '90 cm', height: '75 cm', weight: '18 kg' },
            shipping: 'Free Global Shipping (2-3 Weeks)',
            image: `https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=1200`
        };
    }, [id]);

    return (
        <div className="px-6 max-w-7xl mx-auto py-10 space-y-12 pb-32">
            {/* Header */}
            <div className="flex items-center justify-between">
                <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => navigate('/products/furnitures')}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/10"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-mono text-xs uppercase tracking-widest">Back to Collection</span>
                </motion.button>
                <div className="flex gap-4">
                    <button className="p-3 bg-white/5 rounded-2xl border border-white/10 text-gray-400 hover:text-white transition-colors"><Share2 size={18} /></button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Image Gallery */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="lg:col-span-7 space-y-4">
                    <div className="aspect-square rounded-[2rem] overflow-hidden border border-white/10 bg-[#0F0F13]">
                        <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="aspect-square rounded-2xl bg-white/5 border border-white/5 overflow-hidden">
                                <img src={item.image} className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" alt="thumb" />
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Product Info */}
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-5 space-y-8">
                    <div>
                        <h1 className="text-4xl font-display font-medium text-white mb-2">{item.name}</h1>
                        <p className="text-gray-500 font-mono text-sm uppercase">{item.category}</p>
                    </div>

                    <div className="flex items-center gap-4 py-4 border-y border-white/5">
                        <div className="text-3xl font-display font-bold text-white">{item.price}</div>
                        <div className="flex items-center gap-2">
                            <Star size={14} className="text-yellow-500 fill-yellow-500" />
                            <span className="text-white text-sm">{item.rating}</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider">Specifications</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {Object.entries(item.specs).map(([k, v]) => (
                                <div key={k} className="flex justify-between text-sm py-2 border-b border-white/5">
                                    <span className="text-gray-500 capitalize">{k}</span>
                                    <span className="text-white font-mono">{v}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white/5 p-4 rounded-xl flex items-center gap-3 border border-white/10">
                        <Truck className="text-secondary" size={20} />
                        <div>
                            <div className="text-white text-sm font-bold">Shipping Info</div>
                            <div className="text-gray-400 text-xs">{item.shipping}</div>
                        </div>
                    </div>

                    <button className="w-full bg-white text-black font-bold py-4 rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-2">
                        <ShoppingCart size={18} /> Add to Cart
                    </button>

                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
            </div>
        </div>
    );
};

export default FurnitureDetail;
