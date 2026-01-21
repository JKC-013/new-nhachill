import React, { useState } from 'react';
import { Sparkles, Image as ImageIcon, Wand2 } from 'lucide-react';

const ImageGenerator = () => {
    const [prompt, setPrompt] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);

    const handleGenerate = (e) => {
        e.preventDefault();
        setIsGenerating(true);
        // Simulate generation
        setTimeout(() => setIsGenerating(false), 2000);
    };

    return (
        <div className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm shadow-2xl shadow-primary/10">
            {/* Header / Controls */}
            <div className="p-6 border-b border-white/10 flex flex-col md:flex-row gap-4 items-center justify-between bg-white/5">
                <div className="flex items-center gap-2 text-white">
                    <Sparkles className="text-primary" size={20} />
                    <span className="font-display font-medium">Sora-Architect Trial</span>
                </div>

                <form onSubmit={handleGenerate} className="flex-1 w-full max-w-2xl flex gap-2">
                    <input
                        type="text"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Describe your dream house (e.g., 'Modern minimalist villa in Da Lat forest')..."
                        className="flex-1 bg-black/50 border border-white/10 rounded-full px-5 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none outline-none focus:border-primary/50 transition-all"
                    />
                    <button
                        type="submit"
                        disabled={isGenerating}
                        className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                        {isGenerating ? (
                            <span className="animate-pulse">Generating...</span>
                        ) : (
                            <>
                                <Wand2 size={16} /> Generate
                            </>
                        )}
                    </button>
                </form>
            </div>

            {/* Canvas / Display Area */}
            <div className="aspect-[16/9] w-full bg-[#0A0A0F] relative flex items-center justify-center p-8 group">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

                <div className="text-center space-y-4 max-w-md relative z-10">
                    <div className="w-20 h-20 bg-white/5 rounded-2xl mx-auto flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500">
                        <ImageIcon className="text-gray-600 group-hover:text-primary transition-colors" size={40} />
                    </div>
                    <div>
                        <h3 className="text-xl text-white font-medium mb-1">Visualizer Canvas</h3>
                        <p className="text-gray-500 text-sm">Enter a prompt above to see the magic. This is a limited trial version.</p>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-6 left-6 flex gap-2">
                    <div className="w-8 h-8 rounded-lg bg-pink-500/20 border border-pink-500/30"></div>
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30"></div>
                    <div className="w-8 h-8 rounded-lg bg-green-500/20 border border-green-500/30"></div>
                </div>
            </div>
        </div>
    );
};

export default ImageGenerator;
