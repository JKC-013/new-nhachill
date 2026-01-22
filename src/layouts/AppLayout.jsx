import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Hexagon, Search, Bell, Cpu, Globe, Layers, LayoutGrid, Box, Users, Settings } from 'lucide-react';
import { useDemo, ROLES } from '../context/DemoContext';

const AppLayout = () => {
    const location = useLocation();
    const { user } = useDemo();

    // Determine Nav Items based on Role
    let navItems = [];

    if (user?.roleId === ROLES.ARCHITECT.id) {
        navItems = [
            { to: '/studio', icon: <Cpu />, tooltip: 'Studio', label: 'Studio' }, // Home for Architect
            { to: '/customer', icon: <Globe />, tooltip: 'Materials', label: 'Materials' },
            { to: '/software', icon: <Users />, tooltip: 'Agents', label: 'Agents' },
        ];
    } else if (user?.roleId === ROLES.CUSTOMER.id) {
        navItems = [
            { to: '/customer', icon: <Globe />, tooltip: 'Marketplace', label: 'Marketplace' }, // Home for Customer
            { to: '/studio', icon: <LayoutGrid />, tooltip: 'Saved Projects', label: 'Projects' },
            { to: '/detail/order/123', icon: <Box />, tooltip: 'Orders', label: 'Orders' },
        ];
    } else if (user?.roleId === ROLES.SUPPLIER.id) {
        navItems = [
            { to: '/supplier', icon: <Layers />, tooltip: 'Supply Chain', label: 'Network' }, // Home for Supplier
            { to: '/detail/inventory/all', icon: <Box />, tooltip: 'Inventory', label: 'Inventory' },
            { to: '/detail/analytics/main', icon: <LayoutGrid />, tooltip: 'Analytics', label: 'Analytics' },
        ];
    } else {
        // Fallback / Guest
        navItems = [
            { to: '/studio', icon: <Cpu />, tooltip: 'Studio', label: 'Studio' },
            { to: '/customer', icon: <Globe />, tooltip: 'Marketplace', label: 'Marketplace' },
            { to: '/supplier', icon: <Layers />, tooltip: 'Supply Chain', label: 'Network' },
        ];
    }

    return (
        <div className="min-h-screen bg-[#0A0A0E] text-white font-sans flex overflow-hidden">
            {/* Sidebar (Desktop Only) */}
            <aside className="hidden md:flex w-20 md:w-64 border-r border-white/5 flex-col py-6 bg-black/20 transition-all duration-300">
                <div className="px-6 mb-8 flex items-center gap-3">
                    <Link to="/" className="text-accent hover:scale-110 transition-transform flex-shrink-0">
                        <Hexagon size={28} strokeWidth={1.5} />
                    </Link>
                    <span className="font-display font-medium text-lg tracking-wide hidden md:block">NHACHILL</span>
                </div>

                <div className="px-4 mb-4">
                    <div className="text-xs font-mono text-gray-500 mb-2 px-2 hidden md:block">MENU</div>
                    <nav className="flex flex-col gap-2">
                        {navItems.map((item, idx) => (
                            <NavItem key={idx} {...item} active={location.pathname === item.to} />
                        ))}
                    </nav>
                </div>

                <div className="mt-auto px-4">
                    <NavItem to="/detail/settings/main" icon={<Settings />} label="Settings" tooltip="Settings" />
                    <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/5 hidden md:flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-accent"></div>
                        <div className="overflow-hidden">
                            <div className="text-sm font-bold truncate">{user?.name || 'Guest'}</div>
                            <div className="text-xs text-gray-500 truncate">{user?.roleId || 'Visitor'} Mode</div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Mobile Bottom Navigation */}
            <nav className="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-[#0F0F13]/90 backdrop-blur-xl border border-white/10 rounded-2xl px-2 py-2 flex items-center gap-1 shadow-2xl">
                {navItems.map((item, idx) => (
                    <Link
                        key={idx}
                        to={item.to}
                        className={`p-3 rounded-xl transition-all ${location.pathname === item.to
                                ? 'bg-primary text-black shadow-lg shadow-primary/20'
                                : 'text-gray-400 hover:text-white hover:bg-white/10'
                            }`}
                    >
                        {React.cloneElement(item.icon, { size: 24 })}
                    </Link>
                ))}
                <div className="w-px h-6 bg-white/10 mx-1"></div>
                <Link to="/detail/settings/main" className="p-3 text-gray-400 hover:text-white rounded-xl">
                    <Settings size={24} />
                </Link>
            </nav>

            {/* Main Area */}
            <div className="flex-1 flex flex-col min-w-0 mb-20 md:mb-0">
                {/* Command Bar Header */}
                <header className="h-16 border-b border-white/5 flex items-center justify-between px-4 md:px-6 bg-white/[0.02]">
                    <button className="flex items-center gap-3 text-gray-400 bg-white/5 hover:bg-white/10 px-3 py-2 md:px-4 md:py-2 rounded-lg border border-white/5 text-sm transition-colors w-full md:w-64 group mr-4 md:mr-0">
                        <Search size={16} />
                        <span className="hidden md:inline">Search ecosystem...</span>
                        <span className="md:hidden">Search...</span>
                        <div className="ml-auto flex items-center gap-1 hidden md:flex">
                            <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded border border-white/5">⌘</span>
                            <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded border border-white/5">K</span>
                        </div>
                    </button>

                    <div className="flex items-center gap-3 md:gap-4 shrink-0">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-black flex items-center justify-center text-[10px] ring-2 ring-[#0A0A0E]">
                                    AI
                                </div>
                            ))}
                        </div>
                        <button className="relative p-2 text-gray-400 hover:text-white">
                            <Bell size={20} />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                        </button>
                    </div>
                </header>

                <main className="flex-1 overflow-auto p-4 md:p-6 relative">
                    {/* Ambient Glow */}
                    <div className="absolute top-0 left-0 w-full h-96 bg-primary/5 blur-[100px] pointer-events-none"></div>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

const NavItem = ({ to, icon, active, tooltip, label }) => (
    <Link
        to={to}
        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all group relative
        ${active ? 'bg-primary/20 text-white shadow-[0_0_15px_rgba(var(--color-primary),0.3)]' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
    >
        <div className="flex-shrink-0">{React.cloneElement(icon, { size: 20 })}</div>
        <span className="hidden md:block text-sm font-medium">{label}</span>

        {/* Desktop Tooltip */}
        <span className="absolute left-14 bg-black border border-white/10 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 md:hidden pointer-events-none whitespace-nowrap z-50">
            {tooltip}
        </span>
    </Link>
);

export default AppLayout;
