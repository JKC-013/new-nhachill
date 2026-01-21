import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Cpu, Network, ArrowRight, PenTool, HardHat, Phone, MapPin, Star, Box, Zap } from 'lucide-react';
import Card from '../components/Card';

const Solutions = ({ initialTab: propInitialTab }) => {
    const location = useLocation();
    const routerInitialTab = location.state?.initialTab;
    const defaultTab = propInitialTab || routerInitialTab || 'design-tools';

    const [activeTab, setActiveTab] = useState(defaultTab);
    const navigate = useNavigate();

    // Ensure state syncs if props change or navigation happens
    useEffect(() => {
        if (propInitialTab) setActiveTab(propInitialTab);
    }, [propInitialTab]);

    const MOCK_SOFTWARE = [
        {
            id: 1,
            name: "Eco-Vis 3D",
            type: "Visualization",
            price: "Free",
            desc: "Real-time environmental impact visualization tool. Compatible with SketchUp and Revit.",
            icon: <Box />,
            color: "text-blue-400"
        },
        {
            id: 2,
            name: "Structo-BIM Pro",
            type: "Engineering",
            price: "$49.99",
            desc: "Advanced structural analysis plugin with automated load calculation and compliance checks.",
            icon: <Cpu />,
            color: "text-purple-400"
        },
        {
            id: 3,
            name: "Lumina Render",
            type: "Rendering",
            price: "$19.99",
            desc: "High-fidelity ray-tracing engine optimized for architectural visualization.",
            icon: <Zap />,
            color: "text-yellow-400"
        },
        {
            id: 4,
            name: "Open-Cad Community",
            type: "Drafting",
            price: "Free",
            desc: "Open-source 2D/3D drafting tool customized for sustainable housing projects.",
            icon: <PenTool />,
            color: "text-green-400"
        },
        {
            id: 5,
            name: "Materializer AI",
            type: "Asset Library",
            price: "$29.99",
            desc: "AI-powered texture generation and material library manager.",
            icon: <Network />,
            color: "text-red-400"
        }
    ];

    const MOCK_BUILDERS = [
        {
            id: 1,
            name: "EcoStruct Vietnam",
            specialty: "Sustainable Residential",
            location: "Ho Chi Minh City",
            rating: 4.8,
            projects: 154,
            image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=400"
        },
        {
            id: 2,
            name: "Urban Core Construction",
            specialty: "High-Rise Commercial",
            location: "Hanoi",
            rating: 4.6,
            projects: 89,
            image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=400"
        },
        {
            id: 3,
            name: "Mekong Modular Info",
            specialty: "Prefabricated Housing",
            location: "Can Tho",
            rating: 4.9,
            projects: 210,
            image: "https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?auto=format&fit=crop&q=80&w=400"
        },
        {
            id: 4,
            name: "Heritage Restorations",
            specialty: "Historical Renovation",
            location: "Hue",
            rating: 4.7,
            projects: 45,
            image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&q=80&w=400"
        }
    ];

    return (
        <div className="px-6 max-w-7xl mx-auto py-10 space-y-12">
            {/* Header */}
            <div className="text-center space-y-6">
                <h1 className="text-5xl md:text-6xl font-display font-medium text-white tracking-tight">
                    Integrated <span className="text-primary italic">Solutions</span>
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Comprehensive tools for design and trusted partners associated with construction.
                </p>

                {/* Tabs */}
                <div className="flex items-center justify-center mt-8">
                    <div className="flex p-1 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                        <TabButton
                            active={activeTab === 'design-tools'}
                            onClick={() => setActiveTab('design-tools')}
                            icon={<PenTool size={18} />}
                            label="Design Tools"
                        />
                        <TabButton
                            active={activeTab === 'builder'}
                            onClick={() => setActiveTab('builder')}
                            icon={<HardHat size={18} />}
                            label="Builders"
                        />
                    </div>
                </div>
            </div>

            {/* Content Switcher */}
            <AnimatePresence mode="wait">
                {activeTab === 'design-tools' ? (
                    <motion.div
                        key="design-tools"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-8"
                    >
                        <div className="flex justify-between items-end border-b border-white/5 pb-4">
                            <div>
                                <h2 className="text-2xl font-display text-white">3D Design Software</h2>
                                <p className="text-gray-500">Professional tools for architectural design and visualization.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {MOCK_SOFTWARE.map((tool) => (
                                <SoftwareCard
                                    key={tool.id}
                                    tool={tool}
                                    onClick={() => navigate(`/solutions/software/${tool.id}`)}
                                />
                            ))}
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="builder"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {MOCK_BUILDERS.map((builder) => (
                                <div
                                    key={builder.id}
                                    onClick={() => navigate(`/solutions/builder/${builder.id}`)}
                                    className="bg-[#0F0F13] border border-white/10 rounded-3xl p-6 flex gap-6 hover:border-white/20 transition-all group cursor-pointer"
                                >
                                    <img
                                        src={builder.image}
                                        alt={builder.name}
                                        className="w-24 h-24 rounded-2xl object-cover shrink-0"
                                    />
                                    <div className="flex-1 space-y-2">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{builder.name}</h3>
                                                <p className="text-sm text-gray-400">{builder.specialty}</p>
                                            </div>
                                            <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-lg">
                                                <Star size={12} className="text-yellow-500 fill-yellow-500" />
                                                <span className="text-xs font-bold text-white">{builder.rating}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 text-xs text-gray-500 font-mono pt-2">
                                            <div className="flex items-center gap-1">
                                                <MapPin size={12} /> {builder.location}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <HardHat size={12} /> {builder.projects} Projects
                                            </div>
                                        </div>

                                        <button className="w-full mt-2 bg-white/5 hover:bg-primary hover:text-black py-2 rounded-xl text-xs font-bold text-white transition-all">
                                            View Profile
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// Sub-components
const TabButton = ({ active, onClick, icon, label }) => (
    <button
        onClick={onClick}
        className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all ${active
            ? 'bg-primary text-black shadow-lg shadow-primary/20'
            : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
    >
        {icon}
        {label}
    </button>
);

const SoftwareCard = ({ tool, onClick }) => (
    <div
        onClick={onClick}
        className="block bg-[#0F0F13] border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-white/20 transition-colors cursor-pointer flex flex-col h-full"
    >
        <div className="flex justify-between items-start mb-6">
            <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${tool.color} shadow-lg shadow-black/50`}>
                {React.cloneElement(tool.icon, { size: 24 })}
            </div>
            <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${tool.price === 'Free' ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-primary/10 border-primary/20 text-primary'}`}>
                {tool.price}
            </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{tool.name}</h3>
        <div className="text-xs text-gray-500 font-mono mb-4">{tool.type}</div>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{tool.desc}</p>

        <button className={`w-full py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${tool.price === 'Free'
            ? 'bg-white/10 hover:bg-white/20 text-white'
            : 'bg-primary text-black hover:bg-primary/90 shadow-lg shadow-primary/20'
            }`}>
            {tool.price === 'Free' ? 'Download Now' : 'Purchase License'}
            <ArrowRight size={14} />
        </button>
    </div>
);

const ShieldIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
);

export default Solutions;
