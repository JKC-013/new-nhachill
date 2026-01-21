import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageSquare, Phone, MapPin, ChevronDown, Send, FileText, HelpCircle } from 'lucide-react';

const FAQS = [
    {
        question: "How do I sell my designs on Nhachill?",
        answer: "To become a seller, navigate to your profile and select 'Become a Creator'. You'll need to submit a portfolio for verification. Once approved (usually within 48 hours), you can upload blueprints, 3D assets, and material libraries directly to the Marketplace."
    },
    {
        question: "What file formats are supported for blueprints?",
        answer: "We support industry-standard formats including PDF, DWG, RVT (Revit), and SKP (SketchUp). For 3D assets, we recommend FBX or OBJ with packaged textures. All uploads are scanned for quality and compatibility."
    },
    {
        question: "Is the Smart Contract transaction reversible?",
        answer: "No, blockchain transactions are immutable. However, Nhachill operates an escrow system for high-value architectural contracts. Funds are held until project milestones are verified by both parties or a fast-tracked dispute resolution mediator."
    },
    {
        question: "Can I hire an architect for a custom project?",
        answer: "Absolutely! Visit the 'Community' tab or 'Our Designers' section to browse portfolios. You can filter by location, style, and budget. Use the in-app messaging system to discuss requirements and request a custom quote."
    }
];

const SupportContact = () => {
    const [openFaq, setOpenFaq] = useState(null);
    const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('sending');
        // Simulate API call
        setTimeout(() => setFormStatus('success'), 1500);
    };

    return (
        <div className="min-h-screen bg-[#05050A] text-white pt-24 pb-40 px-6">
            <div className="max-w-7xl mx-auto space-y-20">

                {/* Hero Header */}
                <div className="text-center space-y-6">
                    <h1 className="text-5xl md:text-6xl font-display font-medium">
                        How can we <span className="text-primary italic">help?</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Our team is available 24/7 to assist with your architectural journey.
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ContactCard
                        icon={<MessageSquare size={24} />}
                        title="Chat Support"
                        description="Get instant answers from our AI agent or live support."
                        action="Start Chat"
                        color="text-secondary"
                    />
                    <ContactCard
                        icon={<Mail size={24} />}
                        title="Email Us"
                        description="For inquiries, partnerships, and detailed support tickets."
                        action="support@nhachill.com"
                        color="text-primary"
                    />
                    <ContactCard
                        icon={<Phone size={24} />}
                        title="Call Line"
                        description="Mon-Fri from 8am to 5pm (GMT+7)."
                        action="+84 (0) 123 456 789"
                        color="text-white"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <div className="bg-[#0F0F13] border border-white/5 rounded-3xl p-8 lg:p-12">
                        <h2 className="text-3xl font-display font-medium mb-8">Send us a message</h2>

                        {formStatus === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-green-500/10 border border-green-500/20 text-green-500 rounded-2xl p-8 text-center space-y-4"
                            >
                                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                                    <Send size={32} />
                                </div>
                                <h3 className="text-xl font-bold">Message Sent!</h3>
                                <p>We'll get back to you within 24 hours.</p>
                                <button
                                    onClick={() => setFormStatus('idle')}
                                    className="text-sm underline hover:text-white"
                                >
                                    Send another
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-mono text-gray-500 uppercase tracking-widest">First Name</label>
                                        <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors" placeholder="Jane" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-mono text-gray-500 uppercase tracking-widest">Last Name</label>
                                        <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors" placeholder="Doe" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-gray-500 uppercase tracking-widest">Email</label>
                                    <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors" placeholder="jane@example.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-gray-500 uppercase tracking-widest">Subject</label>
                                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors text-gray-400">
                                        <option>General Inquiry</option>
                                        <option>Tech Support</option>
                                        <option>Partnership</option>
                                        <option>Billing</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-gray-500 uppercase tracking-widest">Message</label>
                                    <textarea required rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors" placeholder="How can we help you today?"></textarea>
                                </div>
                                <button
                                    disabled={formStatus === 'sending'}
                                    className="w-full bg-primary text-black font-bold py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                                >
                                    {formStatus === 'sending' ? (
                                        <>Sending...</>
                                    ) : (
                                        <>Send Message <Send size={18} /></>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* FAQ Accordion */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-display font-medium mb-4">Frequently Asked Questions</h2>
                            <p className="text-gray-400">Can't find the answer you're looking for? Check out our <a href="#" className="text-primary hover:underline">documentation</a>.</p>
                        </div>

                        <div className="space-y-4">
                            {FAQS.map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
                                >
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                                    >
                                        <span className="font-medium pr-4">{faq.question}</span>
                                        <ChevronDown
                                            className={`transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-primary' : 'text-gray-500'}`}
                                        />
                                    </button>
                                    <AnimatePresence>
                                        {openFaq === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="px-6 pb-6 pt-0 text-gray-400 leading-relaxed text-sm">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>

                        <div className="p-8 bg-gradient-to-br from-secondary/20 to-transparent rounded-3xl border border-secondary/20 relative overflow-hidden">
                            <HelpCircle className="absolute -right-10 -bottom-10 text-secondary/10 w-64 h-64" />
                            <h4 className="text-xl font-bold mb-2">Need a custom enterprise solution?</h4>
                            <p className="text-sm text-gray-300 mb-6">We offer tailored infrastructure for large-scale developers and governments.</p>
                            <button className="px-6 py-3 bg-white text-black font-bold rounded-xl hover:scale-105 transition-transform text-sm">
                                Contact Sales
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ContactCard = ({ icon, title, description, action, color }) => (
    <div className="p-6 bg-[#0F0F13] border border-white/5 rounded-3xl hover:border-white/20 transition-all group">
        <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${color}`}>
            {icon}
        </div>
        <h3 className="text-xl font-display font-medium mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-6 h-10">{description}</p>
        <button className={`text-sm font-bold uppercase tracking-widest flex items-center gap-2 ${color} hover:gap-4 transition-all opacity-80 hover:opacity-100`}>
            {action} <ChevronDown size={14} className="-rotate-90" />
        </button>
    </div>
);

export default SupportContact;
