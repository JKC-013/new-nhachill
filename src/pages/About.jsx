import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Users, PenTool, Truck, Globe, ArrowRight, Shield, Zap, Heart, Handshake } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const About = () => {
    const location = useLocation();

    useEffect(() => {
        // Handle scrolling if state contains scrollTo ID
        if (location.state?.scrollTo) {
            const element = document.getElementById(location.state.scrollTo);
            if (element) {
                setTimeout(() => {
                    const headerOffset = 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }, 100);
            }
        }
    }, [location]);

    return (
        <div className="min-h-screen bg-[#05050A] text-white overflow-hidden pb-20">
            {/* 1. Overview */}
            <Section id="overview" className="pt-20 pb-24 text-center relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 mix-blend-screen" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto px-6"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-accent mb-6 uppercase tracking-widest">
                        EST. 2025 • THE CORE
                    </span>
                    <h1 className="text-6xl md:text-8xl font-display font-medium tracking-tight mb-8">
                        The Future is <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary italic">Nhachill.</span>
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                        We are building a decentralized industrial ecosystem where architectural vision meets reality.
                        Nhachill is the bridge between the digital twin and the physical home.
                    </p>
                </motion.div>
            </Section>

            {/* 2. Vision & Mission */}
            <Section id="vision" className="py-24 border-y border-white/5 bg-white/[0.01]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center gap-3 text-secondary font-mono text-xs uppercase tracking-[0.3em]">
                                <Target size={16} /> OUR_TRAJECTORY
                            </div>
                            <h2 className="text-5xl font-display font-medium leading-tight">
                                Breaking barriers <br /> in global <span className="text-secondary">construction.</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Our mission is to democratize high-end architecture and optimize the global supply chain.
                                We empower local builders with global design intelligence.
                            </p>
                            <div className="grid grid-cols-2 gap-8 pt-6">
                                <div className="space-y-2">
                                    <h4 className="text-white font-bold">Transparency</h4>
                                    <p className="text-gray-500 text-sm">Real-time tracking of materials and costs.</p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-white font-bold">Accessibility</h4>
                                    <p className="text-gray-500 text-sm">Premium designs available for every region.</p>
                                </div>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-6 relative">
                            <div className="absolute -inset-10 bg-secondary/10 blur-[100px] -z-10 rounded-full animate-pulse" />
                            <StatCard icon={<Shield className="text-secondary" />} label="Verified Nodes" value="1,200+" />
                            <StatCard icon={<Zap className="text-primary" />} label="Avg. Efficiency" value="+45%" />
                            <StatCard icon={<Globe className="text-blue-400" />} label="Global Reach" value="48 Nations" />
                            <StatCard icon={<Users className="text-accent" />} label="Active Creators" value="5,000+" />
                        </div>
                    </div>
                </div>
            </Section>

            {/* 3. Teams */}
            <Section id="teams" className="py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-5xl font-display font-medium mb-6">Built by <span className="text-accent italic">Dreamers.</span></h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            A multidisciplinary collective of architects, engineers, and digital pioneers working together to reshape the industry.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { name: "Tech Core", role: "Infrastructure", color: "bg-primary/20" },
                            { name: "Design Guild", role: "Aesthetics", color: "bg-secondary/20" },
                            { name: "Supply Network", role: "Logistics", color: "bg-blue-500/20" },
                            { name: "Legal Nodes", role: "Governance", color: "bg-accent/20" }
                        ].map((team, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="group cursor-default"
                            >
                                <div className={`aspect-square rounded-[2rem] ${team.color} border border-white/5 flex items-center justify-center mb-6 overflow-hidden relative group-hover:border-white/20 transition-all`}>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <Users size={48} className="text-white/20 group-hover:text-white transition-all transform group-hover:scale-110" />
                                </div>
                                <h3 className="text-xl font-display font-medium text-white">{team.name}</h3>
                                <p className="text-gray-500 text-sm font-mono uppercase tracking-widest mt-1">{team.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 4. Partner */}
            <Section id="partner" className="py-32 bg-white/[0.02] border-t border-white/5 rounded-[4rem]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-8 border border-secondary/20">
                                <Handshake size={32} className="text-secondary" />
                            </div>
                            <h2 className="text-5xl font-display font-medium mb-8 leading-tight">Collaborating for <br /> <span className="text-secondary italic">Impact.</span></h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                We partner with leading material suppliers, tech providers, and design studios to ensure every project built on Nhachill meets the highest standards of quality and sustainability.
                            </p>
                            <button className="flex items-center gap-3 text-white font-mono text-xs uppercase tracking-[0.3em] group">
                                BECOME_A_PARTNER <ArrowRight size={16} className="text-secondary group-hover:translate-x-2 transition-transform" />
                            </button>
                        </motion.div>

                        <div className="lg:w-1/2 grid grid-cols-3 gap-4">
                            {Array.from({ length: 9 }).map((_, i) => (
                                <div key={i} className="aspect-video bg-white/5 border border-white/5 rounded-2xl flex items-center justify-center group hover:bg-white/10 transition-all">
                                    <div className="w-12 h-4 bg-gray-800 rounded-full group-hover:bg-gray-700 transition-all" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

const Section = ({ children, className, id }) => (
    <section id={id} className={`w-full ${className}`}>
        {children}
    </section>
);

const StatCard = ({ icon, label, value }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="p-6 rounded-3xl bg-[#0F0F13] border border-white/5 backdrop-blur-xl shadow-2xl"
    >
        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4">
            {icon}
        </div>
        <div className="text-2xl font-display font-bold text-white mb-1">{value}</div>
        <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{label}</div>
    </motion.div>
);

export default About;

