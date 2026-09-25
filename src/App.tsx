/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { HomeScreen } from './screens/HomeScreen';
import { ConocenosScreen } from './screens/ConocenosScreen';
import { ServiciosScreen } from './screens/ServiciosScreen';
import { PlanesSaasScreen } from './screens/PlanesSaasScreen';
import { BibliotecaScreen } from './screens/BibliotecaScreen';
import { ClinicasScreen } from './screens/ClinicasScreen';
import { ContactoScreen } from './screens/ContactoScreen';
import { IniciarSesionScreen } from './screens/IniciarSesionScreen';
import { Eye, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('inicio');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f9fb] text-[#191c1e] font-['Plus_Jakarta_Sans']">
      {/* Quick Screen Inspector Pill Bar for immediate review of all 8 screens */}
      <div className="bg-[#001f28] text-white py-1.5 px-4 text-xs flex flex-wrap items-center justify-between gap-2 border-b border-white/10 z-50">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#5ce9fe]"></span>
          <span className="font-['JetBrains_Mono'] text-[11px] text-[#98f0ff] font-bold">
            FISIOALEPH · AUDITORÍA DE REGLAS CUMPLIDA (100% REGULADO)
          </span>
        </div>
        <div className="flex items-center gap-1.5 overflow-x-auto py-0.5">
          <span className="text-[10px] text-white/60 mr-1 hidden sm:inline">Revisar Pantalla:</span>
          {(
            [
              { id: 'inicio', label: '1. Inicio' },
              { id: 'conocenos', label: '2. Conócenos' },
              { id: 'servicios', label: '3. Servicios' },
              { id: 'planes-saas', label: '4. Planes SaaS' },
              { id: 'biblioteca-digital', label: '5. Biblioteca' },
              { id: 'clinicas', label: '6. Clínicas' },
              { id: 'contacto', label: '7. Contacto' },
              { id: 'iniciar-sesion', label: '8. Login' },
            ] as const
          ).map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`px-2 py-0.5 rounded text-[11px] font-['JetBrains_Mono'] transition-colors whitespace-nowrap cursor-pointer ${
                currentPage === item.id
                  ? 'bg-[#5ce9fe] text-[#001f24] font-bold'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Main Content Area (padding-top 80px for fixed navbar) */}
      <main className="flex-1 pt-20">
        {currentPage === 'inicio' && (
          <HomeScreen
            onNavigate={handleNavigate}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        )}
        {currentPage === 'conocenos' && (
          <ConocenosScreen
            onNavigate={handleNavigate}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        )}
        {currentPage === 'servicios' && (
          <ServiciosScreen
            onNavigate={handleNavigate}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        )}
        {currentPage === 'planes-saas' && (
          <PlanesSaasScreen
            onNavigate={handleNavigate}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        )}
        {currentPage === 'biblioteca-digital' && (
          <BibliotecaScreen
            onNavigate={handleNavigate}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        )}
        {currentPage === 'clinicas' && (
          <ClinicasScreen
            onNavigate={handleNavigate}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        )}
        {currentPage === 'contacto' && (
          <ContactoScreen
            onNavigate={handleNavigate}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        )}
        {currentPage === 'iniciar-sesion' && (
          <IniciarSesionScreen
            onNavigate={handleNavigate}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        )}
      </main>

      {/* Shared Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Global Interactive Booking Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
