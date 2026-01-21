import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Hexagon, Search, Bell } from 'lucide-react';

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-accent selection:text-white overflow-x-hidden relative">
            {/* Background Gradients */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px]"></div>
            </div>

            {/* Floating Nano Bar */}
            <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-2 py-2 flex items-center space-x-1 shadow-2xl">
                <NavIcon to="/" icon={<Hexagon size={24} />} active />
                <NavIcon to="/architect" label="Arc" />
                <NavIcon to="/customer" label="Cst" />
                <NavIcon to="/supplier" label="Sup" />
                <div className="w-px h-6 bg-white/20 mx-2"></div>
                <NavIcon to="/software" label="AI" highlight />
            </nav>

            {/* Header Info (Top) */}
            <header className="absolute top-0 w-full p-6 flex justify-between items-center z-40">
                <div className="font-display font-bold text-2xl tracking-tight">
                    NHA<span className="text-accent">CHILL</span>
                </div>
                <div className="flex space-x-4">
                    <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"><Search size={20} /></button>
                    <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"><Bell size={20} /></button>
                </div>
            </header>

            {/* Main Content */}
            <main className="pt-24 pb-32 px-6 max-w-5xl mx-auto">
                <Outlet />
            </main>
        </div>
    );
};

const NavIcon = ({ to, icon, label, active, highlight }) => (
    <Link to={to} className={`
    p-3 rounded-xl flex items-center justify-center transition-all duration-300
    ${active ? 'bg-primary/80 text-white shadow-lg shadow-primary/50' : ''}
    ${highlight ? 'bg-accent/80 text-white hover:bg-accent' : 'hover:bg-white/10 text-gray-300 hover:text-white'}
  `}>
        {icon ? icon : <span className="font-bold text-sm font-display">{label}</span>}
    </Link>
);

export default MainLayout;
