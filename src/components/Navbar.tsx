import React, { useState } from 'react';
import { PageId } from '../types';
import { Menu, X, Calendar, ArrowRight, UserCheck } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'conocenos', label: 'Conócenos' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'planes-saas', label: 'Planes SaaS' },
    { id: 'biblioteca-digital', label: 'Biblioteca Digital' },
    { id: 'clinicas', label: 'Clínicas Recuperat' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0f4c5c]/95 backdrop-blur-xl border-b border-[#003441]/30 shadow-[0_2px_12px_rgba(0,52,65,0.12)]">
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Zone */}
        <button
          onClick={() => {
            onNavigate('inicio');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-lg bg-[#5ce9fe]/20 border border-[#5ce9fe]/40 flex items-center justify-center text-[#5ce9fe] font-bold text-xl group-hover:scale-105 transition-transform">
            <span className="font-['Space_Grotesk']">F</span>
          </div>
          <div className="flex flex-col">
            <span className="font-['Space_Grotesk'] font-bold text-xl tracking-tight text-white group-hover:text-[#98f0ff] transition-colors">
              FISIOALEPH
            </span>
            <span className="text-[11px] text-[#c7eae1] tracking-wider uppercase hidden sm:inline font-medium">
              Fisioterapia &amp; Rehabilitación Funcional
            </span>
          </div>
        </button>

        {/* Nav Links */}
        <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`py-1 text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'text-[#98f0ff] border-b-2 border-[#98f0ff]'
                    : 'text-white/80 hover:text-white hover:border-b-2 hover:border-white/50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              onNavigate('iniciar-sesion');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`hidden lg:inline-flex items-center gap-1.5 text-sm font-semibold px-3 py-2 rounded-lg transition-colors cursor-pointer ${
              currentPage === 'iniciar-sesion'
                ? 'text-[#98f0ff] bg-white/10'
                : 'text-[#98f0ff] hover:text-white hover:bg-white/5'
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span>Iniciar Sesión</span>
          </button>

          <button
            onClick={onOpenBooking}
            className="flex items-center gap-2 h-10 px-5 rounded-lg bg-[#006874] text-white hover:bg-[#5ce9fe] hover:text-[#001f24] font-semibold text-sm transition-all shadow-sm cursor-pointer hover:shadow-md active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            <span className="whitespace-nowrap">Agenda Cita</span>
          </button>

          {/* Mobile hamburger */}
          <button
            aria-label="Abrir menú"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-10 h-10 rounded-lg bg-[#003441] text-white flex items-center justify-center hover:bg-[#003441]/80 transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden w-full bg-[#0f4c5c] text-white border-t border-[#003441]/30 shadow-2xl px-6 py-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`text-left py-2 px-3 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
                currentPage === item.id
                  ? 'bg-white/15 text-[#98f0ff]'
                  : 'text-white/85 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span>{item.label}</span>
              <ArrowRight className="w-4 h-4 opacity-60" />
            </button>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                onNavigate('iniciar-sesion');
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full h-10 rounded-lg bg-[#003441] text-[#98f0ff] font-semibold text-sm flex items-center justify-center gap-2"
            >
              <UserCheck className="w-4 h-4" />
              <span>Iniciar Sesión</span>
            </button>
            <button
              onClick={() => {
                onOpenBooking();
                setMobileMenuOpen(false);
              }}
              className="w-full h-10 rounded-lg bg-[#006874] text-white hover:bg-[#5ce9fe] hover:text-[#001f24] font-semibold text-sm flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Agenda Cita</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
