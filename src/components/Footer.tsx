import React from 'react';
import { PageId } from '../types';
import { Phone, Shield, FileText, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#eceef0] border-t border-[#c0c8cb]/30 text-[#191c1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-12">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#003441] text-white flex items-center justify-center font-bold text-lg font-['Space_Grotesk']">
                F
              </div>
              <span className="font-['Space_Grotesk'] text-xl text-[#003441] font-bold tracking-tight">
                FISIOALEPH
              </span>
            </div>
            <p className="text-sm text-[#555555] leading-relaxed max-w-md">
              Ecosistema de fisioterapia y rehabilitación funcional, plataformas clínicas SaaS y centros de atención especializada bajo estándares de calidad y estricta normatividad sanitaria COFEPRIS.
            </p>
            <div className="flex flex-col gap-2 mt-2">
              <span className="text-xs text-[#003441] font-bold uppercase tracking-wider">
                Líneas Centrales de Atención Clínica
              </span>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-[#003441]">
                <a href="tel:+523396886699" className="hover:text-[#006874] transition-colors flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-[#006874]" />
                  +52 33 9688-6699
                </a>
                <span className="text-[#c0c8cb]">•</span>
                <a href="tel:+523323517843" className="hover:text-[#006874] transition-colors">
                  33 2351-7843
                </a>
                <span className="text-[#c0c8cb]">•</span>
                <a href="tel:+523324074211" className="hover:text-[#006874] transition-colors">
                  33 2407-4211
                </a>
              </div>
            </div>
          </div>

          {/* Sedes Column */}
          <div className="flex flex-col gap-3">
            <span className="text-xs text-[#003441] uppercase tracking-wider font-bold">
              Sedes Zapopan, Jalisco
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-[#191c1e]">Clínica Valle Imperial</span>
              <p className="text-xs text-[#555555]">
                Boulevard Valle Imperial # 260 – 18, Col. Nuevo México / La Periquera, Zapopan, Jal.
              </p>
            </div>
            <div className="flex flex-col gap-1 mt-2">
              <span className="text-xs font-semibold text-[#191c1e]">Sede Plaza Paseo Sendas</span>
              <p className="text-xs text-[#555555]">
                Av. Guadalajara # 3523, Local 8 y 14–B, Fracc. Sendas Residencial, Zapopan, Jal.
              </p>
            </div>
          </div>

          {/* 5 Divisiones Column */}
          <div className="flex flex-col gap-3">
            <span className="text-xs text-[#003441] uppercase tracking-wider font-bold">
              5 Divisiones Oficiales
            </span>
            <ul className="flex flex-col gap-2 text-xs text-[#555555]">
              <li>
                <button
                  onClick={() => {
                    onNavigate('clinicas');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#003441] transition-colors text-left cursor-pointer"
                >
                  1. Centros Recuperat Fisioterapia
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('planes-saas');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#003441] transition-colors text-left cursor-pointer"
                >
                  2. FisioSinapsis Neuro-Rehab SaaS
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('servicios');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#003441] transition-colors text-left cursor-pointer"
                >
                  3. Fisioterapia Laboral &amp; Ergonomía
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('conocenos');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#003441] transition-colors text-left cursor-pointer"
                >
                  4. FisioSocial Red Comunitaria
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('biblioteca-digital');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#003441] transition-colors text-left cursor-pointer"
                >
                  5. AlphaDigitalFisio Formación Clínica
                </button>
              </li>
            </ul>
          </div>

          {/* Gobernanza & Cumplimiento Column (NO ISO, NO AUDITORÍA) */}
          <div className="flex flex-col gap-3">
            <span className="text-xs text-[#003441] uppercase tracking-wider font-bold">
              Gobernanza &amp; Calidad
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-[11px] text-[#003441] font-bold uppercase tracking-wider flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-[#006874]" />
                Estándar de Calidad
              </span>
              <span className="text-xs text-[#555555]">
                Sistema de Gestión Integral de Salud
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[11px] text-[#003441] font-bold uppercase tracking-wider flex items-center gap-1">
                <Shield className="w-3 h-3 text-[#006874]" />
                Regulación Sanitaria
              </span>
              <span className="text-xs text-[#555555]">
                Registro COFEPRIS en trámite de validación
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[11px] text-[#003441] font-bold uppercase tracking-wider flex items-center gap-1">
                <FileText className="w-3 h-3 text-[#006874]" />
                Protección de Datos
              </span>
              <span className="text-xs text-[#555555]">
                Aviso de Privacidad Integral conforme a LFPDPPP
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: STRICT COPYRIGHT RULE © 2025 Fisioaleph */}
        <div className="pt-8 border-t border-[#c0c8cb]/40 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#70787c]">
          <div>
            <span>© 2025 Fisioaleph Todos los derechos reservados. Zapopan, Jalisco, México.</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button
              onClick={() => onNavigate('contacto')}
              className="hover:text-[#003441] transition-colors cursor-pointer"
            >
              Aviso de Privacidad LFPDPPP
            </button>
            <span className="text-[#c0c8cb]">•</span>
            <button
              onClick={() => onNavigate('contacto')}
              className="hover:text-[#003441] transition-colors cursor-pointer"
            >
              Términos del Servicio
            </button>
            <span className="text-[#c0c8cb]">•</span>
            <button
              onClick={() => onNavigate('servicios')}
              className="hover:text-[#003441] transition-colors cursor-pointer"
            >
              Calidad &amp; Cumplimiento
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
