import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle, ShieldCheck, User, Phone, Mail, FileText } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultClinic?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  defaultClinic = 'valle-imperial',
}) => {
  const [clinic, setClinic] = useState(defaultClinic);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('09:00');
  const [service, setService] = useState('Valoración Funcional & Fisioterapia');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-[#c0c8cb]/30 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-[#0f4c5c] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#5ce9fe]/20 flex items-center justify-center text-[#5ce9fe]">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-['Space_Grotesk'] text-lg font-bold">
                Agendar Cita en Fisioaleph
              </h3>
              <p className="text-xs text-[#c7eae1]">
                Atención clínica presencial en Zapopan, Jalisco
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#c7eae1] text-[#006874] flex items-center justify-center mb-4">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="font-['Space_Grotesk'] text-xl font-bold text-[#003441] mb-2">
                ¡Solicitud Registrada con Éxito!
              </h4>
              <p className="text-sm text-[#555555] max-w-md mb-6 leading-relaxed">
                Hemos recibido tu solicitud para{' '}
                <span className="font-semibold text-[#003441]">
                  {clinic === 'valle-imperial'
                    ? 'Clínica Valle Imperial'
                    : 'Clínica Plaza Paseo Sendas'}
                </span>
                . Nuestro equipo de coordinación clínica te contactará por WhatsApp al{' '}
                <span className="font-semibold text-[#003441]">{phone || 'tu número'}</span>{' '}
                para confirmar tu horario.
              </p>

              <div className="w-full bg-[#f2f4f6] rounded-xl p-4 text-left text-xs space-y-2 mb-6 text-[#555555]">
                <div className="flex justify-between">
                  <span className="text-[#70787c]">Sede:</span>
                  <span className="font-semibold text-[#003441]">
                    {clinic === 'valle-imperial'
                      ? 'Valle Imperial (Zapopan Norponiente)'
                      : 'Plaza Paseo Sendas (Sendas Residencial)'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#70787c]">Fecha tentativa:</span>
                  <span className="font-semibold text-[#003441]">{date || 'Próximo día disponible'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#70787c]">Servicio:</span>
                  <span className="font-semibold text-[#003441]">{service}</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="w-full py-3 rounded-lg bg-[#003441] text-white font-semibold text-sm hover:bg-[#0f4c5c] transition-colors"
              >
                Cerrar Ventana
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Sede selector */}
              <div>
                <label className="block text-xs font-bold text-[#003441] uppercase tracking-wider mb-2">
                  Selecciona la Sede en Zapopan *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setClinic('valle-imperial')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      clinic === 'valle-imperial'
                        ? 'border-[#006874] bg-[#c7eae1]/30 ring-2 ring-[#006874]/20'
                        : 'border-[#c0c8cb]/50 hover:bg-[#f2f4f6]'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#003441] mb-1">
                      <MapPin className="w-3.5 h-3.5 text-[#006874]" />
                      Valle Imperial
                    </div>
                    <p className="text-[11px] text-[#555555] line-clamp-1">
                      Blvd. Valle Imperial #260-18
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setClinic('paseo-sendas')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      clinic === 'paseo-sendas'
                        ? 'border-[#006874] bg-[#c7eae1]/30 ring-2 ring-[#006874]/20'
                        : 'border-[#c0c8cb]/50 hover:bg-[#f2f4f6]'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#003441] mb-1">
                      <MapPin className="w-3.5 h-3.5 text-[#006874]" />
                      Paseo Sendas
                    </div>
                    <p className="text-[11px] text-[#555555] line-clamp-1">
                      Av. Guadalajara #3523
                    </p>
                  </button>
                </div>
              </div>

              {/* Service selector */}
              <div>
                <label className="block text-xs font-bold text-[#003441] uppercase tracking-wider mb-1">
                  Servicio Requerido *
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full h-10 px-3 rounded-lg border border-[#c0c8cb] text-sm text-[#191c1e] bg-white focus:outline-none focus:border-[#006874] focus:ring-1 focus:ring-[#006874]"
                  required
                >
                  <option value="Valoración Funcional & Fisioterapia">
                    Valoración Funcional &amp; Fisioterapia
                  </option>
                  <option value="Rehabilitación Ortopédica Postoperatoria">
                    Rehabilitación Ortopédica Postoperatoria
                  </option>
                  <option value="Terapia Manual y Columna">
                    Terapia Manual y Columna
                  </option>
                  <option value="Fisioterapia Deportiva">
                    Fisioterapia Deportiva
                  </option>
                  <option value="Sesión de Ultrasonido y Electroterapia">
                    Sesión de Ultrasonido y Electroterapia
                  </option>
                </select>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#003441] uppercase tracking-wider mb-1">
                    Nombre Completo *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#70787c] absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="Ej. Carlos Silva"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full h-10 pl-9 pr-3 rounded-lg border border-[#c0c8cb] text-sm text-[#191c1e] bg-white focus:outline-none focus:border-[#006874]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#003441] uppercase tracking-wider mb-1">
                    WhatsApp / Teléfono *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#70787c] absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="33 1234 5678"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full h-10 pl-9 pr-3 rounded-lg border border-[#c0c8cb] text-sm text-[#191c1e] bg-white focus:outline-none focus:border-[#006874]"
                    />
                  </div>
                </div>
              </div>

              {/* Email & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#003441] uppercase tracking-wider mb-1">
                    Correo Electrónico
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#70787c] absolute left-3 top-3" />
                    <input
                      type="email"
                      placeholder="correo@ejemplo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-10 pl-9 pr-3 rounded-lg border border-[#c0c8cb] text-sm text-[#191c1e] bg-white focus:outline-none focus:border-[#006874]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#003441] uppercase tracking-wider mb-1">
                    Fecha de Preferencia
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full h-10 px-3 rounded-lg border border-[#c0c8cb] text-sm text-[#191c1e] bg-white focus:outline-none focus:border-[#006874]"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold text-[#003441] uppercase tracking-wider mb-1">
                  Motivo de Consulta o Lesión (Opcional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Describe brevemente los síntomas, zona de dolor o cirugía reciente..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-[#c0c8cb] text-sm text-[#191c1e] bg-white focus:outline-none focus:border-[#006874]"
                ></textarea>
              </div>

              {/* Privacy Notice */}
              <div className="flex items-start gap-2 pt-2 text-xs text-[#70787c]">
                <ShieldCheck className="w-4 h-4 text-[#006874] shrink-0 mt-0.5" />
                <span>
                  Tus datos clínicos son tratados confidencialmente bajo la Ley Federal de Protección de Datos Personales (LFPDPPP).
                </span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full h-11 rounded-lg bg-[#006874] text-white font-semibold text-sm hover:bg-[#5ce9fe] hover:text-[#001f24] transition-all shadow-md active:scale-98"
                >
                  Confirmar Solicitud de Cita
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
