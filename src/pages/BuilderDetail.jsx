import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, HardHat, Phone, Calendar, Briefcase, Star } from 'lucide-react';

const BuilderDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const item = useMemo(() => {
        const names = ["EcoStruct Vietnam", "Urban Core Construction", "Mekong Modular"];
        const index = (parseInt(id) - 1) % names.length;

        return {
            id,
            name: names[index] || `Builder #${id}`,
            category: 'Construction Partner',
            rating: 4.8,
            location: 'Ho Chi Minh City, VN',
            description: "A premier construction partner specializing in sustainable and high-efficiency building methods.",
            stats: { projects: 154, founded: 2010, team: 45 },
            image: `https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200`
        };
    }, [id]);

    return (
        <div className="px-6 max-w-7xl mx-auto py-10 space-y-12 pb-32">
            <div className="flex items-center justify-between">
                <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => navigate('/solutions/builder')}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/10"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-mono text-xs uppercase tracking-widest">Back to Builders</span>
                </motion.button>
            </div>

            <div className="relative rounded-[3rem] overflow-hidden min-h-[400px] flex items-end p-10 bg-[#0F0F13] border border-white/10">
                <img src={item.image} className="absolute inset-0 w-full h-full object-cover opacity-40" alt="builder bg" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-end gap-6">
                    <div>
                        <div className="flex items-center gap-2 text-secondary font-mono text-xs uppercase mb-2">
                            <Star size={14} fill="currentColor" /> Verified Partner
                        </div>
                        <h1 className="text-5xl font-display font-medium text-white mb-2">{item.name}</h1>
                        <div className="flex items-center gap-4 text-gray-300">
                            <span className="flex items-center gap-1"><MapPin size={16} /> {item.location}</span>
                            <span className="flex items-center gap-1"><HardHat size={16} /> {item.category}</span>
                        </div>
                    </div>
                    <button className="bg-white text-black font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform flex items-center gap-2">
                        <Phone size={18} /> Contact Now
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                    <h2 className="text-2xl font-display text-white">Company Profile</h2>
                    <p className="text-gray-400 leading-relaxed text-lg">{item.description}</p>

                    <div className="grid grid-cols-3 gap-4 pt-4">
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/5 text-center">
                            <div className="text-3xl font-bold text-white mb-1">{item.stats.projects}</div>
                            <div className="text-xs text-gray-500 uppercase">Projects</div>
                        </div>
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/5 text-center">
                            <div className="text-3xl font-bold text-white mb-1">{item.stats.team}</div>
                            <div className="text-xs text-gray-500 uppercase">Experts</div>
                        </div>
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/5 text-center">
                            <div className="text-3xl font-bold text-white mb-1">{item.stats.founded}</div>
                            <div className="text-xs text-gray-500 uppercase">Founded in</div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#0F0F13] border border-white/10 rounded-3xl p-8 space-y-6">
                    <h3 className="text-lg font-bold text-white">Service Areas</h3>
                    <div className="space-y-3">
                        {['Residential Construction', 'Commercial High-Rise', 'Sustainable Renovation', 'Interior Fit-out'].map(s => (
                            <div key={s} className="flex items-center gap-3 text-gray-400 text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div> {s}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuilderDetail;
