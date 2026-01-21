import React, { createContext, useContext, useState } from 'react';
import { Sparkles, Zap, X, User, Briefcase, ShoppingBag } from 'lucide-react';

const DemoContext = createContext();

export const useDemo = () => useContext(DemoContext);

export const ROLES = {
    ARCHITECT: { id: 'architect', label: 'Architect / Creator', icon: <Briefcase />, route: '/studio' },
    CUSTOMER: { id: 'customer', label: 'Ecosystem Customer', icon: <ShoppingBag />, route: '/customer' },
    SUPPLIER: { id: 'supplier', label: 'Supply Node', icon: <Zap />, route: '/supplier' }
};

export const DemoProvider = ({ children }) => {
    const [user, setUser] = useState(null); // { name, roleId }
    const [toasts, setToasts] = useState([]);

    const login = (roleId) => {
        const role = Object.values(ROLES).find(r => r.id === roleId);
        if (!role) return;

        setUser({ name: `${role.label} User`, roleId: role.id });
        addToast(`Identity Matrix Loaded: ${role.label}`, "success");
    };

    const logout = () => {
        setUser(null);
        addToast("Neural Link Severed.", "info");
    };

    const addToast = (message, type = "info") => {
        const id = Date.now();
        setToasts(prev => [...prev, { id, message, type }]);
        setTimeout(() => removeToast(id), 3000);
    };

    const removeToast = (id) => {
        setToasts(prev => prev.filter(t => t.id !== id));
    };

    const triggerAction = (actionName) => {
        console.log(`Demo Action: ${actionName}`);
        addToast(`Command Executed: ${actionName}`, "success");
    };

    return (
        <DemoContext.Provider value={{ user, login, logout, triggerAction, addToast, ROLES }}>
            {children}
            {/* Context-level Toast Container */}
            <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-2 pointer-events-none">
                {toasts.map(t => (
                    <div key={t.id} className="pointer-events-auto flex items-center gap-3 px-4 py-3 rounded border border-primary/50 bg-black/90 backdrop-blur text-primary font-mono text-xs uppercase tracking-wider animate-in slide-in-from-right fade-in duration-300 shadow-[0_0_15px_rgba(var(--color-primary),0.3)]">
                        <Zap size={14} className="animate-pulse" />
                        <span>{t.message}</span>
                    </div>
                ))}
            </div>
        </DemoContext.Provider>
    );
};
