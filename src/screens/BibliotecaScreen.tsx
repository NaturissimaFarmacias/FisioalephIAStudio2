import React, { useState } from 'react';
import { PageId } from '../types';
import {
  Search,
  BookOpen,
  FileText,
  Download,
  AlertTriangle,
  GraduationCap,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Filter,
  Layers,
  Sparkles,
} from 'lucide-react';

interface BibliotecaScreenProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const BibliotecaScreen: React.FC<BibliotecaScreenProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [downloadModalProtocol, setDownloadModalProtocol] = useState<string | null>(null);

  const protocols = [
    {
      code: 'FA-PROT-ROD-01',
      phases: '4 Fases · 36 Sem',
      title: 'Reconstrucción de LCA: Plastia Autóloga y Alinjerto',
      category: 'Rodilla & LCA',
      description:
        'Secuencia por ventanas de neoligamentización: control de efusión, extensión terminal a 0°, reeducación del cuádriceps en cadena cinética cerrada y retorno a la actividad física evaluado con Hop-Test funcional.',
      criteria: 'Ext. 0° / Flex. 110° · Simetría funcional >90%',
    },
    {
      code: 'FA-PROT-COL-04',
      phases: '3 Fases · 12 Sem',
      title: 'Lumbalgia Mecánica & Hernia Discal con Principio McKenzie',
      category: 'Columna & Hernia',
      description:
        'Fenómeno de centralización discal (MDT), ejercicios en descarga por extensión pasiva sostenida, control motor lumbo-pélvico (transverso/multífidos) y desensibilización neural del ciático.',
      criteria: 'Score Oswestry <14% · Centralización positiva',
    },
    {
      code: 'FA-PROT-HOM-02',
      phases: '4 Fases · 20 Sem',
      title: 'Tendinopatía de Manguito Rotador y Reparación Artroscópica',
      category: 'Hombro & Manguito',
      description:
        'Sobrecarga excéntrica guiada, estabilización escapulotorácica precoz, protección del tendón supraespinoso en plano de elevación escapular y retorno a gestos overhead.',
      criteria: 'Índice DASH <15 pts a semana 16 · Balance rotador',
    },
    {
      code: 'FA-PROT-TOB-03',
      phases: '3 Fases · 8 Sem',
      title: 'Esguince Lateral de Tobillo Grado II-III & Readaptación Ligamentaria',
      category: 'Tobillo & Pie',
      description:
        'Manejo activo temprano según protocolo PEACE & LOVE, movilización del complejo astragalino-peroneo y entrenamiento propioceptivo progresivo en superficies inestables.',
      criteria: 'ROM completo en dorsiflexión · Test Y-Balance simétrico',
    },
  ];

  const filteredProtocols = protocols.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full flex flex-col bg-[#f7f9fb]">
      {/* 1. Repository Header with MANDATORY "En construcción" BADGE */}
      <section className="w-full pt-16 pb-12 bg-[#003441] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top metadata strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-['JetBrains_Mono'] text-[#5ce9fe] font-bold uppercase">
                DIVISIÓN 05 · ALPHADIGITALFISIO REPOSITORIO
              </span>
              <span className="text-white/40">•</span>
              <span className="text-xs text-[#c7eae1]">412 Protocolos Clínicos Registrados</span>
            </div>

            {/* MANDATORY CLEAR LABEL: "En construcción" */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E67E22]/20 border border-[#E67E22] text-[#ffb86c] text-xs font-bold shadow-sm">
              <AlertTriangle className="w-4 h-4 text-[#ffb86c]" />
              <span className="font-['JetBrains_Mono'] uppercase tracking-wider">
                Módulo en Construcción — Versión Beta
              </span>
            </div>
          </div>

          <div className="max-w-3xl mb-8">
            <h1 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Biblioteca Digital de Fisioterapia &amp; Rehabilitación
            </h1>
            <p className="text-sm sm:text-base text-white/85 leading-relaxed">
              Repositorio centralizado de guías clínicas estandarizadas, escalas de Rango de Movilidad (ROM) validadas internacionalmente y monografías terapéuticas basadas en evidencia rigurosa.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-[#0f4c5c] border border-white/10 text-xs">
            <div>
              <span className="text-[#c7eae1] block text-[11px]">DOCUMENTOS</span>
              <span className="font-bold text-base text-white font-['Space_Grotesk']">400+ Guías</span>
            </div>
            <div>
              <span className="text-[#c7eae1] block text-[11px]">NIVEL EVIDENCIA</span>
              <span className="font-bold text-base text-[#5ce9fe] font-['Space_Grotesk']">Nivel I-II CEBM</span>
            </div>
            <div>
              <span className="text-[#c7eae1] block text-[11px]">ESCALAS ROM</span>
              <span className="font-bold text-base text-white font-['Space_Grotesk']">58 Validadas</span>
            </div>
            <div>
              <span className="text-[#c7eae1] block text-[11px]">INTEGRACIÓN</span>
              <span className="font-bold text-base text-[#5ce9fe] font-['Space_Grotesk']">FisioSinapsis</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Search & Filter Bar */}
      <section className="w-full py-8 bg-white border-b border-[#e0e3e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-[#70787c] absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Buscar por patología, código o autor (ej. LCA, McKenzie, Manguito)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-11 pl-10 pr-4 rounded-xl border border-[#c0c8cb] text-xs sm:text-sm text-[#191c1e] bg-[#f7f9fb] focus:outline-none focus:border-[#006874] focus:bg-white"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {['Todos', 'Rodilla & LCA', 'Columna & Hernia', 'Hombro & Manguito', 'Tobillo & Pie'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#003441] text-white'
                      : 'bg-[#f2f4f6] text-[#555555] hover:bg-[#e0e3e5]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Catalog: MANDATORY TEXT CHANGE: "Protocolos de Tratamiento" (not Quirúrgicos) */}
      <section className="w-full py-12 bg-[#f7f9fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-['JetBrains_Mono'] font-bold text-[#006874] tracking-widest uppercase">
                CATÁLOGO TRONCAL
              </span>
              <h2 className="font-['Space_Grotesk'] text-2xl font-bold text-[#262b38] mt-1">
                Protocolos de Tratamiento Clínico Estandarizados
              </h2>
            </div>
            <span className="text-xs text-[#70787c] hidden sm:inline">
              Formatos: PDF Interactivo y Guía Clínica
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProtocols.map((protocol) => (
              <div
                key={protocol.code}
                className="bg-white rounded-xl p-6 border border-[#e0e3e5] shadow-sm flex flex-col justify-between hover:border-[#006874] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-['JetBrains_Mono'] font-bold px-2 py-0.5 rounded bg-[#f2f4f6] text-[#003441]">
                      {protocol.code}
                    </span>
                    <span className="text-[10px] font-semibold text-[#006874]">{protocol.phases}</span>
                  </div>

                  <h3 className="font-['Space_Grotesk'] text-base font-bold text-[#003441] mb-2 leading-snug">
                    {protocol.title}
                  </h3>

                  <p className="text-xs text-[#555555] leading-relaxed mb-4">
                    {protocol.description}
                  </p>
                </div>

                <div>
                  <div className="p-3 bg-[#f7f9fb] rounded-lg border border-[#eceef0] text-[11px] text-[#003441] font-semibold mb-4">
                    <span className="block text-[10px] text-[#70787c] uppercase font-bold">Criterio de Progresión:</span>
                    {protocol.criteria}
                  </div>

                  <div className="flex items-center gap-2 pt-3 border-t border-[#eceef0]">
                    <button
                      onClick={() => setDownloadModalProtocol(protocol.title)}
                      className="flex-1 h-9 rounded-lg bg-[#003441] text-white font-semibold text-xs flex items-center justify-center gap-1.5 hover:bg-[#0f4c5c] transition-colors cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Descargar PDF</span>
                    </button>
                    <button
                      onClick={() => onNavigate('planes-saas')}
                      className="h-9 px-3 rounded-lg border border-[#c0c8cb] text-[#003441] font-semibold text-xs hover:bg-[#f2f4f6] transition-colors cursor-pointer"
                    >
                      Ver en SaaS
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Medición Clínica & Goniómetro Digital */}
      <section className="w-full py-16 bg-white border-t border-[#e0e3e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-['JetBrains_Mono'] font-bold text-[#006874] tracking-widest uppercase">
              MEDICIÓN CLÍNICA ESTANDARIZADA
            </span>
            <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#262b38] mt-1">
              Guías Metodológicas y Valores de Referencia ROM
            </h3>
            <p className="text-xs sm:text-sm text-[#555555] mt-1">
              Hojas metodológicas con valores de normalidad por articulación, edad y género para fisioterapeutas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Box 1: Protocolo ROM */}
            <div className="p-6 rounded-2xl bg-[#f7f9fb] border border-[#e0e3e5] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-['Space_Grotesk'] text-base font-bold text-[#003441] flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#006874]" />
                    Protocolo Goniométrico Digital (ROM)
                  </span>
                  <span className="text-[10px] font-['JetBrains_Mono'] font-bold px-2 py-0.5 bg-[#c7eae1] text-[#003441] rounded">
                    ISOM-Standard
                  </span>
                </div>

                <p className="text-xs text-[#555555] leading-relaxed mb-6">
                  Instrucciones estandarizadas para alineación de goniómetro digital y goniómetro manual universal en ejes articulares. Criterios de tope final capsular, muscular o cartilaginoso.
                </p>

                <div className="bg-white p-4 rounded-xl border border-[#e0e3e5] space-y-3 mb-6">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-[#555555]">Flexión Activa de Rodilla:</span>
                    <span className="font-['Space_Grotesk'] text-base font-bold text-[#006874]">125° - 145°</span>
                  </div>
                  <div className="w-full bg-[#eceef0] h-2 rounded-full overflow-hidden">
                    <div className="bg-[#006874] h-full rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <div className="text-[11px] text-[#70787c] grid grid-cols-2 gap-2 pt-1">
                    <span>Eje: Epicóndilo lateral</span>
                    <span>Brazo fijo: Trocánter mayor</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setDownloadModalProtocol('Manual Goniométrico Digital')}
                className="w-full py-2.5 rounded-lg border border-[#003441] text-[#003441] hover:bg-[#003441] hover:text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Manual Goniométrico PDF</span>
              </button>
            </div>

            {/* Box 2: Escalas de Evaluación Funcional (NO dinamometría isométrica, NO sensores IMU) */}
            <div className="p-6 rounded-2xl bg-[#f7f9fb] border border-[#e0e3e5] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-['Space_Grotesk'] text-base font-bold text-[#003441] flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#006874]" />
                    Escalas de Evaluación Funcional
                  </span>
                  <span className="text-[10px] font-['JetBrains_Mono'] font-bold px-2 py-0.5 bg-[#c7eae1] text-[#003441] rounded">
                    Batería Clínica
                  </span>
                </div>

                <p className="text-xs text-[#555555] leading-relaxed mb-6">
                  Cuestionarios e índices clínicos de referencia internacional para medición objetiva de discapacidad física, dolor y capacidad funcional en extremidades y columna.
                </p>

                <div className="bg-white rounded-xl border border-[#e0e3e5] overflow-hidden mb-6 text-xs">
                  <table className="w-full text-left">
                    <thead className="bg-[#f2f4f6] text-[11px] text-[#003441] font-bold">
                      <tr>
                        <th className="p-2.5">Escala</th>
                        <th className="p-2.5">Aplicación</th>
                        <th className="p-2.5">Puntaje Normal</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#eceef0] text-[11px] text-[#555555]">
                      <tr>
                        <td className="p-2.5 font-semibold text-[#003441]">WOMAC</td>
                        <td className="p-2.5">Osteoartritis de Rodilla/Cadera</td>
                        <td className="p-2.5">&lt; 15 pts</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-semibold text-[#003441]">Oswestry (ODI)</td>
                        <td className="p-2.5">Discapacidad Lumbar</td>
                        <td className="p-2.5">&lt; 20% leve</td>
                      </tr>
                      <tr>
                        <td className="p-2.5 font-semibold text-[#003441]">QuickDASH</td>
                        <td className="p-2.5">Extremidad Superior</td>
                        <td className="p-2.5">&lt; 15 pts</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <button
                onClick={() => setDownloadModalProtocol('Batería de Escalas Funcionales')}
                className="w-full py-2.5 rounded-lg border border-[#003441] text-[#003441] hover:bg-[#003441] hover:text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Descargar Batería de Escalas PDF</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Formación Continua (Campus Moodle AlphaDigitalFisio) */}
      <section className="w-full py-16 bg-[#003441] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GraduationCap className="w-10 h-10 text-[#5ce9fe] mx-auto mb-3" />
          <span className="text-xs font-['JetBrains_Mono'] text-[#5ce9fe] font-bold uppercase tracking-wider block mb-2">
            CAMPUS VIRTUAL ALPHADIGITALFISIO
          </span>
          <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold mb-4">
            Formación Continua &amp; Acreditación Profesional
          </h2>
          <p className="text-xs sm:text-sm text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Plataforma educativa con cursos de mecanotransducción celular, ecografía funcional y estandarización en escalas de expediente electrónico.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contacto')}
              className="h-11 px-6 rounded-lg bg-[#5ce9fe] text-[#001f24] font-bold text-xs hover:bg-[#98f0ff] transition-colors shadow-lg cursor-pointer"
            >
              Solicitar Acceso a Campus
            </button>
            <button
              onClick={() => onNavigate('conocenos')}
              className="h-11 px-5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors cursor-pointer"
            >
              Conocer Aval Curricular
            </button>
          </div>
        </div>
      </section>

      {/* Download confirmation feedback modal */}
      {downloadModalProtocol && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full text-center shadow-xl border border-[#c0c8cb]/30">
            <div className="w-12 h-12 rounded-full bg-[#c7eae1] text-[#006874] flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="font-['Space_Grotesk'] text-lg font-bold text-[#003441] mb-2">
              Descargando Documento
            </h4>
            <p className="text-xs text-[#555555] mb-4">
              Se ha generado la ficha técnica oficial para:{' '}
              <strong className="text-[#003441]">{downloadModalProtocol}</strong>.
            </p>
            <button
              onClick={() => setDownloadModalProtocol(null)}
              className="w-full py-2.5 rounded-lg bg-[#003441] text-white text-xs font-semibold hover:bg-[#0f4c5c]"
            >
              Aceptar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
