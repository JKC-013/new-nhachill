import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UploadCloud, Package, TrendingUp, DollarSign, Plus, Eye, MoreHorizontal } from 'lucide-react';

const Supplier = () => {
    return (
        <div className="space-y-16 pb-20">
            {/* Header / Stats */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
                <StatCard
                    label="Total Revenue"
                    value="42.5 ETH"
                    trend="+12.5%"
                    icon={<DollarSign size={20} />}
                    color="text-accent"
                />
                <StatCard
                    label="Active Materials"
                    value="1,024"
                    trend="+4 new"
                    icon={<Package size={20} />}
                    color="text-primary"
                />
                <StatCard
                    label="Views (30d)"
                    value="84.2k"
                    trend="+8.1%"
                    icon={<Eye size={20} />}
                    color="text-green-400"
                />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Inventory Column */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.2 }}
                    className="lg:col-span-2 space-y-6"
                >
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-display font-bold text-white">Material Inventory</h2>
                        <Link to="/detail/upload/new" className="bg-primary/20 hover:bg-primary/30 border border-primary/50 text-primary px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all">
                            <Plus size={16} />
                            Upload New Material
                        </Link>
                    </div>

                    {/* Inventory List */}
                    <div className="bg-[#0F0F13] border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
                        {[1, 2, 3, 4, 5].map((item) => (
                            <MaterialRow key={item} id={item} />
                        ))}
                    </div>
                </motion.div>

                {/* Sidebar: Upload & Activity */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.4 }}
                    className="space-y-6"
                >
                    {/* Quick Upload Action Box */}
                    <Link to="/detail/upload/new" className="block bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 hover:border-white/30 rounded-2xl p-6 text-center group transition-all">
                        <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <UploadCloud size={32} className="text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-1">Drag & Drop Upload</h3>
                        <p className="text-sm text-gray-400 mb-4">Support for .OBJ, .FBX, and 4K Textures</p>
                        <span className="text-xs font-mono text-accent">START UPLOAD &gt;</span>
                    </Link>

                    {/* Recent Sales Feed */}
                    <div className="bg-[#0F0F13] border border-white/10 rounded-2xl p-6 shadow-xl shadow-black/50">
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Recent Sales</h3>
                        <div className="space-y-4">
                            <SaleItem name="Holographic Glass" time="2m ago" price="0.5 ETH" />
                            <SaleItem name="Nanocarbon Fiber" time="15m ago" price="1.2 ETH" />
                            <SaleItem name="Bio-Lum Moss" time="1h ago" price="0.05 ETH" />
                            <SaleItem name="Smart Concrete" time="3h ago" price="0.8 ETH" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

const StatCard = ({ label, value, trend, icon, color }) => (
    <div className="bg-[#0F0F13] border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-white/20 transition-colors">
        <div className="flex justify-between items-start mb-4">
            <div className={`p-3 rounded-xl bg-white/5 ${color}`}>{icon}</div>
            <div className="px-2 py-1 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold rounded">{trend}</div>
        </div>
        <div className="text-3xl font-display font-bold text-white mb-1">{value}</div>
        <div className="text-sm text-gray-500 font-mono">{label}</div>
    </div>
);

const MaterialRow = ({ id }) => (
    <div className="p-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors flex items-center gap-4 group">
        <div className="w-12 h-12 bg-black/50 rounded-lg flex-shrink-0 border border-white/10 relative overflow-hidden">
            {/* Simple Placeholder Image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-800 to-gray-700"></div>
        </div>

        <div className="flex-1 min-w-0">
            <h4 className="text-white font-medium truncate group-hover:text-primary transition-colors">
                {id % 2 === 0 ? 'Smart-Glass Panel v2' : 'Self-Healing Concrete'}
            </h4>
            <div className="flex items-center gap-3 text-xs text-gray-500 font-mono mt-0.5">
                <span>SKU: {1000 + id}</span>
                <span>•</span>
                <span className="text-green-400">In Stock</span>
            </div>
        </div>

        <div className="text-right">
            <div className="text-white font-bold text-sm">34 Sold</div>
            <div className="text-[10px] text-gray-500">Total: 4.2 ETH</div>
        </div>

        <Link to={`/detail/material/${id}`} className="p-2 text-gray-500 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
            <MoreHorizontal size={16} />
        </Link>
    </div>
);

const SaleItem = ({ name, time, price }) => (
    <div className="flex justify-between items-center text-sm">
        <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <div>
                <div className="text-white font-medium">{name}</div>
                <div className="text-[10px] text-gray-500">{time}</div>
            </div>
        </div>
        <div className="font-mono text-gray-300">{price}</div>
    </div>
);

export default Supplier;
