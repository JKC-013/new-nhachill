import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ShoppingBag, Layout, Box, Star, MapPin, Zap } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import Card from '../components/Card';

const MOCK_BLUEPRINTS = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    type: 'blueprint',
    name: [
        'Eco-Villa Concept', 'Skyline Penthouse', 'Minimalist Retreat', 'Modular Urban Home',
        'Lakeside Cabin', 'Brutalist Studio', 'Solar Pavilion', 'Zen Garden House',
        'Arctic Research Hub', 'Desert Oasis', 'Vertical Farm Base', 'Floating Villa'
    ][i % 12],
    category: ['Residential', 'Commercial', 'Industrial', 'Landscape', 'Experimental'][i % 5],
    price: `${(1.5 + Math.random() * 5).toFixed(1)} ETH`,
    rating: (4.5 + Math.random() * 0.5).toFixed(1),
    image: `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400&sig=${i + 200}`,
    tags: ['Sustainable', 'Modern', 'Minimalist'],
    author: "James Harrison"
}));

const MOCK_PRODUCTS = [
    // Furnitures
    ...Array.from({ length: 8 }, (_, i) => ({
        id: i + 1,
        type: 'product',
        name: ['Eames Styled Chair', 'Modular Oak Sofa', 'Stone Coffee Table', 'Floating Bookshelf', 'Ergo Desk v2', 'Cinema Bench', 'Outdoor Lounge', 'Nordic Bed Frame'][i % 8],
        category: 'Furnitures',
        price: `$${(500 + Math.random() * 3000).toFixed(0)}`,
        rating: (4.5 + Math.random() * 0.5).toFixed(1),
        image: `https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=400&sig=${i + 400}`,
        tags: ['Interior', 'Furniture', 'Premium'],
        author: "Studio Nord"
    })),
    // Materials
    ...Array.from({ length: 8 }, (_, i) => ({
        id: i + 9,
        type: 'product',
        name: ['Translucent Concrete', 'Recycled Ocean Plastic', 'Smart Glass Panel', 'Aero-Timber Sheet', 'Graphene Coating', 'Self-Healing Bio-Brick', 'Kinetic Tile', 'Mycelium Insulation'][i % 8],
        category: 'Materials',
        price: `$${(50 + Math.random() * 500).toFixed(0)}/sqm`,
        rating: (4.2 + Math.random() * 0.8).toFixed(1),
        image: `https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80&w=400&sig=${i + 500}`,
        tags: ['Industrial', 'Material', 'Innovation'],
        author: "Global Supply Co."
    }))
];

const Marketplace = ({ categoryFilter, initialTab: propInitialTab, title, subtitle, lockTab = false }) => {
    const location = useLocation();
    const routerInitialTab = location.state?.initialTab;
    // Map old 'blueprint'/'product' values to new ones if necessary, or default to 'designs'
    const normalizeTab = (tab) => {
        if (tab === 'blueprint') return 'designs';
        if (tab === 'product') return 'furnitures'; // Default product to furnitures? Or maybe check category fallback
        return tab;
    };

    const initialTab = normalizeTab(propInitialTab || routerInitialTab) || 'designs';

    const [activeTab, setActiveTab] = useState(initialTab);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const items = useMemo(() => {
        if (activeTab === 'designs') {
            return MOCK_BLUEPRINTS;
        } else if (activeTab === 'furnitures') {
            return MOCK_PRODUCTS.filter(item => item.category === 'Furnitures');
        } else if (activeTab === 'materials') {
            return MOCK_PRODUCTS.filter(item => item.category === 'Materials');
        }
        return [];
    }, [activeTab]);

    const filteredItems = useMemo(() => {
        const query = searchQuery.toLowerCase().trim();
        if (!query) return items;
        return items.filter(item =>
            item.name.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query) ||
            item.tags.some(tag => tag.toLowerCase().includes(query))
        );
    }, [searchQuery, items]);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.05 }
        }
    };

    const itemVariant = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="px-6 max-w-7xl mx-auto py-10 space-y-12">
            {/* Header / Tabs / Search */}
            <div className="space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center space-y-4"
                >
                    <h1 className="text-5xl md:text-6xl font-display font-medium text-white tracking-tight">
                        {title || (
                            <>The <span className="text-secondary italic">Marketplace</span></>
                        )}
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        {subtitle || "Find what you want in the Marketplace – from architectural assets to premium materials."}
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
                    {/* Tabs */}
                    <div className="flex p-1 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shrink-0">
                        <TabButton
                            active={activeTab === 'designs'}
                            onClick={() => setActiveTab('designs')}
                            icon={<Layout size={18} />}
                            label="Designs"
                        />
                        <TabButton
                            active={activeTab === 'furnitures'}
                            onClick={() => setActiveTab('furnitures')}
                            icon={<Box size={18} />}
                            label="Furnitures"
                        />
                        <TabButton
                            active={activeTab === 'materials'}
                            onClick={() => setActiveTab('materials')}
                            icon={<Zap size={18} />}
                            label="Materials"
                        />
                    </div>

                    {/* Search */}
                    <div className="flex-1 w-full relative group">
                        <div className="absolute inset-0 bg-secondary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                        <div className="relative bg-[#0F0F13] border border-white/10 rounded-2xl flex items-center p-2 focus-within:border-secondary/50 transition-colors shadow-2xl">
                            <Search className="text-gray-500 ml-3" size={20} />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder={`Search ${activeTab === 'blueprint' ? 'blueprints' : 'items'}...`}
                                className="bg-transparent border-none text-white w-full px-4 py-3 focus:ring-0 focus:outline-none outline-none placeholder:text-gray-600 text-lg"
                            />
                        </div>
                    </div>

                    <button className="bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-4 rounded-2xl text-white font-medium flex items-center justify-center gap-2 transition-all">
                        <Filter size={20} />
                        Filters
                    </button>
                </div>
            </div>

            {/* Grid */}
            {filteredItems.length > 0 ? (
                <motion.div
                    key={`${activeTab}-${categoryFilter}`}
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 min-h-[400px]"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item) => (
                            <motion.div
                                key={`${item.type}-${item.category}-${item.id}`}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                                variants={itemVariant}
                                onClick={() => {
                                    if (activeTab === 'designs') {
                                        navigate(`/products/designs/${item.id}`);
                                    } else if (activeTab === 'furnitures') {
                                        navigate(`/products/furnitures/${item.id}`);
                                    } else if (activeTab === 'materials') {
                                        navigate(`/products/materials/${item.id}`);
                                    } else {
                                        // Fallback based on item type/category if activeTab is ambiguous
                                        if (item.type === 'blueprint') navigate(`/products/designs/${item.id}`);
                                        else if (item.category === 'Furnitures') navigate(`/products/furnitures/${item.id}`);
                                        else if (item.category === 'Materials') navigate(`/products/materials/${item.id}`);
                                    }
                                }} className="cursor-pointer group"
                            >
                                <div className="bg-[#0F0F13] border border-white/5 rounded-3xl overflow-hidden hover:border-secondary/40 transition-all duration-500 hover:-translate-y-2 shadow-2xl relative">
                                    <div className="aspect-[4/3] overflow-hidden relative">
                                        <img
                                            src={item.image}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            alt={item.name}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F13] via-transparent to-transparent opacity-80"></div>

                                        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-xl text-xs font-mono text-secondary">
                                            {item.price}
                                        </div>
                                    </div>

                                    <div className="p-6 space-y-4">
                                        <div>
                                            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 mb-1">{item.category}</div>
                                            <h3 className="text-xl font-display font-medium text-white group-hover:text-secondary transition-colors line-clamp-1">{item.name}</h3>
                                        </div>

                                        <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                            <div className="flex items-center gap-2">
                                                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                                                    <Star size={10} className="text-secondary fill-secondary" />
                                                </div>
                                                <span className="text-xs font-mono text-gray-400">{item.rating}</span>
                                            </div>
                                            <div className="text-[10px] font-mono text-gray-600 uppercase">by {item.author.split(' ')[0]}</div>
                                        </div>
                                    </div>

                                    {/* Action Hover Tooltip */}
                                    <div className="absolute bottom-6 right-6 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                                        <button className="bg-secondary text-black p-3 rounded-xl shadow-xl hover:scale-110 active:scale-90 transition-all">
                                            <ShoppingBag size={20} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            ) : (
                /* No Results */
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center pt-12 pb-24 bg-white/[0.02] rounded-3xl border border-white/5 shadow-inner"
                >
                    <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Search size={32} className="text-gray-600" />
                    </div>
                    <h3 className="text-xl font-display font-medium text-white mb-2">No Items Found</h3>
                    <p className="text-gray-500 max-w-xs mx-auto text-sm">
                        We couldn't find any results matching "<span className="text-secondary font-mono">{searchQuery}</span>".
                    </p>
                    <button
                        onClick={() => setSearchQuery('')}
                        className="mt-8 text-sm text-secondary hover:text-white transition-colors font-mono underline underline-offset-8"
                    >
                        RESET_FILTER
                    </button>
                </motion.div>
            )}

        </div>
    );
};

const TabButton = ({ active, onClick, icon, label }) => (
    <button
        onClick={onClick}
        className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all ${active
            ? 'bg-secondary text-black shadow-lg shadow-secondary/20'
            : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
    >
        {icon}
        {label}
    </button>
);

export default Marketplace;
