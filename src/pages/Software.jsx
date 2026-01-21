import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Cpu, Network, ArrowRight } from 'lucide-react';

const Software = () => {
    return (
        <div className="max-w-7xl mx-auto py-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                    <h1 className="text-5xl font-display text-white mb-2">My Agents</h1>
                    <p className="text-gray-400 text-lg">Deploy autonomous intelligence to your projects.</p>
                </div>
                <div className="text-right">
                    <div className="text-sm font-mono text-gray-500">Compute Credits</div>
                    <div className="text-2xl font-bold text-accent">24,500 <span className="text-xs text-gray-600">/ 50k</span></div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AgentCard
                    name="Architect-GPT 4"
                    type="Generative"
                    status="Active"
                    desc="Specialized in brutalist and biophilic structural concept generation."
                    icon={<Bot />}
                    color="text-blue-400"
                />
                <AgentCard
                    name="Compliance-Sentinel"
                    type="Validator"
                    status="Idle"
                    desc="Real-time building code verification against Vietnam 2025 Standards."
                    icon={<ShieldIcon />}
                    color="text-green-400"
                />
                <AgentCard
                    name="Material-Link"
                    type="Logistics"
                    status="Running"
                    desc="Autonomous negotiation agent for bulk material procurement."
                    icon={<Network />}
                    color="text-purple-400"
                />
                {/* Add New Card */}
                <div className="border border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center p-8 text-gray-500 hover:border-primary hover:text-primary cursor-pointer transition-colors min-h-[250px] group">
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Cpu size={32} />
                    </div>
                    <span className="font-bold">Train New Agent</span>
                    <span className="text-xs mt-1">From $0.05/hour</span>
                </div>
            </div>
        </div>
    );
};

const AgentCard = ({ name, type, status, desc, icon, color }) => (
    <Link to={`/detail/agent/${name}`} className="block bg-[#0F0F13] border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-white/20 transition-colors">
        <div className="flex justify-between items-start mb-6">
            <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${color} shadow-lg shadow-black/50`}>
                {React.cloneElement(icon, { size: 24 })}
            </div>
            <div className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider border ${status === 'Active' || status === 'Running' ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-gray-800 border-gray-700 text-gray-400'}`}>
                {status}
            </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accent transition-colors">{name}</h3>
        <div className="text-xs text-gray-500 font-mono mb-4">{type} Class</div>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 h-16">{desc}</p>

        <div className="flex gap-2">
            <button className="flex-1 bg-white/5 hover:bg-white/10 py-2 rounded-lg text-xs font-bold text-white transition-colors">Logs</button>
            <button className="flex-1 bg-white/10 hover:bg-white/20 py-2 rounded-lg text-xs font-bold text-white transition-colors flex items-center justify-center gap-1">
                Configure <ArrowRight size={12} />
            </button>
        </div>
    </Link>
);

const ShieldIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
);

export default Software;
