import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Star, MessageCircle, UserPlus, Filter, Box, Users, MessageSquare, ThumbsUp, Share2, PlusCircle } from 'lucide-react';

const MOCK_MEMBERS = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: ['Alex Rivera', 'Sarah Chen', 'Marcus Johnson', 'Elena Vance', 'David Kim', 'Olivia Brown'][i % 6] + (i > 5 ? ' ' + i : ''),
    role: ['Architect', 'Interior Designer', 'Structural Engineer', 'Landscape Architect'][i % 4],
    location: ['Toronto, CA', 'Singapore, SG', 'London, UK', 'New York, USA', 'Berlin, DE'][i % 5],
    rating: (4 + Math.random()).toFixed(1),
    projects: Math.floor(Math.random() * 50) + 5,
    image: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`
}));

const MOCK_THREADS = [
    {
        id: 1,
        author: { name: "Sarah Chen", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=11" },
        title: "Best materials for tropical climates?",
        preview: "I'm working on a project in Bali and looking for sustainable insulation options that handle humidity well...",
        tags: ["Materials", "Sustainability", "Tropical"],
        likes: 24,
        comments: 8,
        time: "2h ago",
        isHot: true
    },
    {
        id: 2,
        author: { name: "David Kim", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=14" },
        title: "Generative Design vs. Parametric: What's the practical difference?",
        preview: "I've been using Grasshopper for years but looking into AI-driven generative tools. Can someone explain the workflow shift?",
        tags: ["Design Tech", "Software"],
        likes: 156,
        comments: 42,
        time: "5h ago",
        isHot: true
    },
    {
        id: 3,
        author: { name: "Marcus Johnson", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=12" },
        title: "Looking for structural engineer for modular container home",
        preview: "Need a sign-off on a 3-story shipping container build in Seattle. anyone available for a consultation?",
        tags: ["Jobs", "Structural"],
        likes: 5,
        comments: 2,
        time: "1d ago",
        isHot: false
    }
];

const Forum = ({ initialTab: propInitialTab }) => {
    const location = useLocation();
    const routerInitialTab = location.state?.initialTab;
    const defaultTab = propInitialTab || routerInitialTab || 'community';

    const [activeTab, setActiveTab] = useState(defaultTab);
    const navigate = useNavigate();

    // Ensure state syncs if props change
    useEffect(() => {
        if (propInitialTab) setActiveTab(propInitialTab);
    }, [propInitialTab]);

    return (
        <div className="px-6 max-w-7xl mx-auto py-10 space-y-12 pb-40">
            {/* Header */}
            <div className="text-center space-y-6">
                <h1 className="text-5xl md:text-6xl font-display font-medium text-white tracking-tight">
                    Our <span className="text-primary italic">Forum</span>
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Connect, collaborate, and discuss with the decentralized architecture community.
                </p>

                {/* Unified Tab Navigation */}
                <div className="flex items-center justify-center mt-8">
                    <div className="flex p-1 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-x-auto max-w-full">
                        <TabButton
                            active={activeTab === 'community'}
                            onClick={() => setActiveTab('community')}
                            icon={<Users size={18} />}
                            label="Community Members"
                        />
                        <TabButton
                            active={activeTab === 'social'}
                            onClick={() => setActiveTab('social')}
                            icon={<MessageSquare size={18} />}
                            label="Social Network"
                        />
                    </div>
                </div>
            </div>

            {/* Content Switcher */}
            <AnimatePresence mode="wait">
                {activeTab === 'community' && (
                    <motion.div
                        key="community"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-8"
                    >
                        {/* Search & Filter */}
                        <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                            <div className="flex-1 relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="Search by name or role..."
                                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-primary/50 text-white placeholder:text-gray-500"
                                />
                            </div>
                            <button className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-2 hover:bg-white/10 transition-colors text-white">
                                <Filter size={20} />
                                <span>Filters</span>
                            </button>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {MOCK_MEMBERS.map((member, idx) => (
                                <motion.div
                                    key={member.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    onClick={() => navigate(`/architect/${member.id}`)}
                                    className="p-6 bg-[#0F0F13] border border-white/5 rounded-3xl hover:border-white/20 transition-all group cursor-pointer"
                                >
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="flex gap-4">
                                            <div className="w-16 h-16 rounded-2xl bg-white/5 overflow-hidden">
                                                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <h3 className="font-display text-xl font-medium text-white group-hover:text-primary transition-colors">{member.name}</h3>
                                                <div className="text-sm text-gray-400 mb-1">{member.role}</div>
                                                <div className="flex items-center gap-1 text-xs text-gray-500">
                                                    <MapPin size={12} /> {member.location}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1 bg-yellow-500/10 text-yellow-500 px-2 py-1 rounded-lg text-xs font-bold">
                                            <Star size={12} fill="currentColor" />
                                            {member.rating}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                        <div className="text-xs text-gray-400 font-mono">
                                            <span className="text-white font-bold">{member.projects}</span> PROJECTS
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="p-2 rounded-xl hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                                                <MessageCircle size={18} />
                                            </button>
                                            <button className="p-2 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-black transition-all">
                                                <UserPlus size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {activeTab === 'social' && (
                    <motion.div
                        key="social"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 lg:grid-cols-4 gap-8"
                    >
                        {/* Sidebar */}
                        <div className="hidden lg:block space-y-6">
                            <div className="bg-[#0F0F13] border border-white/5 rounded-3xl p-6 space-y-6">
                                <button className="w-full py-3 bg-primary text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all">
                                    <PlusCircle size={18} /> New Discussion
                                </button>
                                <div className="space-y-2">
                                    <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest pl-2 mb-2">Topics</h4>
                                    {['All Discussions', 'General', 'Design Help', 'Showcase', 'Jobs', 'Off-Topic'].map((topic, i) => (
                                        <button key={topic} className={`w-full text-left px-4 py-2 rounded-xl text-sm transition-colors ${i === 0 ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
                                            {topic}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Mobile Topic Selector */}
                        <div className="lg:hidden overflow-x-auto pb-2 -mx-4 px-4 flex gap-2 no-scrollbar">
                            <button className="whitespace-nowrap px-4 py-2 bg-primary text-black font-bold rounded-xl text-sm flex items-center gap-2">
                                <PlusCircle size={16} /> New
                            </button>
                            {['All Discussions', 'General', 'Design Help', 'Showcase', 'Jobs', 'Off-Topic'].map((topic, i) => (
                                <button key={topic} className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm transition-colors border border-white/5 ${i === 0 ? 'bg-white/10 text-white' : 'bg-[#0F0F13] text-gray-400'}`}>
                                    {topic}
                                </button>
                            ))}
                        </div>

                        {/* Feed */}
                        <div className="lg:col-span-3 space-y-4">
                            {MOCK_THREADS.map(thread => (
                                <div
                                    key={thread.id}
                                    onClick={() => navigate(`/forum/thread/${thread.id}`)}
                                    className="bg-[#0F0F13] border border-white/5 rounded-3xl p-6 hover:border-white/20 transition-all cursor-pointer group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex flex-col items-center gap-1 min-w-[3rem]">
                                            <button className="p-1 hover:text-primary transition-colors text-gray-500"><ThumbsUp size={18} /></button>
                                            <span className="text-sm font-bold text-white">{thread.likes}</span>
                                        </div>
                                        <div className="flex-1 space-y-2">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <img src={thread.author.image} className="w-6 h-6 rounded-full" alt={thread.author.name} />
                                                    <span className="text-xs text-gray-400">{thread.author.name}</span>
                                                    <span className="text-xs text-gray-600">• {thread.time}</span>
                                                </div>
                                                {thread.isHot && (
                                                    <span className="px-2 py-0.5 bg-red-500/10 text-red-500 text-[10px] font-bold uppercase rounded border border-red-500/20">Hot</span>
                                                )}
                                            </div>
                                            <h3 className="text-xl font-display font-medium text-white group-hover:text-primary transition-colors">{thread.title}</h3>
                                            <p className="text-gray-400 text-sm line-clamp-2">{thread.preview}</p>
                                            <div className="flex items-center gap-4 pt-2">
                                                <div className="flex gap-2">
                                                    {thread.tags.map(tag => (
                                                        <span key={tag} className="px-2 py-1 bg-white/5 rounded-lg text-[10px] text-gray-400 uppercase tracking-wider">{tag}</span>
                                                    ))}
                                                </div>
                                                <div className="flex items-center gap-4 ml-auto text-gray-500 text-xs">
                                                    <span className="flex items-center gap-1 hover:text-white transition-colors"><MessageSquare size={14} /> {thread.comments} Comments</span>
                                                    <span className="flex items-center gap-1 hover:text-white transition-colors"><Share2 size={14} /> Share</span>
                                                </div>
                                            </div>
                                        </div>
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

const TabButton = ({ active, onClick, icon, label }) => (
    <button
        onClick={onClick}
        className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${active
            ? 'bg-primary text-black shadow-lg shadow-primary/20'
            : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
    >
        {icon}
        {label}
    </button>
);

export default Forum;
