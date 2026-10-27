import React, { useState } from 'react';
import { getWhatsAppUrl } from '../constants/contact';

interface DayOption {
  dateStr: string; // e.g. "2026-08-13"
  dayName: string; // e.g. "Jueves"
  dayNum: string;  // e.g. "13"
  monthName: string; // e.g. "Ago"
  status: 'Disponible' | 'Pocos turnos';
}

const GENERATED_DAYS: DayOption[] = [
  { dateStr: '2026-08-13', dayName: 'Jueves', dayNum: '13', monthName: 'Ago', status: 'Disponible' },
  { dateStr: '2026-08-14', dayName: 'Viernes', dayNum: '14', monthName: 'Ago', status: 'Disponible' },
  { dateStr: '2026-08-15', dayName: 'Sábado', dayNum: '15', monthName: 'Ago', status: 'Pocos turnos' },
  { dateStr: '2026-08-17', dayName: 'Lunes', dayNum: '17', monthName: 'Ago', status: 'Disponible' },
  { dateStr: '2026-08-18', dayName: 'Martes', dayNum: '18', monthName: 'Ago', status: 'Disponible' },
  { dateStr: '2026-08-19', dayName: 'Miércoles', dayNum: '19', monthName: 'Ago', status: 'Disponible' },
  { dateStr: '2026-08-20', dayName: 'Jueves', dayNum: '20', monthName: 'Ago', status: 'Disponible' },
  { dateStr: '2026-08-21', dayName: 'Viernes', dayNum: '21', monthName: 'Ago', status: 'Pocos turnos' },
  { dateStr: '2026-08-22', dayName: 'Sábado', dayNum: '22', monthName: 'Ago', status: 'Disponible' },
];

const MORNING_SLOTS = ['09:00 hs', '09:30 hs', '10:00 hs', '10:30 hs', '11:00 hs', '11:30 hs', '12:00 hs'];
const AFTERNOON_SLOTS = ['15:00 hs', '15:30 hs', '16:00 hs', '16:30 hs', '17:00 hs', '17:30 hs', '18:00 hs'];

export const CustomCalendar: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<DayOption>(GENERATED_DAYS[0]);
  const [selectedTime, setSelectedTime] = useState<string>('10:00 hs');
  const [modality, setModality] = useState<'Videollamada' | 'Presencial'>('Videollamada');
  const [specialty, setSpecialty] = useState<string>('Defensa Penal / Ciberdelito');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
  const [isBookedSuccess, setIsBookedSuccess] = useState<boolean>(false);

  const handleOpenConfirm = () => {
    setShowConfirmModal(true);
  };

  const generateWhatsAppUrl = () => {
    const message =
      `Hola Leandro Rodríguez, quiero confirmar mi consulta agendada:\n` +
      `- *Nombre:* ${clientName || 'Cliente'}\n` +
      `- *Teléfono:* ${clientPhone || 'No especificado'}\n` +
      `- *Especialidad:* ${specialty}\n` +
      `- *Fecha:* ${selectedDay.dayName} ${selectedDay.dayNum} de ${selectedDay.monthName}\n` +
      `- *Horario:* ${selectedTime}\n` +
      `- *Modalidad:* ${modality === 'Videollamada' ? 'Videollamada (Google Meet)' : 'Presencial (Estudio en Córdoba)'}`;
    return getWhatsAppUrl(message);
  };

  const handleFinalBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBookedSuccess(true);
    // Redirect to WhatsApp after brief feedback
    setTimeout(() => {
      window.open(generateWhatsAppUrl(), '_blank');
    }, 800);
  };

  return (
    <div className="w-full space-y-8 text-white">
      {/* 1. SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#081627]/80 border border-[#CBD5E1]/40 text-[#F1F5F9] text-xs font-semibold uppercase tracking-wider shadow-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>AGENDA SINCRO EN TIEMPO REAL</span>
        </div>

        <h3 className="font-serif-brand text-2xl sm:text-3xl lg:text-4xl font-bold text-silver-metallic tracking-wide">
          Seleccioná tu turno en la grilla oficial
        </h3>

        <p className="text-sm sm:text-base text-[#CBD5E1] font-light max-w-2xl mx-auto leading-relaxed">
          Elegí la fecha, la hora y la modalidad deseada. Todos los bloques de horarios están claramente divididos para garantizar tu atención exclusiva.
        </p>
      </div>

      {/* 2. MAIN CALENDAR GRID CONTAINER */}
      <div className="rounded-2xl border-2 border-[#CBD5E1]/40 bg-[#051020]/90 backdrop-blur-xl shadow-2xl p-4 sm:p-8 space-y-8 relative overflow-hidden">
        {/* Decorative Grid Lines Glow */}
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#0B1E3D]/30 rounded-full blur-3xl pointer-events-none" />

        {/* STEP 1: DATE GRID (DÍAS) WITH VISIBLE DIVISION LINES */}
        <div className="space-y-3">
          <div className="flex items-center justify-between border-b border-[#CBD5E1]/20 pb-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#F1F5F9] uppercase tracking-wider">
              <span className="w-6 h-6 rounded-md bg-[#0B1E3D] border border-[#CBD5E1]/40 text-xs flex items-center justify-center text-amber-300 font-bold">1</span>
              <span>Seleccioná el Día de la Consulta</span>
            </div>
            <span className="text-xs text-[#CBD5E1]">Agosto 2026</span>
          </div>

          {/* Grid with explicit cell border dividers */}
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-0 border-2 border-[#CBD5E1]/30 rounded-xl overflow-hidden divide-x divide-y divide-[#CBD5E1]/25 bg-[#081627]/60">
            {GENERATED_DAYS.map((day) => {
              const isSelected = selectedDay.dateStr === day.dateStr;
              return (
                <button
                  key={day.dateStr}
                  type="button"
                  onClick={() => setSelectedDay(day)}
                  className={`p-3 sm:p-4 text-center transition-all flex flex-col items-center justify-between min-h-[95px] relative group ${
                    isSelected
                      ? 'bg-gradient-to-b from-[#0B1E3D] to-[#081627] text-white ring-2 ring-amber-400 ring-inset shadow-lg z-10'
                      : 'hover:bg-[#0B1E3D]/40 text-[#CBD5E1] hover:text-white'
                  }`}
                >
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-[#CBD5E1]">
                    {day.dayName}
                  </span>
                  <span className={`text-xl sm:text-2xl font-extrabold my-0.5 ${isSelected ? 'text-amber-300 scale-110' : 'text-white'}`}>
                    {day.dayNum}
                  </span>
                  <span className="text-[10px] font-medium text-[#CBD5E1]/80">
                    {day.monthName}
                  </span>

                  {/* Status Indicator Pill */}
                  <span
                    className={`mt-1 text-[9px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider border ${
                      day.status === 'Disponible'
                        ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40'
                        : 'bg-amber-950/80 text-amber-300 border-amber-500/40'
                    }`}
                  >
                    {day.status === 'Disponible' ? 'Disponible' : 'Pocos turnos'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* STEP 2: TIME SLOTS GRID (HORARIOS) WITH VISIBLE DIVISION LINES */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-[#CBD5E1]/20 pb-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#F1F5F9] uppercase tracking-wider">
              <span className="w-6 h-6 rounded-md bg-[#0B1E3D] border border-[#CBD5E1]/40 text-xs flex items-center justify-center text-amber-300 font-bold">2</span>
              <span>Seleccioná la Hora ({selectedDay.dayName} {selectedDay.dayNum} de {selectedDay.monthName})</span>
            </div>
            <span className="text-xs text-amber-300 font-medium">Turno de 45 minutos</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Morning Section */}
            <div className="border border-[#CBD5E1]/30 rounded-xl p-4 bg-[#081627]/50 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider">
                <i className="fa-regular fa-sun" />
                <span>Turno Mañana (09:00 hs - 12:30 hs)</span>
              </div>
              
              {/* Grid of Slots with explicit borders */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {MORNING_SLOTS.map((slot) => {
                  const isSelected = selectedTime === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTime(slot)}
                      className={`py-2.5 px-3 rounded-lg text-xs font-bold transition-all border text-center flex items-center justify-center gap-1.5 ${
                        isSelected
                          ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-md scale-102 font-extrabold'
                          : 'bg-[#051020]/80 text-[#F1F5F9] border-[#CBD5E1]/30 hover:bg-[#0B1E3D] hover:border-[#CBD5E1]/60'
                      }`}
                    >
                      <i className={`fa-regular fa-clock text-[11px] ${isSelected ? 'text-slate-950' : 'text-amber-400'}`} />
                      <span>{slot}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Afternoon Section */}
            <div className="border border-[#CBD5E1]/30 rounded-xl p-4 bg-[#081627]/50 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider">
                <i className="fa-regular fa-moon" />
                <span>Turno Tarde (15:00 hs - 18:30 hs)</span>
              </div>

              {/* Grid of Slots with explicit borders */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {AFTERNOON_SLOTS.map((slot) => {
                  const isSelected = selectedTime === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTime(slot)}
                      className={`py-2.5 px-3 rounded-lg text-xs font-bold transition-all border text-center flex items-center justify-center gap-1.5 ${
                        isSelected
                          ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-md scale-102 font-extrabold'
                          : 'bg-[#051020]/80 text-[#F1F5F9] border-[#CBD5E1]/30 hover:bg-[#0B1E3D] hover:border-[#CBD5E1]/60'
                      }`}
                    >
                      <i className={`fa-regular fa-clock text-[11px] ${isSelected ? 'text-slate-950' : 'text-amber-400'}`} />
                      <span>{slot}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* STEP 3: MODALITY SELECTOR */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-[#F1F5F9] uppercase tracking-wider border-b border-[#CBD5E1]/20 pb-3">
            <span className="w-6 h-6 rounded-md bg-[#0B1E3D] border border-[#CBD5E1]/40 text-xs flex items-center justify-center text-amber-300 font-bold">3</span>
            <span>Seleccioná la Modalidad de Atención</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setModality('Videollamada')}
              className={`p-4 rounded-xl border-2 text-left transition-all flex items-center gap-4 ${
                modality === 'Videollamada'
                  ? 'bg-[#0B1E3D] border-amber-400 text-white shadow-lg'
                  : 'bg-[#081627]/60 border-[#CBD5E1]/25 text-[#CBD5E1] hover:bg-[#081627]'
              }`}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-xl shrink-0 ${
                modality === 'Videollamada' ? 'bg-amber-400 text-slate-950' : 'bg-[#051020] text-amber-300 border border-[#CBD5E1]/20'
              }`}>
                <i className="fa-solid fa-video" />
              </div>
              <div>
                <span className="block font-bold text-sm text-white">Videollamada (Google Meet)</span>
                <span className="text-xs text-[#CBD5E1]/80 block mt-0.5">Atención 100% remota desde cualquier punto del país.</span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setModality('Presencial')}
              className={`p-4 rounded-xl border-2 text-left transition-all flex items-center gap-4 ${
                modality === 'Presencial'
                  ? 'bg-[#0B1E3D] border-amber-400 text-white shadow-lg'
                  : 'bg-[#081627]/60 border-[#CBD5E1]/25 text-[#CBD5E1] hover:bg-[#081627]'
              }`}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-xl shrink-0 ${
                modality === 'Presencial' ? 'bg-amber-400 text-slate-950' : 'bg-[#051020] text-amber-300 border border-[#CBD5E1]/20'
              }`}>
                <i className="fa-solid fa-building-columns" />
              </div>
              <div>
                <span className="block font-bold text-sm text-white">Presencial en Estudio</span>
                <span className="text-xs text-[#CBD5E1]/80 block mt-0.5">Cofico, Córdoba</span>
              </div>
            </button>
          </div>
        </div>

        {/* STEP 4: SUMMARY & CONFIRMATION ACTION BOX */}
        <div className="p-5 sm:p-6 rounded-xl border-2 border-amber-400/60 bg-gradient-to-r from-[#0B1E3D] via-[#081627] to-[#051020] shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
              RESUMEN DE TU SELECCIÓN
            </span>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1 text-base sm:text-lg font-bold text-white pt-1">
              <span className="flex items-center gap-1.5 text-amber-300">
                <i className="fa-regular fa-calendar-days text-sm" />
                {selectedDay.dayName} {selectedDay.dayNum} de {selectedDay.monthName}
              </span>
              <span className="text-[#CBD5E1]/40 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 text-white">
                <i className="fa-regular fa-clock text-sm text-amber-400" />
                {selectedTime}
              </span>
              <span className="text-[#CBD5E1]/40 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 text-emerald-300 text-sm">
                <i className={modality === 'Videollamada' ? 'fa-solid fa-video' : 'fa-solid fa-building-columns'} />
                {modality}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleOpenConfirm}
            className="w-full md:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-extrabold text-sm tracking-wide shadow-xl hover:scale-[1.03] active:scale-95 transition-all shrink-0 flex items-center justify-center gap-2"
          >
            <i className="fa-regular fa-circle-check text-lg" />
            <span>CONFIRMAR Y AGENDAR AHORA →</span>
          </button>
        </div>

      </div>

      {/* 3. TRUST BADGES ROW (DEFINED BORDER CARDS - NO EMPTY BLOCKS) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <div className="p-4 rounded-xl bg-[#081627]/80 border border-[#CBD5E1]/30 flex items-start gap-3 backdrop-blur-md shadow-sm">
          <div className="w-10 h-10 rounded-lg bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center text-lg shrink-0">
            <i className="fa-solid fa-shield-halved" />
          </div>
          <div>
            <span className="block text-xs font-bold text-white uppercase tracking-wider">Atención Confidencial</span>
            <span className="text-xs text-[#CBD5E1]/90 block mt-0.5 leading-relaxed">
              Resguardo estricto del secreto profesional desde la primera consulta.
            </span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#081627]/80 border border-[#CBD5E1]/30 flex items-start gap-3 backdrop-blur-md shadow-sm">
          <div className="w-10 h-10 rounded-lg bg-[#051020] border border-amber-400/40 text-amber-300 flex items-center justify-center text-lg shrink-0">
            <i className="fa-regular fa-bell" />
          </div>
          <div>
            <span className="block text-xs font-bold text-white uppercase tracking-wider">Confirmación Instantánea</span>
            <span className="text-xs text-[#CBD5E1]/90 block mt-0.5 leading-relaxed">
              Recibís notificación inmediata con el enlace de Google Meet o la dirección.
            </span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#081627]/80 border border-[#CBD5E1]/30 flex items-start gap-3 backdrop-blur-md shadow-sm">
          <div className="w-10 h-10 rounded-lg bg-[#051020] border border-[#CBD5E1]/30 text-[#F1F5F9] flex items-center justify-center text-lg shrink-0">
            <i className="fa-solid fa-location-dot text-red-400" />
          </div>
          <div>
            <span className="block text-xs font-bold text-white uppercase tracking-wider">Sede Córdoba Capital</span>
            <span className="text-xs text-[#CBD5E1]/90 block mt-0.5 leading-relaxed">
              Estudio Jurídico en Cofico, Córdoba o atención remota.
            </span>
          </div>
        </div>
      </div>

      {/* 4. MODAL DE CONFIRMACIÓN FINAL */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-lg p-6 sm:p-8 rounded-2xl bg-[#081627] border-2 border-amber-400/80 shadow-2xl space-y-6 relative">
            <button
              type="button"
              onClick={() => setShowConfirmModal(false)}
              className="absolute top-4 right-4 text-[#CBD5E1] hover:text-white text-xl p-2"
            >
              ✕
            </button>

            <div className="text-center space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
                COMPLETAR DATOS DE RESERVA
              </span>
              <h4 className="font-serif-brand text-2xl font-bold text-white">
                Cita para el {selectedDay.dayName} {selectedDay.dayNum} a las {selectedTime}
              </h4>
              <p className="text-xs text-[#CBD5E1]">
                Modalidad: <span className="font-bold text-white">{modality}</span>
              </p>
            </div>

            {isBookedSuccess ? (
              <div className="p-6 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-center space-y-3">
                <i className="fa-solid fa-circle-check text-4xl text-emerald-400 animate-bounce" />
                <h5 className="font-bold text-lg text-white">¡Reserva registrada con éxito!</h5>
                <p className="text-xs text-emerald-200">
                  Abriendo tu WhatsApp para enviar la confirmación directa a Leandro Rodríguez...
                </p>
              </div>
            ) : (
              <form onSubmit={handleFinalBooking} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#CBD5E1] uppercase tracking-wider mb-1">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Ej. Martín González"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#051020] border border-[#CBD5E1]/30 text-white text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#CBD5E1] uppercase tracking-wider mb-1">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="+54 351 1234567"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#051020] border border-[#CBD5E1]/30 text-white text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#CBD5E1] uppercase tracking-wider mb-1">
                    Especialidad / Asunto *
                  </label>
                  <select
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#051020] border border-[#CBD5E1]/30 text-white text-sm focus:outline-none focus:border-amber-400"
                  >
                    <option value="Defensa Penal">Defensa Penal</option>
                    <option value="Ciberdelito / Estafa">Ciberdelito / Estafa Virtual</option>
                    <option value="Derecho del Consumidor">Derecho del Consumidor</option>
                    <option value="Civil y Familia">Civil y Familia</option>
                    <option value="Laboral y ART">Derecho Laboral y ART</option>
                    <option value="Otro asunto">Otro asunto legal</option>
                  </select>
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowConfirmModal(false)}
                    className="px-4 py-2.5 rounded-lg text-xs font-bold text-[#CBD5E1] hover:text-white"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg flex items-center gap-2"
                  >
                    <i className="fa-brands fa-whatsapp text-sm" />
                    <span>Confirmar por WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
