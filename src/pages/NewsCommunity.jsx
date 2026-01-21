import React, { useState, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowRight, ArrowUpRight, Search, Box, Users, Star } from 'lucide-react';

const MOCK_NEWS = [
    {
        id: 1,
        title: "The Rise of Regenerative Architecture in 2026",
        excerpt: "Discover how self-sustaining buildings are transforming urban landscapes and reducing global carbon footprints through biological integration.",
        category: "Architecture",
        date: "Jan 12, 2026",
        readTime: "8 min read",
        author: "Dr. Elena Vance",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
        isHero: true
    },
    {
        id: 2,
        title: "Nhachill Marketplace hits 10k Verified Blueprints",
        excerpt: "Our decentralized asset exchange reaches a major milestone, empowering thousands of independent designers worldwide.",
        category: "Marketplace",
        date: "Jan 10, 2026",
        readTime: "4 min read",
        author: "Marcus Chen",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 3,
        title: "AI-Driven Structural Optimizations: A New Era",
        excerpt: "Exploring the impact of generative neural networks on building safety and material efficiency in modern construction.",
        category: "Tech",
        date: "Jan 08, 2026",
        readTime: "6 min read",
        author: "Sarah Jenkins",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600"
    }
];

const MOCK_EVENTS = [
    {
        id: 1,
        title: "Global Green Build Conference 2026",
        date: "Feb 15, 2026",
        location: "Singapore / Virtual",
        category: "Conference",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        title: "Bamboo Architecture Workshop",
        date: "Mar 10, 2026",
        location: "Bali, Indonesia",
        category: "Workshop",
        image: "https://images.unsplash.com/photo-1527663851017-6f108b35cb61?auto=format&fit=crop&q=80&w=800"
    }
];

const MOCK_CONTESTS = [
    {
        id: 1,
        title: "Future Living 2050 Design Challenge",
        deadline: "Apr 01, 2026",
        prize: "$50,000 USD",
        status: "Open",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        title: "Sustainable Furniture Innovation Award",
        deadline: "May 20, 2026",
        prize: "$15,000 USD",
        status: "Coming Soon",
        image: "https://images.unsplash.com/photo-1503602642458-232111445857?auto=format&fit=crop&q=80&w=800"
    }
];

const NewsCommunity = ({ initialTab: propInitialTab }) => {
    const location = useLocation();
    const routerInitialTab = location.state?.initialTab;
    const defaultTab = propInitialTab || routerInitialTab || 'news';

    const [activeTab, setActiveTab] = useState(defaultTab);
    const navigate = useNavigate();

    // Ensure state syncs if props change
    React.useEffect(() => {
        if (propInitialTab) setActiveTab(propInitialTab);
    }, [propInitialTab]);

    return (
        <div className="px-6 max-w-7xl mx-auto py-10 space-y-12 pb-40">
            {/* Header */}
            <div className="text-center space-y-6">
                <h1 className="text-5xl md:text-6xl font-display font-medium text-white tracking-tight">
                    News & <span className="text-primary italic">Community</span>
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Insights, events, and challenges for the decentralized architecture ecosystem.
                </p>

                {/* Unified Tab Navigation */}
                <div className="flex items-center justify-center mt-8">
                    <div className="flex p-1 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-x-auto max-w-full">
                        <TabButton
                            active={activeTab === 'news'}
                            onClick={() => setActiveTab('news')}
                            icon={<Box size={18} />}
                            label="News"
                        />
                        <TabButton
                            active={activeTab === 'events'}
                            onClick={() => setActiveTab('events')}
                            icon={<Calendar size={18} />}
                            label="Events"
                        />
                        <TabButton
                            active={activeTab === 'contests'}
                            onClick={() => setActiveTab('contests')}
                            icon={<Box size={18} />}
                            label="Contests"
                        />
                        <TabButton
                            active={activeTab === 'blogs'}
                            onClick={() => setActiveTab('blogs')}
                            icon={<Box size={18} />}
                            label="Blogs"
                        />
                    </div>
                </div>
            </div>

            {/* Content Switcher */}
            <AnimatePresence mode="wait">
                {activeTab === 'news' && (
                    <motion.div
                        key="news"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-12"
                    >
                        {/* Reuse the best Grid from News.jsx but simpler */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {MOCK_NEWS.map((news) => (
                                <div key={news.id} onClick={() => navigate(`/news/${news.id}`)} className="group cursor-pointer space-y-4">
                                    <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 relative">
                                        <img src={news.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={news.title} />
                                        <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur rounded border border-white/10 text-[10px] font-bold uppercase text-white">
                                            {news.category}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-gray-500 text-[10px] font-mono uppercase mb-2">{news.date}</div>
                                        <h3 className="text-xl font-display font-medium text-white group-hover:text-primary transition-colors">{news.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {activeTab === 'events' && (
                    <motion.div
                        key="events"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {MOCK_EVENTS.map(event => (
                            <div key={event.id} className="bg-[#0F0F13] border border-white/10 rounded-3xl p-6 flex gap-6 hover:border-white/20 transition-all">
                                <div className="w-32 aspect-[3/4] rounded-2xl overflow-hidden shrink-0">
                                    <img src={event.image} className="w-full h-full object-cover" alt={event.title} />
                                </div>
                                <div className="flex-1 py-2 flex flex-col justify-between">
                                    <div className="space-y-2">
                                        <div className="text-primary text-xs font-bold uppercase tracking-widest">{event.category}</div>
                                        <h3 className="text-2xl font-display text-white">{event.title}</h3>
                                        <div className="text-gray-400 text-sm flex items-center gap-2">
                                            <Calendar size={14} /> {event.date}
                                        </div>
                                        <div className="text-gray-400 text-sm flex items-center gap-2">
                                            <Users size={14} /> {event.location}
                                        </div>
                                    </div>
                                    <button className="w-full py-2 bg-white/5 hover:bg-white/10 rounded-xl text-xs font-bold text-white uppercase tracking-widest transition-colors mt-4">
                                        Register Interest
                                    </button>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                )}

                {activeTab === 'contests' && (
                    <motion.div
                        key="contests"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {MOCK_CONTESTS.map(contest => (
                            <div key={contest.id} className="relative aspect-[16/9] rounded-3xl overflow-hidden group hover:scale-[1.01] transition-transform">
                                <img src={contest.image} className="absolute inset-0 w-full h-full object-cover" alt={contest.title} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                                <div className="absolute inset-0 p-8 flex flex-col justify-end space-y-4">
                                    <div>
                                        <div className="inline-block px-3 py-1 bg-primary text-black font-bold text-xs uppercase rounded mb-2">
                                            Prize: {contest.prize}
                                        </div>
                                        <h3 className="text-3xl font-display text-white">{contest.title}</h3>
                                    </div>
                                    <div className="flex items-center justify-between border-t border-white/20 pt-4">
                                        <div className="text-gray-300 text-xs uppercase font-mono">Deadline: {contest.deadline}</div>
                                        <button className="flex items-center gap-2 text-white font-bold text-sm group-hover:gap-4 transition-all">
                                            Enter Now <ArrowRight size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                )}

                {activeTab === 'blogs' && (
                    <motion.div
                        key="blogs"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="text-center py-20 bg-white/[0.02] border border-white/5 rounded-[3rem]"
                    >
                        <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Box size={32} className="text-gray-500" />
                        </div>
                        <h3 className="text-2xl font-display text-white mb-2">Community Voices</h3>
                        <p className="text-gray-500">Guest posts and interviews coming soon.</p>
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

export default NewsCommunity;
