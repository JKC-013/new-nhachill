import React, { useState } from 'react';
import { X, Eye, EyeOff, User, Briefcase, Store, Check, AlertCircle, ChevronLeft, ArrowRight } from 'lucide-react';
import { ROLES } from '../context/DemoContext';

const INITIAL_DATA = {
    // Basic
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    birthday: '',
    password: '',
    confirmPassword: '',
    // Role Specific
    role: null, // 'customer', 'architect', 'supplier'
    // Architect
    nickname: '',
    experience: '',
    workType: 'freelance', // or 'company'
    description: '',
    // Supplier
    companyName: '',
    businessYears: '',
};

const AuthModal = ({ onClose, onLoginSuccess }) => {
    const [view, setView] = useState('LOGIN'); // LOGIN, SIGNUP_BASIC, SIGNUP_ROLE, SIGNUP_DETAILS
    const [formData, setFormData] = useState(INITIAL_DATA);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setError('');
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Mock Login - For now just assume they are a customer if logging in directly
        // In a real app, backend determines role.
        // For this demo, let's just log them in as a Customer or random.
        // Let's default to Customer for generic login, or ask user?
        // Simplicity: Log in as Customer 1
        onLoginSuccess('CUSTOMER');
    };

    const handleBasicSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        setView('SIGNUP_ROLE');
    };

    const handleRoleSelect = (roleId) => {
        setFormData(prev => ({ ...prev, role: roleId }));
        if (roleId === 'CUSTOMER') {
            // Customers don't need extra details step for now
            onLoginSuccess('CUSTOMER');
        } else {
            setView('SIGNUP_DETAILS');
        }
    };

    const handleFinalSubmit = (e) => {
        e.preventDefault();
        // Here we would submit formData to backend
        // For demo, just log them in with the selected role
        onLoginSuccess(formData.role);
    };

    const toggleView = () => {
        setView(view === 'LOGIN' ? 'SIGNUP_BASIC' : 'LOGIN');
        // Reset role flow if switching back to login
        if (view !== 'LOGIN') setFormData(INITIAL_DATA);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="bg-[#0F0F13] border border-white/10 rounded-3xl w-full max-w-lg relative shadow-2xl shadow-primary/20 overflow-hidden flex flex-col max-h-[90vh]">

                {/* Header */}
                <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
                    {view !== 'LOGIN' && view !== 'SIGNUP_BASIC' && (
                        <button onClick={() => setView('SIGNUP_ROLE')} className="text-gray-400 hover:text-white">
                            <ChevronLeft size={24} />
                        </button>
                    )}
                    <h2 className="text-xl font-display font-medium text-white flex-1 text-center">
                        {view === 'LOGIN' && 'Welcome Back'}
                        {view === 'SIGNUP_BASIC' && 'Create Account'}
                        {view === 'SIGNUP_ROLE' && 'Choose Your Path'}
                        {view === 'SIGNUP_DETAILS' && 'Complete Profile'}
                    </h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white">
                        <X size={24} />
                    </button>
                </div>

                <div className="p-8 overflow-y-auto custom-scrollbar">
                    {/* LOGIN VIEW */}
                    {view === 'LOGIN' && (
                        <form onSubmit={handleLogin} className="space-y-5">
                            <InputGroup label="Email or Username" type="text" placeholder="neo@matrix.com" />
                            <PasswordInput show={showPassword} toggle={() => setShowPassword(!showShow)} />

                            <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-xl transition-all shadow-lg shadow-primary/25 mt-4">
                                Enter System
                            </button>

                            <p className="text-center text-gray-500 text-sm mt-6">
                                New to the ecosystem?
                                <button type="button" onClick={() => setView('SIGNUP_BASIC')} className="text-accent hover:underline ml-1">
                                    Initialize Identity
                                </button>
                            </p>
                        </form>
                    )}

                    {/* SIGNUP BASIC */}
                    {view === 'SIGNUP_BASIC' && (
                        <form onSubmit={handleBasicSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <InputGroup label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} required />
                                <InputGroup label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} required />
                            </div>
                            <InputGroup label="Email" type="email" name="email" value={formData.email} onChange={handleChange} required />
                            <div className="grid grid-cols-2 gap-4">
                                <InputGroup label="Phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                                <InputGroup label="Birthday" type="date" name="birthday" value={formData.birthday} onChange={handleChange} required />
                            </div>
                            <PasswordInput
                                label="Password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                show={showPassword}
                                toggle={() => setShowPassword(!showPassword)}
                            />
                            <PasswordInput
                                label="Retype Password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                show={showPassword}
                                toggle={() => setShowPassword(!showPassword)}
                            />

                            {error && <p className="text-red-400 text-sm flex items-center gap-2"><AlertCircle size={14} /> {error}</p>}

                            <button type="submit" className="w-full bg-white text-black hover:bg-gray-200 font-medium py-3 rounded-xl transition-all mt-4 flex items-center justify-center gap-2">
                                Next <ArrowRight size={18} />
                            </button>

                            <p className="text-center text-gray-500 text-sm mt-4">
                                Already have an ID?
                                <button type="button" onClick={() => setView('LOGIN')} className="text-accent hover:underline ml-1">
                                    Login
                                </button>
                            </p>
                        </form>
                    )}

                    {/* SIGNUP ROLE */}
                    {view === 'SIGNUP_ROLE' && (
                        <div className="space-y-4">
                            <p className="text-gray-400 text-sm text-center mb-6">How do you intend to use Nhachill?</p>

                            <RoleCard
                                icon={<User />}
                                title="Customer"
                                desc="I want to browse designs, buy products, and build my dream home."
                                onClick={() => handleRoleSelect('CUSTOMER')}
                            />
                            <RoleCard
                                icon={<Briefcase />}
                                title="Designer / Architect"
                                desc="I want to showcase my portfolio, sell blueprints, and find clients."
                                onClick={() => handleRoleSelect('ARCHITECT')}
                            />
                            <RoleCard
                                icon={<Store />}
                                title="Supplier"
                                desc="I want to sell furniture, materials, and construction services."
                                onClick={() => handleRoleSelect('SUPPLIER')}
                            />
                        </div>
                    )}

                    {/* SIGNUP DETAILS */}
                    {view === 'SIGNUP_DETAILS' && (
                        <form onSubmit={handleFinalSubmit} className="space-y-5">
                            {formData.role === 'ARCHITECT' && (
                                <>
                                    <InputGroup label="Nickname / Display Name" name="nickname" value={formData.nickname} onChange={handleChange} required />
                                    <InputGroup label="Years of Experience" type="number" name="experience" value={formData.experience} onChange={handleChange} required />

                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-400 block">Work Type</label>
                                        <div className="grid grid-cols-2 gap-4">
                                            <button
                                                type="button"
                                                onClick={() => setFormData(p => ({ ...p, workType: 'freelance' }))}
                                                className={`p-3 rounded-xl border text-sm transition-all ${formData.workType === 'freelance' ? 'bg-primary text-white border-primary' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'}`}
                                            >
                                                Freelance
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setFormData(p => ({ ...p, workType: 'company' }))}
                                                className={`p-3 rounded-xl border text-sm transition-all ${formData.workType === 'company' ? 'bg-primary text-white border-primary' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'}`}
                                            >
                                                Company
                                            </button>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-400 block">Short Bio</label>
                                        <textarea
                                            name="description"
                                            value={formData.description}
                                            onChange={handleChange}
                                            required
                                            rows={3}
                                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                            placeholder="Tell us about your style..."
                                        />
                                    </div>
                                </>
                            )}

                            {formData.role === 'SUPPLIER' && (
                                <>
                                    <InputGroup label="Company Name" name="companyName" value={formData.companyName} onChange={handleChange} required />
                                    <InputGroup label="Years in Business" type="number" name="businessYears" value={formData.businessYears} onChange={handleChange} required />
                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-400 block">Business Description</label>
                                        <textarea
                                            name="description"
                                            value={formData.description}
                                            onChange={handleChange}
                                            required
                                            rows={3}
                                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                            placeholder="What do you sell?"
                                        />
                                    </div>
                                </>
                            )}

                            <button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white font-medium py-3 rounded-xl transition-all shadow-lg shadow-accent/25 mt-4">
                                Complete Profile
                            </button>
                        </form>
                    )}

                </div>
            </div>
        </div>
    );
};

const InputGroup = ({ label, type = "text", ...props }) => (
    <div className="space-y-2">
        <label className="text-sm text-gray-400 block">{label}</label>
        <input
            type={type}
            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none outline-none focus:border-primary transition-colors"
            {...props}
        />
    </div>
);

const PasswordInput = ({ label = "Password", show, toggle, ...props }) => (
    <div className="space-y-2">
        <label className="text-sm text-gray-400 block">{label}</label>
        <div className="relative">
            <input
                type={show ? "text" : "password"}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none outline-none focus:border-primary transition-colors pr-10"
                {...props}
            />
            <button
                type="button"
                onClick={toggle}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
            >
                {show ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
        </div>
    </div>
);

const RoleCard = ({ icon, title, desc, onClick }) => (
    <button
        onClick={onClick}
        className="w-full p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/50 text-left transition-all flex items-start gap-4 group"
    >
        <div className="p-3 bg-white/5 rounded-lg text-white group-hover:text-primary transition-colors">
            {icon}
        </div>
        <div>
            <h3 className="text-white font-medium mb-1">{title}</h3>
            <p className="text-sm text-gray-400">{desc}</p>
        </div>
    </button>
);

export default AuthModal;
