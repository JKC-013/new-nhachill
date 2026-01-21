import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, Play, Loader } from 'lucide-react';

const ArchitectStudio = () => {
    return (
        <div className="h-full flex flex-col gap-6 pb-20">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between"
            >
                <div>
                    <h1 className="text-2xl font-display font-medium text-white mb-1">Generative Studio</h1>
                    <p className="text-sm text-gray-500 font-mono">v4.2.0 • Stable Diffusion XL Engine</p>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-green-500 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        GPU ACTIVE
                    </span>
                </div>
            </motion.div>

            <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-0">
                {/* Controls Panel */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-black/30 border border-white/10 rounded-2xl p-6 flex flex-col gap-6 backdrop-blur-sm"
                >
                    <div className="space-y-4">
                        <Label>Prompt</Label>
                        <textarea
                            className="w-full h-32 bg-black/50 border border-white/10 rounded-xl p-4 text-sm text-gray-300 focus:outline-none focus:border-primary/50 resize-none font-mono leading-relaxed"
                            placeholder="Describe your architectural vision (e.g. 'Futuristic eco-villa in Da Lat, bamboo structure, glass facade, volumetric lighting')..."
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label>Style</Label>
                            <Select options={['Modernism', 'Biophilic', 'Parametric', 'Cyberpunk']} />
                        </div>
                        <div className="space-y-2">
                            <Label>Material</Label>
                            <Select options={['Concrete', 'Bamboo', 'Glass', 'Steel']} />
                        </div>
                    </div>

                    <Link to="/detail/generation/new" className="mt-auto bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                        <Sparkles size={18} />
                        <span>Generate Variations</span>
                    </Link>
                </motion.div>

                {/* Viewport/Canvas */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="lg:col-span-2 bg-[#05050A] border border-white/10 rounded-2xl relative overflow-hidden flex items-center justify-center group"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-50"></div>

                    {/* Placeholder for Generation */}
                    <div className="text-center space-y-4 relative z-10 p-8 border border-white/5 bg-black/40 backdrop-blur-md rounded-2xl max-w-sm">
                        <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto animate-spin-slow">
                            <Loader className="text-accent" />
                        </div>
                        <div>
                            <h3 className="text-white font-medium mb-1">Waiting for Input...</h3>
                            <p className="text-gray-500 text-sm">Enter parameters to visualize 3D architectural models.</p>
                        </div>
                        <div className="pt-4 flex justify-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-white/20"></div>
                            <div className="w-2 h-2 rounded-full bg-white/20"></div>
                            <div className="w-2 h-2 rounded-full bg-white/20"></div>
                        </div>
                    </div>

                    {/* Code Terminal Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 h-16 bg-black/80 border border-white/10 rounded-lg p-3 font-mono text-xs text-green-400 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="opacity-50">&gt;&gt; Initializing WebGL Context... OK</div>
                        <div>&gt;&gt; Connected to Material Warehouse API (Latency: 24ms)_</div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

const Label = ({ children }) => <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">{children}</label>;
const Select = ({ options }) => (
    <select className="w-full bg-black/50 border border-white/10 rounded-lg p-2.5 text-sm text-gray-300 focus:outline-none focus:border-white/30">
        {options.map(o => <option key={o}>{o}</option>)}
    </select>
);

export default ArchitectStudio;
