/* ============================================================
   Venus Diosa – Booking App Logic
   Bilingual: English / Spanish
   ============================================================ */

/* ── Translations ────────────────────────────────────────────── */
const TRANSLATIONS = {
  en: {
    /* Page meta */
    pageTitle:      'Venus Diosa – Book Your Appointment',
    /* Header */
    ornament:       'Nail Artistry \u00a0·\u00a0 By Appointment Only',
    tagline:        'Where every hand becomes a goddess\u2019s canvas',
    /* Steps */
    step1: 'Service',
    step2: 'Date & Time',
    step3: 'Your Info',
    step4: 'Confirm',
    /* Panel 1 */
    chooseService:  'Choose your service',
    svc1Name: 'Classic Manicure',       svc1Meta: 'Shape, buff & polish · 45 min',
    svc2Name: 'Gel Manicure',           svc2Meta: 'Long-lasting gel colour · 60 min',
    svc3Name: 'Acrylic Full Set',       svc3Meta: 'Full acrylic extensions · 90 min',
    svc4Name: 'Luxury Nail Art Set',    svc4Meta: '3D florals, rhinestones & glassy finish · 210 min',
    svc4Price: 'from $130',
    svc5Name: 'Nail Art Add-on',        svc5Meta: 'Custom designs · +30 min',
    svc5Price: 'from $20',
    svc6Name: 'Spa Pedicure',           svc6Meta: 'Soak, scrub & polish · 60 min',
    svc7Name: 'Gel Removal',            svc7Meta: 'Safe soak-off · 30 min',
    badge:          'Signature',
    /* Panel 2 */
    pickDate:       'Pick a date',
    selectTime:     'Select a time',
    unavailable:    'unavailable',
    /* Panel 3 */
    yourDetails:    'Your details',
    firstName:      'First name',
    lastName:       'Last name',
    emailLabel:     'Email address',
    phoneLabel:     'Phone number',
    notesLabel:     'Notes for your nail artist (optional)',
    notesPlaceholder: 'Colour preferences, allergies, inspo photos, special requests...',
    privacyTitle:   'Your privacy is protected.',
    privacyBody:    'Your personal information is used only to confirm your appointment at Venus Diosa. It is never shared with third parties, never displayed publicly, and is stored securely. Only your nail artist can view your booking details.',
    reviewBooking:  'Review booking',
    /* Panel 4 */
    reviewConfirm:  'Review & confirm',
    confirmPrivacy: 'By confirming, your appointment will be added to the Venus Diosa private calendar. A confirmation will be sent to your email. Your details remain confidential.',
    editDetails:    'Edit details',
    confirmBooking: 'Confirm booking',
    /* Summary labels */
    lblService:     'Service',
    lblDuration:    'Duration',
    lblDate:        'Date',
    lblTime:        'Time',
    lblClient:      'Client',
    lblPrice:       'Price',
    minutes:        'minutes',
    /* Panel 5 */
    bookedTitle:    'You\u2019re booked, goddess!',
    bookedBody:     'Your appointment at <strong>Venus Diosa</strong> is confirmed.<br>A confirmation email is on its way to you.',
    calNote:        '📅 Your appointment has been added to our private calendar.<br>A private calendar invite has been emailed to you.',
    /* Footer */
    footerService:  'Luxury Nail Artistry',
    footerAppt:     'By Appointment Only',
    /* Buttons */
    continue:       'Continue',
    back:           'Back',
    saving:         'Saving…',
    /* Errors */
    errRequired:    'Please fill in all required fields.',
    errEmail:       'Please enter a valid email address.',
    errGeneral:     'Something went wrong. Please try again or contact us directly.',
    /* Calendar */
    months: ['January','February','March','April','May','June',
             'July','August','September','October','November','December'],
    days:   ['Su','Mo','Tu','We','Th','Fr','Sa'],
  },

  es: {
    pageTitle:      'Venus Diosa – Reserva tu Cita',
    ornament:       'Arte de Uñas \u00a0·\u00a0 Solo con Cita Previa',
    tagline:        'Donde cada mano se convierte en el lienzo de una diosa',
    step1: 'Servicio',
    step2: 'Fecha y Hora',
    step3: 'Tus Datos',
    step4: 'Confirmar',
    chooseService:  'Elige tu servicio',
    svc1Name: 'Manicura Clásica',             svc1Meta: 'Forma, pule y esmalta · 45 min',
    svc2Name: 'Manicura de Gel',              svc2Meta: 'Color de gel duradero · 60 min',
    svc3Name: 'Juego Completo Acrílico',      svc3Meta: 'Extensiones de acrílico · 90 min',
    svc4Name: 'Set de Arte de Uñas de Lujo',  svc4Meta: 'Flores 3D, rhinestones y acabado brillante · 210 min',
    svc4Price: 'desde $130',
    svc5Name: 'Arte de Uñas Adicional',       svc5Meta: 'Diseños personalizados · +30 min',
    svc5Price: 'desde $20',
    svc6Name: 'Pedicura de Spa',              svc6Meta: 'Remojo, exfolia y esmalta · 60 min',
    svc7Name: 'Remoción de Gel',              svc7Meta: 'Remoción segura · 30 min',
    badge:          'Exclusivo',
    pickDate:       'Elige una fecha',
    selectTime:     'Selecciona una hora',
    unavailable:    'no disponible',
    yourDetails:    'Tus datos',
    firstName:      'Nombre',
    lastName:       'Apellido',
    emailLabel:     'Correo electrónico',
    phoneLabel:     'Número de teléfono',
    notesLabel:     'Notas para tu artista (opcional)',
    notesPlaceholder: 'Preferencias de color, alergias, fotos de inspiración, solicitudes especiales...',
    privacyTitle:   'Tu privacidad está protegida.',
    privacyBody:    'Tu información personal se usa únicamente para confirmar tu cita en Venus Diosa. Nunca se comparte con terceros, nunca se muestra públicamente y se guarda de forma segura. Solo tu artista puede ver los detalles de tu reserva.',
    reviewBooking:  'Revisar reserva',
    reviewConfirm:  'Revisar y confirmar',
    confirmPrivacy: 'Al confirmar, tu cita se añadirá al calendario privado de Venus Diosa. Se enviará una confirmación a tu correo. Tus datos son confidenciales.',
    editDetails:    'Editar datos',
    confirmBooking: 'Confirmar cita',
    lblService:     'Servicio',
    lblDuration:    'Duración',
    lblDate:        'Fecha',
    lblTime:        'Hora',
    lblClient:      'Cliente',
    lblPrice:       'Precio',
    minutes:        'minutos',
    bookedTitle:    '¡Tu cita está confirmada, diosa!',
    bookedBody:     'Tu cita en <strong>Venus Diosa</strong> ha sido confirmada.<br>Te enviaremos un correo de confirmación.',
    calNote:        '📅 Tu cita ha sido añadida a nuestro calendario privado.<br>Se te ha enviado una invitación de calendario.',
    footerService:  'Arte de Uñas de Lujo',
    footerAppt:     'Solo con Cita Previa',
    continue:       'Continuar',
    back:           'Atrás',
    saving:         'Guardando…',
    errRequired:    'Por favor completa todos los campos requeridos.',
    errEmail:       'Por favor ingresa un correo electrónico válido.',
    errGeneral:     'Algo salió mal. Inténtalo de nuevo o contáctanos directamente.',
    months: ['Enero','Febrero','Marzo','Abril','Mayo','Junio',
             'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
    days:   ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
  },
};

/* ── Active Language ─────────────────────────────────────────── */
let currentLang = 'en';

function t(key) {
  return TRANSLATIONS[currentLang][key] ?? TRANSLATIONS['en'][key] ?? key;
}

/* ── Apply all translations to the DOM ──────────────────────── */
function applyTranslations() {
  document.title = t('pageTitle');
  document.getElementById('html-root').lang = currentLang;

  /* Text nodes */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (val) el.innerHTML = val;
  });

  /* Placeholders */
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = t(key);
    if (val) el.placeholder = val;
  });

  /* Service card names used as booking labels */
  document.querySelectorAll('.service-card').forEach(card => {
    const langAttr = `data-service-${currentLang}`;
    if (card.hasAttribute(langAttr)) {
      card.dataset.service = card.getAttribute(langAttr);
    }
  });

  /* Language toggle buttons */
  document.getElementById('btn-en').classList.toggle('active', currentLang === 'en');
  document.getElementById('btn-es').classList.toggle('active', currentLang === 'es');

  /* Re-render calendar month label if calendar is visible */
  if (calYear) renderCalendar();

  /* Re-render time slots if any exist */
  const grid = document.getElementById('time-grid');
  if (grid && grid.children.length > 0) renderTimeSlots();
}

function setLang(lang) {
  currentLang = lang;
  applyTranslations();
  /* If we're on panel 4 (summary), rebuild it in the new language */
  if (state.step === 4) buildSummary();
}

/* ── Google Calendar Configuration ──────────────────────────── */
const GCAL_CONFIG = {
  clientId:   '844179844473-d114e4lff2qh8ss7eq3uun1otvmtb56c.apps.googleusercontent.com',
  calendarId: 'primary',
  scopes:     'https://www.googleapis.com/auth/calendar.events',
  timeZone:   'America/Chicago',
};

/* ── Booking State ───────────────────────────────────────────── */
const state = {
  step: 1,
  service: null, duration: null, price: null,
  date: null, dateLabel: null, dateISO: null, time: null,
  fname: '', lname: '', email: '', phone: '', notes: '',
};

/* ── Calendar State ──────────────────────────────────────────── */
let calYear, calMonth;

/* ── Schedule Configuration ──────────────────────────────────────
   VENUS DIOSA AVAILABILITY:
   • Tuesday & Wednesday : 10:00 AM – 7:00 PM  (days 2 & 3)
   • All other days      : 3:00 PM  – 7:00 PM  (days 0,1,4,5,6)
   Last appointment slot : 7:00 PM
   No days are fully closed — all 7 days are available.
─────────────────────────────────────────────────────────────── */

const SCHEDULE = {
  // Tuesday (2) and Wednesday (3): full day starting 10 AM
  EARLY_DAYS: [2, 3],
  EARLY_TIMES: [
    '10:00 AM','10:30 AM','11:00 AM','11:30 AM',
    '12:00 PM','12:30 PM','1:00 PM','1:30 PM','2:00 PM','2:30 PM',
    '3:00 PM','3:30 PM','4:00 PM','4:30 PM','5:00 PM','5:30 PM',
    '6:00 PM','6:30 PM','7:00 PM',
  ],
  // All other days: after 3 PM only
  LATE_TIMES: [
    '3:00 PM','3:30 PM','4:00 PM','4:30 PM','5:00 PM','5:30 PM',
    '6:00 PM','6:30 PM','7:00 PM',
  ],
};

/** Returns the correct time slots for a given day-of-week number (0=Sun … 6=Sat) */
function getTimesForDay(dayOfWeek) {
  return SCHEDULE.EARLY_DAYS.includes(dayOfWeek)
    ? SCHEDULE.EARLY_TIMES
    : SCHEDULE.LATE_TIMES;
}

/* ── Init ────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const now = new Date();
  calYear  = now.getFullYear();
  calMonth = now.getMonth();
  applyTranslations();
  initServiceCards();
  initCalendarNav();
  renderCalendar();
});

/* ── Service Cards ───────────────────────────────────────────── */
function initServiceCards() {
  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => selectService(card));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectService(card); }
    });
  });
}

function selectService(card) {
  document.querySelectorAll('.service-card').forEach(c => {
    c.classList.remove('selected');
    c.setAttribute('aria-pressed', 'false');
  });
  card.classList.add('selected');
  card.setAttribute('aria-pressed', 'true');
  state.service  = card.dataset.service;
  state.duration = parseInt(card.dataset.duration, 10);
  state.price    = parseFloat(card.dataset.price);
  document.getElementById('step1-next').disabled = false;
}

/* ── Calendar Nav ────────────────────────────────────────────── */
function initCalendarNav() {
  document.getElementById('prev-month').addEventListener('click', () => {
    calMonth--; if (calMonth < 0) { calMonth = 11; calYear--; } renderCalendar();
  });
  document.getElementById('next-month').addEventListener('click', () => {
    calMonth++; if (calMonth > 11) { calMonth = 0; calYear++; } renderCalendar();
  });
}

/* ── Render Calendar ─────────────────────────────────────────── */
function renderCalendar() {
  const months = t('months');
  document.getElementById('cal-month-label').textContent = `${months[calMonth]} ${calYear}`;

  const grid = document.getElementById('cal-grid');
  grid.innerHTML = '';

  t('days').forEach(name => {
    const el = document.createElement('div');
    el.className = 'cal-day-name';
    el.textContent = name;
    el.setAttribute('aria-hidden', 'true');
    grid.appendChild(el);
  });

  const firstDOW = new Date(calYear, calMonth, 1).getDay();
  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
  const today = new Date(); today.setHours(0, 0, 0, 0);

  for (let i = 0; i < firstDOW; i++) {
    const el = document.createElement('div');
    el.className = 'cal-day empty';
    el.setAttribute('aria-hidden', 'true');
    grid.appendChild(el);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const thisDate = new Date(calYear, calMonth, d);
    const el = document.createElement('div');
    el.className = 'cal-day';
    el.textContent = d;

    const isPast  = thisDate < today;
    const isToday = thisDate.getTime() === today.getTime();
    const key     = `${calYear}-${calMonth}-${d}`;

    if (isPast) {
      el.classList.add('disabled');
      el.setAttribute('aria-disabled', 'true');
    } else {
      if (isToday) el.classList.add('today');
      if (state.date === key) el.classList.add('selected');
      el.setAttribute('role', 'gridcell');
      el.setAttribute('tabindex', '0');
      el.setAttribute('aria-selected', state.date === key ? 'true' : 'false');
      el.addEventListener('click', () => selectDay(d, key, el));
      el.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectDay(d, key, el); }
      });
    }
    grid.appendChild(el);
  }
}

/* ── Select Day ──────────────────────────────────────────────── */
function selectDay(d, key, clickedEl) {
  document.querySelectorAll('.cal-day.selected').forEach(el => {
    el.classList.remove('selected'); el.setAttribute('aria-selected', 'false');
  });
  clickedEl.classList.add('selected');
  clickedEl.setAttribute('aria-selected', 'true');

  state.date       = key;
  state.dateLabel  = `${t('months')[calMonth]} ${d}, ${calYear}`;
  state.dateISO    = `${calYear}-${String(calMonth + 1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
  state.dayOfWeek  = new Date(calYear, calMonth, d).getDay();
  state.time       = null;

  document.getElementById('step2-next').disabled = true;
  renderTimeSlots();
}

/* ── Render Time Slots ───────────────────────────────────────── */
function renderTimeSlots() {
  const grid = document.getElementById('time-grid');
  grid.innerHTML = '';

  // Pick the right slot list based on which day was selected
  const slots = getTimesForDay(state.dayOfWeek ?? new Date().getDay());

  // Show a helpful note about availability
  const note = document.getElementById('schedule-note');
  const isEarlyDay = SCHEDULE.EARLY_DAYS.includes(state.dayOfWeek);
  const noteTextEN = isEarlyDay
    ? 'Available 10:00 AM – 7:00 PM'
    : 'Available 3:00 PM – 7:00 PM';
  const noteTextES = isEarlyDay
    ? 'Disponible 10:00 AM – 7:00 PM'
    : 'Disponible 3:00 PM – 7:00 PM';
  if (note) note.textContent = currentLang === 'es' ? noteTextES : noteTextEN;

  slots.forEach(slot => {
    const el = document.createElement('button');
    el.className   = 'time-slot';
    el.textContent = slot;
    el.type        = 'button';
    if (state.time === slot) el.classList.add('selected');
    el.addEventListener('click', () => selectTime(slot, el));
    grid.appendChild(el);
  });
}

/* ── Select Time ─────────────────────────────────────────────── */
function selectTime(slot, clickedEl) {
  document.querySelectorAll('.time-slot').forEach(el => el.classList.remove('selected'));
  clickedEl.classList.add('selected');
  state.time = slot;
  document.getElementById('step2-next').disabled = false;
}

/* ── Step Navigation ─────────────────────────────────────────── */
function goStep(n) {
  state.step = n;
  document.querySelectorAll('.panel').forEach((panel, i) => {
    panel.classList.toggle('active', i + 1 === n);
  });
  document.querySelectorAll('.step').forEach((step, i) => {
    step.classList.remove('active', 'done');
    if (i + 1 === n)    step.classList.add('active');
    else if (i + 1 < n) step.classList.add('done');
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ── Validate Step 3 ─────────────────────────────────────────── */
function validateStep3() {
  const fname = document.getElementById('fname').value.trim();
  const lname = document.getElementById('lname').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();

  if (!fname || !lname || !email || !phone) {
    showFormError(t('errRequired')); return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showFormError(t('errEmail')); return;
  }

  state.fname = fname; state.lname = lname;
  state.email = email; state.phone = phone;
  state.notes = document.getElementById('notes').value.trim();

  buildSummary();
  goStep(4);
}

function showFormError(msg) {
  let err = document.getElementById('form-error');
  if (!err) {
    err = document.createElement('p');
    err.id = 'form-error';
    err.className = 'error-msg';
    document.getElementById('panel3').querySelector('.btn-row').before(err);
  }
  err.textContent = msg;
}

/* ── Build Summary ───────────────────────────────────────────── */
function buildSummary() {
  document.getElementById('summary-box').innerHTML = `
    <div class="summary-row"><span class="lbl">${t('lblService')}</span><span class="val">${state.service}</span></div>
    <div class="summary-row"><span class="lbl">${t('lblDuration')}</span><span class="val">${state.duration} ${t('minutes')}</span></div>
    <div class="summary-row"><span class="lbl">${t('lblDate')}</span><span class="val">${state.dateLabel}</span></div>
    <div class="summary-row"><span class="lbl">${t('lblTime')}</span><span class="val">${state.time}</span></div>
    <div class="summary-row"><span class="lbl">${t('lblClient')}</span><span class="val">${state.fname} ${state.lname}</span></div>
    <div class="summary-row"><span class="lbl">${t('lblPrice')}</span><span class="val gold">$${state.price.toFixed(2)}</span></div>
  `;
}

/* ── Confirm Booking ─────────────────────────────────────────── */
async function confirmBooking() {
  const btn = document.getElementById('confirm-btn');
  btn.disabled    = true;
  btn.textContent = t('saving');

  try {
    const startISO = buildISODateTime(state.dateISO, state.time);
    const endISO   = addMinutes(startISO, state.duration);

    
    const token = await getGoogleAccessToken();
    const response = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${GCAL_CONFIG.calendarId}/events?sendUpdates=all`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type':  'application/json',
        },
        body: JSON.stringify({
          summary:     `${state.service} – ${state.fname} ${state.lname}`,
          description: `Phone: ${state.phone}\nEmail: ${state.email}\nNotes: ${state.notes || 'None'}`,
          start:  { dateTime: startISO, timeZone: GCAL_CONFIG.timeZone },
          end:    { dateTime: endISO,   timeZone: GCAL_CONFIG.timeZone },
          attendees: [{ email: state.email, displayName: `${state.fname} ${state.lname}` }],
          visibility: 'private',
          guestsCanSeeOtherGuests: false,
          reminders: {
            useDefault: false,
            overrides: [
              { method: 'email', minutes: 60 * 24 },
              { method: 'popup', minutes: 30 },
            ],
          },
        }),
      }
    );
    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.error?.message || 'Google Calendar error');
    }


    document.getElementById('steps').style.display = 'none';
    goStep(5);

  } catch (err) {
    console.error('Booking error:', err);
    btn.disabled    = false;
    btn.textContent = t('confirmBooking');
    alert(`${t('errGeneral')}\n\n${err.message}`);
  }
}

/* ── Google OAuth Token Helper ───────────────────────────────── */
function getGoogleAccessToken() {
  return new Promise((resolve, reject) => {
    if (typeof google === 'undefined') {
      reject(new Error('Google Identity Services script not loaded. Add it to index.html.'));
      return;
    }
    const client = google.accounts.oauth2.initTokenClient({
      client_id: GCAL_CONFIG.clientId,
      scope:     GCAL_CONFIG.scopes,
      callback:  response => {
        if (response.error) { reject(new Error(response.error)); return; }
        resolve(response.access_token);
      },
    });
    client.requestAccessToken({ prompt: 'consent' });
  });
}

/* ── Date / Time Utilities ───────────────────────────────────── */
function buildISODateTime(dateISO, timeStr) {
  const [time, period] = timeStr.split(' ');
  let [hours, minutes] = time.split(':').map(Number);
  if (period === 'PM' && hours !== 12) hours += 12;
  if (period === 'AM' && hours === 12) hours  = 0;
  return `${dateISO}T${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:00`;
}

function addMinutes(isoDateTime, minutes) {
  const date = new Date(isoDateTime);
  date.setMinutes(date.getMinutes() + minutes);
  return date.toISOString().slice(0, 19);
}

function simulateDelay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
