import React from 'react';
import { Activity, Stethoscope, Home, CheckCircle2, Clock } from 'lucide-react';

export const MethodologySection: React.FC = () => {
  const phases = [
    {
      number: '01',
      title: 'Evaluación Integral & Diagnóstico Cinético',
      description:
        'Valoración exhaustiva del daño tisular, escala de dolor y medición precisa de rangos de movimiento (ROM), diferenciando condiciones agudas y crónicas, con establecimiento de línea base y descarte de banderas rojas.',
      deliverable: 'Ficha de Evaluación Funcional y Registro ROM',
      icon: Activity,
    },
    {
      number: '02',
      title: 'Intervención Terapéutica Estándar',
      description:
        'Ejecución de protocolos de tratamiento basados en evidencia y estándares clínicos rigurosos, orientados a la modulación del dolor, recuperación neuromuscular y restauración de la funcionalidad tisular.',
      deliverable: 'Protocolo de Tratamiento Estándar',
      icon: Stethoscope,
    },
    {
      number: '03',
      title: 'Evaluación Continua & Alta con Protocolo Domiciliario',
      description:
        'Seguimiento de la evolución clínica sesión a sesión mediante revaloración de rangos de movimiento y control de cargas, culminando con el alta médica acompañada de un programa estructurado de ejercicios y prevención en casa.',
      deliverable: 'Reporte de Alta & Guía de Readaptación en Casa',
      icon: Home,
    },
  ];

  return (
    <section className="w-full py-16 bg-[#f2f4f6] border-y border-[#e0e3e5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <span className="text-xs font-['JetBrains_Mono'] font-bold text-[#006874] tracking-widest uppercase">
              02. RUTA ASISTENCIAL
            </span>
            <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#262b38] mt-2">
              Metodología Clínica de Fisioterapia y Rehabilitación
            </h2>
            <p className="text-sm sm:text-base text-[#555555] mt-3 leading-relaxed">
              Cada paciente transita por un itinerario clínico estructurado, con valoración objetiva de la lesión, control de rangos de movilidad (ROM) y trazabilidad completa del progreso.
            </p>
          </div>

          {/* Badge lateral derecho exacto */}
          <div className="shrink-0">
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#c7eae1] text-[#003441] border border-[#0f4c5c]/20 shadow-sm">
              <Clock className="w-4 h-4 text-[#006874]" />
              <span className="font-['JetBrains_Mono'] text-xs font-bold tracking-wide">
                CICLO TERAPÉUTICO PROMEDIO: 6 A 12 SESIONES
              </span>
            </div>
          </div>
        </div>

        {/* 3-Phases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {phases.map((phase) => {
            const Icon = phase.icon;
            return (
              <div
                key={phase.number}
                className="bg-white rounded-xl p-6 lg:p-8 border border-[#e0e3e5] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-lg bg-[#003441] text-[#98f0ff] flex items-center justify-center font-['Space_Grotesk'] text-lg font-bold">
                      {phase.number}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#f2f4f6] flex items-center justify-center text-[#006874]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[#003441] mb-3 leading-snug">
                    {phase.title}
                  </h3>

                  <p className="text-sm text-[#555555] leading-relaxed mb-6">
                    {phase.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#eceef0] bg-[#f7f9fb] -mx-6 -mb-6 p-4 rounded-b-xl">
                  <span className="block text-[11px] font-['JetBrains_Mono'] text-[#70787c] uppercase font-medium">
                    Entregable Clínico:
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-[#006874] shrink-0" />
                    <span className="text-xs font-semibold text-[#003441]">
                      {phase.deliverable}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
