import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Card from './Card';

const SectionList = ({ title, description, items, onMoreClick, type }) => {
    const navigate = useNavigate();

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariant = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    const handleItemClick = (id) => {
        if (!type || type === 'designers') {
            navigate(`/architect/${id}`);
        } else if (type === 'blueprint') {
            navigate(`/products/designs/${id}`);
        } else if (type === 'product') {
            // Default to furnitures for generic "products" list on home, 
            // since we don't have distinct material vs furniture lists there yet
            navigate(`/products/furnitures/${id}`);
        }
    };

    return (
        <section className="py-12 border-t border-white/5">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                >
                    <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-3">{title}</h2>
                    <p className="text-gray-400 max-w-xl">{description}</p>
                </motion.div>
                <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    onClick={onMoreClick}
                    className="group flex items-center gap-2 text-sm font-medium text-white px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all"
                >
                    View All
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, margin: "-50px" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
            >
                {items.map((item, index) => (
                    <motion.div key={item.id || index} variants={itemVariant}>
                        <Card
                            title={item.name}
                            subtitle={item.role || item.category || item.price}
                            imageUrl={item.image}
                            rank={index + 1}
                            onClick={() => handleItemClick(item.id)}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default SectionList;
