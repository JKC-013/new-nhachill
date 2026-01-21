import React from 'react';
import { motion } from 'framer-motion';

const BlankPage = ({ title }) => {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
            >
                <div className="w-20 h-20 bg-white/5 rounded-3xl border border-white/10 mx-auto flex items-center justify-center">
                    <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                </div>
                <h1 className="text-4xl font-display font-medium text-white">{title}</h1>
                <p className="text-gray-500 max-w-sm mx-auto">
                    This sector of the Nhachill ecosystem is currently under construction. Stay tuned for further updates.
                </p>
                <div className="pt-8">
                    <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                        Status: INITIALIZING_NODE
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default BlankPage;
