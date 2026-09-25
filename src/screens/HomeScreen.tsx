import React from 'react';
import { PageId } from '../types';
import { CLINICAL_TEAM, CLINIC_LOCATIONS } from '../data/clinicalData';
import { MethodologySection } from '../components/MethodologySection';
import {
  Calendar,
  ArrowRight,
  MapPin,
  CheckCircle2,
  Clock,
  Sparkles,
  Layers,
  HeartHandshake,
  Laptop,
  Briefcase,
  GraduationCap,
  ChevronRight,
  Shield,
  Stethoscope,
  Activity,
  FileText,
} from 'lucide-react';

interface HomeScreenProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="w-full flex flex-col bg-[#f7f9fb]">
      {/* 1. Hero Section */}
      <section className="relative w-full bg-[#003441] text-white overflow-hidden py-16 lg:py-24">
        {/* Subtle grid pattern */}
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
              <span>FISIOTERAPIA BASADA EN EVIDENCIA · ZAPOPAN, JALISCO</span>
            </div>

            <h1 className="font-['Space_Grotesk'] text-3xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              Acción profesional con compromiso humano:{' '}
              <span className="text-[#98f0ff]">Fisioterapia para el mundo.</span>
            </h1>

            <p className="text-base sm:text-lg text-white/85 mb-8 leading-relaxed">
              Fisioaleph conecta la excelencia clínica asistencial de{' '}
              <strong className="text-white font-semibold">Centros Recuperat</strong> con tecnología
              clínica orientada a la recuperación funcional de precisión y seguimiento terapéutico continuo en Zapopan.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 h-12 px-6 rounded-lg bg-[#006874] text-white hover:bg-[#5ce9fe] hover:text-[#001f24] font-semibold text-sm transition-all shadow-md cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Cita en Clínica</span>
              </button>

              <button
                onClick={() => {
                  onNavigate('planes-saas');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 h-12 px-6 rounded-lg bg-white/10 hover:bg-white/20 text-[#98f0ff] font-semibold text-sm transition-colors cursor-pointer"
              >
                <Laptop className="w-4 h-4" />
                <span>Explorar Planes SaaS</span>
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-10 mt-10 border-t border-white/10">
              <div>
                <span className="block font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white">
                  2 Sedes
                </span>
                <span className="text-xs text-[#c7eae1]">Zapopan, Jalisco</span>
              </div>
              <div>
                <span className="block font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white">
                  99.4%
                </span>
                <span className="text-xs text-[#c7eae1]">Apego a Protocolos ROM</span>
              </div>
              <div>
                <span className="block font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white">
                  COFEPRIS
                </span>
                <span className="text-xs text-[#c7eae1]">Regulación Sanitaria</span>
              </div>
            </div>
          </div>

          {/* Hero Image Card */}
          <div className="w-full lg:max-w-md">
            <div className="bg-white rounded-2xl p-4 shadow-2xl border border-white/10 text-[#191c1e] relative overflow-hidden">
              <div className="rounded-xl overflow-hidden h-64 bg-[#eceef0] relative mb-4">
                <img
                  src="/src/assets/images/hero_clinic_rehab_1790297933862.jpg"
                  alt="Instalaciones clínicas de Fisioaleph Recuperat en Zapopan"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-[#003441]/90 backdrop-blur-sm text-white px-3 py-1 rounded-md text-xs font-semibold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#5ce9fe]" />
                  <span>Centros Recuperat · Zapopan</span>
                </div>
              </div>

              <div className="p-2 space-y-3">
                <div className="flex items-center justify-between text-xs text-[#555555]">
                  <span className="font-semibold text-[#003441]">Monitoreo Fisioterapéutico</span>
                  <span className="font-['JetBrains_Mono'] text-[#006874] font-bold">Rango ROM</span>
                </div>
                <div className="w-full bg-[#eceef0] h-2 rounded-full overflow-hidden">
                  <div className="bg-[#006874] h-full rounded-full" style={{ width: '92%' }}></div>
                </div>
                <div className="flex items-center justify-between pt-1 text-[11px] text-[#70787c]">
                  <span>Evaluación Inicial</span>
                  <span className="font-semibold text-[#003441]">Alta Funcional</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Value Proposition Strip */}
      <section className="w-full py-16 bg-white border-b border-[#e0e3e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-['JetBrains_Mono'] font-bold text-[#006874] tracking-widest uppercase">
              INTEGRACIÓN CLÍNICA &amp; SALUD EN MOVIMIENTO
            </span>
            <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#262b38] mt-2">
              Cómo la Fisioterapia Especializada Transforma Vidas
            </h2>
            <p className="text-sm sm:text-base text-[#555555] mt-2">
              Fisioaleph unifica la evaluación diagnóstica, la modulación tisular y el fortalecimiento estructurado para una recuperación definitiva.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[#f2f4f6] border border-[#e0e3e5] flex flex-col justify-between">
              <div>
                <span className="font-['Space_Grotesk'] text-2xl font-bold text-[#006874] block mb-2">
                  01
                </span>
                <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[#003441] mb-2">
                  Optimización Tisular
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  Aceleración y modulación del proceso de cicatrización fisiológica mediante protocolos combinados de electroterapia, ultrasonido focalizado y mecanotransducción celular.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#f2f4f6] border border-[#e0e3e5] flex flex-col justify-between">
              <div>
                <span className="font-['Space_Grotesk'] text-2xl font-bold text-[#006874] block mb-2">
                  02
                </span>
                <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[#003441] mb-2">
                  Recuperación ROM &amp; Fuerza
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  Restauración de rangos de movimiento funcionales, readaptación de sinergias neuromusculares y fortalecimiento muscular medido progresivamente.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#f2f4f6] border border-[#e0e3e5] flex flex-col justify-between">
              <div>
                <span className="font-['Space_Grotesk'] text-2xl font-bold text-[#006874] block mb-2">
                  03
                </span>
                <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[#003441] mb-2">
                  Prevención y Patología Crónica
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  Abordaje interdisciplinario en afecciones degenerativas articulares, columna vertebral y síndromes musculoesqueléticos derivados de la sobrecarga postural o deportiva.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Las 5 Divisiones Estratégicas */}
      <section className="w-full py-16 bg-[#f7f9fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-['JetBrains_Mono'] font-bold text-[#006874] tracking-widest uppercase">
              ARQUITECTURA CLÍNICA
            </span>
            <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#262b38] mt-2">
              Las 5 Divisiones de Fisioaleph
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Division 1 */}
            <div className="bg-white p-6 rounded-xl border border-[#e0e3e5] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-['JetBrains_Mono'] font-bold text-[#006874] uppercase">
                    División 01 · Asistencial
                  </span>
                  <Activity className="w-5 h-5 text-[#003441]" />
                </div>
                <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[#003441] mb-2">
                  Recuperat Fisioterapia &amp; Rehabilitación
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed mb-4">
                  Centros de atención ambulatoria en Zapopan (Valle Imperial y Paseo Sendas). Fisioterapia ortopédica, postquirúrgica y readaptación física integral.
                </p>
              </div>
              <button
                onClick={() => {
                  onNavigate('clinicas');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-semibold text-[#006874] hover:text-[#003441] flex items-center gap-1 cursor-pointer pt-3 border-t border-[#eceef0]"
              >
                <span>Ver Sedes en Zapopan</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Division 2 */}
            <div className="bg-white p-6 rounded-xl border border-[#e0e3e5] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-['JetBrains_Mono'] font-bold text-[#006874] uppercase">
                    División 02 · SaaS Clínico
                  </span>
                  <Laptop className="w-5 h-5 text-[#003441]" />
                </div>
                <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[#003441] mb-2">
                  FisioSinapsis Neuro-Rehab SaaS
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed mb-4">
                  Software en la nube para expedientes clínicos conformes a la NOM-024-SSA3, prescripción de ejercicios y seguimiento de rangos de movimiento (ROM).
                </p>
              </div>
              <button
                onClick={() => {
                  onNavigate('planes-saas');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-semibold text-[#006874] hover:text-[#003441] flex items-center gap-1 cursor-pointer pt-3 border-t border-[#eceef0]"
              >
                <span>Conoce los Planes</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Division 3 */}
            <div className="bg-white p-6 rounded-xl border border-[#e0e3e5] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-['JetBrains_Mono'] font-bold text-[#006874] uppercase">
                    División 03 · Ocupacional
                  </span>
                  <Briefcase className="w-5 h-5 text-[#003441]" />
                </div>
                <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[#003441] mb-2">
                  Fisioterapia Laboral &amp; Ergonomía
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed mb-4">
                  Prevención de desórdenes musculoesqueléticos en empresas, evaluación ergonómica y asesoría en cumplimiento NOM-035 y NOM-036-1-STPS.
                </p>
              </div>
              <button
                onClick={() => {
                  onNavigate('servicios');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-semibold text-[#006874] hover:text-[#003441] flex items-center gap-1 cursor-pointer pt-3 border-t border-[#eceef0]"
              >
                <span>Ver Servicios B2B</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Division 4 */}
            <div className="bg-white p-6 rounded-xl border border-[#e0e3e5] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-['JetBrains_Mono'] font-bold text-[#006874] uppercase">
                    División 04 · Social
                  </span>
                  <HeartHandshake className="w-5 h-5 text-[#003441]" />
                </div>
                <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[#003441] mb-2">
                  FisioSocial Red Comunitaria
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed mb-4">
                  Programa de impacto comunitario directo: brigadas geriátricas y subsidios terapéuticos para pacientes y familias con vulnerabilidad económica.
                </p>
              </div>
              <button
                onClick={() => {
                  onNavigate('conocenos');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-semibold text-[#006874] hover:text-[#003441] flex items-center gap-1 cursor-pointer pt-3 border-t border-[#eceef0]"
              >
                <span>Conoce el Impacto</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Division 5 */}
            <div className="bg-white p-6 rounded-xl border border-[#e0e3e5] shadow-sm flex flex-col justify-between lg:col-span-2">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-['JetBrains_Mono'] font-bold text-[#006874] uppercase">
                    División 05 · Academia Médica
                  </span>
                  <GraduationCap className="w-5 h-5 text-[#003441]" />
                </div>
                <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[#003441] mb-2">
                  AlphaDigitalFisio Academia de Formación Continua
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed mb-4">
                  Campus virtual para profesionales y terapeutas: diplomados de especialización en rehabilitación funcional, evidencia clínica y escalas estandarizadas con valor curricular.
                </p>
              </div>
              <button
                onClick={() => {
                  onNavigate('biblioteca-digital');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-semibold text-[#006874] hover:text-[#003441] flex items-center gap-1 cursor-pointer pt-3 border-t border-[#eceef0]"
              >
                <span>Explorar Biblioteca &amp; Cursos</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECCIÓN EXACTA OBLIGATORIA: METODOLOGÍA CLÍNICA */}
      <MethodologySection />

      {/* 5. Instalaciones de Alta Gama (Con los textos profesionales requeridos) */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-['JetBrains_Mono'] font-bold text-[#006874] tracking-widest uppercase">
                ESTÁNDARES DE EXCELENCIA ESPACIAL
              </span>
              <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#262b38] mt-2">
                Instalaciones Clínicas en Zapopan
              </h2>
            </div>
            <button
              onClick={() => {
                onNavigate('clinicas');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-sm font-semibold text-[#006874] hover:text-[#003441] flex items-center gap-1.5 cursor-pointer"
            >
              <span>Ver ambas sedes a detalle</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Facility 1: Mesa de Canabé */}
            <div className="bg-[#f7f9fb] rounded-xl overflow-hidden border border-[#e0e3e5]">
              <div className="h-48 bg-[#eceef0] overflow-hidden">
                <img
                  src="/src/assets/images/treatment_canabe_table_1790297972722.jpg"
                  alt="Mesa de Canabé de alta precisión"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-['Space_Grotesk'] text-base font-bold text-[#003441] mb-1">
                  Mesa de Canabé de alta precisión
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Superficies ergonómicas ajustables con diseño multiposición para abordajes precisos de terapia manual, descompresión y movilización asistida.
                </p>
              </div>
            </div>

            {/* Facility 2: Consultorios privados */}
            <div className="bg-[#f7f9fb] rounded-xl overflow-hidden border border-[#e0e3e5]">
              <div className="h-48 bg-[#eceef0] overflow-hidden">
                <img
                  src="/src/assets/images/clinic_valle_imperial_1790297944269.jpg"
                  alt="Consultorios privados completamente equipados"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-['Space_Grotesk'] text-base font-bold text-[#003441] mb-1">
                  Consultorios privados completamente equipados
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Espacios de máxima confidencialidad para interconsulta médica, valoración funcional integral y expedientes digitales bajo la NOM-024-SSA3.
                </p>
              </div>
            </div>

            {/* Facility 3: Ultrasonido y electroterapia */}
            <div className="bg-[#f7f9fb] rounded-xl overflow-hidden border border-[#e0e3e5]">
              <div className="h-48 bg-[#eceef0] overflow-hidden">
                <img
                  src="/src/assets/images/ultrasound_therapy_1790297963160.jpg"
                  alt="Equipo de ultrasonido y electroterapia de última generación"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-['Space_Grotesk'] text-base font-bold text-[#003441] mb-1">
                  Equipo de ultrasonido y electroterapia de última generación
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Generadores multifrecuencia calibrados, microcorrientes analgésicas y diatermia de contacto para aceleración de la cicatrización tisular.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Equipo Médico Titular (Sin Dr. Luis Ruelas) */}
      <section className="w-full py-16 bg-[#f2f4f6] border-t border-[#e0e3e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-['JetBrains_Mono'] font-bold text-[#006874] tracking-widest uppercase">
              CUERPO CLÍNICO
            </span>
            <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#262b38] mt-2">
              Equipo Médico Titular de las Clínicas
            </h2>
            <p className="text-xs sm:text-sm text-[#555555] mt-2">
              Especialistas colegiados con cédula profesional federal y práctica clínica basada en evidencia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CLINICAL_TEAM.map((doctor) => (
              <div
                key={doctor.name}
                className="bg-white rounded-xl p-5 border border-[#e0e3e5] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 rounded-full bg-[#003441] text-[#98f0ff] flex items-center justify-center font-bold text-xl mb-4 mx-auto">
                    {doctor.name.split(' ')[1]?.[0] || 'D'}
                  </div>
                  <h3 className="font-['Space_Grotesk'] text-sm font-bold text-[#003441] text-center mb-1">
                    {doctor.name}
                  </h3>
                  <span className="block text-[11px] font-['JetBrains_Mono'] text-[#006874] font-semibold text-center uppercase mb-2">
                    {doctor.role}
                  </span>
                  <span className="block text-[10px] text-[#70787c] text-center mb-3">
                    {doctor.credentials}
                  </span>
                  <p className="text-xs text-[#555555] leading-relaxed text-center">
                    {doctor.bio}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#eceef0] text-center">
                  <span className="text-[11px] font-semibold text-[#003441] bg-[#f2f4f6] px-2.5 py-1 rounded-full">
                    {doctor.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA Strip */}
      <section className="w-full py-16 bg-[#003441] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Space_Grotesk'] text-2xl sm:text-4xl font-bold mb-4">
            Inicia tu Proceso de Recuperación en Zapopan
          </h2>
          <p className="text-sm sm:text-base text-white/85 mb-8 max-w-2xl mx-auto leading-relaxed">
            Atención personalizada en Clínicas Recuperat con valoración inicial objetiva, protocolos estandarizados y cubículos privados.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="h-12 px-8 rounded-lg bg-[#5ce9fe] text-[#001f24] font-bold text-sm hover:bg-[#98f0ff] transition-colors shadow-lg cursor-pointer"
            >
              Agendar en Sede Valle Imperial o Paseo Sendas
            </button>
            <a
              href="tel:+523396886699"
              className="h-12 px-6 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-sm flex items-center gap-2 transition-colors"
            >
              <span>Llamar al (33) 9688-6699</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
