import React, { useState } from 'react';
import { PageId } from '../types';
import { MethodologySection } from '../components/MethodologySection';
import {
  Activity,
  Calendar,
  CheckCircle2,
  Stethoscope,
  Building,
  Zap,
  Briefcase,
  Users,
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  FileCheck,
  Laptop,
} from 'lucide-react';

interface ServiciosScreenProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const ServiciosScreen: React.FC<ServiciosScreenProps> = ({ onNavigate, onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'recuperat' | 'saas' | 'ergonomia' | 'social' | 'academia'>('recuperat');

  return (
    <div className="w-full flex flex-col bg-[#f7f9fb]">
      {/* 1. Header Hero (NO ISO, NO Telemetría) */}
      <section className="relative w-full bg-[#003441] text-white py-16 lg:py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#26C6DA 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 text-xs text-[#c7eae1] mb-6">
            <span className="font-['JetBrains_Mono']">SGC-M-MCI-002 · PROTOCOLO CLÍNICO INTEGRADO</span>
            <span>•</span>
            <span className="flex items-center gap-1 font-semibold text-[#98f0ff]">
              <ShieldCheck className="w-3.5 h-3.5" />
              REG. COFEPRIS VIGENTE
            </span>
            <span>•</span>
            <span className="font-['JetBrains_Mono']">NOM-024-SSA3 VIGENTE</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div className="max-w-2xl">
              <span className="text-xs font-['JetBrains_Mono'] font-bold text-[#5ce9fe] tracking-widest uppercase">
                ECOSISTEMA MULTI-ESCALAR
              </span>
              <h1 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mt-2 mb-4 leading-tight">
                Servicios Clínicos y Ecosistema Tecnológico Fisioaleph
              </h1>
              <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                Convergencia de kinesiología avanzada, infraestructura asistencial ambulatoria y plataformas clínicas orientadas a la recuperación neuromuscular integral.
              </p>
            </div>

            {/* Quick KPI badge */}
            <div className="bg-[#0f4c5c] rounded-xl p-5 border border-[#5ce9fe]/20 shadow-lg shrink-0">
              <div className="text-xs text-[#c7eae1] mb-1">TASA DE EFECTIVIDAD CLÍNICA ROM</div>
              <div className="font-['Space_Grotesk'] text-2xl font-bold text-[#5ce9fe] mb-3">96.4%</div>
              <div className="flex items-center gap-6 pt-3 border-t border-white/10 text-xs text-white">
                <div>
                  <span className="block font-bold text-sm">18,400+</span>
                  <span className="text-[#c7eae1]">Sesiones Clínicas</span>
                </div>
                <div>
                  <span className="block font-bold text-sm">2 Sedes</span>
                  <span className="text-[#c7eae1]">Zapopan Oficial</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Divisions Selector */}
      <section className="w-full py-12 bg-white border-b border-[#e0e3e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 p-1.5 bg-[#f2f4f6] rounded-xl max-w-4xl mx-auto">
            <button
              onClick={() => setActiveTab('recuperat')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'recuperat'
                  ? 'bg-[#003441] text-white shadow-sm'
                  : 'text-[#555555] hover:text-[#003441]'
              }`}
            >
              1. Centros Recuperat
            </button>
            <button
              onClick={() => setActiveTab('saas')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'saas'
                  ? 'bg-[#003441] text-white shadow-sm'
                  : 'text-[#555555] hover:text-[#003441]'
              }`}
            >
              2. FisioSinapsis SaaS
            </button>
            <button
              onClick={() => setActiveTab('ergonomia')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'ergonomia'
                  ? 'bg-[#003441] text-white shadow-sm'
                  : 'text-[#555555] hover:text-[#003441]'
              }`}
            >
              3. Fisioterapia Laboral
            </button>
            <button
              onClick={() => setActiveTab('social')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'social'
                  ? 'bg-[#003441] text-white shadow-sm'
                  : 'text-[#555555] hover:text-[#003441]'
              }`}
            >
              4. FisioSocial
            </button>
            <button
              onClick={() => setActiveTab('academia')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'academia'
                  ? 'bg-[#003441] text-white shadow-sm'
                  : 'text-[#555555] hover:text-[#003441]'
              }`}
            >
              5. AlphaDigital Academia
            </button>
          </div>

          {/* Active Tab Content */}
          <div className="bg-[#f7f9fb] rounded-2xl p-6 sm:p-8 border border-[#e0e3e5]">
            {activeTab === 'recuperat' && (
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1">
                  <span className="text-[11px] font-['JetBrains_Mono'] text-[#006874] uppercase font-bold">
                    UNIDAD DE PRÁCTICA ASISTENCIAL · ZAPOPAN: VALLE IMPERIAL &amp; PASEO SENDAS
                  </span>
                  <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#003441] mt-1 mb-3">
                    Centros Recuperat Fisioterapia &amp; Rehabilitación
                  </h3>
                  <p className="text-sm text-[#555555] leading-relaxed mb-6">
                    Rehabilitación ambulatoria intensiva soportada en tecnología médica y análisis de movimiento funcional. Atendemos patologías ortopédicas agudas, recuperaciones postoperatorias de columna y extremidades, y readaptación de atletas.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white p-3.5 rounded-lg border border-[#e0e3e5]">
                      <span className="font-bold text-xs text-[#003441] block mb-1 flex items-center gap-1.5">
                        <Zap className="w-4 h-4 text-[#006874]" />
                        Electroterapia &amp; Ondas de Choque
                      </span>
                      <p className="text-xs text-[#555555]">
                        Frecuencias focales calibradas para analgesia profunda y bioestimulación tisular.
                      </p>
                    </div>

                    <div className="bg-white p-3.5 rounded-lg border border-[#e0e3e5]">
                      <span className="font-bold text-xs text-[#003441] block mb-1 flex items-center gap-1.5">
                        <Activity className="w-4 h-4 text-[#006874]" />
                        Gimnasio Terapéutico Funcional
                      </span>
                      <p className="text-xs text-[#555555]">
                        Circuitos de movilidad activa guiada y readaptación funcional progresiva.
                      </p>
                    </div>

                    <div className="bg-white p-3.5 rounded-lg border border-[#e0e3e5]">
                      <span className="font-bold text-xs text-[#003441] block mb-1 flex items-center gap-1.5">
                        <Stethoscope className="w-4 h-4 text-[#006874]" />
                        Ortopedia Postoperatoria
                      </span>
                      <p className="text-xs text-[#555555]">
                        Protocolos estandarizados en ligamento cruzado, meniscos y manguito rotador.
                      </p>
                    </div>

                    <div className="bg-white p-3.5 rounded-lg border border-[#e0e3e5]">
                      <span className="font-bold text-xs text-[#003441] block mb-1 flex items-center gap-1.5">
                        <Building className="w-4 h-4 text-[#006874]" />
                        Consultorios Privados
                      </span>
                      <p className="text-xs text-[#555555]">
                        Privacidad médica total, cubículos individuales y equipo de última generación.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={onOpenBooking}
                      className="h-10 px-5 rounded-lg bg-[#003441] text-white font-semibold text-xs hover:bg-[#0f4c5c] transition-colors cursor-pointer"
                    >
                      Agendar Consulta en Sede
                    </button>
                    <button
                      onClick={() => {
                        onNavigate('clinicas');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="h-10 px-5 rounded-lg bg-white border border-[#c0c8cb] text-[#003441] font-semibold text-xs hover:bg-[#f2f4f6] transition-colors cursor-pointer"
                    >
                      Ver Tour de Sedes Zapopan
                    </button>
                  </div>
                </div>

                <div className="w-full lg:w-96 rounded-xl overflow-hidden shadow-md border border-[#e0e3e5]">
                  <img
                    src="/src/assets/images/hero_clinic_rehab_1790297933862.jpg"
                    alt="Centros Recuperat Fisioterapia"
                    className="w-full h-56 object-cover"
                  />
                  <div className="bg-white p-4">
                    <div className="text-xs text-[#555555] font-semibold">Rango de Movilidad (ROM)</div>
                    <div className="text-xs text-[#006874] mt-1">Flexión de rodilla post-LCA: +28° de mejoría documentada</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'saas' && (
              <div>
                <span className="text-[11px] font-['JetBrains_Mono'] text-[#006874] uppercase font-bold">
                  SOFTWARE CLÍNICO ESPECIALIZADO
                </span>
                <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#003441] mt-1 mb-3">
                  FisioSinapsis Neuro-Rehab SaaS
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed mb-6 max-w-3xl">
                  Plataforma médica para expediente clínico electrónico conforme a la NOM-024-SSA3, prescripción de ejercicios terapéuticos y monitoreo objetivo de los rangos de movilidad articular (ROM).
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg border border-[#e0e3e5]">
                    <span className="font-bold text-xs text-[#003441] block mb-1">Cálculo de Grados ROM</span>
                    <p className="text-xs text-[#555555]">Registro de la evolución articular por articulación y plano.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-[#e0e3e5]">
                    <span className="font-bold text-xs text-[#003441] block mb-1">Cifrado de Grado Médico</span>
                    <p className="text-xs text-[#555555]">Preservación fidedigna de expedientes conforme a la LFPDPPP.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-[#e0e3e5]">
                    <span className="font-bold text-xs text-[#003441] block mb-1">Prescripción de Ejercicios</span>
                    <p className="text-xs text-[#555555]">Biblioteca de guías terapéuticas para apego en casa.</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    onNavigate('planes-saas');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="h-10 px-5 rounded-lg bg-[#006874] text-white font-semibold text-xs hover:bg-[#5ce9fe] hover:text-[#001f24] transition-colors cursor-pointer"
                >
                  Ver Planes &amp; Precios SaaS
                </button>
              </div>
            )}

            {activeTab === 'ergonomia' && (
              <div>
                <span className="text-[11px] font-['JetBrains_Mono'] text-[#006874] uppercase font-bold">
                  SALUD OCUPACIONAL &amp; PREVENCIÓN INDUSTRIAL
                </span>
                <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#003441] mt-1 mb-3">
                  Fisioterapia Laboral &amp; Ergonomía
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed mb-6 max-w-3xl">
                  Consultoría y programas para empresas orientados a la reducción de incapacidades por trastornos musculoesqueléticos. Implementación y peritaje de la NOM-035-STPS y NOM-036-1-STPS.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg border border-[#e0e3e5]">
                    <span className="font-bold text-xs text-[#003441] block mb-1">Diagnóstico Ergonómico In-Situ</span>
                    <p className="text-xs text-[#555555]">Análisis ergonómico de puestos de trabajo y líneas de ensamble.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-[#e0e3e5]">
                    <span className="font-bold text-xs text-[#003441] block mb-1">Pausas Activas &amp; Educación Postural</span>
                    <p className="text-xs text-[#555555]">Capacitación para operarios y personal administrativo.</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    onNavigate('contacto');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="h-10 px-5 rounded-lg bg-[#003441] text-white font-semibold text-xs hover:bg-[#0f4c5c] transition-colors cursor-pointer"
                >
                  Solicitar Cotización Empresarial
                </button>
              </div>
            )}

            {activeTab === 'social' && (
              <div>
                <span className="text-[11px] font-['JetBrains_Mono'] text-[#006874] uppercase font-bold">
                  RESPONSABILIDAD SOCIAL CLÍNICA
                </span>
                <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#003441] mt-1 mb-3">
                  FisioSocial Red Comunitaria
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed mb-6 max-w-3xl">
                  Programa filantrópico de Fisioaleph para democratizar la fisioterapia de calidad: brigadas comunitarias geriátricas, atención a atletas juveniles y subsidios a familias vulnerables en Jalisco.
                </p>
                <div className="bg-white p-4 rounded-lg border border-[#e0e3e5] mb-6">
                  <div className="font-['Space_Grotesk'] text-xl font-bold text-[#003441] mb-1">+3,400 Familias Beneficiadas</div>
                  <p className="text-xs text-[#555555]">En jornadas de salud musculoesquelética y rehabilitación geriátrica preventiva.</p>
                </div>
                <button
                  onClick={() => {
                    onNavigate('contacto');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="h-10 px-5 rounded-lg bg-[#006874] text-white font-semibold text-xs hover:bg-[#003441] transition-colors cursor-pointer"
                >
                  Conocer Programas Comunitarios
                </button>
              </div>
            )}

            {activeTab === 'academia' && (
              <div>
                <span className="text-[11px] font-['JetBrains_Mono'] text-[#006874] uppercase font-bold">
                  FORMACIÓN CONTINUA CLÍNICA
                </span>
                <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#003441] mt-1 mb-3">
                  AlphaDigitalFisio Academia
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed mb-6 max-w-3xl">
                  Plataforma de capacitación continua para fisioterapeutas y médicos rehabilitadores. Cursos y diplomados con valor curricular en terapia manual, biomecánica clínica y escalas estandarizadas.
                </p>
                <button
                  onClick={() => {
                    onNavigate('biblioteca-digital');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="h-10 px-5 rounded-lg bg-[#003441] text-white font-semibold text-xs hover:bg-[#0f4c5c] transition-colors cursor-pointer"
                >
                  Acceder a Recursos Académicos
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN EXACTA OBLIGATORIA: METODOLOGÍA CLÍNICA */}
      <MethodologySection />

      {/* 4. SECCIÓN INSTALACIONES: Textos profesionales exactos requeridos:
          - “Mesa de Canabé de alta precisión”
          - “Consultorios privados completamente equipados”
          - “Equipo de ultrasonido y electroterapia de última generación”
          (NO camillas de tracción, NO dinamometría isométrica, NO sensores cinemáticos) */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-['JetBrains_Mono'] font-bold text-[#006874] tracking-widest uppercase">
              03. INSTRUMENTAL CLÍNICO HOSPITALARIO
            </span>
            <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#262b38] mt-2">
              Equipamiento Clínico de Grado Médico
            </h2>
            <p className="text-xs sm:text-sm text-[#555555] mt-2">
              Dispositivos electromédicos certificados bajo normatividad sanitaria COFEPRIS con mantenimiento preventivo riguroso y calibración semestral.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Box 1: Mesa de Canabé de alta precisión */}
            <div className="bg-[#f7f9fb] rounded-xl overflow-hidden border border-[#e0e3e5] shadow-sm">
              <div className="h-52 bg-[#eceef0] overflow-hidden">
                <img
                  src="/src/assets/images/treatment_canabe_table_1790297972722.jpg"
                  alt="Mesa de Canabé de alta precisión"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-[11px] font-['JetBrains_Mono'] text-[#006874] font-bold uppercase">
                  CONFORT &amp; ERGONOMÍA
                </span>
                <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[#003441] mt-1 mb-2">
                  Mesa de Canabé de alta precisión
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed mb-4">
                  Superficies especializadas con soporte multiposición, diseñadas para la ejecución precisa de terapia manual, descompresión postural y movilización funcional asistida.
                </p>
                <div className="text-[11px] font-semibold text-[#006874] flex items-center gap-1.5 pt-3 border-t border-[#eceef0]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Regulación ergonómica micrométrica</span>
                </div>
              </div>
            </div>

            {/* Box 2: Consultorios privados completamente equipados */}
            <div className="bg-[#f7f9fb] rounded-xl overflow-hidden border border-[#e0e3e5] shadow-sm">
              <div className="h-52 bg-[#eceef0] overflow-hidden">
                <img
                  src="/src/assets/images/clinic_valle_imperial_1790297944269.jpg"
                  alt="Consultorios privados completamente equipados"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-[11px] font-['JetBrains_Mono'] text-[#006874] font-bold uppercase">
                  CONFIDENCIALIDAD CLÍNICA
                </span>
                <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[#003441] mt-1 mb-2">
                  Consultorios privados completamente equipados
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed mb-4">
                  Módulos cerrados para valoración médica inicial, ecografía musculoesquelética de cabecera y elaboración de expedientes clínicos protegidos bajo la NOM-024-SSA3.
                </p>
                <div className="text-[11px] font-semibold text-[#006874] flex items-center gap-1.5 pt-3 border-t border-[#eceef0]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Cumplimiento LFPDPPP &amp; NOM-024</span>
                </div>
              </div>
            </div>

            {/* Box 3: Equipo de ultrasonido y electroterapia de última generación */}
            <div className="bg-[#f7f9fb] rounded-xl overflow-hidden border border-[#e0e3e5] shadow-sm">
              <div className="h-52 bg-[#eceef0] overflow-hidden">
                <img
                  src="/src/assets/images/ultrasound_therapy_1790297963160.jpg"
                  alt="Equipo de ultrasonido y electroterapia de última generación"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-[11px] font-['JetBrains_Mono'] text-[#006874] font-bold uppercase">
                  MODULACIÓN TISULAR
                </span>
                <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[#003441] mt-1 mb-2">
                  Equipo de ultrasonido y electroterapia de última generación
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed mb-4">
                  Consolas digitales con cabezales de 1 MHz y 3 MHz, corrientes interferenciales, TENS analgésico y electroestimulación neuromuscular adaptativa para desinflamación rápida.
                </p>
                <div className="text-[11px] font-semibold text-[#006874] flex items-center gap-1.5 pt-3 border-t border-[#eceef0]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Calibración electromédica periódica</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTAs duales para Pacientes y Empresas */}
      <section className="w-full py-16 bg-[#f2f4f6] border-t border-[#e0e3e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Box Pacientes */}
            <div className="bg-[#003441] text-white p-8 rounded-2xl flex flex-col justify-between shadow-lg">
              <div>
                <span className="text-[11px] font-['JetBrains_Mono'] text-[#5ce9fe] font-bold uppercase tracking-wider block mb-2">
                  PARA PACIENTES Y ATLETAS
                </span>
                <h3 className="font-['Space_Grotesk'] text-2xl font-bold mb-3">
                  ¿Vives con dolor o requieres rehabilitación posquirúrgica?
                </h3>
                <p className="text-sm text-white/80 leading-relaxed mb-6">
                  Agenda tu valoración inicial en Centros Recuperat Zapopan. Nuestro equipo médico y fisioterapéutico diseñará tu plan personalizado paso a paso.
                </p>
                <ul className="space-y-2 text-xs text-[#c7eae1] mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5ce9fe]" />
                    <span>Diagnóstico clínico inicial en camilla y control ROM</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5ce9fe]" />
                    <span>Sedes accesibles en Valle Imperial y Paseo Sendas</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={onOpenBooking}
                className="h-11 px-6 rounded-lg bg-[#5ce9fe] text-[#001f24] font-bold text-sm hover:bg-[#98f0ff] transition-colors shadow-md w-full sm:w-auto self-start cursor-pointer"
              >
                Agendar Cita en Sede Zapopan
              </button>
            </div>

            {/* Box Empresas & Terapeutas */}
            <div className="bg-white p-8 rounded-2xl border border-[#e0e3e5] flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-[11px] font-['JetBrains_Mono'] text-[#006874] font-bold uppercase tracking-wider block mb-2">
                  PARA CLÍNICAS, EMPRESAS &amp; TERAPEUTAS
                </span>
                <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#003441] mb-3">
                  Digitaliza tu práctica clínica o mejora la ergonomía laboral
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed mb-6">
                  Implementa la plataforma SaaS FisioSinapsis en tu consultorio o contrata un diagnóstico ergonómico de puestos de trabajo conforme a la NOM-036-STPS.
                </p>
                <ul className="space-y-2 text-xs text-[#006874] mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#006874]" />
                    <span>Demostración guiada de la plataforma FisioSinapsis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#006874]" />
                    <span>Cotización técnica formal para corporativos e industrias</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    onNavigate('planes-saas');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="h-11 px-6 rounded-lg bg-[#003441] text-white font-semibold text-sm hover:bg-[#0f4c5c] transition-colors cursor-pointer"
                >
                  Ver Planes SaaS
                </button>
                <button
                  onClick={() => {
                    onNavigate('contacto');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="h-11 px-6 rounded-lg bg-[#f2f4f6] text-[#003441] font-semibold text-sm hover:bg-[#e0e3e5] transition-colors cursor-pointer"
                >
                  Contacto B2B
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
