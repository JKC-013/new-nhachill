import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Share2, ShieldCheck, Box, BarChart3, Info } from 'lucide-react';

const MaterialDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const item = useMemo(() => {
        const names = ['Carbon Composite X1', 'Self-Healing Bio-Concrete', 'Aerogel Insulation Panel', 'Smart Glass Laminate'];
        const nameIndex = (parseInt(id) - 1) % names.length;
        return {
            id,
            name: names[nameIndex] || `Advanced Material #${id}`,
            category: 'Industrial / Materials',
            price: '$45 / sqm',
            rating: 4.9,
            author: 'Global Materials Lab',
            description: "Next-generation composite material designed for high-performance structural applications. Features embedded sensor networks for real-time stress monitoring.",
            specs: { density: '1.8 g/cm3', tensileStrength: '2500 MPa', origin: 'Germany', availability: 'In Stock' },
            image: `https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80&w=1200`
        };
    }, [id]);

    return (
        <div className="px-6 max-w-7xl mx-auto py-10 space-y-12 pb-32">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                    <img src={item.image} className="w-full aspect-video object-cover rounded-3xl border border-white/10" alt={item.name} />

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                            <BarChart3 className="text-secondary mb-2" />
                            <div className="text-sm text-gray-400 uppercase">Tensile Strength</div>
                            <div className="text-xl font-bold text-white">{item.specs.tensileStrength}</div>
                        </div>
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                            <Box className="text-secondary mb-2" />
                            <div className="text-sm text-gray-400 uppercase">Density</div>
                            <div className="text-xl font-bold text-white">{item.specs.density}</div>
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="space-y-8">
                    <div>
                        <div className="text-secondary font-mono text-xs mb-2">INDUSTRIAL GRADE</div>
                        <h1 className="text-4xl font-display text-white mb-4">{item.name}</h1>
                        <p className="text-gray-400">{item.description}</p>
                    </div>

                    <div className="bg-[#0F0F13] border border-white/10 rounded-2xl p-6">
                        <div className="flex justify-between items-center mb-6">
                            <div className="text-gray-400 text-sm">Unit Price</div>
                            <div className="text-3xl font-bold text-white">{item.price}</div>
                        </div>
                        <button className="w-full bg-secondary text-black font-bold py-3 rounded-xl hover:bg-white transition-colors">
                            Request Quote
                        </button>
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-mono text-white text-sm border-b border-white/10 pb-2">TECHNICAL DATA</h3>
                        {Object.entries(item.specs).map(([k, v]) => (
                            <div key={k} className="flex justify-between py-2 text-sm">
                                <span className="text-gray-500 capitalize">{k}</span>
                                <span className="text-white font-mono">{v}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default MaterialDetail;
