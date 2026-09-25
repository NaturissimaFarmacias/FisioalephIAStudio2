export type PageId =
  | 'inicio'
  | 'conocenos'
  | 'servicios'
  | 'planes-saas'
  | 'biblioteca-digital'
  | 'clinicas'
  | 'contacto'
  | 'iniciar-sesion';

export interface Doctor {
  name: string;
  role: string;
  specialty: string;
  credentials: string;
  location: string;
  bio: string;
}

export interface ClinicLocation {
  id: string;
  name: string;
  tag: string;
  badge: string;
  address: string;
  crossStreets: string;
  reference: string;
  postalCode: string;
  city: string;
  hoursWeekday: string;
  hoursSaturday: string;
  phone: string;
  whatsapp: string;
  switchboard?: string;
  code: string;
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
}
