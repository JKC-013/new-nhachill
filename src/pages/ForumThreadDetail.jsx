import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ThumbsUp, MessageSquare, Share2, MoreHorizontal, User, Send } from 'lucide-react';

const MOCK_THREAD = {
    id: 1,
    title: "Best materials for tropical climates?",
    content: "I'm working on a project in Bali and looking for sustainable insulation options that handle humidity well. I've considered hempcrete but worried about mold. Has anyone used mycelium panels in high humidity? Would love to hear your experiences or alternative suggestions.",
    author: { name: "Sarah Chen", role: "Interior Designer", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=11" },
    time: "2h ago",
    likes: 24,
    tags: ["Materials", "Sustainability", "Tropical"],
    comments: [
        {
            id: 101,
            author: { name: "James Harrison", role: "Architect", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=101" },
            content: "Mycelium can be treated for moisture resistance, but for Bali, I'd strongly recommend looking into locally sourced bamboo composites. They breathe better.",
            likes: 12,
            time: "1h ago",
            isExpert: true
        },
        {
            id: 102,
            author: { name: "Elena Vance", role: "Researcher", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=14" },
            content: "Seconding bamboo. Also, check out the new breathable earth blocks usually made in Ubud. Great thermal mass properties.",
            likes: 8,
            time: "45m ago",
            isExpert: false
        }
    ]
};

const ForumThreadDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [replyText, setReplyText] = useState('');

    return (
        <div className="min-h-screen bg-[#05050A] pt-24 pb-40 px-6">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Back Button */}
                <button
                    onClick={() => navigate('/forum/social-network')}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 w-fit"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-mono text-xs uppercase tracking-widest">Back to Discussions</span>
                </button>

                {/* Main Thread */}
                <div className="bg-[#0F0F13] border border-white/5 rounded-3xl overflow-hidden">
                    <div className="p-8 space-y-6">
                        {/* Header */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <img src={MOCK_THREAD.author.image} className="w-10 h-10 rounded-full bg-white/5" alt={MOCK_THREAD.author.name} />
                                <div>
                                    <div className="text-white font-medium">{MOCK_THREAD.author.name}</div>
                                    <div className="text-xs text-gray-500">{MOCK_THREAD.author.role} • {MOCK_THREAD.time}</div>
                                </div>
                            </div>
                            <button className="p-2 hover:bg-white/5 rounded-full text-gray-400"><MoreHorizontal size={20} /></button>
                        </div>

                        {/* Content */}
                        <div>
                            <h1 className="text-3xl font-display font-medium text-white mb-4">{MOCK_THREAD.title}</h1>
                            <p className="text-gray-300 leading-relaxed text-lg">{MOCK_THREAD.content}</p>
                        </div>

                        {/* Tags */}
                        <div className="flex gap-2">
                            {MOCK_THREAD.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-white/5 rounded-lg text-xs font-mono text-primary uppercase tracking-wider">{tag}</span>
                            ))}
                        </div>
                    </div>

                    {/* Actions Bar */}
                    <div className="bg-black/20 border-t border-white/5 p-4 flex items-center justify-between">
                        <div className="flex gap-4">
                            <button className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-white/5 text-gray-400 hover:text-white transition-colors">
                                <ThumbsUp size={18} /> <span className="font-bold">{MOCK_THREAD.likes}</span>
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-white/5 text-gray-400 hover:text-white transition-colors">
                                <MessageSquare size={18} /> <span className="font-bold">{MOCK_THREAD.comments.length}</span>
                            </button>
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-white/5 text-gray-400 hover:text-white transition-colors">
                            <Share2 size={18} /> Share
                        </button>
                    </div>
                </div>

                {/* Comments Section */}
                <div className="space-y-6 pt-8 relative">
                    <div className="absolute left-8 top-0 bottom-0 w-px bg-white/5 -z-10"></div>
                    <h3 className="text-lg font-display text-white pl-16">Responses</h3>

                    {MOCK_THREAD.comments.map(comment => (
                        <div key={comment.id} className="ml-16 bg-[#0F0F13] border border-white/5 rounded-2xl p-6 relative">
                            {/* Connector Line */}
                            <div className="absolute top-8 -left-8 w-8 h-px bg-white/5"></div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <img src={comment.author.image} className="w-8 h-8 rounded-full bg-white/5" alt={comment.author.name} />
                                        <div>
                                            <div className="text-white text-sm font-bold flex items-center gap-2">
                                                {comment.author.name}
                                                {comment.isExpert && <span className="bg-primary/10 text-primary text-[10px] px-1.5 py-0.5 rounded border border-primary/20 uppercase">Expert</span>}
                                            </div>
                                            <div className="text-xs text-gray-500">{comment.author.role} • {comment.time}</div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed">{comment.content}</p>
                                <button className="flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors">
                                    <ThumbsUp size={12} /> {comment.likes} Likes
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Reply Box */}
                <div className="fixed bottom-0 left-0 right-0 p-6 bg-[#05050A]/80 backdrop-blur-xl border-t border-white/10 z-50">
                    <div className="max-w-4xl mx-auto flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                            <User size={20} className="text-gray-500" />
                        </div>
                        <div className="flex-1 relative">
                            <input
                                type="text"
                                value={replyText}
                                onChange={(e) => setReplyText(e.target.value)}
                                placeholder="Add to the discussion..."
                                className="w-full bg-[#0F0F13] border border-white/10 rounded-2xl pl-6 pr-14 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary text-black rounded-xl hover:scale-105 active:scale-95 transition-all">
                                <Send size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForumThreadDetail;
