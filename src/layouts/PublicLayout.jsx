import React, { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { Hexagon, X, ChevronRight, Mail, Phone, Linkedin, Facebook, Youtube, ChevronDown, Menu } from 'lucide-react';
import { useDemo, ROLES } from '../context/DemoContext';
import AuthModal from '../components/AuthModal';

const NAV_ITEMS = [
    { label: 'Home', to: '/' },
    {
        label: 'About Us',
        to: '/about',
        sections: [
            { label: 'Overview', id: 'overview' },
            { label: 'Vision & Mission', id: 'vision' },
            { label: 'Teams', id: 'teams' },
            { label: 'Partner', id: 'partner' },
        ]
    },
    {
        label: 'Products',
        to: '/products/designs',
        subItems: [
            { label: 'Designs', to: '/products/designs' },
            { label: 'Furnitures', to: '/products/furnitures' },
            { label: 'Materials', to: '/products/materials' },
        ]
    },
    {
        label: 'Solutions',
        to: '/solutions/design-tools',
        subItems: [
            { label: 'Design Tools', to: '/solutions/design-tools' },
            { label: 'Builder', to: '/solutions/builder' },
        ]
    },
    {
        label: 'News & Contests',
        to: '/news-contests/news',
        subItems: [
            { label: 'News', to: '/news-contests/news' },
            { label: 'Blogs', to: '/news-contests/blogs' },
            { label: 'Events', to: '/news-contests/events' },
            { label: 'Contests', to: '/news-contests/contests' },
        ]
    },
    {
        label: 'Forum',
        to: '/forum/community',
        subItems: [
            { label: 'Community', to: '/forum/community' },
            { label: 'Social Network', to: '/forum/social-network' },
        ]
    },
    { label: 'Support', to: '/support' },
];

const PublicLayout = () => {
    const { user, login } = useDemo();
    const navigate = useNavigate();
    const location = useLocation();
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleLoginSuccess = (roleId) => {
        login(roleId);
        setShowAuthModal(false);
        navigate(ROLES[roleId.toUpperCase()].route);
    };

    const handleAboutScroll = (id) => {
        if (location.pathname !== '/about') {
            navigate('/about', { state: { scrollTo: id } });
        } else {
            const element = document.getElementById(id);
            if (element) {
                const headerOffset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    };

    const handleLinkClick = (to) => {
        if (location.pathname === to) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-[#05050A] font-sans text-white selection:bg-accent selection:text-white relative">
            {/* Background Gradients */}
            <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#05050A] to-[#05050A] pointer-events-none"></div>
            <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse pointer-events-none"></div>
            <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
                <div className="w-full max-w-6xl px-8 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-between shadow-2xl shadow-black/50">
                    <Link
                        to="/"
                        onClick={() => handleLinkClick('/')}
                        className="flex items-center space-x-2 shrink-0"
                    >
                        <Hexagon className="text-accent fill-accent/20" size={24} strokeWidth={1.5} />
                        <span className="font-display font-medium text-lg tracking-wide">NHACHILL</span>
                    </Link>

                    <nav className="hidden lg:flex items-center space-x-1 p-1 rounded-full bg-black/20">
                        {NAV_ITEMS.map((item) => (
                            <div
                                key={item.label}
                                className="relative group"
                                onMouseEnter={() => setActiveDropdown(item.label)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <div className="flex items-center gap-1 group">
                                    <Link
                                        to={item.to}
                                        onClick={() => handleLinkClick(item.to)}
                                        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${location.pathname === item.to || (item.subItems && item.subItems.some(sub => location.pathname === sub.to))
                                            ? 'text-white bg-white/10'
                                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        {item.label}
                                        {(item.subItems || item.sections) && (
                                            <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                                        )}
                                    </Link>
                                </div>

                                {/* Dropdown Menu */}
                                {(item.subItems || item.sections) && (
                                    <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 
                                        ${activeDropdown === item.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}
                                        group-hover:opacity-100 group-hover:visible group-hover:translate-y-0`}>
                                        <div className="bg-[#0F0F13]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-2 min-w-[200px] shadow-2xl">
                                            {(item.subItems || (item.label === 'About Us' ? item.sections : [])).map((sub) => (
                                                <button
                                                    key={sub.label}
                                                    onClick={() => {
                                                        if (item.sections) {
                                                            handleAboutScroll(sub.id);
                                                        } else {
                                                            navigate(sub.to);
                                                        }
                                                        setActiveDropdown(null);
                                                    }}
                                                    className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all text-left group/sub"
                                                >
                                                    {sub.label}
                                                    <ChevronRight size={12} className="opacity-0 group-hover/sub:opacity-100 -translate-x-1 group-hover/sub:translate-x-0 transition-all" />
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>

                    <div className="flex items-center space-x-4">
                        {user ? (
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest hidden sm:inline">
                                    Connected: {user.name}
                                </span>
                                <button
                                    onClick={() => navigate(ROLES[user.role.toUpperCase()].route)}
                                    className="bg-primary hover:bg-primary/90 text-black px-5 py-2 rounded-full text-xs font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
                                >
                                    DASHBOARD
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={() => setShowAuthModal(true)}
                                className="bg-white/10 hover:bg-white/20 border border-white/10 text-white px-6 py-2 rounded-full text-xs font-medium transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95"
                            >
                                LOGIN
                            </button>
                        )}
                    </div>
                </div>
            </header>

            {/* Mobile Menu Drawer */}
            <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${mobileMenuOpen ? 'visible' : 'invisible'}`}>
                {/* Backdrop */}
                <div
                    className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => setMobileMenuOpen(false)}
                ></div>

                {/* Drawer */}
                <div className={`absolute top-0 right-0 h-full w-[80%] max-w-sm bg-[#0F0F13] border-l border-white/10 shadow-2xl transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="p-6 space-y-6 overflow-y-auto h-full">
                        {/* Header */}
                        <div className="flex items-center justify-between pb-4 border-b border-white/10">
                            <div className="flex items-center gap-2">
                                <Hexagon className="text-accent fill-accent/20" size={24} strokeWidth={1.5} />
                                <span className="font-display font-medium text-lg">NHACHILL</span>
                            </div>
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Navigation */}
                        <nav className="space-y-2">
                            {NAV_ITEMS.map((item) => (
                                <div key={item.label} className="space-y-1">
                                    <Link
                                        to={item.to}
                                        onClick={() => {
                                            handleLinkClick(item.to);
                                            setMobileMenuOpen(false);
                                        }}
                                        className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${location.pathname === item.to || (item.subItems && item.subItems.some(sub => location.pathname === sub.to))
                                                ? 'text-white bg-white/10'
                                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        {item.label}
                                    </Link>

                                    {/* Sub-items */}
                                    {(item.subItems || item.sections) && (
                                        <div className="pl-4 space-y-1">
                                            {(item.subItems || (item.label === 'About Us' ? item.sections : [])).map((sub) => (
                                                <button
                                                    key={sub.label}
                                                    onClick={() => {
                                                        if (item.sections) {
                                                            handleAboutScroll(sub.id);
                                                        } else {
                                                            navigate(sub.to);
                                                        }
                                                        setMobileMenuOpen(false);
                                                    }}
                                                    className="w-full text-left px-4 py-2 rounded-lg text-xs text-gray-500 hover:text-white hover:bg-white/5 transition-all"
                                                >
                                                    {sub.label}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>

            <main className="pt-32 pb-20">
                <Outlet />
            </main>

            <footer className="border-t border-white/5 pt-20 pb-10 bg-[#05050A]">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link
                            to="/"
                            onClick={() => handleLinkClick('/')}
                            className="flex items-center space-x-2 mb-6"
                        >
                            <Hexagon className="text-accent fill-accent/20" size={32} strokeWidth={1.5} />
                            <span className="font-display font-medium text-2xl tracking-tight">NHACHILL</span>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                            Decentralized ecosystem for the next generation of builders. We are creating a borderless world where architectural vision meets industrial reality.
                        </p>
                        <div className="flex gap-4 mt-8">
                            <SocialIcon icon={<Linkedin size={18} />} />
                            <SocialIcon icon={<Facebook size={18} />} />
                            <SocialIcon icon={<Youtube size={18} />} />
                        </div>
                    </div>

                    {/* Links Groups */}
                    {NAV_ITEMS.filter(i => i.subItems).map(item => (
                        <div key={item.label}>
                            <h4 className="text-white font-mono text-[10px] font-bold mb-6 uppercase tracking-[0.3em]">{item.label}</h4>
                            <ul className="space-y-4 text-xs font-medium text-gray-500">
                                {item.subItems.map(sub => (
                                    <li key={sub.label}>
                                        <Link
                                            to={sub.to}
                                            onClick={() => handleLinkClick(sub.to)}
                                            className="hover:text-primary transition-colors"
                                        >
                                            {sub.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-mono text-[10px] font-bold mb-6 uppercase tracking-[0.3em]">Contact</h4>
                        <ul className="space-y-4 text-xs font-medium text-gray-500">
                            <li className="flex items-center gap-3">
                                <Mail size={14} className="text-primary" />
                                <span>contact@nhachill.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={14} className="text-primary" />
                                <span>+84 (0) 123 456 789</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-[10px] font-mono uppercase tracking-widest text-center">
                    <p>© 2025 Nhachill Ecosystem • All Rights Reserved</p>
                    <div className="flex gap-6">
                        <button className="hover:text-white transition-colors">Privacy</button>
                        <button className="hover:text-white transition-colors">Terms</button>
                    </div>
                </div>
            </footer>

            {showAuthModal && (
                <AuthModal
                    onClose={() => setShowAuthModal(false)}
                    onLoginSuccess={handleLoginSuccess}
                />
            )}
        </div>
    );
};

const SocialIcon = ({ icon }) => (
    <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all active:scale-95">
        {icon}
    </button>
);

export default PublicLayout;

