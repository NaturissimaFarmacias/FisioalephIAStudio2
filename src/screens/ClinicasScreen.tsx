import React, { useState } from 'react';
import { PageId } from '../types';
import { CLINICAL_TEAM, CLINIC_LOCATIONS } from '../data/clinicalData';
import {
  MapPin,
  Clock,
  Phone,
  Calendar,
  CheckCircle2,
  Building,
  Navigation,
  Shield,
  Stethoscope,
  Activity,
  Heart,
  Car,
  FileText,
  Accessibility,
} from 'lucide-react';

interface ClinicasScreenProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const ClinicasScreen: React.FC<ClinicasScreenProps> = ({ onOpenBooking }) => {
  const [selectedClinicTab, setSelectedClinicTab] = useState<'valle' | 'sendas'>('valle');

  const valleClinic = CLINIC_LOCATIONS.find((c) => c.id === 'valle-imperial')!;
  const sendasClinic = CLINIC_LOCATIONS.find((c) => c.id === 'paseo-sendas')!;

  return (
    <div className="w-full flex flex-col bg-[#f7f9fb]">
      {/* 1. ESTRUCTURA REQUERIDA PARTE A:
          "Primero mostrar un bloque conjunto con la información común de ambas clínicas."
          (Eliminando completamente "capacidad instalada", "cubículos acústicos", ISO y "auditoría") */}
      <section className="w-full py-16 bg-[#003441] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 text-xs text-[#c7eae1] mb-6">
            <span className="font-['JetBrains_Mono']">RED ASISTENCIAL RECUPERAT · ZAPOPAN, JALISCO</span>
            <span>•</span>
            <span className="text-[#5ce9fe] font-semibold">2 SEDES OPERATIVAS HABILITADAS</span>
            <span>•</span>
            <span className="font-['JetBrains_Mono']">REGISTRO COFEPRIS CL-14-120-JAL</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <span className="text-xs font-['JetBrains_Mono'] font-bold text-[#5ce9fe] tracking-widest uppercase">
                INFRAESTRUCTURA MÉDICA DE PRECISIÓN EN ZAPOPAN
              </span>
              <h1 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mt-2 mb-4 leading-tight">
                Centros Clínicos Recuperat: Red Asistencial en Zapopan
              </h1>
              <p className="text-sm sm:text-base text-white/85 leading-relaxed mb-6">
                Espacios diseñados para rehabilitación física integral, traumatología avanzada y fisioterapia ortopédica. Entornos asépticos con calibración electromédica de grado hospitalario y privacidad médica.
              </p>

              {/* Botones de acción rápida */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenBooking}
                  className="h-11 px-6 rounded-lg bg-[#5ce9fe] text-[#001f24] font-bold text-xs hover:bg-[#98f0ff] transition-colors shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Agendar Valoración Inicial</span>
                </button>
                <a
                  href="#sedes-individuales"
                  className="h-11 px-6 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Ver Fichas Específicas</span>
                </a>
              </div>
            </div>

            {/* Tarjeta de Métricas Homologadas (Sin "capacidad instalada", sin "cubículos acústicos", sin ISO) */}
            <div className="bg-[#0f4c5c] rounded-2xl p-6 border border-[#5ce9fe]/20 shadow-xl">
              <span className="text-[11px] font-['JetBrains_Mono'] text-[#c7eae1] font-bold uppercase tracking-wider block mb-3">
                INDICADORES CLÍNICOS UNIFICADOS
              </span>
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs text-white/80">Apego a Protocolo ROM</span>
                  <span className="font-['Space_Grotesk'] text-xl font-bold text-[#5ce9fe]">99.4%</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs text-white/80">Sedes en Zapopan</span>
                  <span className="font-['Space_Grotesk'] text-xl font-bold text-white">2 Clínicas</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/80">Esterilidad y Desinfección</span>
                  <span className="text-xs font-semibold text-[#c7eae1] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#5ce9fe]" />
                    Grado Hospitalario
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bloque Conjunto: INFORMACIÓN COMÚN DE AMBAS CLÍNICAS */}
          <div className="mt-12 pt-8 border-t border-white/15">
            <h2 className="font-['Space_Grotesk'] text-lg font-bold text-[#98f0ff] mb-4">
              Información Común de Nuestras Sedes en Zapopan
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                <div className="flex items-center gap-2 text-xs font-bold text-white mb-1.5">
                  <Accessibility className="w-4 h-4 text-[#5ce9fe]" />
                  <span>Accesibilidad Universal</span>
                </div>
                <p className="text-[11px] text-[#c7eae1] leading-relaxed">
                  Rampas para sillas de ruedas, elevador camillero y puertas amplias sin desniveles para pacientes con movilidad reducida.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                <div className="flex items-center gap-2 text-xs font-bold text-white mb-1.5">
                  <Car className="w-4 h-4 text-[#5ce9fe]" />
                  <span>Estacionamiento Exclusivo</span>
                </div>
                <p className="text-[11px] text-[#c7eae1] leading-relaxed">
                  Cajones preferenciales a pie de clínica en Valle Imperial y Paseo Sendas para abordaje rápido y seguro.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                <div className="flex items-center gap-2 text-xs font-bold text-white mb-1.5">
                  <Stethoscope className="w-4 h-4 text-[#5ce9fe]" />
                  <span>Cuerpo Médico Colegiado</span>
                </div>
                <p className="text-[11px] text-[#c7eae1] leading-relaxed">
                  Médicos y fisioterapeutas con cédula profesional federal y especialización en rehabilitación física musculoesquelética.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                <div className="flex items-center gap-2 text-xs font-bold text-white mb-1.5">
                  <FileText className="w-4 h-4 text-[#5ce9fe]" />
                  <span>Facturación Inmediata</span>
                </div>
                <p className="text-[11px] text-[#c7eae1] leading-relaxed">
                  Aceptación de todas las tarjetas bancarias, facturación electrónica CFDI 4.0 y documentación para aseguradoras de SGMM.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ESTRUCTURA REQUERIDA PARTE B:
          "Después mostrar por separado cada clínica (Clínicas Recuperat y Fichas Clínica) con su información específica restante.
           En Fichas Clínica: Eliminar 'gimnasio biomecánico', cambiar 'cubículos acústicos' por 'cubículos privados'." */}
      <section className="w-full py-16 bg-[#f7f9fb]" id="sedes-individuales">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-['JetBrains_Mono'] font-bold text-[#006874] tracking-widest uppercase">
              DIRECTORIO TERRITORIAL DE ZAPOPAN
            </span>
            <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#262b38] mt-1">
              Fichas Clínicas de Nuestras 2 Sedes Oficiales
            </h2>
            <p className="text-xs sm:text-sm text-[#555555] mt-1">
              Ubicaciones estratégicas para garantizar accesibilidad rápida desde la zona metropolitana norte y poniente.
            </p>
          </div>

          <div className="space-y-12">
            {/* SEDE 1: CLÍNICA VALLE IMPERIAL */}
            <div className="bg-white rounded-2xl border border-[#e0e3e5] shadow-sm overflow-hidden flex flex-col lg:flex-row">
              <div className="w-full lg:w-5/12 bg-[#eceef0] relative min-h-[280px]">
                <img
                  src="/src/assets/images/clinic_valle_imperial_1790297944269.jpg"
                  alt="Clínica Valle Imperial en Zapopan"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#003441] text-white px-3 py-1 rounded-md text-xs font-bold uppercase font-['JetBrains_Mono']">
                  SEDE VALLE IMPERIAL
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-[#003441]/90 backdrop-blur-sm text-white p-3 rounded-lg text-xs">
                  <span className="font-bold block">Clínica Valle Imperial</span>
                  <span className="text-[11px] text-[#c7eae1]">Centro de Fisioterapia &amp; Rehabilitación Avanzada</span>
                </div>
              </div>

              <div className="w-full lg:w-7/12 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-['JetBrains_Mono'] text-[#006874] font-bold uppercase flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-[#006874]" />
                      Zapopan Norponiente
                    </span>
                    <span className="text-[11px] font-semibold text-[#006874] bg-[#c7eae1]/50 px-2.5 py-0.5 rounded-full">
                      Servicio Activo
                    </span>
                  </div>

                  <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#003441] mb-2">
                    {valleClinic.name}
                  </h3>

                  <div className="bg-[#f7f9fb] p-3.5 rounded-xl border border-[#eceef0] text-xs text-[#555555] mb-6 space-y-1">
                    <div className="font-semibold text-[#003441]">{valleClinic.address}</div>
                    <div>{valleClinic.crossStreets}</div>
                    <div className="text-[11px] text-[#70787c]">{valleClinic.reference}</div>
                  </div>

                  {/* Módulos específicos restantes:
                      - ELIMINADO: "gimnasio biomecánico", "sensores inerciales"
                      - CAMBIADO: "cubículos acústicos" por "cubículos privados" */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                    <div className="p-3 bg-[#f2f4f6] rounded-lg border border-[#e0e3e5]">
                      <span className="font-bold text-xs text-[#003441] block mb-1">
                        Gimnasio Funcional
                      </span>
                      <p className="text-[11px] text-[#555555]">
                        Reeducación funcional con circuitos guiados de movilidad activa y fortalecimiento.
                      </p>
                    </div>

                    <div className="p-3 bg-[#f2f4f6] rounded-lg border border-[#e0e3e5]">
                      <span className="font-bold text-xs text-[#003441] block mb-1">
                        Consultorios Médicos
                      </span>
                      <p className="text-[11px] text-[#555555]">
                        Alta especialidad en ortopedia, fisiatría y diagnóstico musculoesquelético.
                      </p>
                    </div>

                    <div className="p-3 bg-[#f2f4f6] rounded-lg border border-[#e0e3e5]">
                      <span className="font-bold text-xs text-[#003441] block mb-1">
                        Cubículos Privados
                      </span>
                      <p className="text-[11px] text-[#555555]">
                        Privacidad total con electroanalgesia focalizada y termoterapia guiada.
                      </p>
                    </div>
                  </div>

                  {/* Horarios y contacto */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-4 border-t border-[#eceef0] mb-6">
                    <div>
                      <span className="font-bold text-[#003441] block mb-1">Horarios de Atención Clínica:</span>
                      <p className="text-[#555555]">Lunes a Viernes: {valleClinic.hoursWeekday}</p>
                      <p className="text-[#555555]">Sábados: {valleClinic.hoursSaturday}</p>
                    </div>
                    <div>
                      <span className="font-bold text-[#003441] block mb-1">Canales de Contacto Directo:</span>
                      <p className="text-[#555555]">Teléfono Fijo: <strong className="text-[#003441]">{valleClinic.phone}</strong></p>
                      <p className="text-[#555555]">WhatsApp: <strong className="text-[#003441]">{valleClinic.whatsapp}</strong></p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <span className="text-[11px] font-['JetBrains_Mono'] text-[#70787c]">
                    Código de Sede: {valleClinic.code}
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg border border-[#c0c8cb] text-xs font-semibold text-[#003441] hover:bg-[#f2f4f6] transition-colors flex items-center gap-1.5"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Ver Ruta GPS</span>
                    </a>
                    <button
                      onClick={onOpenBooking}
                      className="px-4 py-2 rounded-lg bg-[#003441] text-white text-xs font-semibold hover:bg-[#0f4c5c] transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Agendar en Valle Imperial</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* SEDE 2: CLÍNICA PLAZA PASEO SENDAS */}
            <div className="bg-white rounded-2xl border border-[#e0e3e5] shadow-sm overflow-hidden flex flex-col lg:flex-row">
              <div className="w-full lg:w-5/12 bg-[#eceef0] relative min-h-[280px]">
                <img
                  src="/src/assets/images/clinic_paseo_sendas_1790297953285.jpg"
                  alt="Clínica Plaza Paseo Sendas en Zapopan"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#006874] text-white px-3 py-1 rounded-md text-xs font-bold uppercase font-['JetBrains_Mono']">
                  SEDE PASEO SENDAS
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-[#003441]/90 backdrop-blur-sm text-white p-3 rounded-lg text-xs">
                  <span className="font-bold block">Clínica Plaza Paseo Sendas</span>
                  <span className="text-[11px] text-[#c7eae1]">Centro Especializado en Terapia Manual Ortopédica</span>
                </div>
              </div>

              <div className="w-full lg:w-7/12 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-['JetBrains_Mono'] text-[#006874] font-bold uppercase flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-[#006874]" />
                      Zapopan Sendas Residencial
                    </span>
                    <span className="text-[11px] font-semibold text-[#006874] bg-[#c7eae1]/50 px-2.5 py-0.5 rounded-full">
                      Disponibilidad Ambulatoria Diaria
                    </span>
                  </div>

                  <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#003441] mb-2">
                    {sendasClinic.name}
                  </h3>

                  <div className="bg-[#f7f9fb] p-3.5 rounded-xl border border-[#eceef0] text-xs text-[#555555] mb-6 space-y-1">
                    <div className="font-semibold text-[#003441]">{sendasClinic.address}</div>
                    <div>{sendasClinic.crossStreets}</div>
                    <div className="text-[11px] text-[#70787c]">{sendasClinic.reference}</div>
                  </div>

                  {/* Módulos específicos con los textos exactos */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                    <div className="p-3 bg-[#f2f4f6] rounded-lg border border-[#e0e3e5]">
                      <span className="font-bold text-xs text-[#003441] block mb-1">
                        Terapia Manual
                      </span>
                      <p className="text-[11px] text-[#555555]">
                        Manipulación articular Maitland y Mulligan con camillas multiposición.
                      </p>
                    </div>

                    <div className="p-3 bg-[#f2f4f6] rounded-lg border border-[#e0e3e5]">
                      <span className="font-bold text-xs text-[#003441] block mb-1">
                        Consultorios Privados
                      </span>
                      <p className="text-[11px] text-[#555555]">
                        Evaluación clínica funcional, ecografía musculoesquelética de cabecera.
                      </p>
                    </div>

                    <div className="p-3 bg-[#f2f4f6] rounded-lg border border-[#e0e3e5]">
                      <span className="font-bold text-xs text-[#003441] block mb-1">
                        Electroterapia &amp; Ultrasonido
                      </span>
                      <p className="text-[11px] text-[#555555]">
                        Equipo de ultrasonido y electroterapia de última generación y diatermia profunda.
                      </p>
                    </div>
                  </div>

                  {/* Horarios y contacto */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-4 border-t border-[#eceef0] mb-6">
                    <div>
                      <span className="font-bold text-[#003441] block mb-1">Horarios de Atención Clínica:</span>
                      <p className="text-[#555555]">Lunes a Viernes: {sendasClinic.hoursWeekday}</p>
                      <p className="text-[#555555]">Sábados: {sendasClinic.hoursSaturday}</p>
                    </div>
                    <div>
                      <span className="font-bold text-[#003441] block mb-1">Teléfonos Directos:</span>
                      <p className="text-[#555555]">WhatsApp / Móvil: <strong className="text-[#003441]">{sendasClinic.whatsapp}</strong></p>
                      <p className="text-[#555555]">Conmutador Sede: <strong className="text-[#003441]">{sendasClinic.switchboard}</strong></p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <span className="text-[11px] font-['JetBrains_Mono'] text-[#70787c]">
                    Código de Sede: {sendasClinic.code}
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg border border-[#c0c8cb] text-xs font-semibold text-[#003441] hover:bg-[#f2f4f6] transition-colors flex items-center gap-1.5"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Ver Ruta GPS</span>
                    </a>
                    <button
                      onClick={onOpenBooking}
                      className="px-4 py-2 rounded-lg bg-[#006874] text-white text-xs font-semibold hover:bg-[#003441] transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Agendar en Paseo Sendas</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RECORRIDO POR INSTALACIONES: Textos exactos requeridos:
          - “Mesa de Canabé de alta precisión”
          - “Consultorios privados completamente equipados”
          - “Equipo de ultrasonido y electroterapia de última generación” */}
      <section className="w-full py-16 bg-white border-y border-[#e0e3e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-['JetBrains_Mono'] font-bold text-[#006874] tracking-widest uppercase">
              ESTÁNDARES DE EXCELENCIA ESPACIAL
            </span>
            <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#262b38] mt-1">
              Recorrido por Instalaciones de Alta Gama
            </h2>
            <p className="text-xs sm:text-sm text-[#555555] mt-1">
              Equipamiento electromédico calibrado según NOM-016-SSA3-2012 y protocolos de seguridad del paciente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#f7f9fb] rounded-xl overflow-hidden border border-[#e0e3e5]">
              <div className="h-52 bg-[#eceef0] overflow-hidden">
                <img
                  src="/src/assets/images/treatment_canabe_table_1790297972722.jpg"
                  alt="Mesa de Canabé de alta precisión"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-[11px] font-['JetBrains_Mono'] text-[#006874] font-bold uppercase">
                  MÓDULO 01
                </span>
                <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[#003441] mt-1 mb-2">
                  Mesa de Canabé de alta precisión
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Superficies especializadas para abordaje postural, movilización articular pasiva y terapia manual bajo ergonomía clínica certificada.
                </p>
              </div>
            </div>

            <div className="bg-[#f7f9fb] rounded-xl overflow-hidden border border-[#e0e3e5]">
              <div className="h-52 bg-[#eceef0] overflow-hidden">
                <img
                  src="/src/assets/images/clinic_valle_imperial_1790297944269.jpg"
                  alt="Consultorios privados completamente equipados"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-[11px] font-['JetBrains_Mono'] text-[#006874] font-bold uppercase">
                  MÓDULO 02
                </span>
                <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[#003441] mt-1 mb-2">
                  Consultorios privados completamente equipados
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Espacios privados para interconsulta médica, expedientes digitales cifrados NOM-024 y ecografía musculoesquelética de alta resolución.
                </p>
              </div>
            </div>

            <div className="bg-[#f7f9fb] rounded-xl overflow-hidden border border-[#e0e3e5]">
              <div className="h-52 bg-[#eceef0] overflow-hidden">
                <img
                  src="/src/assets/images/ultrasound_therapy_1790297963160.jpg"
                  alt="Equipo de ultrasonido y electroterapia de última generación"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-[11px] font-['JetBrains_Mono'] text-[#006874] font-bold uppercase">
                  MÓDULO 03
                </span>
                <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[#003441] mt-1 mb-2">
                  Equipo de ultrasonido y electroterapia de última generación
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Sistemas de ultrasonido terapéutico, corrientes interferenciales TENS/EMS y radiofrecuencia de contacto para regeneración profunda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EQUIPO MÉDICO TITULAR DE LAS CLÍNICAS (NO Dr. Luis Ruelas) */}
      <section className="w-full py-16 bg-[#f7f9fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-['JetBrains_Mono'] font-bold text-[#006874] tracking-widest uppercase">
              CUERPO MÉDICO Y TERAPÉUTICO
            </span>
            <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#262b38] mt-1">
              Equipo Médico Titular de las Clínicas
            </h2>
            <p className="text-xs sm:text-sm text-[#555555] mt-1">
              Especialistas colegiados con cédula profesional federal y certificación clínica continua.
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
                  <span className="block text-[11px] font-['JetBrains_Mono'] text-[#006874] font-semibold text-center uppercase mb-1">
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

      {/* 5. CTA Final */}
      <section className="w-full py-16 bg-[#003441] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-['JetBrains_Mono'] text-[#5ce9fe] font-bold uppercase tracking-wider block mb-2">
            ATENCIÓN RÁPIDA Y PERSONALIZADA
          </span>
          <h2 className="font-['Space_Grotesk'] text-2xl sm:text-4xl font-bold mb-4">
            Inicia tu Proceso de Rehabilitación en Nuestras Sedes de Zapopan
          </h2>
          <p className="text-xs sm:text-sm text-white/80 mb-8 max-w-xl mx-auto leading-relaxed">
            Espacios diseñados para rehabilitación física integral, traumatología avanzada y fisioterapia con privacidad médica garantizada.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="h-11 px-6 rounded-lg bg-[#5ce9fe] text-[#001f24] font-bold text-xs hover:bg-[#98f0ff] transition-colors shadow-lg cursor-pointer"
            >
              Agendar en Valle Imperial ((33) 2351-7843)
            </button>
            <button
              onClick={onOpenBooking}
              className="h-11 px-6 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors cursor-pointer"
            >
              Agendar en Paseo Sendas ((33) 2407-4211)
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
