import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ImageGenerator from '../components/ImageGenerator';
import SectionList from '../components/SectionList';

// Mock Data
const MOCK_DESIGNERS = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Architect ${i + 1}`,
    role: 'Senior Architect',
    image: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i}` // Placeholder avatars
}));

const MOCK_PRODUCTS = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: ['Smart Glass Panel', 'Modular Wall Unit', 'Carbon Fiber Beam', 'Kinetic Lighting'][i % 4] + ` v${i + 1}`,
    price: `$${(200 + Math.random() * 2000).toFixed(0)}`,
    image: null
}));

const MOCK_BLUEPRINTS = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Eco-Villa Concept ${String.fromCharCode(65 + i)}`,
    category: ['Residential', 'Commercial', 'Industrial', 'Landscape'][i % 4],
    image: null
}));

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="px-6 max-w-7xl mx-auto space-y-32 pt-10">
            {/* Hero & Image Generator Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="text-center space-y-12 relative"
            >
                <div className="space-y-6">
                    <h1 className="text-6xl md:text-8xl font-display font-medium tracking-tighter leading-none bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
                        Design. <span className="text-primary/80">Generate.</span> Build.
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Try our AI-powered visualizer below. No account required for trial.
                    </p>
                </div>

                <ImageGenerator />
            </motion.section>

            {/* Top 10 Designers */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <SectionList
                    title="Our Designers"
                    description="The top 10 most searched designers this week."
                    items={MOCK_DESIGNERS}
                    onMoreClick={() => navigate('/forum/community')}
                    type="designers"
                />
            </motion.div>

            {/* Top 10 Products */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <SectionList
                    title="Trending Marketplace"
                    description="Top 10 most purchased furniture and materials."
                    items={MOCK_PRODUCTS}
                    onMoreClick={() => navigate('/marketplace', { state: { initialTab: 'product' } })}
                    type="product"
                />
            </motion.div>

            {/* Top 10 Blueprints */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <SectionList
                    title="Top Blueprints"
                    description="Top 10 most popular architectural designs."
                    items={MOCK_BLUEPRINTS}
                    onMoreClick={() => navigate('/marketplace', { state: { initialTab: 'blueprint' } })}
                    type="blueprint"
                />
            </motion.div>

            {/* Latest News CTA */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="py-20 border-t border-white/5 text-center space-y-8"
            >
                <div className="space-y-4">
                    <h2 className="text-4xl font-display font-medium text-white uppercase italic">Latest <span className="text-primary italic">Insights</span></h2>
                    <p className="text-gray-400 max-w-xl mx-auto">Stay updated with the latest trends in decentralized architecture and building technology.</p>
                </div>
                <button
                    onClick={() => navigate('/news-contests/news')}
                    className="bg-white text-black px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform uppercase tracking-widest text-sm"
                >
                    View All News
                </button>
            </motion.section>
        </div>
    );
};

export default Home;
