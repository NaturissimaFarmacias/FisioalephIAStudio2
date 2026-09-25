import React, { useState } from 'react';
import { PageId } from '../types';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  Building,
  MessageSquare,
  HelpCircle,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface ContactoScreenProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const ContactoScreen: React.FC<ContactoScreenProps> = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [consultType, setConsultType] = useState('Agendar Cita en Clínica');
  const [preferredClinic, setPreferredClinic] = useState('Valle Imperial');
  const [message, setMessage] = useState('');
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [sent, setSent] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacyAccepted) return;
    setSent(true);
  };

  const contactFaqs = [
    {
      q: '¿Aceptan Seguros de Gastos Médicos Mayores (SGMM)?',
      a: 'Sí, emitimos informe médico oficial, bitácora de asistencia y factura CFDI con desglose de rehabilitación física para reembolso directo o pago por convenio con las principales aseguradoras en México.',
    },
    {
      q: '¿Cuáles son las formas de pago aceptadas en clínicas y servicios?',
      a: 'Aceptamos todas las tarjetas de crédito y débito (Visa, MasterCard, American Express), transferencias electrónicas SPEI y pagos en efectivo en recepción.',
    },
    {
      q: '¿Cuál es la política de cancelación y reprogramación de citas?',
      a: 'Puedes reprogramar tu cita sin costo avisando con al menos 4 horas de anticipación a través de nuestras líneas de WhatsApp o conmutador telefónico.',
    },
  ];

  return (
    <div className="w-full flex flex-col bg-[#f7f9fb]">
      {/* 1. Header (NO ISO, NO Telemetría) */}
      <section className="w-full pt-16 pb-12 bg-[#003441] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4 text-xs text-[#c7eae1]">
            <span className="font-['JetBrains_Mono']">DIRECTORIO OFICIAL · CANALES SANITARIOS</span>
            <span className="text-[#5ce9fe] font-semibold">LFPDPPP PROTECTED</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
              Conéctate con Fisioaleph: Estamos para ayudarte a recuperar el movimiento.
            </h1>
            <p className="text-sm sm:text-base text-white/85 leading-relaxed">
              Atención presencial en nuestras sedes de Zapopan, Jalisco, o contacto institucional con nuestro equipo clínico y administrativo.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 pt-6 border-t border-white/10 text-xs">
            <div>
              <span className="text-[#c7eae1] block text-[11px]">TIEMPO PROMEDIO RESPUESTA</span>
              <span className="font-bold text-white font-['Space_Grotesk'] text-sm">&lt; 15 min</span>
            </div>
            <div>
              <span className="text-[#c7eae1] block text-[11px]">COFEPRIS REG. 2025</span>
              <span className="font-bold text-[#5ce9fe] font-['Space_Grotesk'] text-sm">Triaje Activo Zapopan</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="w-full py-16 bg-[#f7f9fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-[#e0e3e5] shadow-sm">
              <h2 className="font-['Space_Grotesk'] text-xl font-bold text-[#003441] mb-1">
                Solicitud de Cita / Contacto Clínico
              </h2>
              <p className="text-xs text-[#555555] mb-6">
                Completa el formulario oficial para canalización inmediata.
              </p>

              {sent ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#c7eae1] text-[#006874] flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#003441] mb-2">
                    ¡Mensaje Enviado con Éxito!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555555] max-w-md mb-6 leading-relaxed">
                    Gracias por comunicarte con Fisioaleph. Nuestro equipo clínico se pondrá en contacto contigo a la brevedad a través de{' '}
                    <strong className="text-[#003441]">{phone || email}</strong>.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="px-6 py-2.5 rounded-lg bg-[#003441] text-white text-xs font-semibold hover:bg-[#0f4c5c]"
                  >
                    Enviar Otra Consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#003441] uppercase tracking-wider mb-1">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Dr. / Lic. / Paciente..."
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full h-10 px-3 rounded-lg border border-[#c0c8cb] text-xs sm:text-sm text-[#191c1e] bg-white focus:outline-none focus:border-[#006874]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#003441] uppercase tracking-wider mb-1">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="usuario@organizacion.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-10 px-3 rounded-lg border border-[#c0c8cb] text-xs sm:text-sm text-[#191c1e] bg-white focus:outline-none focus:border-[#006874]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#003441] uppercase tracking-wider mb-1">
                        Teléfono / WhatsApp (10 Dígitos) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="3312345678"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full h-10 px-3 rounded-lg border border-[#c0c8cb] text-xs sm:text-sm text-[#191c1e] bg-white focus:outline-none focus:border-[#006874]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#003441] uppercase tracking-wider mb-1">
                        Tipo de Consulta *
                      </label>
                      <select
                        value={consultType}
                        onChange={(e) => setConsultType(e.target.value)}
                        className="w-full h-10 px-3 rounded-lg border border-[#c0c8cb] text-xs sm:text-sm text-[#191c1e] bg-white focus:outline-none focus:border-[#006874]"
                      >
                        <option value="Agendar Cita en Clínica">Agendar Cita en Clínica</option>
                        <option value="Información Planes SaaS FisioSinapsis">
                          Información Planes SaaS FisioSinapsis
                        </option>
                        <option value="Fisioterapia Laboral & Ergonomía">
                          Fisioterapia Laboral &amp; Ergonomía
                        </option>
                        <option value="Campus Virtual AlphaDigitalFisio">
                          Campus Virtual AlphaDigitalFisio
                        </option>
                        <option value="Contacto Institucional">Contacto Institucional</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#003441] uppercase tracking-wider mb-2">
                      Sede de Preferencia *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <label
                        className={`p-3 rounded-xl border flex items-center gap-2 cursor-pointer transition-all ${
                          preferredClinic === 'Valle Imperial'
                            ? 'border-[#006874] bg-[#c7eae1]/20'
                            : 'border-[#c0c8cb]/50 hover:bg-[#f7f9fb]'
                        }`}
                      >
                        <input
                          type="radio"
                          name="clinicPreference"
                          checked={preferredClinic === 'Valle Imperial'}
                          onChange={() => setPreferredClinic('Valle Imperial')}
                          className="accent-[#006874]"
                        />
                        <div className="text-xs">
                          <span className="font-bold text-[#003441] block">Valle Imperial</span>
                          <span className="text-[#70787c] text-[11px]">Zapopan Norponiente</span>
                        </div>
                      </label>

                      <label
                        className={`p-3 rounded-xl border flex items-center gap-2 cursor-pointer transition-all ${
                          preferredClinic === 'Plaza Paseo Sendas'
                            ? 'border-[#006874] bg-[#c7eae1]/20'
                            : 'border-[#c0c8cb]/50 hover:bg-[#f7f9fb]'
                        }`}
                      >
                        <input
                          type="radio"
                          name="clinicPreference"
                          checked={preferredClinic === 'Plaza Paseo Sendas'}
                          onChange={() => setPreferredClinic('Plaza Paseo Sendas')}
                          className="accent-[#006874]"
                        />
                        <div className="text-xs">
                          <span className="font-bold text-[#003441] block">Plaza Paseo Sendas</span>
                          <span className="text-[#70787c] text-[11px]">Local 14-B</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#003441] uppercase tracking-wider mb-1">
                      Mensaje o Motivo de la Consulta
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describa el padecimiento musculoesquelético, requerimientos de integración clínica o especificaciones..."
                      className="w-full p-3 rounded-lg border border-[#c0c8cb] text-xs sm:text-sm text-[#191c1e] bg-white focus:outline-none focus:border-[#006874]"
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-2 pt-2">
                    <input
                      type="checkbox"
                      id="privacyCheck"
                      checked={privacyAccepted}
                      onChange={(e) => setPrivacyAccepted(e.target.checked)}
                      className="mt-0.5 accent-[#006874]"
                      required
                    />
                    <label htmlFor="privacyCheck" className="text-[11px] text-[#555555] leading-relaxed">
                      Manifiesto que he leído y acepto el{' '}
                      <strong className="text-[#003441]">Aviso de Privacidad Integral</strong> de{' '}
                      <strong>Fisioaleph</strong> conforme a la LFPDPPP y autorizo el tratamiento clínico y confidencial de mis datos.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={!privacyAccepted}
                    className={`w-full h-11 rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer ${
                      privacyAccepted
                        ? 'bg-[#006874] text-white hover:bg-[#003441]'
                        : 'bg-[#c0c8cb] text-white cursor-not-allowed'
                    }`}
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Mensaje / Solicitar Contacto</span>
                  </button>
                </form>
              )}
            </div>

            {/* Direct Info Column (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Dirección */}
              <div className="bg-white rounded-2xl p-6 border border-[#e0e3e5] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-[#006874] font-bold uppercase mb-2">
                  <Building className="w-4 h-4" />
                  <span>SEDE CENTRAL ZAPOPAN</span>
                </div>
                <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[#003441] mb-2">
                  Dirección Corporativa &amp; Sedes
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed mb-4">
                  Boulevard Valle Imperial # 260 – 18, Col. Nuevo México, Zapopan, Jalisco, C.P. 45134.
                </p>

                <div className="pt-3 border-t border-[#eceef0] grid grid-cols-2 gap-3 text-xs text-[#555555]">
                  <div>
                    <span className="font-bold text-[#003441] block">Horario Clínicas:</span>
                    <span>Lun - Vie: 08:00 - 20:00</span>
                    <span className="block">Sáb: 08:00 - 14:00</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#003441] block">Atención Digital:</span>
                    <span>Plataforma Activa 24/7</span>
                    <span className="block">99.4% Disponibilidad</span>
                  </div>
                </div>
              </div>

              {/* Conmutador Telefónico */}
              <div className="bg-white rounded-2xl p-6 border border-[#e0e3e5] shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-['JetBrains_Mono'] text-[#006874] font-bold uppercase flex items-center gap-1.5">
                    <Phone className="w-4 h-4" />
                    Líneas Telefónicas
                  </span>
                  <span className="text-[10px] font-['JetBrains_Mono'] bg-[#c7eae1] text-[#003441] px-2 py-0.5 rounded font-bold">
                    ZAPOPAN PBX
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-[#003441] mb-4">
                  <a href="tel:+523396886699" className="p-2.5 rounded-lg bg-[#f7f9fb] hover:bg-[#eceef0] transition-colors flex items-center justify-between">
                    <span>(33) 9688-6699</span>
                    <Phone className="w-3 h-3 text-[#006874]" />
                  </a>
                  <a href="tel:+523323517843" className="p-2.5 rounded-lg bg-[#f7f9fb] hover:bg-[#eceef0] transition-colors flex items-center justify-between">
                    <span>(33) 2351-7843</span>
                    <Phone className="w-3 h-3 text-[#006874]" />
                  </a>
                  <a href="tel:+523324074211" className="p-2.5 rounded-lg bg-[#f7f9fb] hover:bg-[#eceef0] transition-colors flex items-center justify-between">
                    <span>(33) 2407-4211</span>
                    <Phone className="w-3 h-3 text-[#006874]" />
                  </a>
                  <a href="tel:+523338034475" className="p-2.5 rounded-lg bg-[#f7f9fb] hover:bg-[#eceef0] transition-colors flex items-center justify-between">
                    <span>(33) 3803-4475</span>
                    <Phone className="w-3 h-3 text-[#006874]" />
                  </a>
                </div>

                <div className="pt-3 border-t border-[#eceef0] flex items-center gap-2 text-xs text-[#555555]">
                  <Mail className="w-4 h-4 text-[#006874]" />
                  <span>Correo Oficial: </span>
                  <a href="mailto:contacto@fisioaleph.com" className="font-semibold text-[#003441] hover:underline">
                    contacto@fisioaleph.com
                  </a>
                </div>
              </div>

              {/* Botones directos de WhatsApp */}
              <div className="bg-[#003441] text-white rounded-2xl p-6 shadow-md">
                <span className="text-[11px] font-['JetBrains_Mono'] text-[#5ce9fe] font-bold uppercase tracking-wider block mb-2">
                  ATENCIÓN VÍA WHATSAPP INMEDIATA
                </span>
                <p className="text-xs text-white/80 mb-4">
                  Comunícate directamente con la recepción de la sede más cercana a tu ubicación.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://wa.me/523323517843"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Sede Valle Imperial</span>
                  </a>
                  <a
                    href="https://wa.me/523324074211"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Sede Paseo Sendas</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN INSTALACIONES / CONTACTO:
          Textos profesionales exactos requeridos:
          - “Mesa de Canabé de alta precisión”
          - “Consultorios privados completamente equipados”
          - “Equipo de ultrasonido y electroterapia de última generación” */}
      <section className="w-full py-16 bg-white border-y border-[#e0e3e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-['JetBrains_Mono'] font-bold text-[#006874] tracking-widest uppercase">
              INFRAESTRUCTURA FÍSICA SANITARIA
            </span>
            <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#262b38] mt-1">
              Instalaciones de Precisión Recuperat
            </h2>
            <p className="text-xs sm:text-sm text-[#555555] mt-1">
              Unidades clínicas con equipamiento médico estandarizado para la máxima eficacia clínica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#f7f9fb] rounded-xl overflow-hidden border border-[#e0e3e5] shadow-sm">
              <div className="h-48 bg-[#eceef0] overflow-hidden">
                <img
                  src="/src/assets/images/treatment_canabe_table_1790297972722.jpg"
                  alt="Mesa de Canabé de alta precisión"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <span className="text-[10px] font-['JetBrains_Mono'] text-[#006874] font-bold uppercase">
                  CONFORT ARTICULAR
                </span>
                <h3 className="font-['Space_Grotesk'] text-base font-bold text-[#003441] mt-1 mb-2">
                  Mesa de Canabé de alta precisión
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Superficies ergonómicas para valoración y tratamiento de terapia manual especializada.
                </p>
              </div>
            </div>

            <div className="bg-[#f7f9fb] rounded-xl overflow-hidden border border-[#e0e3e5] shadow-sm">
              <div className="h-48 bg-[#eceef0] overflow-hidden">
                <img
                  src="/src/assets/images/clinic_valle_imperial_1790297944269.jpg"
                  alt="Consultorios privados completamente equipados"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <span className="text-[10px] font-['JetBrains_Mono'] text-[#006874] font-bold uppercase">
                  CONFIDENCIALIDAD
                </span>
                <h3 className="font-['Space_Grotesk'] text-base font-bold text-[#003441] mt-1 mb-2">
                  Consultorios privados completamente equipados
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Ambientes privados para valoración física, ecografía diagnóstica y expedientes protegidos.
                </p>
              </div>
            </div>

            <div className="bg-[#f7f9fb] rounded-xl overflow-hidden border border-[#e0e3e5] shadow-sm">
              <div className="h-48 bg-[#eceef0] overflow-hidden">
                <img
                  src="/src/assets/images/ultrasound_therapy_1790297963160.jpg"
                  alt="Equipo de ultrasonido y electroterapia de última generación"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <span className="text-[10px] font-['JetBrains_Mono'] text-[#006874] font-bold uppercase">
                  ELECTROMEDICINA
                </span>
                <h3 className="font-['Space_Grotesk'] text-base font-bold text-[#003441] mt-1 mb-2">
                  Equipo de ultrasonido y electroterapia de última generación
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Dispositivos de electroanalgesia y ultrasonido focalizado para regeneración celular profunda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQs y Línea Prioritaria */}
      <section className="w-full py-16 bg-[#f7f9fb]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-['JetBrains_Mono'] font-bold text-[#006874] tracking-widest uppercase">
              GUÍA DE ATENCIÓN INMEDIATA
            </span>
            <h2 className="font-['Space_Grotesk'] text-2xl font-bold text-[#262b38] mt-1">
              Preguntas Frecuentes
            </h2>
            <p className="text-xs text-[#555555] mt-1">
              Resolución estandarizada de dudas previas a tu primera consulta o contratación.
            </p>
          </div>

          <div className="space-y-3 mb-10">
            {contactFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#e0e3e5] overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-[#003441] hover:text-[#006874] cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#006874] shrink-0" />
                    {faq.q}
                  </span>
                  {activeFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-[#70787c]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#70787c]" />
                  )}
                </button>
                {activeFaq === idx && (
                  <div className="px-4 pb-4 pt-1 text-xs text-[#555555] leading-relaxed border-t border-[#eceef0]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Tarjeta de Asistencia Inmediata */}
          <div className="p-6 rounded-2xl bg-[#003441] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="font-bold text-sm block">¿Tienes un caso agudo o urgencia funcional?</span>
              <span className="text-xs text-white/80">Comunícate directamente a nuestra línea de triaje prioritario.</span>
            </div>
            <a
              href="tel:+523396886699"
              className="h-10 px-5 rounded-lg bg-[#5ce9fe] text-[#001f24] font-bold text-xs flex items-center gap-2 hover:bg-[#98f0ff] transition-colors shrink-0"
            >
              <Phone className="w-4 h-4" />
              <span>Llamada Prioritaria</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
