import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, MoreVertical, Download, Activity, Code, Box } from 'lucide-react';

// A single versatile component to handle "leaf" views for the prototype
const GenericDetail = () => {
    const { type, id } = useParams();
    const navigate = useNavigate();

    // Mock Content Generator based on type
    const getContent = () => {
        switch (type) {
            case 'project':
                return { title: `Project Alpha-${id}`, sub: 'Architectural Blueprint', icon: <Code /> };
            case 'asset':
                return { title: `Neural Asset #${id}`, sub: 'Marketplace Item', icon: <Box /> };
            case 'node':
                return { title: `Supply Node ${id}`, sub: 'Logistics Point', icon: <Activity /> };
            case 'agent':
                return { title: `Agent-${id} Configuration`, sub: 'AI Settings', icon: <Code /> };
            default:
                return { title: `Detail View ${id}`, sub: 'System Entity', icon: <Box /> };
        }
    };

    const content = getContent();

    return (
        <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
                <button onClick={() => navigate(-1)} className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                    <ArrowLeft size={20} />
                </button>
                <div className="flex-1">
                    <div className="flex items-center gap-2 text-xs font-mono text-gray-500 mb-1">
                        <span className="uppercase">{type}</span>
                        <span>/</span>
                        <span>ID: {id}</span>
                    </div>
                    <h1 className="text-3xl font-display font-bold text-white">{content.title}</h1>
                </div>
                <div className="flex gap-2">
                    <button className="p-2 text-gray-400 hover:text-white"><Share2 size={20} /></button>
                    <button className="p-2 text-gray-400 hover:text-white"><MoreVertical size={20} /></button>
                </div>
            </div>

            {/* Main Visual/Data Area */}
            <div className="grid grid-cols-3 gap-8">
                <div className="col-span-2 space-y-8">
                    {/* Big Visual Placeholder */}
                    <div className="aspect-video bg-black/40 border border-white/10 rounded-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                        {/* Grid Pattern */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                        <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
                            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                                {React.cloneElement(content.icon, { size: 40 })}
                            </div>
                            <div className="text-sm font-mono text-gray-500">Interactive Preview Unavailable in Demo</div>
                        </div>
                    </div>

                    {/* Data Tabs */}
                    <div className="border-b border-white/10 flex gap-6 text-sm font-medium">
                        <button className="pb-3 border-b-2 border-primary text-white">Overview</button>
                        <button className="pb-3 border-b-2 border-transparent text-gray-500 hover:text-white">Metadata</button>
                        <button className="pb-3 border-b-2 border-transparent text-gray-500 hover:text-white">History</button>
                    </div>

                    <div className="text-gray-400 leading-relaxed">
                        <p>
                            This is a verified entity within the Nhachill ecosystem. All transactions and modifications are recorded on the decentralized ledger.
                            Current throughput meets the system verification standards.
                        </p>
                    </div>
                </div>

                {/* Sidebar Info */}
                <div className="col-span-1 space-y-6">
                    <div className="bg-[#0F0F13] border border-white/10 rounded-xl p-6 space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">Status</span>
                            <span className="px-2 py-0.5 bg-green-500/10 text-green-400 text-xs font-bold rounded border border-green-500/20">ACTIVE</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">Version</span>
                            <span className="text-white font-mono text-xs">v4.2.1</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">Owner</span>
                            <span className="text-white text-sm">0x89...2A</span>
                        </div>

                        <button className="w-full mt-4 bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                            <Download size={16} /> Export Data
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GenericDetail;
