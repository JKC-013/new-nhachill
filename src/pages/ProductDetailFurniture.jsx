import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    ArrowLeft,
    Star,
    Share2,
    ShoppingCart,
    Truck,
    ShieldCheck,
    ChevronRight,
    Package,
    Ruler,
    Palette
} from 'lucide-react';

const ProductDetailFurniture = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Mock Data for Furniture
    const item = useMemo(() => {
        const names = ['Lounge Chair 01', 'Modular Sofa System', 'Oak Dining Table', 'Minimalist Lamp'];
        const nameIndex = (parseInt(id) - 1) % names.length;

        return {
            id,
            type: 'furniture',
            name: names[nameIndex] || `Furniture Item #${id}`,
            category: 'Interior / Living',
            price: '$1,299',
            rating: 4.9,
            reviews: 128,
            brand: 'Nordic Studio',
            description: "Crafted from sustainable oak and upholstered in premium Kvadrat fabric. This piece combines timeless Scandinavian design with modern ergonomic principles for ultimate comfort.",
            image: `https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=1200`,
            features: ['Solid Oak Frame', 'Kvadrat Textiles', 'Ergonomic Support', 'Hand-finished'],
            specs: {
                width: '85 cm',
                depth: '90 cm',
                height: '75 cm',
                weight: '18 kg',
                material: 'White Oak / Wool'
            },
            shipping: 'Free Global Shipping (2-3 weeks)'
        };
    }, [id]);

    return (
        <div className="px-6 max-w-7xl mx-auto py-10 space-y-12 pb-32">
            {/* Navigation Header */}
            <div className="flex items-center justify-between">
                <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => navigate('/products/furnitures')}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/10"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-mono text-xs uppercase tracking-widest">Back to Furnitures</span>
                </motion.button>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Visual Area */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="lg:col-span-7 space-y-6"
                >
                    <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 bg-[#0F0F13] group">
                        <img
                            src={item.image}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                            alt={item.name}
                        />
                        <div className="absolute top-6 right-6">
                            <button className="p-3 bg-white/10 backdrop-blur rounded-full text-white hover:bg-secondary hover:text-black transition-colors">
                                <Share2 size={18} />
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="aspect-square rounded-2xl bg-[#0F0F13] border border-white/5 overflow-hidden hover:border-secondary/50 cursor-pointer transition-colors">
                                <img src={item.image} className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-all" alt="thumbnail" />
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Info Area */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="lg:col-span-5 space-y-10"
                >
                    <div className="space-y-4">
                        <h2 className="text-secondary font-mono text-sm tracking-widest uppercase">{item.brand}</h2>
                        <h1 className="text-4xl md:text-5xl font-display font-medium text-white leading-tight">
                            {item.name}
                        </h1>
                        <div className="flex items-center gap-2">
                            <div className="flex text-secondary">
                                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                            </div>
                            <span className="text-gray-500 text-xs font-mono ml-2">({item.reviews} Verified Reviews)</span>
                        </div>
                        <div className="text-3xl font-display font-bold text-white pt-2">{item.price}</div>
                    </div>

                    <p className="text-gray-400 leading-relaxed text-lg font-light">
                        {item.description}
                    </p>

                    {/* Dimensions / Color Selector Mock */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm text-gray-300 font-mono uppercase">
                            <span>Selected Finish</span>
                            <span>Natural Oak</span>
                        </div>
                        <div className="flex gap-3">
                            {['#D2B48C', '#5C4033', '#2F4F4F'].map((color, i) => (
                                <div key={i} className={`w-10 h-10 rounded-full cursor-pointer ring-2 ${i === 0 ? 'ring-white' : 'ring-transparent'} hover:ring-white/50 transition-all`} style={{ backgroundColor: color }}></div>
                            ))}
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="space-y-4 pt-6 border-t border-white/5">
                        <button className="w-full bg-white text-black font-bold py-5 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                            Add to Cart
                        </button>
                        <div className="flex items-center justify-center gap-2 text-xs font-mono text-emerald-400 uppercase">
                            <Truck size={14} /> {item.shipping}
                        </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-4 pt-6">
                        {item.features.map((f, i) => (
                            <div key={i} className="flex items-center gap-3 text-gray-400">
                                <ShieldCheck size={16} className="text-secondary" />
                                <span>{f}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Specs Table */}
            <div className="max-w-4xl mx-auto border-t border-white/5 pt-12">
                <h3 className="text-xl font-display text-white mb-8">Dimensions & Materials</h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {Object.entries(item.specs).map(([key, value]) => (
                        <div key={key} className="space-y-1">
                            <div className="text-xs text-gray-500 font-mono uppercase">{key}</div>
                            <div className="text-white text-lg">{value}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetailFurniture;
