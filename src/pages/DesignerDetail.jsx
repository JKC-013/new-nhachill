import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Star, Award, Zap, ArrowLeft, Mail, Share2, Hexagon } from 'lucide-react';
import Card from '../components/Card';

const DesignerDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Mock Designer Data
    const designer = {
        id: id,
        name: id === '1' ? "James Harrison" : `Architect ${id}`,
        role: "Senior Architectural Visionary",
        location: "HCMC, Vietnam",
        bio: "Specializing in biophilic design and sustainable urban ecosystems. My work bridges the gap between natural organic forms and high-performance modular construction. With over 12 years of experience in the industry, I aim to redefine how we live in high-density urban environments.",
        experience: "12+ Years",
        projects: 42,
        rating: 4.9,
        successRate: "98%",
        clients: 120,
        image: `https://api.dicebear.com/7.x/avataaars/svg?seed=${parseInt(id) + 100}`,
        socials: { email: 'james.h@nhachill.com', linkedin: '#', twitter: '#' }
    };

    // Mock Work (Blueprints)
    const MOCK_WORK = Array.from({ length: 6 }, (_, i) => ({
        id: i + 1,
        name: `Project Echo ${i + 1}`,
        category: "Generative Blueprint",
        image: null
    }));

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariant = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="px-6 max-w-7xl mx-auto py-10 space-y-16 pb-32">
            {/* Back Button */}
            <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative z-10"
            >
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/10"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-mono text-xs uppercase tracking-widest">Back to Designers</span>
                </button>
            </motion.div>

            {/* Profile Header Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Left: Avatar & Quick Info */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="lg:col-span-4 space-y-8"
                >
                    <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                        <img src={designer.image} className="w-full h-full object-cover" alt={designer.name} />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0E] via-transparent to-transparent opacity-60"></div>
                        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                            <div className="flex gap-2">
                                <button className="p-3 bg-white/10 backdrop-blur rounded-xl border border-white/10 hover:bg-white/20 transition-all text-white">
                                    <Mail size={18} />
                                </button>
                                <button className="p-3 bg-white/10 backdrop-blur rounded-xl border border-white/10 hover:bg-white/20 transition-all text-white">
                                    <Share2 size={18} />
                                </button>
                            </div>
                            <div className="bg-primary/20 backdrop-blur border border-primary/30 px-3 py-1.5 rounded-lg text-xs font-mono text-primary flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
                                AVAILABLE
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <StatBox icon={<Zap size={16} className="text-primary" />} label="Projects" value={designer.projects} />
                        <StatBox icon={<Star size={16} className="text-secondary" />} label="Rating" value={designer.rating} />
                    </div>
                </motion.div>

                {/* Right: Bio & Stats */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="lg:col-span-8 space-y-10"
                >
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-secondary font-mono text-xs tracking-widest uppercase">
                            <Award size={14} /> Certified Creator
                        </div>
                        <h1 className="text-5xl md:text-6xl font-display font-medium text-white tracking-tight leading-none uppercase">
                            {designer.name}
                        </h1>
                        <div className="flex items-center gap-4 text-gray-400 font-mono text-sm pt-2">
                            <div className="flex items-center gap-2">
                                <MapPin size={16} className="text-gray-500" />
                                {designer.location}
                            </div>
                            <div className="w-1 h-1 bg-white/10 rounded-full"></div>
                            <div>{designer.role}</div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest border-b border-white/5 pb-4">Architectural Vision</h3>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
                            {designer.bio}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <div className="text-3xl font-display font-bold text-white mb-1">{designer.experience}</div>
                            <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">Expertise</div>
                        </div>
                        <div>
                            <div className="text-3xl font-display font-bold text-white mb-1">{designer.successRate}</div>
                            <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">Success Rate</div>
                        </div>
                        <div>
                            <div className="text-3xl font-display font-bold text-white mb-1">{designer.clients}</div>
                            <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">Happy Clients</div>
                        </div>
                    </div>

                    <div className="pt-6">
                        <button className="bg-gradient-to-r from-primary to-accent text-white font-bold px-10 py-5 rounded-2xl shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-3">
                            <Hexagon size={20} className="fill-white/20" />
                            Collaborate on Project
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Grid of Work */}
            <div className="space-y-10 pt-10">
                <div className="flex justify-between items-end border-b border-white/5 pb-6">
                    <div>
                        <h2 className="text-3xl font-display font-medium text-white mb-2 uppercase">Portfolio</h2>
                        <p className="text-gray-500 font-mono text-sm uppercase tracking-wider">Released Blueprints & Case Studies</p>
                    </div>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 rounded-lg bg-white/5 text-xs font-mono text-gray-400 hover:text-white transition-colors">ALL_UNITS</button>
                        <button className="px-4 py-2 rounded-lg bg-white/5 text-xs font-mono text-gray-400 hover:text-white transition-colors">3D_ASSETS</button>
                    </div>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {MOCK_WORK.map((work) => (
                        <motion.div key={work.id} variants={itemVariant}>
                            <Card
                                title={work.name}
                                subtitle={work.category}
                                imageUrl={work.image}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

const StatBox = ({ icon, label, value }) => (
    <div className="bg-[#0F0F13] border border-white/5 rounded-2xl p-6 space-y-1">
        <div className="flex items-center gap-2 mb-2">
            {icon}
            <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">{label}</span>
        </div>
        <div className="text-2xl font-display font-bold text-white">{value}</div>
    </div>
);

export default DesignerDetail;
