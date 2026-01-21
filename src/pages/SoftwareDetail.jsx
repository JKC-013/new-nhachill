import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, Globe, CreditCard, ShieldCheck, Monitor, Cpu } from 'lucide-react';

const SoftwareDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const item = useMemo(() => {
        const names = ["Eco-Vis 3D", "Structo-BIM Pro", "Lumina Render", "Open-Cad Community"];
        const index = (parseInt(id) - 1) % names.length;
        const isFree = id % 2 !== 0; // Mock logic

        return {
            id,
            name: names[index] || `Tool #${id}`,
            category: 'Design Tool',
            price: isFree ? 'Free' : '$49.99',
            description: "A professional grade specialized tool designed for the decentralized architectural workflow.",
            specs: { version: '2.4.1', users: '12k+', size: '450MB', os: 'Win/Mac/Linux' },
            image: `https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200`
        };
    }, [id]);

    return (
        <div className="px-6 max-w-7xl mx-auto py-10 space-y-12 pb-32">
            <div className="flex items-center justify-between">
                <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => navigate('/solutions/design-tools')}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/10"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-mono text-xs uppercase tracking-widest">Back to Tools</span>
                </motion.button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Sidebar Info */}
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="md:col-span-1 space-y-6">
                    <div className="bg-[#0F0F13] border border-white/10 rounded-3xl p-6 text-center space-y-4">
                        <div className="w-20 h-20 bg-white/5 rounded-2xl mx-auto flex items-center justify-center text-primary">
                            <Monitor size={40} />
                        </div>
                        <h1 className="text-2xl font-bold text-white">{item.name}</h1>
                        <div className={`inline-block px-3 py-1 rounded-lg text-xs font-bold uppercase ${item.price === 'Free' ? 'bg-green-500/20 text-green-400' : 'bg-primary/20 text-primary'}`}>
                            {item.price} License
                        </div>
                        <button className="w-full py-3 bg-white text-black font-bold rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-2">
                            {item.price === 'Free' ? <Download size={18} /> : <CreditCard size={18} />}
                            {item.price === 'Free' ? 'Download Now' : 'Buy License'}
                        </button>
                    </div>

                    <div className="bg-white/5 p-6 rounded-3xl border border-white/5 space-y-4">
                        <div className="flex items-center gap-3">
                            <Globe className="text-gray-400" size={20} />
                            <div className="text-sm text-white">Official Website</div>
                        </div>
                        <div className="flex items-center gap-3">
                            <ShieldCheck className="text-gray-400" size={20} />
                            <div className="text-sm text-white">Virus Scanned</div>
                        </div>
                    </div>
                </motion.div>

                {/* Main Content */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="md:col-span-2 space-y-8">
                    <img src={item.image} className="w-full h-64 object-cover rounded-3xl border border-white/10" alt="Software UI" />

                    <div className="space-y-4">
                        <h2 className="text-2xl font-display text-white">About Software</h2>
                        <p className="text-gray-400 leading-relaxed">{item.description}</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {Object.entries(item.specs).map(([k, v]) => (
                            <div key={k} className="bg-white/[0.02] border border-white/5 p-4 rounded-xl text-center">
                                <div className="text-gray-500 text-xs uppercase mb-1">{k}</div>
                                <div className="text-white font-mono font-bold">{v}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SoftwareDetail;
