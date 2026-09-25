import React, { useState } from 'react';
import { PageId } from '../types';
import {
  Lock,
  Mail,
  Eye,
  EyeOff,
  ShieldCheck,
  Building,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

interface IniciarSesionScreenProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const IniciarSesionScreen: React.FC<IniciarSesionScreenProps> = ({ onNavigate }) => {
  // RULE: "Eliminar todo lo relacionado con: portal del paciente"
  // ONLY 'clinica' and 'campus' are permitted!
  const [role, setRole] = useState<'clinica' | 'campus'>('clinica');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setTimeout(() => {
      setIsLoggingIn(false);
      setLoginSuccess(true);
    }, 800);
  };

  return (
    <div className="w-full min-h-[calc(100vh-80px)] flex flex-col justify-center bg-[#f7f9fb] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side: Institutional Summary (NO Portal Pacientes, NO ISO, NO Auditoría) */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c7eae1] text-[#003441] text-[11px] font-['JetBrains_Mono'] font-bold mb-3">
              <span className="w-2 h-2 rounded-full bg-[#006874] animate-pulse"></span>
              <span>SERVIDOR ACTIVO NOM-024</span>
            </div>
            <span className="text-xs font-['JetBrains_Mono'] text-[#70787c] block uppercase tracking-wider">
              PORTAL UNIFICADO FISIOALEPH
            </span>
            <h1 className="font-['Space_Grotesk'] text-3xl font-bold text-[#003441] mt-1 mb-3">
              Ingreso Clínico de Alta Precisión.
            </h1>
            <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
              Accede a las estaciones clínicas de FisioSinapsis SaaS o a las aulas de educación médica continua en AlphaDigitalFisio.
            </p>
          </div>

          <div className="space-y-3">
            {/* Feature 1 */}
            <div className="p-3.5 rounded-xl bg-white border border-[#e0e3e5] flex items-start gap-3 shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-[#003441] text-[#5ce9fe] flex items-center justify-center shrink-0">
                <Building className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#003441] block">
                  FisioSinapsis Neuro-Rehab
                </span>
                <span className="text-[11px] text-[#555555]">
                  Expediente electrónico NOM-024, prescripción clínica e historial de evolución.
                </span>
              </div>
            </div>

            {/* Feature 2 (NO Portal Paciente per user rule!) */}
            <div className="p-3.5 rounded-xl bg-white border border-[#e0e3e5] flex items-start gap-3 shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-[#006874] text-white flex items-center justify-center shrink-0">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#003441] block">
                  AlphaDigitalFisio Academy
                </span>
                <span className="text-[11px] text-[#555555]">
                  Campus LMS con certificaciones, cursos y formación clínica continua.
                </span>
              </div>
            </div>
          </div>

          <div className="pt-2 text-[11px] text-[#70787c] space-y-1">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#006874]" />
              <span>Cifrado TLS 1.3 / AES-256 · LFPDPPP Cumplido</span>
            </div>
            <div className="text-[10px] text-[#70787c]">
              Estándar de calidad sanitaria COFEPRIS · Versión 4.8.2-PROD
            </div>
          </div>
        </div>

        {/* Right Side: Login Card */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-[#e0e3e5] shadow-xl">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#eceef0]">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-[#003441] text-white flex items-center justify-center font-bold text-xs font-['Space_Grotesk']">
                F
              </div>
              <span className="font-['Space_Grotesk'] text-sm font-bold text-[#003441] tracking-tight">
                FISIOALEPH
              </span>
            </div>
            <span className="text-[10px] font-['JetBrains_Mono'] bg-[#f2f4f6] text-[#003441] px-2 py-0.5 rounded font-semibold border border-[#c0c8cb]/40">
              NOM-024-SSA3
            </span>
          </div>

          {loginSuccess ? (
            <div className="py-8 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#c7eae1] text-[#006874] flex items-center justify-center mb-3">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[#003441] mb-1">
                Sesión Iniciada Correctamente
              </h3>
              <p className="text-xs text-[#555555] mb-6">
                Bienvenido a la estación clínica autorizada ({role === 'clinica' ? 'FisioSinapsis' : 'AlphaDigital Academy'}).
              </p>
              <button
                onClick={() => setLoginSuccess(false)}
                className="px-6 py-2.5 rounded-lg bg-[#003441] text-white text-xs font-semibold hover:bg-[#0f4c5c]"
              >
                Cerrar Sesión de Demostración
              </button>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-4">
              {/* Role Selector: ONLY Clínica & Pro, and Campus (NO PACIENTE per rule) */}
              <div>
                <label className="block text-xs font-bold text-[#003441] uppercase tracking-wider mb-2">
                  Selecciona tu Rol de Acceso
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setRole('clinica')}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      role === 'clinica'
                        ? 'border-[#006874] bg-[#003441] text-white shadow-sm'
                        : 'border-[#c0c8cb] text-[#555555] hover:bg-[#f7f9fb]'
                    }`}
                  >
                    <Building className="w-4 h-4" />
                    <span>Clínica &amp; Pro</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setRole('campus')}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      role === 'campus'
                        ? 'border-[#006874] bg-[#003441] text-white shadow-sm'
                        : 'border-[#c0c8cb] text-[#555555] hover:bg-[#f7f9fb]'
                    }`}
                  >
                    <GraduationCap className="w-4 h-4" />
                    <span>Campus LMS</span>
                  </button>
                </div>
              </div>

              {/* Status banner */}
              <div className="p-3 bg-[#f2f4f6] rounded-xl border border-[#e0e3e5] text-[11px] text-[#555555] flex items-center justify-between">
                <span>Entorno activo:</span>
                <span className="font-semibold text-[#003441]">
                  {role === 'clinica' ? 'FisioSinapsis SaaS (Expediente)' : 'Campus AlphaDigitalFisio'}
                </span>
              </div>

              {/* Email */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-bold text-[#003441] uppercase tracking-wider">
                    Correo Institucional o Usuario Clínico
                  </label>
                  <span className="text-[10px] text-[#70787c]">usuario@fisioaleph.com</span>
                </div>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#70787c] absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="ejemplo.terapeuta@recuperat.mx"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-10 pl-9 pr-3 rounded-lg border border-[#c0c8cb] text-xs sm:text-sm text-[#191c1e] bg-white focus:outline-none focus:border-[#006874]"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-bold text-[#003441] uppercase tracking-wider">
                    Contraseña de Seguridad
                  </label>
                  <button
                    type="button"
                    onClick={() => alert('Para restablecer contraseña, comunícate con soporte@fisioaleph.com')}
                    className="text-[11px] text-[#006874] hover:underline"
                  >
                    ¿Olvidaste tu contraseña?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-[#70787c] absolute left-3 top-3" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full h-10 pl-9 pr-9 rounded-lg border border-[#c0c8cb] text-xs sm:text-sm text-[#191c1e] bg-white focus:outline-none focus:border-[#006874]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-[#70787c] hover:text-[#003441]"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Remember station checkbox */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 text-xs text-[#555555] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="accent-[#006874]"
                  />
                  <span>Mantener sesión en esta estación autorizada</span>
                </label>
                <span className="text-[10px] text-[#70787c]">30m timeout</span>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isLoggingIn}
                className="w-full h-11 rounded-lg bg-[#006874] text-white hover:bg-[#003441] font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
              >
                {isLoggingIn ? (
                  <span>Verificando Credenciales...</span>
                ) : (
                  <>
                    <span>Ingresar al Portal Clínico</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Assistance Links */}
              <div className="pt-4 border-t border-[#eceef0] text-center text-xs text-[#555555] space-y-2">
                <span>¿Aún no tienes credencial médica de acceso?</span>
                <div className="flex items-center justify-center gap-4 text-xs font-semibold text-[#006874]">
                  <button
                    type="button"
                    onClick={() => onNavigate('planes-saas')}
                    className="hover:underline cursor-pointer"
                  >
                    Activar Plan FisioSinapsis
                  </button>
                  <span>•</span>
                  <button
                    type="button"
                    onClick={() => onNavigate('contacto')}
                    className="hover:underline cursor-pointer"
                  >
                    Solicitar en Clínica Valle Imperial
                  </button>
                </div>
              </div>

              <div className="pt-2 text-[10px] text-center text-[#70787c]">
                Aviso de Privacidad Clínico conforme a Ley Federal de Protección de Datos Personales (LFPDPPP).
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
