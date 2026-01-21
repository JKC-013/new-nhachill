import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
    ArrowLeft,
    Share2,
    Bookmark,
    MessageSquare,
    Twitter,
    Linkedin,
    Link2,
    Clock,
    User,
    ChevronRight,
    ArrowUpRight
} from 'lucide-react';

const NewsDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState('');
    const contentRef = useRef(null);

    // Scroll progress bar
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const sections = [
        { id: 'introduction', label: 'Introduction' },
        { id: 'current-landscape', label: 'Current Landscape' },
        { id: 'key-innovations', label: 'Key Innovations' },
        { id: 'decentralized-impact', label: 'Decentralized Impact' },
        { id: 'future-outlook', label: 'Future Outlook' },
        { id: 'conclusion', label: 'Conclusion' }
    ];

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // Account for sticky header
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="min-h-screen bg-[#05050A] pb-40">
            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
                style={{ scaleX }}
            />

            {/* Back Button */}
            <div className="max-w-7xl mx-auto px-6 pt-10">
                <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => navigate('/news')}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/10"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-mono text-xs uppercase tracking-widest">Back to Insights</span>
                </motion.button>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-12 grid lg:grid-cols-12 gap-16 relative">

                {/* Sidebar Navigation (Left) */}
                <aside className="lg:col-span-3 hidden lg:block">
                    <div className="sticky top-24 space-y-10">
                        <div className="space-y-4">
                            <h4 className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.2em] px-4">Contents</h4>
                            <nav className="space-y-1">
                                {sections.map((section) => (
                                    <button
                                        key={section.id}
                                        onClick={() => scrollToSection(section.id)}
                                        className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center justify-between group ${activeSection === section.id
                                            ? 'bg-primary/10 text-primary border-l-2 border-primary'
                                            : 'text-gray-500 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        <span className="text-sm font-medium">{section.label}</span>
                                        <ChevronRight
                                            size={14}
                                            className={`transition-transform duration-300 ${activeSection === section.id ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'
                                                }`}
                                        />
                                    </button>
                                ))}
                            </nav>
                        </div>

                        <div className="px-4 py-8 bg-white/[0.02] border border-white/5 rounded-3xl space-y-6">
                            <h5 className="text-white text-sm font-bold uppercase tracking-widest">Share Article</h5>
                            <div className="flex gap-4">
                                <SocialButton icon={<Twitter size={18} />} />
                                <SocialButton icon={<Linkedin size={18} />} />
                                <SocialButton icon={<Link2 size={18} />} />
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content (Center) */}
                <main className="lg:col-span-9 xl:col-span-9 max-w-4xl mx-auto w-full">
                    <div className="space-y-10">
                        {/* Meta */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-6"
                        >
                            <div className="flex items-center gap-3 text-primary font-mono text-xs uppercase tracking-widest">
                                <span className="px-3 py-1 bg-primary/10 rounded-full border border-primary/20">Architecture</span>
                                <span>• Jan 12, 2026</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-display font-medium text-white tracking-tight leading-[1.1]">
                                The Rise of Regenerative Architecture in 2026
                            </h1>
                            <div className="flex items-center gap-6 pt-4 border-t border-white/5">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-display text-primary text-sm border border-primary/20">EV</div>
                                    <div>
                                        <div className="text-white text-sm font-semibold">Dr. Elena Vance</div>
                                        <div className="text-gray-500 text-xs uppercase tracking-widest font-mono">Principal Theorist</div>
                                    </div>
                                </div>
                                <div className="flex gap-3 ml-auto">
                                    <button className="p-3 bg-white/5 rounded-2xl border border-white/10 text-gray-400 hover:text-white transition-colors">
                                        <Bookmark size={20} />
                                    </button>
                                    <button className="p-3 bg-white/5 rounded-2xl border border-white/10 text-gray-400 hover:text-white transition-colors">
                                        <Share2 size={20} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Featured Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="aspect-[21/9] rounded-[2.5rem] overflow-hidden border border-white/5"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
                                className="w-full h-full object-cover"
                                alt="Featured"
                            />
                        </motion.div>

                        {/* Article Content */}
                        <article className="prose prose-invert prose-lg max-w-none space-y-16 text-gray-400 leading-relaxed font-sans">
                            <section id="introduction" className="space-y-6 pt-10">
                                <h2 className="text-3xl font-display text-white mb-8 border-b border-white/5 pb-4 uppercase tracking-wider">Introduction</h2>
                                <p className="text-xl text-gray-300 leading-relaxed italic border-l-4 border-primary pl-8 py-2">
                                    "Architecture is no longer about static structures; it's about dynamic ecosystems that breathe, evolve, and give back to their environment."
                                </p>
                                <p>
                                    As we step deeper into 2026, the global construction industry is undergoing its most radical transformation since the Industrial Revolution. The shift from sustainable to <span className="text-primary font-bold">regenerative</span> architecture represents a fundamental change in how we perceive the built environment.
                                </p>
                                <p>
                                    Traditional sustainable practices aim to minimize impact. Regenerative design, however, seeks to improve the health of ecosystems. On the Nhachill platform, we've seen a 300% increase in blueprints that incorporate living materials and closed-loop waste systems.
                                </p>
                            </section>

                            <section id="current-landscape" className="space-y-6 scroll-mt-32">
                                <h2 className="text-3xl font-display text-white mb-8 border-b border-white/5 pb-4 uppercase tracking-wider">Current Landscape</h2>
                                <p>
                                    The current economic climate, coupled with advanced generative design tools, has paved the way for small-scale developers to compete with global conglomerates. Decentralization isn't just a buzzword; it's the operational reality of modular construction.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                                        <h4 className="text-white font-bold mb-2">32% REDUCTION</h4>
                                        <p className="text-sm">Average energy consumption in regenerative structures compared to LEED Gold buildings in 2025.</p>
                                    </div>
                                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                                        <h4 className="text-white font-bold mb-2">10K+ ASSETS</h4>
                                        <p className="text-sm">Verified biological and smart materials now listed on the Nhachill Marketplace.</p>
                                    </div>
                                </div>
                                <p>
                                    Materials like carbon-neutral polymers and self-healing concrete are no longer experimental. They are being used in housing projects across Southeast Asia and Northern Europe, many of which were initiated right here on Nhachill.
                                </p>
                            </section>

                            <section id="key-innovations" className="space-y-6 scroll-mt-32">
                                <h2 className="text-3xl font-display text-white mb-8 border-b border-white/5 pb-4 uppercase tracking-wider">Key Innovations</h2>
                                <p>
                                    One of the most exciting breakthroughs this year is the integration of <span className="text-secondary font-bold">Mycelium-based insulators</span>. These organic materials are not only compostable but also offer superior thermal regulation.
                                </p>
                                <ul className="list-disc pl-6 space-y-4 marker:text-primary">
                                    <li><strong>Generative Foundation Systems:</strong> Algorithms that adapt to varying soil conditions in real-time during the design phase.</li>
                                    <li><strong>Photosynthetic Façades:</strong> Exterior walls that process CO2 and produce oxygen, effectively acting as "urban lungs."</li>
                                    <li><strong>Digital Twin Synchronization:</strong> Real-time feedback loops between the physical building and its digital counterpart for maintenance prediction.</li>
                                </ul>
                            </section>

                            <section id="decentralized-impact" className="space-y-6 scroll-mt-32">
                                <h2 className="text-3xl font-display text-white mb-8 border-b border-white/5 pb-4 uppercase tracking-wider">Decentralized Impact</h2>
                                <p>
                                    By removing the middlemen in the supply chain, Nhachill is enabling a more equitable distribution of architectural wealth. A designer in Da Lat can now sell a high-performance blueprint to a developer in Toronto without needing a multinational law firm to mediate the IP transfer.
                                </p>
                                <div className="p-10 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-[2.5rem] border border-white/10 my-10 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                                        <ArrowUpRight size={80} className="text-white" />
                                    </div>
                                    <h3 className="text-2xl font-display text-white mb-4">Empowering Localism</h3>
                                    <p className="text-gray-300 relative z-10">
                                        This redistribution of power is leads to more diverse, culturally relevant, and environmentally sensitive designs. We are moving away from the "one size fits all" glass box towards regional architectures that respect local context.
                                    </p>
                                </div>
                            </section>

                            <section id="future-outlook" className="space-y-6 scroll-mt-32">
                                <h2 className="text-3xl font-display text-white mb-8 border-b border-white/5 pb-4 uppercase tracking-wider">Future Outlook</h2>
                                <p>
                                    Looking toward 2027, we anticipate the merger of 3D-on-site printing with automated assembly robots. This will further reduce construction waste and allow for even more complex, organic geometries.
                                </p>
                                <p>
                                    The ultimate goal of Nhachill remains the same: to democratize the tools of creation. As these technologies mature, the barrier to entry for building a high-quality, sustainable home will continue to drop.
                                </p>
                            </section>

                            <section id="conclusion" className="space-y-6 scroll-mt-32">
                                <h2 className="text-3xl font-display text-white mb-8 border-b border-white/5 pb-4 uppercase tracking-wider">Conclusion</h2>
                                <p>
                                    The rise of regenerative architecture is not a trend; it's a necessity. In a world of finite resources and shifting climates, the structures we build must do more than just provide shelter. They must be active participants in the restoration of our planet.
                                </p>
                                <p>
                                    We invite you to explore the latest regenerative blueprints and materials in the Marketplace and join the conversation in our community forums.
                                </p>
                            </section>
                        </article>

                        {/* Article Footer */}
                        <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex items-center gap-4">
                                <button className="flex items-center gap-2 text-sm font-mono text-gray-500 hover:text-white transition-colors">
                                    <MessageSquare size={18} /> 42 COMMENTS
                                </button>
                                <div className="w-1 h-1 bg-white/10 rounded-full"></div>
                                <span className="text-sm font-mono text-gray-500">1.2K VIEWS</span>
                            </div>
                            <div className="flex items-center gap-6">
                                <span className="text-xs font-mono text-gray-600 uppercase tracking-widest">Tags:</span>
                                <div className="flex gap-2">
                                    {['ARCH_TECH', 'ECO_REGEN', 'FUTURE'].map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-mono text-gray-400">#{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

const SocialButton = ({ icon }) => (
    <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-primary hover:border-primary transition-all flex items-center justify-center">
        {icon}
    </button>
);

export default NewsDetail;
