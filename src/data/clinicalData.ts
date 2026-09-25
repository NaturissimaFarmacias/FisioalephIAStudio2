import { Doctor, ClinicLocation } from '../types';

export const CLINICAL_TEAM: Doctor[] = [
  {
    name: 'Dra. Cintia Lorena Cárdenas Correa',
    role: 'Dirección Médica General',
    specialty: 'Medicina de Rehabilitación Física',
    credentials: 'Céd. Prof. 8493821 · COFEPRIS',
    location: 'Sede Valle Imperial',
    bio: 'Especialista en Medicina Física y Rehabilitación. Experta en ecografía musculoesquelética y protocolos de alivio del dolor crónico.',
  },
  {
    name: 'Dr. Juan Manuel Flores Lira',
    role: 'Traumatología & Ortopedia',
    specialty: 'Cirugía Artroscópica & Preservación Articular',
    credentials: 'Céd. Prof. 6710492 · CMOT',
    location: 'Interconsulta Ambas Sedes',
    bio: 'Cirugía artroscópica, preservación articular y supervisión de protocolos postquirúrgicos en deportistas de alto rendimiento.',
  },
  {
    name: 'Lic. María Rocío Mendoza Gómez',
    role: 'Coord. de Terapia Manual',
    specialty: 'Terapia Manual Ortopédica',
    credentials: 'Céd. Prof. 11094382 · AMEFI',
    location: 'Sede Plaza Paseo Sendas',
    bio: 'Fisioterapeuta clínica con certificación en método Mulligan y punción seca avanzada para disfunciones de columna.',
  },
  {
    name: 'Lic. Adolfo Corona Cázares',
    role: 'Jefe de Readaptación Física',
    specialty: 'Readaptación Funcional & Control Motor',
    credentials: 'Céd. Prof. 9845231 · ISB',
    location: 'Sede Valle Imperial',
    bio: 'Especialista en análisis cuantitativo del movimiento humano y retorno seguro al gesto deportivo competitivo.',
  },
];

export const CLINIC_LOCATIONS: ClinicLocation[] = [
  {
    id: 'valle-imperial',
    name: 'Clínica Valle Imperial',
    tag: 'Zapopan Norponiente',
    badge: 'Centro Especializado en Fisioterapia & Rehabilitación',
    address: 'Boulevard Valle Imperial # 260 – 18',
    crossStreets: 'Cruce con Av. Antiguo Camino a Copalita y Calle Las Torres, Planta Alta',
    reference: 'Frente al corredor de condominios Valle Imperial, acceso directo por elevador camillero',
    postalCode: 'C.P. 45134',
    city: 'Zapopan, Jalisco',
    hoursWeekday: '08:00 - 20:00 hrs',
    hoursSaturday: '08:00 - 14:00 hrs (Domingos: Guardia médica previa cita)',
    phone: '(33) 9688-6699',
    whatsapp: '(33) 2351-7843',
    code: 'REC-ZAP-01-VALLE',
    features: [
      {
        title: 'Gimnasio Terapéutico Funcional',
        description: 'Reeducación funcional con circuitos de movilidad activa y fortalecimiento progresivo.',
        icon: 'Dumbbell',
      },
      {
        title: 'Consultorios Médicos Especializados',
        description: 'Alta especialidad en ortopedia, fisiatría y diagnóstico musculoesquelético de precisión.',
        icon: 'Stethoscope',
      },
      {
        title: 'Cubículos Privados',
        description: 'Privacidad total para terapia manual, termoterapia y electroanalgesia focalizada.',
        icon: 'Shield',
      },
    ],
  },
  {
    id: 'paseo-sendas',
    name: 'Clínica Plaza Paseo Sendas',
    tag: 'Zapopan Sendas Residencial',
    badge: 'Centro Especializado en Terapia Manual Ortopédica',
    address: 'Avenida Guadalajara # 3523, Local 8 y 14–B',
    crossStreets: 'Fraccionamiento Sendas Residencial',
    reference: 'Plaza Comercial Paseo Sendas, planta baja con estacionamiento vehicular frente a puerta',
    postalCode: 'C.P. 45140',
    city: 'Zapopan, Jalisco',
    hoursWeekday: '08:00 - 20:00 hrs',
    hoursSaturday: '09:00 - 14:00 hrs (Acceso continuo para rehabilitación intensiva)',
    phone: '(33) 2407-4211',
    whatsapp: '(33) 2407-4211',
    switchboard: '(33) 3803-4475',
    code: 'REC-ZAP-02-SENDAS',
    features: [
      {
        title: 'Terapia Manual Especializada',
        description: 'Manipulación articular Maitland y Mulligan con camillas clínicas multiposición.',
        icon: 'HandMetal',
      },
      {
        title: 'Consultorios Privados Completamente Equipados',
        description: 'Evaluación clínica funcional, ecografía musculoesquelética de cabecera y privacidad total.',
        icon: 'Building2',
      },
      {
        title: 'Equipo de Ultrasonido y Electroterapia de Última Generación',
        description: 'Equipos multifrecuencia, corrientes interferenciales y diatermia profunda para modulación tisular.',
        icon: 'Zap',
      },
    ],
  },
];
