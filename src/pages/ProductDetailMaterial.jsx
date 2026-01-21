import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    ArrowLeft,
    Share2,
    ShoppingCart,
    Hexagon,
    ShieldCheck,
    ChevronRight,
    Download,
    Eye,
    Zap,
    Scale,
    Thermometer,
    Droplet,
    Factory
} from 'lucide-react';

const ProductDetailMaterial = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Mock Data for Materials
    const item = useMemo(() => {
        const names = ['Carbon Composite X1', 'Self-Healing Bio-Concrete', 'Aerogel Insulation Panel', 'Smart Glass Laminate'];
        const nameIndex = (parseInt(id) - 1) % names.length;

        return {
            id,
            type: 'material',
            name: names[nameIndex] || `Advanced Material #${id}`,
            category: 'Industrial / Construction',
            price: '$45 / sqm',
            rating: 4.9,
            reviews: 85,
            manufacturer: 'Global Materials Lab',
            description: "Next-generation composite material designed for high-load structural applications. Features embedded sensor networks for real-time health monitoring and superior thermal resistance properties.",
            image: `https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80&w=1200`,
            features: ['High Tensile Strength', 'Thermal Resistance', 'Sensor Integrated', 'Chemically Inert'],
            specs: {
                density: '1.8 g/cm3',
                tensileStrength: '2500 MPa',
                thermalConductivity: '0.04 W/mK',
                origin: 'Germany'
            },
            bulkPricing: [
                { qty: '10-50 sqm', discount: '0%' },
                { qty: '50-200 sqm', discount: '12%' },
                { qty: '200+ sqm', discount: '25%' }
            ]
        };
    }, [id]);

    return (
        <div className="px-6 max-w-7xl mx-auto py-10 space-y-12 pb-32">
            {/* Navigation Header */}
            <div className="flex items-center justify-between">
                <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => navigate('/products/materials')}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/10"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-mono text-xs uppercase tracking-widest">Back to Materials</span>
                </motion.button>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Visual Area */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="lg:col-span-6 space-y-6"
                >
                    <div className="relative aspect-square rounded-[2rem] overflow-hidden border border-white/10 bg-[#0F0F13] group">
                        <img
                            src={item.image}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                            alt={item.name}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>

                        <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-4">
                            <div className="text-center space-y-1">
                                <Scale className="mx-auto text-secondary mb-2" />
                                <div className="text-[10px] uppercase text-gray-400">Lightweight</div>
                            </div>
                            <div className="text-center space-y-1">
                                <Thermometer className="mx-auto text-secondary mb-2" />
                                <div className="text-[10px] uppercase text-gray-400">Insulative</div>
                            </div>
                            <div className="text-center space-y-1">
                                <Droplet className="mx-auto text-secondary mb-2" />
                                <div className="text-[10px] uppercase text-gray-400">Waterproof</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Info Area */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="lg:col-span-6 space-y-8"
                >
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-secondary font-mono text-xs tracking-[0.2em] uppercase">
                            <Factory size={14} /> {item.manufacturer}
                        </div>
                        <h1 className="text-3xl md:text-5xl font-display font-medium text-white leading-tight">
                            {item.name}
                        </h1>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                            <div className="text-sm text-gray-400 font-mono uppercase mb-2">Base Price</div>
                            <div className="text-3xl text-white font-bold">{item.price}</div>
                        </div>
                        <div className="p-6 bg-secondary/10 border border-secondary/20 rounded-2xl">
                            <div className="text-sm text-secondary font-mono uppercase mb-2">Bulk Savings</div>
                            <div className="text-3xl text-secondary font-bold">Up to 25%</div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-white font-medium uppercase font-mono text-sm tracking-wide">Bulk Pricing Tiers</h3>
                        <div className="space-y-2">
                            {item.bulkPricing.map((tier, i) => (
                                <div key={i} className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/5">
                                    <span className="text-gray-300 font-mono text-sm">{tier.qty}</span>
                                    <span className="text-emerald-400 font-bold">{tier.discount === '0%' ? 'Standard Rate' : `${tier.discount} Off`}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4 pt-6">
                        <button className="w-full bg-secondary text-black font-bold py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-secondary/10">
                            <ShoppingCart size={20} /> Request Quote
                        </button>
                        <button className="w-full bg-transparent text-white font-bold py-4 rounded-xl border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                            <Download size={20} /> Download Technical Data Sheet
                        </button>
                    </div>

                    {/* Technical Specs Table */}
                    <div className="pt-6 border-t border-white/5">
                        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                            {Object.entries(item.specs).map(([key, value]) => (
                                <div key={key} className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-gray-500 text-xs font-mono uppercase">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                                    <span className="text-white text-sm font-mono">{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Application Examples */}
            <div className="pt-12 space-y-8">
                <h3 className="text-2xl font-display text-white">Application Examples</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="aspect-video bg-[#0F0F13] rounded-2xl border border-white/5 relative overflow-hidden group hover:border-secondary/30 transition-colors">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-600 group-hover:text-secondary transition-colors">
                                <Factory size={32} />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                <div className="text-white font-medium text-sm">Industrial Use Case {i}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetailMaterial;
