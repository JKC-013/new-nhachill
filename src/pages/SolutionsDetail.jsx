import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    ArrowLeft,
    Share2,
    Hexagon,
    ShieldCheck,
    Star,
    Layout,
    Globe,
    Download,
    CreditCard,
    MapPin,
    Briefcase,
    Zap,
    Box,
    Cpu,
    PenTool,
    Network,
    HardHat
} from 'lucide-react';

const SolutionsDetail = () => {
    const { type, id } = useParams();
    const navigate = useNavigate();

    // Mock Data Generator
    const item = useMemo(() => {
        const isSoftware = type === 'software';
        const isBuilder = type === 'builder';

        let mockData = {};

        if (isSoftware) {
            const softwareNames = ["Eco-Vis 3D", "Structo-BIM Pro", "Lumina Render", "Open-Cad Community", "Materializer AI"];
            const softwareIndex = (parseInt(id) - 1) % softwareNames.length;

            mockData = {
                name: softwareNames[softwareIndex] || `Design Tool #${id}`,
                category: '3D Design Software / ' + ['Visualization', 'Engineering', 'Rendering'][softwareIndex % 3],
                price: id % 2 === 0 ? '$49.99' : 'Free',
                rating: 4.8,
                marketing_tag: id % 2 === 0 ? 'Pro' : 'Open Source',
                author: 'Autodesk Authorized Developer',
                description: "A professional grade specialized tool designed for the decentralized architectural workflow. Seamlessly integrates with major BIM platforms including Revit, Archicad, and Blender.",
                features: ['Revit Integration', 'Real-time Raytracing', 'Cloud Collaboration', 'AI-Assisted'],
                specs: { version: '2.4.1', users: '12k+', size: '450MB', os: 'Win/Mac/Linux' },
                image: `https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200`
            };
        } else {
            // Builder
            const builderNames = ["EcoStruct Vietnam", "Urban Core Construction", "Mekong Modular Info", "Heritage Restorations"];
            const builderIndex = (parseInt(id) - 1) % builderNames.length;

            mockData = {
                name: builderNames[builderIndex] || `Construction Partner #${id}`,
                category: 'Construction / ' + ['Residential', 'Commercial', 'Prefab', 'Restoration'][builderIndex % 4],
                price: 'Custom Quote',
                rating: 4.9,
                marketing_tag: 'Verified Partner',
                author: 'Vietnam Construction Association',
                description: "A premier construction partner specializing in sustainable and high-efficiency building methods. With over 15 years of experience delivering projects across Vietnam.",
                features: ['ISO 9001 Certified', 'Green Building Council', 'Safety First', 'Turnkey Solutions'],
                specs: { founded: '2010', projects: '150+', staff: '200+', region: 'Southern VN' },
                image: `https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200`
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
            {/* Header */}
            <div className="flex items-center justify-between">
                <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => navigate(type === 'software' ? '/solutions/design-tools' : '/solutions/builder')}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/10"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-mono text-xs uppercase tracking-widest">Back to Solutions</span>
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
                {/* Left Visual */}
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

                        <div className="absolute top-6 left-6 px-4 py-2 bg-primary/20 backdrop-blur-md border border-primary/20 text-primary rounded-xl text-xs font-bold uppercase tracking-wider">
                            {item.marketing_tag}
                        </div>
                    </div>
                </motion.div>

                {/* Right Info */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="lg:col-span-5 space-y-8"
                >
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-secondary font-mono text-xs tracking-[0.2em] uppercase">
                            <ShieldCheck size={14} /> Official {type === 'software' ? 'Developer' : 'Partner'}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-medium text-white leading-tight uppercase">
                            {item.name}
                        </h1>
                        <div className="flex items-center gap-6 pt-2">
                            <div className="flex items-center gap-2">
                                <Star size={16} className="text-secondary fill-secondary" />
                                <span className="text-white font-mono">{item.rating}</span>
                                <span className="text-gray-500 text-xs">(Verified)</span>
                            </div>
                            <div className="w-1 h-1 bg-white/10 rounded-full"></div>
                            <div className="text-gray-400 text-sm font-mono uppercase">{item.author}</div>
                        </div>
                    </div>

                    <div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl space-y-6">
                        <div className="flex items-end justify-between">
                            <div className="space-y-1">
                                <div className="text-xs text-gray-500 font-mono uppercase">{type === 'software' ? 'License Price' : 'Est. Project Cost'}</div>
                                <div className="text-4xl font-display font-bold text-white">{item.price}</div>
                            </div>
                            {type === 'software' && (
                                <div className="text-right">
                                    <div className="text-xs text-emerald-400 font-mono">v{item.specs.version}</div>
                                    <div className="text-[10px] text-gray-600 font-mono uppercase">Latest Stable</div>
                                </div>
                            )}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button className="bg-primary text-black font-bold py-4 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/10">
                                {type === 'software' ? (item.price === 'Free' ? <Download size={20} /> : <CreditCard size={20} />) : <Briefcase size={20} />}
                                {type === 'software' ? (item.price === 'Free' ? 'Download' : 'Purchase') : 'Request Quote'}
                            </button>
                            <button className="bg-white/5 hover:bg-white/10 text-white font-bold py-4 rounded-2xl border border-white/10 transition-all flex items-center justify-center gap-2">
                                {type === 'software' ? <Globe size={20} /> : <MapPin size={20} />}
                                {type === 'software' ? 'Website' : 'View Profile'}
                            </button>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-sm font-mono text-white border-b border-white/10 pb-4">
                            {type === 'software' ? 'SYSTEM_CAPABILITIES' : 'COMPANY_PROFILE'}
                        </h3>
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

                    {/* Specs Grid */}
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

export default SolutionsDetail;
