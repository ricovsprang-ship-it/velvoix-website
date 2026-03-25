import type { Locale } from './site';

export interface PlatformTourSlide {
  id: string;
  label: string;
  title: string;
  text: string;
  image: string;
  alt: string;
  objectPosition?: string;
  baseScale?: number;
  initialZoom?: number;
  zoomOrigin?: string;
  offsetX?: number;
  offsetY?: number;
}

export interface PlatformTourContent {
  eyebrow: string;
  title: string;
  description: string;
  supporting: string;
  cta: string;
  previewLabel: string;
  previewTitle: string;
  previewBody: string;
  overlayLabel: string;
  closeLabel: string;
  previousLabel: string;
  nextLabel: string;
  railLabel: string;
  curatedViewsLabel: string;
  slides: PlatformTourSlide[];
}

const slideFraming = {
  login: { image: '/products/platformtour/login.png', objectPosition: 'center center', baseScale: 1, initialZoom: 1.56, zoomOrigin: '50% 58%', offsetY: 0 },
  worklist: { image: '/products/platformtour/worklist.png', objectPosition: 'center top', baseScale: 0.96, zoomOrigin: '50% 0%' },
  notifications: { image: '/products/platformtour/notifications.png', objectPosition: 'center top', baseScale: 0.92, zoomOrigin: '50% 0%' },
  'event-detail': { image: '/products/platformtour/event-detail.png', objectPosition: 'center top', baseScale: 0.92, zoomOrigin: '50% 0%' },
  assign: { image: '/products/platformtour/assign.png', objectPosition: 'center top', baseScale: 0.86, zoomOrigin: '50% 0%' },
  handover: { image: '/products/platformtour/handover.png', objectPosition: 'center top', baseScale: 0.92, zoomOrigin: '50% 0%' },
  'client-context': { image: '/products/platformtour/client-context.png', objectPosition: 'center top', baseScale: 0.96, zoomOrigin: '50% 0%' },
  'care-overview': { image: '/products/platformtour/care-overview.png', objectPosition: 'center top', baseScale: 0.92, zoomOrigin: '50% 0%' },
  management: { image: '/products/platformtour/management.png', objectPosition: 'center top', baseScale: 1, zoomOrigin: '50% 22%' },
  governance: { image: '/products/platformtour/governance-v2.png', objectPosition: 'center top', baseScale: 1, zoomOrigin: '50% 26%' },
} as const;

export const platformTourContent: Record<Locale, PlatformTourContent> = {
  nl: {
    eyebrow: 'Platformtour',
    title: 'Een gecontroleerd inkijkje in het platform',
    description:
      'Tien geselecteerde schermen laten zien hoe Velvoix werkvoorraad, context, opvolging, beheer en governance ordent.',
    supporting:
      'Open de producttour voor een rustige walkthrough van de belangrijkste operationele views.',
    cta: 'Open producttour',
    previewLabel: 'Geselecteerde view',
    previewTitle: 'Eventdetail met context en aanpak',
    previewBody:
      'Een voorbeeld van hoe reden, context en acties samenkomen in een rustige operationele weergave.',
    overlayLabel: 'Producttour',
    closeLabel: 'Sluiten',
    previousLabel: 'Vorige',
    nextLabel: 'Volgende',
    railLabel: 'Onderdelen van de producttour',
    curatedViewsLabel: 'geselecteerde schermen',
    slides: [
      { id: 'login', label: 'Start', title: 'Rustige toegang', text: 'De instap houdt toegang tot de operationele workflow helder en beheerst.', alt: 'Velvoix login scherm', ...slideFraming.login },
      { id: 'worklist', label: 'Werkvoorraad', title: 'Werkvoorraad die leesbaar blijft', text: 'Urgentie, status en acties blijven scanbaar zodat teams sneller kunnen handelen.', alt: 'Velvoix meldingenlijst', ...slideFraming.worklist },
      { id: 'notifications', label: 'Meldingen', title: 'Nieuwe meldingen zonder ruis', text: 'Nieuwe signalen worden zichtbaar zonder de aandacht van het team te versnipperen.', alt: 'Velvoix notificaties', ...slideFraming.notifications },
      { id: 'event-detail', label: 'Eventdetail', title: 'Waarom, context en aanpak bijeen', text: 'Reden, context, tijdlijn en acties komen samen in een rustige operationele view.', alt: 'Velvoix eventdetail', ...slideFraming['event-detail'] },
      { id: 'assign', label: 'Toewijzen', title: 'Snel de juiste collega koppelen', text: 'Toewijzen blijft doelgericht zonder de eventcontext los te laten.', alt: 'Velvoix toewijzen dialoog', ...slideFraming.assign },
      { id: 'handover', label: 'Overdracht', title: 'Overdragen en afronden met context', text: 'Overdracht en afronding blijven uitlegbaar en geschikt voor terugkijken.', alt: 'Velvoix overdracht en afhandeling', ...slideFraming.handover },
      { id: 'client-context', label: 'Clienthistorie', title: 'Relevante context direct bij de hand', text: 'Zorgcontext, recente events en opvolgingshistorie blijven direct beschikbaar.', alt: 'Velvoix clientcontext', ...slideFraming['client-context'] },
      { id: 'care-overview', label: 'Zorgoverzicht', title: 'Sturen zonder dashboardruis', text: 'Operationeel inzicht laat zien waar druk, trend en SLA-risico oplopen.', alt: 'Velvoix zorgoverzicht', ...slideFraming['care-overview'] },
      { id: 'management', label: 'Beheer', title: 'Beheer zonder extra ruis', text: 'Koppelingen, beschikbaarheid en werkvolgorde blijven overzichtelijk en beheerst.', alt: 'Velvoix beheer', ...slideFraming.management },
      { id: 'governance', label: 'Governance', title: 'Governance in een beheerste laag', text: 'Profielen, kwaliteit en technische koppelingen blijven samen georganiseerd.', alt: 'Velvoix governance', ...slideFraming.governance },
    ],
  },
  en: {
    eyebrow: 'Product Tour',
    title: 'A controlled view into the platform',
    description:
      'Ten selected screens show how Velvoix organises worklists, context, follow-up, management and governance.',
    supporting:
      'Open the product tour for a calm walkthrough of the key operational views.',
    cta: 'Open product tour',
    previewLabel: 'Selected view',
    previewTitle: 'Event detail with context and action',
    previewBody:
      'One example of how reason, context and actions come together in a calm operational view.',
    overlayLabel: 'Product Tour',
    closeLabel: 'Close',
    previousLabel: 'Previous',
    nextLabel: 'Next',
    railLabel: 'Product tour sections',
    curatedViewsLabel: 'selected screens',
    slides: [
      { id: 'login', label: 'Start', title: 'A calm entry point', text: 'The entry keeps access to the operational workflow clear and controlled.', alt: 'Velvoix login screen', ...slideFraming.login },
      { id: 'worklist', label: 'Worklist', title: 'A worklist that stays readable', text: 'Urgency, status and actions remain scannable so teams can act faster.', alt: 'Velvoix worklist', ...slideFraming.worklist },
      { id: 'notifications', label: 'Notifications', title: 'New signals without noise', text: 'New signals become visible without fragmenting the attention of the team.', alt: 'Velvoix notifications view', ...slideFraming.notifications },
      { id: 'event-detail', label: 'Event Detail', title: 'Why, context and action together', text: 'Reason, context, timeline and actions stay together in one calm operational view.', alt: 'Velvoix event detail', ...slideFraming['event-detail'] },
      { id: 'assign', label: 'Assign', title: 'Link the right colleague quickly', text: 'Assignment stays targeted without losing the event context.', alt: 'Velvoix assignment dialog', ...slideFraming.assign },
      { id: 'handover', label: 'Handover', title: 'Transfer and resolve with context', text: 'Transfer and completion remain explainable and suitable for review.', alt: 'Velvoix handover and completion dialog', ...slideFraming.handover },
      { id: 'client-context', label: 'Client History', title: 'Relevant context close at hand', text: 'Care context, recent events and follow-up history remain directly available.', alt: 'Velvoix client history view', ...slideFraming['client-context'] },
      { id: 'care-overview', label: 'Care Overview', title: 'Steering without dashboard noise', text: 'Operational insight shows where pressure, trend and SLA risk are rising.', alt: 'Velvoix care overview dashboard', ...slideFraming['care-overview'] },
      { id: 'management', label: 'Management', title: 'Management without extra noise', text: 'Linking, availability and work order remain clear and controlled.', alt: 'Velvoix management view', ...slideFraming.management },
      { id: 'governance', label: 'Governance', title: 'Governance in one controlled layer', text: 'Profiles, quality and technical coupling remain organised together.', alt: 'Velvoix governance view', ...slideFraming.governance },
    ],
  },
  de: {
    eyebrow: 'Plattformtour',
    title: 'Ein kontrollierter Einblick in die Plattform',
    description:
      'Zehn ausgewahlte Ansichten zeigen, wie Velvoix Arbeitsvorrat, Kontext, Nachverfolgung, Verwaltung und Governance ordnet.',
    supporting:
      'Offnen Sie die Produkttour fur einen ruhigen Durchgang durch die wichtigsten operativen Ansichten.',
    cta: 'Produkttour offnen',
    previewLabel: 'Ausgewahlte Ansicht',
    previewTitle: 'Eventdetail mit Kontext und Aktion',
    previewBody:
      'Ein Beispiel dafur, wie Begrundung, Kontext und Aktionen in einer ruhigen operativen Ansicht zusammenkommen.',
    overlayLabel: 'Plattformtour',
    closeLabel: 'Schliessen',
    previousLabel: 'Zuruck',
    nextLabel: 'Weiter',
    railLabel: 'Abschnitte der Produkttour',
    curatedViewsLabel: 'ausgewahlte Ansichten',
    slides: [
      { id: 'login', label: 'Start', title: 'Ruhiger Einstieg', text: 'Der Einstieg halt den Zugang zum operativen Workflow klar und kontrolliert.', alt: 'Velvoix Login', ...slideFraming.login },
      { id: 'worklist', label: 'Arbeitsvorrat', title: 'Arbeitsvorrat, der lesbar bleibt', text: 'Dringlichkeit, Status und Aktionen bleiben scanbar, damit Teams schneller handeln konnen.', alt: 'Velvoix Arbeitsvorrat', ...slideFraming.worklist },
      { id: 'notifications', label: 'Meldungen', title: 'Neue Signale ohne Rauschen', text: 'Neue Signale werden sichtbar, ohne die Aufmerksamkeit des Teams zu zerstreuen.', alt: 'Velvoix Benachrichtigungen', ...slideFraming.notifications },
      { id: 'event-detail', label: 'Eventdetail', title: 'Warum, Kontext und Aktion zusammen', text: 'Begrundung, Kontext, Zeitlinie und Aktionen bleiben in einer ruhigen Ansicht zusammen.', alt: 'Velvoix Eventdetail', ...slideFraming['event-detail'] },
      { id: 'assign', label: 'Zuweisen', title: 'Schnell die richtige Person koppeln', text: 'Die Zuweisung bleibt zielgerichtet, ohne den Eventkontext zu verlieren.', alt: 'Velvoix Zuweisung', ...slideFraming.assign },
      { id: 'handover', label: 'Ubergabe', title: 'Mit Kontext ubergeben und abschliessen', text: 'Ubergabe und Abschluss bleiben erklarbar und fur die Ruckschau geeignet.', alt: 'Velvoix Bearbeitung', ...slideFraming.handover },
      { id: 'client-context', label: 'Klientenhistorie', title: 'Relevanter Kontext direkt zur Hand', text: 'Pflegekontext, letzte Events und Nachverfolgung bleiben direkt verfugbar.', alt: 'Velvoix Klientenhistorie', ...slideFraming['client-context'] },
      { id: 'care-overview', label: 'Pflegeubersicht', title: 'Steuerung ohne Dashboard-Rauschen', text: 'Der operative Uberblick zeigt, wo Druck, Trend und SLA-Risiko steigen.', alt: 'Velvoix Pflegeubersicht', ...slideFraming['care-overview'] },
      { id: 'management', label: 'Verwaltung', title: 'Verwaltung ohne Zusatzrauschen', text: 'Kopplungen, Verfugbarkeit und Arbeitsreihenfolge bleiben klar und kontrolliert.', alt: 'Velvoix Verwaltung', ...slideFraming.management },
      { id: 'governance', label: 'Governance', title: 'Governance in einer gefuhrten Ebene', text: 'Profile, Qualitat und technische Kopplungen bleiben gemeinsam organisiert.', alt: 'Velvoix Governance', ...slideFraming.governance },
    ],
  },
  es: {
    eyebrow: 'Recorrido del producto',
    title: 'Una vista controlada de la plataforma',
    description:
      'Diez pantallas seleccionadas muestran como Velvoix ordena lista de trabajo, contexto, seguimiento, gestion y gobernanza.',
    supporting:
      'Abra el recorrido del producto para una lectura tranquila de las vistas operativas clave.',
    cta: 'Abrir recorrido',
    previewLabel: 'Vista seleccionada',
    previewTitle: 'Detalle del evento con contexto y accion',
    previewBody:
      'Un ejemplo de como motivo, contexto y acciones se reunen en una vista operativa serena.',
    overlayLabel: 'Recorrido de la plataforma',
    closeLabel: 'Cerrar',
    previousLabel: 'Anterior',
    nextLabel: 'Siguiente',
    railLabel: 'Secciones del recorrido',
    curatedViewsLabel: 'pantallas seleccionadas',
    slides: [
      { id: 'login', label: 'Inicio', title: 'Entrada serena', text: 'La entrada mantiene claro y controlado el acceso al flujo operativo.', alt: 'Pantalla de acceso de Velvoix', ...slideFraming.login },
      { id: 'worklist', label: 'Lista de trabajo', title: 'Lista de trabajo que sigue siendo legible', text: 'La urgencia, el estado y las acciones siguen siendo faciles de escanear para actuar antes.', alt: 'Lista de trabajo de Velvoix', ...slideFraming.worklist },
      { id: 'notifications', label: 'Notificaciones', title: 'Nuevas senales sin ruido', text: 'Las nuevas senales se vuelven visibles sin dispersar la atencion del equipo.', alt: 'Vista de notificaciones de Velvoix', ...slideFraming.notifications },
      { id: 'event-detail', label: 'Detalle del evento', title: 'Motivo, contexto y accion juntos', text: 'Motivo, contexto, linea temporal y acciones permanecen reunidos en una vista serena.', alt: 'Detalle del evento de Velvoix', ...slideFraming['event-detail'] },
      { id: 'assign', label: 'Asignar', title: 'Vincular rapidamente a la persona adecuada', text: 'La asignacion se mantiene directa sin perder el contexto del evento.', alt: 'Dialogo de asignacion de Velvoix', ...slideFraming.assign },
      { id: 'handover', label: 'Transferencia', title: 'Transferir y cerrar con contexto', text: 'La transferencia y el cierre siguen siendo explicables y aptos para revision.', alt: 'Dialogo de transferencia de Velvoix', ...slideFraming.handover },
      { id: 'client-context', label: 'Historial del cliente', title: 'Contexto relevante a mano', text: 'El contexto asistencial, los eventos recientes y el seguimiento siguen disponibles.', alt: 'Historial del cliente en Velvoix', ...slideFraming['client-context'] },
      { id: 'care-overview', label: 'Resumen asistencial', title: 'Direccion sin ruido de paneles', text: 'La vista operativa muestra donde suben presion, tendencia y riesgo SLA.', alt: 'Resumen asistencial de Velvoix', ...slideFraming['care-overview'] },
      { id: 'management', label: 'Administracion', title: 'Gestion sin ruido adicional', text: 'Las vinculaciones, la disponibilidad y el orden de trabajo siguen claros y controlados.', alt: 'Vista de administracion de Velvoix', ...slideFraming.management },
      { id: 'governance', label: 'Gobernanza', title: 'Gobernanza en una capa controlada', text: 'Los perfiles, la calidad y el acoplamiento tecnico permanecen organizados juntos.', alt: 'Vista de gobernanza de Velvoix', ...slideFraming.governance },
    ],
  },
};
