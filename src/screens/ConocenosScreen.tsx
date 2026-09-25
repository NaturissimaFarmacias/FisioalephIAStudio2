import React from 'react';
import { PageId } from '../types';
import { MethodologySection } from '../components/MethodologySection';
import {
  ShieldCheck,
  Building,
  Flag,
  Eye,
  CheckCircle2,
  Heart,
  Gavel,
  Users,
  Compass,
  Laptop,
  Briefcase,
  GraduationCap,
  Activity,
  ArrowRight,
  Phone,
  Clock,
} from 'lucide-react';

interface ConocenosScreenProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const ConocenosScreen: React.FC<ConocenosScreenProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="w-full flex flex-col bg-[#f7f9fb]">
      {/* 1. Hero & Identidad Institucional */}
      <section className="relative w-full bg-[#003441] text-white py-16 lg:py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#26C6DA 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-center justify-between gap-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f4c5c] text-[#98f0ff] text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-[#5ce9fe] animate-pulse"></span>
              <span>SGC-M-MCI-001 · EXPEDIENTE DE IDENTIDAD INSTITUCIONAL</span>
            </div>

            <h1 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              Acción profesional con compromiso humano:{' '}
              <span className="text-[#98f0ff]">Fisioterapia para el mundo.</span>
            </h1>

            <p className="text-base sm:text-lg text-white/85 mb-8 leading-relaxed">
              Fisioaleph consolida el epicentro de rehabilitación funcional, plataformas clínicas SaaS de prescripción física y centros de alta especialidad en Zapopan, Jalisco. Transformamos la recuperación funcional mediante ciencia basada en evidencia.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#filosofia"
                className="inline-flex items-center gap-2 h-11 px-6 rounded-lg bg-[#5ce9fe] text-[#001f24] font-bold text-sm hover:bg-[#98f0ff] transition-colors shadow-sm"
              >
                <span>Conoce Nuestra Filosofía</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#divisiones"
                className="inline-flex items-center gap-2 h-11 px-6 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors"
              >
                <span>Ecosistema de 5 Divisiones</span>
              </a>
            </div>
          </div>

          {/* Metric Dashboard Card (NO ISO) */}
          <div className="w-full lg:max-w-md">
            <div className="bg-white rounded-2xl p-6 shadow-2xl text-[#191c1e] border border-white/10">
              <div className="flex items-center justify-between pb-3 mb-4 bg-[#f2f4f6] rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#006874]" />
                  <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#003441]">
                    NODO CENTRAL ZAPOPAN
                  </span>
                </div>
                <span className="text-[10px] font-['JetBrains_Mono'] text-[#70787c] px-2 py-0.5 rounded bg-white font-semibold">
                  LIVE SYNC
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1 text-xs">
                    <span className="text-[#555555]">Precisión de Rango Articular (ROM)</span>
                    <span className="font-['Space_Grotesk'] text-sm font-bold text-[#003441]">
                      142.5° <span className="text-[11px] font-normal text-[#70787c]">/ 145°</span>
                    </span>
                  </div>
                  <div className="w-full h-2 bg-[#eceef0] rounded-full overflow-hidden">
                    <div className="h-full bg-[#006874] rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-[#c7eae1]/40 p-3 rounded-lg">
                    <div className="text-[10px] font-['JetBrains_Mono'] text-[#006874] font-bold uppercase">
                      ADHERENCIA EBP
                    </div>
                    <div className="font-['Space_Grotesk'] text-xl font-bold text-[#003441]">99.4%</div>
                    <div className="text-[11px] text-[#555555]">Protocolos estandarizados</div>
                  </div>
                  <div className="bg-[#f2f4f6] p-3 rounded-lg">
                    <div className="text-[10px] font-['JetBrains_Mono'] text-[#003441] font-bold uppercase">
                      REHABILITADOS
                    </div>
                    <div className="font-['Space_Grotesk'] text-xl font-bold text-[#003441]">18,500+</div>
                    <div className="text-[11px] text-[#555555]">Pacientes atendidos</div>
                  </div>
                </div>

                {/* Badges: ONLY COFEPRIS and NOM-024 (NO ISO!) */}
                <div className="flex items-center justify-between pt-2 border-t border-[#eceef0] text-xs text-[#70787c]">
                  <span className="inline-flex items-center gap-1 font-semibold text-[#006874]">
                    <ShieldCheck className="w-4 h-4 text-[#006874]" />
                    COFEPRIS Vigente
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px]">
                    NOM-024-SSA3 Cumplida
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Historia & Trayectoria */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-['JetBrains_Mono'] font-bold text-[#006874] tracking-widest uppercase">
              Génesis y Evolución Clínica
            </span>
            <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#262b38] mt-2">
              De una camilla clínica a un ecosistema de rehabilitación integral
            </h2>
            <p className="text-xs sm:text-sm text-[#555555] mt-2 leading-relaxed">
              Fisioaleph nació de la necesidad apremiante de erradicar los enfoques empíricos no medibles en terapia física. Lo que inició como el centro clínico Recuperat evolucionó en una organización integral enfocada en datos objetivos, modulación tisular y empatía terapéutica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Milestone 1 */}
            <div className="bg-[#f7f9fb] p-6 rounded-xl border border-[#e0e3e5] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#003441] text-[#98f0ff] flex items-center justify-center font-['Space_Grotesk'] font-bold mb-4">
                  01
                </div>
                <span className="text-[11px] font-['JetBrains_Mono'] text-[#006874] uppercase font-bold tracking-wider">
                  2017 — Origen Clínico
                </span>
                <h3 className="font-['Space_Grotesk'] text-base font-bold text-[#003441] mt-1 mb-2">
                  Centros Recuperat
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Apertura de la primera sede en Valle Imperial, Zapopan. Establecimiento de protocolos rigurosos de mecanoterapia, terapia manual de precisión y readaptación física personalizada.
                </p>
              </div>
              <div className="mt-4 pt-3 bg-white rounded p-2 text-center border border-[#e0e3e5]">
                <span className="text-[11px] text-[#003441] font-semibold">
                  Validación Clínica Presencial
                </span>
              </div>
            </div>

            {/* Milestone 2 */}
            <div className="bg-[#f7f9fb] p-6 rounded-xl border border-[#e0e3e5] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#006874] text-white flex items-center justify-center font-['Space_Grotesk'] font-bold mb-4">
                  02
                </div>
                <span className="text-[11px] font-['JetBrains_Mono'] text-[#006874] uppercase font-bold tracking-wider">
                  2020 — Ruptura Digital
                </span>
                <h3 className="font-['Space_Grotesk'] text-base font-bold text-[#003441] mt-1 mb-2">
                  Nacimiento de FisioSinapsis
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Ante los retos de continuidad ambulatoria, el equipo desarrolla su propio software en la nube para prescripción con control de rango de movimiento (ROM) y expediente clínico estandarizado.
                </p>
              </div>
              <div className="mt-4 pt-3 bg-white rounded p-2 text-center border border-[#e0e3e5]">
                <span className="text-[11px] text-[#003441] font-semibold">
                  Medición Precisa de Rango Articular
                </span>
              </div>
            </div>

            {/* Milestone 3 */}
            <div className="bg-[#f7f9fb] p-6 rounded-xl border border-[#e0e3e5] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#0f4c5c] text-[#5ce9fe] flex items-center justify-center font-['Space_Grotesk'] font-bold mb-4">
                  03
                </div>
                <span className="text-[11px] font-['JetBrains_Mono'] text-[#006874] uppercase font-bold tracking-wider">
                  2023 - Presente
                </span>
                <h3 className="font-['Space_Grotesk'] text-base font-bold text-[#003441] mt-1 mb-2">
                  Fisioaleph
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Integración multisectorial: Medicina Física de Precisión, Prevención Ocupacional NOM-035/036, Academia Virtual AlphaDigitalFisio y la red comunitaria sin fines de lucro FisioSocial.
                </p>
              </div>
              <div className="mt-4 pt-3 bg-white rounded p-2 text-center border border-[#e0e3e5]">
                <span className="text-[11px] text-[#003441] font-semibold">
                  Acreditación de Calidad en Gestión
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Filosofía Institucional */}
      <section className="w-full py-16 bg-[#f2f4f6]" id="filosofia">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-['JetBrains_Mono'] font-bold text-[#006874] tracking-widest uppercase">
                POLÍTICA DE CALIDAD CLÍNICA SGC-M-MCI-001
              </span>
              <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#262b38] mt-2">
                Filosofía Institucional &amp; Propósito Científico
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#555555] max-w-md">
              Nuestra gobernanza médica unifica la evidencia clínica sistemática con la dignidad y calidez en el trato a cada paciente en proceso de recuperación.
            </p>
          </div>

          {/* Misión & Visión */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#e0e3e5] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#c7eae1] flex items-center justify-center text-[#003441]">
                    <Flag className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-['JetBrains_Mono'] text-[#70787c] uppercase font-bold">
                      Compromiso Primario
                    </span>
                    <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#003441]">
                      Misión Fisioaleph
                    </h3>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-[#191c1e] leading-relaxed">
                  Impulsar el acceso global a una rehabilitación integral de vanguardia mediante la convergencia de medicina física basada en evidencia, medición objetiva y calidez humana, devolviendo a cada individuo su máxima autonomía funcional.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs text-[#006874] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#006874]" />
                <span>Alineado con el Código Ético de la Confederación Mundial de Fisioterapia</span>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#e0e3e5] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#5ce9fe]/30 flex items-center justify-center text-[#003441]">
                    <Eye className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-['JetBrains_Mono'] text-[#70787c] uppercase font-bold">
                      Horizonte Estratégico 2030
                    </span>
                    <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#003441]">
                      Visión Continental
                    </h3>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-[#191c1e] leading-relaxed">
                  Consolidarnos como la organización clínica de mayor prestigio y solvencia científica en la región, articulando una red modelo de clínicas de terapia física, tecnología SaaS interoperable y formación continua de alta rigurosidad.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs text-[#006874] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#006874]" />
                <span>Interoperabilidad conforme a NOM-024-SSA3 para Expediente Clínico</span>
              </div>
            </div>
          </div>

          {/* Valores Rectores (NO "Auditables", NO ISO) */}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#e0e3e5] shadow-sm">
            <h4 className="font-['Space_Grotesk'] text-lg font-bold text-[#003441] mb-6">
              Valores Rectores
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <div className="p-4 rounded-lg bg-[#f7f9fb] border border-[#e0e3e5]">
                <Activity className="w-6 h-6 text-[#006874] mb-2" />
                <span className="block text-xs font-bold text-[#003441] mb-1">
                  Rigor y Evidencia (EBP)
                </span>
                <p className="text-[11px] text-[#555555] leading-relaxed">
                  Protocolos sujetos a validación clínica continua y metaanálisis actualizado.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#f7f9fb] border border-[#e0e3e5]">
                <Compass className="w-6 h-6 text-[#006874] mb-2" />
                <span className="block text-xs font-bold text-[#003441] mb-1">
                  Innovación Clínica
                </span>
                <p className="text-[11px] text-[#555555] leading-relaxed">
                  Transformamos mediciones funcionales en planes de recuperación precisos.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#f7f9fb] border border-[#e0e3e5]">
                <Heart className="w-6 h-6 text-[#006874] mb-2" />
                <span className="block text-xs font-bold text-[#003441] mb-1">
                  Humanidad &amp; Escucha
                </span>
                <p className="text-[11px] text-[#555555] leading-relaxed">
                  La tecnología complementa el cuidado, nunca sustituye el trato humano.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#f7f9fb] border border-[#e0e3e5]">
                <Gavel className="w-6 h-6 text-[#006874] mb-2" />
                <span className="block text-xs font-bold text-[#003441] mb-1">
                  Integridad Normativa
                </span>
                <p className="text-[11px] text-[#555555] leading-relaxed">
                  Apego irrestricto a COFEPRIS y confidencialidad médica LFPDPPP.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#f7f9fb] border border-[#e0e3e5]">
                <Users className="w-6 h-6 text-[#006874] mb-2" />
                <span className="block text-xs font-bold text-[#003441] mb-1">
                  Impacto Compartido
                </span>
                <p className="text-[11px] text-[#555555] leading-relaxed">
                  Reinvertimos conocimiento y recursos en sectores vulnerables vía FisioSocial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECCIÓN EXACTA OBLIGATORIA: METODOLOGÍA CLÍNICA */}
      <MethodologySection />

      {/* 5. Certeza Jurídica y Sanitaria (NO ISO) */}
      <section className="w-full py-16 bg-white" id="divisiones">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-['JetBrains_Mono'] font-bold text-[#006874] tracking-widest uppercase">
              Certeza Jurídica y Sanitaria
            </span>
            <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#262b38] mt-2">
              Acreditaciones &amp; Estándares Oficiales
            </h2>
            <p className="text-xs sm:text-sm text-[#555555] mt-2">
              Cada proceso clínico y protocolo en Fisioaleph cumple con los marcos normativos sanitarios vigentes para garantizar la máxima seguridad del paciente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* COFEPRIS */}
            <div className="bg-[#f7f9fb] p-6 rounded-xl border border-[#e0e3e5]">
              <div className="w-12 h-12 rounded-lg bg-[#c7eae1] flex items-center justify-center text-[#003441] mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-['JetBrains_Mono'] text-[#006874] font-bold uppercase">
                REGULACIÓN SANITARIA
              </span>
              <h4 className="font-['Space_Grotesk'] text-lg font-bold text-[#003441] mt-1 mb-2">
                Aviso COFEPRIS
              </h4>
              <p className="text-xs text-[#555555] leading-relaxed">
                Establecimientos de atención médica con responsable sanitario debidamente registrado ante la Comisión Federal para la Protección contra Riesgos Sanitarios.
              </p>
            </div>

            {/* NOM-024-SSA3 */}
            <div className="bg-[#f7f9fb] p-6 rounded-xl border border-[#e0e3e5]">
              <div className="w-12 h-12 rounded-lg bg-[#c7eae1] flex items-center justify-center text-[#003441] mb-4">
                <Laptop className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-['JetBrains_Mono'] text-[#006874] font-bold uppercase">
                EXPEDIENTE ELECTRÓNICO
              </span>
              <h4 className="font-['Space_Grotesk'] text-lg font-bold text-[#003441] mt-1 mb-2">
                NOM-024-SSA3
              </h4>
              <p className="text-xs text-[#555555] leading-relaxed">
                Sistemas de información de registro electrónico para la salud. Interoperabilidad, confidencialidad y preservación fidedigna de notas clínicas.
              </p>
            </div>

            {/* WCAG 2.2 AA */}
            <div className="bg-[#f7f9fb] p-6 rounded-xl border border-[#e0e3e5]">
              <div className="w-12 h-12 rounded-lg bg-[#c7eae1] flex items-center justify-center text-[#003441] mb-4">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-['JetBrains_Mono'] text-[#006874] font-bold uppercase">
                ACCESIBILIDAD DIGITAL
              </span>
              <h4 className="font-['Space_Grotesk'] text-lg font-bold text-[#003441] mt-1 mb-2">
                WCAG 2.2 AA
              </h4>
              <p className="text-xs text-[#555555] leading-relaxed">
                Garantía de interfaces inclusivas para pacientes con afecciones motoras o sensoriales, permitiendo navegar y acceder a su programa de recuperación sin barreras.
              </p>
            </div>
          </div>

          {/* Sede Central Banner: RULE: "Eliminar todo lo referente a 'consejo'. Cambiar 'Contacto consejo' por simplemente 'Contacto'" */}
          <div className="mt-12 bg-[#003441] text-white rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0f4c5c] flex items-center justify-center text-[#98f0ff] shrink-0">
                <Building className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-['Space_Grotesk'] text-lg sm:text-xl font-bold">
                  Sedes Clínicas &amp; Coordinación General
                </h3>
                <p className="text-xs sm:text-sm text-white/80 mt-1">
                  Valle Imperial &amp; Paseo Sendas · Zapopan, Jalisco, México. Disponibles para convenios institucionales y atención clínica directa.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => {
                  onNavigate('contacto');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="h-11 px-6 rounded-lg bg-[#5ce9fe] text-[#001f24] font-bold text-sm hover:bg-[#98f0ff] transition-colors shadow-sm cursor-pointer"
              >
                Contacto
              </button>
              <a
                href="tel:+523396886699"
                className="h-11 px-4 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-sm flex items-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>33 9688-6699</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
