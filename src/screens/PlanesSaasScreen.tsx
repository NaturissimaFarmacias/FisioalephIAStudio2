import React, { useState } from 'react';
import { PageId } from '../types';
import {
  Check,
  Calendar,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Laptop,
  Building,
  Users,
  ShieldCheck,
  FileText,
  Clock,
  Sparkles,
  ArrowRight,
  Phone,
} from 'lucide-react';

interface PlanesSaasScreenProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const PlanesSaasScreen: React.FC<PlanesSaasScreenProps> = ({ onNavigate, onOpenBooking }) => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: '¿Cómo funciona la migración de expedientes si ya utilizo otra plataforma o papel?',
      a: 'Fisioaleph incluye un asistente guiado de importación en formato CSV/Excel y plantillas clínicas preconfiguradas bajo la NOM-024-SSA3. Nuestro equipo técnico asiste en la carga inicial de expedientes sin costo en planes Equipo y Clínica.',
    },
    {
      q: '¿Existe algún periodo de prueba para los planes profesionales y clínicos?',
      a: 'Sí, ofrecemos 14 días de prueba gratuita con acceso completo a las funciones de evaluación funcional, expedientes electrónicos y emisión de recetas digitales.',
    },
    {
      q: '¿Qué sucede si excedo el número de historias clínicas activas de mi plan?',
      a: 'Puedes agregar paquetes adicionales de historias clínicas o escalar a un plan superior en cualquier momento con ajuste proporcional a tu factura.',
    },
    {
      q: '¿La plataforma cumple con las inspecciones sanitarias de COFEPRIS?',
      a: 'Totalmente. FisioSinapsis está programado para cumplir con la NOM-024-SSA3 de registros electrónicos para la salud y los estándares de seguridad de datos de la LFPDPPP.',
    },
    {
      q: '¿Cómo se adquiere el módulo complementario de Página Web para mi clínica?',
      a: 'Puedes solicitarlo directamente desde tu panel de usuario o comunicándote con nuestro equipo de consultoría técnica para recibir una propuesta adaptada a la identidad de tu centro.',
    },
  ];

  return (
    <div className="w-full flex flex-col bg-[#f7f9fb]">
      {/* 1. Hero Title & Billing Selector */}
      <section className="w-full pt-16 pb-12 bg-white border-b border-[#e0e3e5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-['JetBrains_Mono'] font-bold text-[#006874] tracking-widest uppercase">
            FISIOSINAPSIS · PLATAFORMA CLÍNICA
          </span>
          <h1 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#262b38] mt-3 mb-4 leading-tight">
            Gestión clínica de precisión diseñada para terapeutas y centros de alta demanda.
          </h1>
          <p className="text-sm sm:text-base text-[#555555] max-w-2xl mx-auto mb-8">
            Expediente clínico electrónico conforme a la NOM-024-SSA3, seguimiento de rangos de movimiento (ROM) y emisión de recetas médicas oficiales.
          </p>

          {/* Monthly / Annual toggle */}
          <div className="inline-flex items-center p-1 bg-[#eceef0] rounded-xl border border-[#c0c8cb]/50">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                !isAnnual ? 'bg-[#003441] text-white shadow-sm' : 'text-[#555555] hover:text-[#003441]'
              }`}
            >
              Facturación Mensual
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                isAnnual ? 'bg-[#003441] text-white shadow-sm' : 'text-[#555555] hover:text-[#003441]'
              }`}
            >
              <span>Facturación Anual</span>
              <span className="bg-[#5ce9fe] text-[#001f24] text-[10px] px-2 py-0.5 rounded-full font-bold">
                2 Meses Gratis
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Pricing Cards: ONLY Professional, Team, Clinic (NO Plan Paciente per user rule) */}
      <section className="w-full py-16 bg-[#f7f9fb]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plan 1: Profesional */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e0e3e5] shadow-sm flex flex-col justify-between hover:border-[#006874] transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-['JetBrains_Mono'] text-[#006874] font-bold uppercase tracking-wider">
                    ESPECIALISTA INDEPENDIENTE
                  </span>
                  <Users className="w-5 h-5 text-[#006874]" />
                </div>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#003441] mb-1">
                  Profesional
                </h3>
                <p className="text-xs text-[#555555] mb-6">
                  Para terapeutas independientes y consultorios privados en crecimiento.
                </p>

                <div className="mb-6 pb-6 border-b border-[#eceef0]">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold font-['Space_Grotesk'] text-[#003441]">
                      ${isAnnual ? '169' : '199'}
                    </span>
                    <span className="text-xs text-[#70787c]">MXN / mes</span>
                  </div>
                  <span className="text-xs font-semibold text-[#006874] block mt-1">
                    Hasta 25 historias clínicas activas
                  </span>
                </div>

                <div className="space-y-3 mb-8">
                  <span className="text-[11px] font-bold text-[#003441] uppercase block">
                    Incluye en Plataforma:
                  </span>
                  <div className="flex items-start gap-2.5 text-xs text-[#555555]">
                    <Check className="w-4 h-4 text-[#006874] shrink-0 mt-0.5" />
                    <span>Evaluación clínica funcional y protocolos ortopédicos estandarizados</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#555555]">
                    <Check className="w-4 h-4 text-[#006874] shrink-0 mt-0.5" />
                    <span>Emisión de recetas oficiales con firma electrónica e indicaciones</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#555555]">
                    <Check className="w-4 h-4 text-[#006874] shrink-0 mt-0.5" />
                    <span>Órdenes de imagenología y laboratorios con seguimiento directo</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#555555]">
                    <Check className="w-4 h-4 text-[#006874] shrink-0 mt-0.5" />
                    <span>Pruebas de Rango de Movimiento (ROM) integradas a gráficas de evolución</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#555555]">
                    <Check className="w-4 h-4 text-[#006874] shrink-0 mt-0.5" />
                    <span>Acceso a Biblioteca Digital Fisioaleph con +500 casos clínicos</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  onNavigate('contacto');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-3 rounded-lg bg-[#003441] text-white hover:bg-[#0f4c5c] font-semibold text-xs transition-colors cursor-pointer"
              >
                Elegir Profesional
              </button>
            </div>

            {/* Plan 2: Equipo */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e0e3e5] shadow-sm flex flex-col justify-between hover:border-[#006874] transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-['JetBrains_Mono'] text-[#006874] font-bold uppercase tracking-wider">
                    MULTI-TERAPEUTA
                  </span>
                  <Building className="w-5 h-5 text-[#006874]" />
                </div>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#003441] mb-1">
                  Plan Equipo
                </h3>
                <p className="text-xs text-[#555555] mb-6">
                  Para consultorios compartidos y gabinetes en expansión multidisciplinaria.
                </p>

                <div className="mb-6 pb-6 border-b border-[#eceef0]">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold font-['Space_Grotesk'] text-[#003441]">
                      ${isAnnual ? '499' : '599'}
                    </span>
                    <span className="text-xs text-[#70787c]">MXN / mes</span>
                  </div>
                  <span className="text-xs font-semibold text-[#006874] block mt-1">
                    Hasta 75 historias clínicas integradas
                  </span>
                </div>

                <div className="space-y-3 mb-8">
                  <span className="text-[11px] font-bold text-[#003441] uppercase block">
                    Todo lo de Profesional más:
                  </span>
                  <div className="flex items-start gap-2.5 text-xs text-[#555555]">
                    <Check className="w-4 h-4 text-[#006874] shrink-0 mt-0.5" />
                    <span>Protocolos colaborativos multi-terapeuta y bitácora clínica unificada</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#555555]">
                    <Check className="w-4 h-4 text-[#006874] shrink-0 mt-0.5" />
                    <span>Órdenes diagnósticas ilimitadas sin restricción de descarga</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#555555]">
                    <Check className="w-4 h-4 text-[#006874] shrink-0 mt-0.5" />
                    <span>Gestión sincronizada de salas de rehabilitación y box de tratamiento</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#555555]">
                    <Check className="w-4 h-4 text-[#006874] shrink-0 mt-0.5" />
                    <span>Asignación de pacientes cruzados entre fisioterapeutas del centro</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#555555]">
                    <Check className="w-4 h-4 text-[#006874] shrink-0 mt-0.5" />
                    <span>Hasta 3 accesos concurrentes para terapeutas con roles</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  onNavigate('contacto');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-3 rounded-lg bg-[#006874] text-white hover:bg-[#003441] font-semibold text-xs transition-colors cursor-pointer"
              >
                Elegir Equipo
              </button>
            </div>

            {/* Plan 3: Clínica & Centros (MÁS POPULAR) */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#006874] shadow-xl flex flex-col justify-between relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#003441] text-[#98f0ff] px-4 py-1 rounded-full text-[10px] font-['JetBrains_Mono'] font-bold uppercase tracking-wider">
                ★ MÁS POPULAR · MÁXIMO RENDIMIENTO
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-['JetBrains_Mono'] text-[#006874] font-bold uppercase tracking-wider">
                    CENTRO INTEGRAL
                  </span>
                  <Building className="w-5 h-5 text-[#006874]" />
                </div>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#003441] mb-1">
                  Clínica &amp; Centros
                </h3>
                <p className="text-xs text-[#555555] mb-6">
                  Gestión total para clínicas con múltiples gabinetes y requerimientos hospitalarios.
                </p>

                <div className="mb-6 pb-6 border-b border-[#eceef0]">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold font-['Space_Grotesk'] text-[#003441]">
                      ${isAnnual ? '629' : '749'}
                    </span>
                    <span className="text-xs text-[#70787c]">MXN / mes</span>
                  </div>
                  <span className="text-xs font-semibold text-[#006874] block mt-1">
                    Hasta 100 historias clínicas integradas
                  </span>
                </div>

                <div className="space-y-3 mb-8">
                  <span className="text-[11px] font-bold text-[#003441] uppercase block">
                    Capacidades Hospitalarias:
                  </span>
                  <div className="flex items-start gap-2.5 text-xs text-[#555555]">
                    <Check className="w-4 h-4 text-[#006874] shrink-0 mt-0.5" />
                    <span>Panel multi-usuario con roles diferenciados: Director, Terapeuta, Asistente y Caja</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#555555]">
                    <Check className="w-4 h-4 text-[#006874] shrink-0 mt-0.5" />
                    <span>Cumplimiento estricto NOM-024-SSA3 para inspecciones y expedientes oficiales</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#555555]">
                    <Check className="w-4 h-4 text-[#006874] shrink-0 mt-0.5" />
                    <span>Biblioteca Digital Fisioaleph con acceso prioritario y material continuo</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#555555]">
                    <Check className="w-4 h-4 text-[#006874] shrink-0 mt-0.5" />
                    <span>Exportación masiva cifrada de expedientes y analítica de productividad del personal</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#555555]">
                    <Check className="w-4 h-4 text-[#006874] shrink-0 mt-0.5" />
                    <span>Soporte técnico preferencial 24/7 y asistencia en migraciones</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  onNavigate('contacto');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-3 rounded-lg bg-[#006874] text-white hover:bg-[#5ce9fe] hover:text-[#001f24] font-bold text-xs transition-colors cursor-pointer shadow-md"
              >
                Comenzar con Clínica
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Normativa NOM-024-SSA3 Banner (NO "Auditable", NO ISO) */}
      <section className="w-full py-12 bg-white border-y border-[#e0e3e5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-['JetBrains_Mono'] font-bold text-[#006874] tracking-widest uppercase">
              ARQUITECTURA CLÍNICA NORMATIVA
            </span>
            <h3 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold text-[#262b38] mt-1 mb-2">
              Diseñado conforme a NOM-024-SSA3 y LFPDPPP
            </h3>
            <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
              Tu expediente no es una simple hoja de cálculo. FisioSinapsis implementa criptografía de grado médico con trazabilidad por código en cada evolución motriz y prescripción, garantizando blindaje legal en Jalisco y todo México.
            </p>
          </div>
          <div className="flex items-center gap-4 bg-[#f2f4f6] p-4 rounded-xl border border-[#e0e3e5] shrink-0">
            <div className="w-14 h-14 rounded-full bg-[#003441] text-[#5ce9fe] flex items-center justify-center font-['Space_Grotesk'] font-bold text-lg">
              99.4%
            </div>
            <div>
              <span className="text-xs font-bold text-[#003441] block">Disponibilidad SLA</span>
              <span className="text-[11px] text-[#555555]">Servidores en alta concurrencia · Cero pérdida de datos</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Módulo complementario: Página Web Propia
          RULE: "Eliminar todo lo relacionado con: tienda en línea, promociones dinámicas y portal del paciente" */}
      <section className="w-full py-16 bg-[#f7f9fb]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#e0e3e5] shadow-sm flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl">
              <span className="text-[11px] font-['JetBrains_Mono'] text-[#006874] font-bold uppercase tracking-wider block mb-2">
                MÓDULO COMPLEMENTARIO DE ALTO IMPACTO
              </span>
              <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#003441] mb-3">
                Integra una Página Web Propia para tu Consultorio o Clínica
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-6">
                Convierte a los pacientes que buscan rehabilitación en tu localidad en citas confirmadas dentro de tu panel SaaS. Desarrollamos tu sitio oficial con identidad visual médica e integración bilateral instantánea.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#006874] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#003441] block">Publica Servicios Médicos</span>
                    <span className="text-[11px] text-[#555555]">Detalla terapias de columna, readaptación y traumatología.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#006874] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#003441] block">Agenda Citas en Tiempo Real</span>
                    <span className="text-[11px] text-[#555555]">Sincronización bilateral con el calendario de tu agenda.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#006874] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#003441] block">Catálogo de Órtesis &amp; Servicios</span>
                    <span className="text-[11px] text-[#555555]">Muestra rodilleras, bandas elásticas y plantillas ortopédicas.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#006874] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#003441] block">Registro de Pacientes</span>
                    <span className="text-[11px] text-[#555555]">Crea automáticamente la pre-ficha de ingreso antes de su primera sesión.</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => {
                    onNavigate('contacto');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="h-10 px-5 rounded-lg bg-[#003441] text-white font-semibold text-xs hover:bg-[#0f4c5c] transition-colors cursor-pointer"
                >
                  Pregunta por Presupuesto Web
                </button>
                <span className="text-xs text-[#70787c]">
                  Dominio personalizado + Hosting SSL incluido
                </span>
              </div>
            </div>

            <div className="w-full lg:w-80 rounded-xl overflow-hidden shadow-md border border-[#e0e3e5]">
              <img
                src="/src/assets/images/clinic_valle_imperial_1790297944269.jpg"
                alt="Diseño web clínico para consultorio"
                className="w-full h-48 object-cover"
              />
              <div className="bg-[#f2f4f6] p-4 text-center">
                <span className="text-xs font-semibold text-[#003441]">Diseño adaptado para móviles, tabletas y computadoras</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Matriz Comparativa Técnica (NO "Auditable", NO ISO) */}
      <section className="w-full py-16 bg-white border-b border-[#e0e3e5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-['JetBrains_Mono'] font-bold text-[#006874] tracking-widest uppercase">
              MATRIZ DETALLADA
            </span>
            <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#262b38] mt-1">
              Comparativa Técnica y Normativa
            </h3>
            <p className="text-xs text-[#555555] mt-1">
              Todas las funciones analizadas bajo los requerimientos clínicos y regulatorios mexicanos.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-[#c0c8cb] bg-[#f2f4f6] text-[#003441]">
                  <th className="p-3.5 font-bold uppercase tracking-wider">Capacidad Clínica</th>
                  <th className="p-3.5 font-bold uppercase tracking-wider text-center">Profesional</th>
                  <th className="p-3.5 font-bold uppercase tracking-wider text-center">Equipo</th>
                  <th className="p-3.5 font-bold uppercase tracking-wider text-center bg-[#c7eae1]/40 text-[#003441]">
                    Clínica &amp; Centros
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eceef0]">
                <tr>
                  <td className="p-3.5 font-semibold text-[#003441]">Historias Clínicas Activas</td>
                  <td className="p-3.5 text-center text-[#555555]">Hasta 25</td>
                  <td className="p-3.5 text-center text-[#555555]">Hasta 75</td>
                  <td className="p-3.5 text-center font-bold text-[#003441] bg-[#c7eae1]/10">Hasta 100 integradas</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-[#003441]">Emisión de Recetas y Órdenes Digitales</td>
                  <td className="p-3.5 text-center text-[#006874] font-bold">✓</td>
                  <td className="p-3.5 text-center text-[#006874] font-bold">✓</td>
                  <td className="p-3.5 text-center text-[#006874] font-bold bg-[#c7eae1]/10">✓</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-[#003441]">Módulo de Pruebas de Rango de Movimiento (ROM)</td>
                  <td className="p-3.5 text-center text-[#006874] font-bold">✓</td>
                  <td className="p-3.5 text-center text-[#006874] font-bold">✓</td>
                  <td className="p-3.5 text-center text-[#006874] font-bold bg-[#c7eae1]/10">✓</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-[#003441]">Biblioteca Digital Fisioaleph</td>
                  <td className="p-3.5 text-center text-[#555555]">Acceso Estándar</td>
                  <td className="p-3.5 text-center text-[#555555]">Acceso Ilimitado</td>
                  <td className="p-3.5 text-center font-bold text-[#003441] bg-[#c7eae1]/10">Prioritario + Casos Avanzados</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-[#003441]">Roles de Usuario (Director, Terapeuta, Recepción)</td>
                  <td className="p-3.5 text-center text-[#555555]">1 usuario</td>
                  <td className="p-3.5 text-center text-[#555555]">Hasta 3 terapeutas</td>
                  <td className="p-3.5 text-center font-bold text-[#003441] bg-[#c7eae1]/10">Ilimitados con jerarquía</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-[#003441]">Conformidad NOM-024-SSA3 (Expediente Electrónico)</td>
                  <td className="p-3.5 text-center text-[#006874] font-bold">✓</td>
                  <td className="p-3.5 text-center text-[#006874] font-bold">✓</td>
                  <td className="p-3.5 text-center text-[#006874] font-bold bg-[#c7eae1]/10">Cumplimiento Oficial COFEPRIS</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-[#003441]">Blindaje LFPDPPP (Datos Personales Sensibles)</td>
                  <td className="p-3.5 text-center text-[#006874] font-bold">✓</td>
                  <td className="p-3.5 text-center text-[#006874] font-bold">✓</td>
                  <td className="p-3.5 text-center text-[#006874] font-bold bg-[#c7eae1]/10">Certificado SSL + Cifrado AES-256</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-[#003441]">Nivel de Soporte Técnico</td>
                  <td className="p-3.5 text-center text-[#555555]">Ticket &amp; Correo</td>
                  <td className="p-3.5 text-center text-[#555555]">Horario Hábil Directo</td>
                  <td className="p-3.5 text-center font-bold text-[#003441] bg-[#c7eae1]/10">Dedicado 24/7 + WhatsApp VIP</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. FAQ Accordion */}
      <section className="w-full py-16 bg-[#f7f9fb]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-['JetBrains_Mono'] font-bold text-[#006874] tracking-widest uppercase">
              RESOLUCIÓN DE DUDAS
            </span>
            <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#262b38] mt-1">
              Preguntas Frecuentes
            </h3>
            <p className="text-xs text-[#555555] mt-1">
              Claridad total sobre la migración clínica, cobro de licencias y normativas.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#e0e3e5] overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-[#003441] hover:text-[#006874] cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#006874] shrink-0" />
                    {faq.q}
                  </span>
                  {expandedFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-[#70787c]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#70787c]" />
                  )}
                </button>
                {expandedFaq === idx && (
                  <div className="px-4 pb-4 pt-1 text-xs text-[#555555] leading-relaxed border-t border-[#eceef0]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <section className="w-full py-16 bg-[#003441] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-['JetBrains_Mono'] text-[#5ce9fe] font-bold uppercase tracking-wider block mb-2">
            EMPIEZA HOY TU TRANSFORMACIÓN DIGITAL
          </span>
          <h2 className="font-['Space_Grotesk'] text-2xl sm:text-4xl font-bold mb-4">
            ¿Listo para operar con el estándar clínico Fisioaleph?
          </h2>
          <p className="text-xs sm:text-sm text-white/80 mb-8 max-w-xl mx-auto leading-relaxed">
            Estandariza tu clínica, reduce 80% el tiempo invertido en notas médicas y entrega una experiencia moderna a tus pacientes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                onNavigate('contacto');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="h-11 px-6 rounded-lg bg-[#5ce9fe] text-[#001f24] font-bold text-xs hover:bg-[#98f0ff] transition-colors shadow-lg cursor-pointer"
            >
              Agendar Demostración Guiada
            </button>
            <a
              href="tel:+523396886699"
              className="h-11 px-6 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs flex items-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>33 9688-6699</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
