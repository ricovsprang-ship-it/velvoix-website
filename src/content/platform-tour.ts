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
  interactionHint: string;
  slides: PlatformTourSlide[];
}

const defaultFraming = {
  objectPosition: 'center top',
  baseScale: 1,
  initialZoom: 1,
  zoomOrigin: '50% 0%',
} as const;

const slideFraming = {
  login: {
    image: '/products/platformtour/login.webp',
    objectPosition: 'center center',
    baseScale: 1,
    initialZoom: 1,
    zoomOrigin: '50% 50%',
  },
  worklist: { image: '/products/platformtour/worklist.webp', ...defaultFraming },
  notifications: { image: '/products/platformtour/notifications.webp', ...defaultFraming },
  'event-detail': { image: '/products/platformtour/event-detail.webp', ...defaultFraming },
  resolve: { image: '/products/platformtour/resolve.webp', ...defaultFraming },
  assign: { image: '/products/platformtour/assign.webp', ...defaultFraming },
  handover: { image: '/products/platformtour/handover.webp', ...defaultFraming },
  'resident-overview': { image: '/products/platformtour/resident-overview.webp', ...defaultFraming },
  'resident-history': { image: '/products/platformtour/resident-history.webp', ...defaultFraming },
  'resident-context': { image: '/products/platformtour/resident-context.webp', ...defaultFraming },
  'resident-statistics': { image: '/products/platformtour/resident-statistics.webp', ...defaultFraming },
  'care-operations': { image: '/products/platformtour/care-operations.webp', ...defaultFraming },
  'quality-response': { image: '/products/platformtour/quality-response.webp', ...defaultFraming },
} as const;

export const platformTourContent: Record<Locale, PlatformTourContent> = {
  nl: {
    eyebrow: 'Producttour',
    title: 'Een gecontroleerd inkijkje in het platform',
    description:
      'Dertien geselecteerde schermen laten zien hoe Velvoix meldingen, clientcontext, opvolging en teamsturing ordent.',
    supporting:
      'Open de producttour voor een rustig overzicht van de belangrijkste operationele schermen, van eventdetail tot clientbeeld en kwaliteitssturing.',
    cta: 'Open producttour',
    previewLabel: 'Geselecteerd scherm',
    previewTitle: 'Eventdetail met context en aanpak',
    previewBody:
      'Een voorbeeld van hoe aanleiding, triage en vervolgacties samenkomen in een bestuurbare operationele weergave.',
    overlayLabel: 'Producttour',
    closeLabel: 'Sluiten',
    previousLabel: 'Vorige',
    nextLabel: 'Volgende',
    railLabel: 'Onderdelen van de producttour',
    curatedViewsLabel: 'geselecteerde schermen',
    interactionHint: 'Scroll om te zoomen, sleep om te verplaatsen, 0 om te resetten.',
    slides: [
      { id: 'login', label: 'Start', title: 'Rustige toegang', text: 'De instap houdt toegang tot het platform rustig, herkenbaar en gecontroleerd.', alt: 'Velvoix login scherm', ...slideFraming.login },
      { id: 'worklist', label: 'Werkvoorraad', title: 'Meldingen in een bestuurbare lijst', text: 'Urgentie, status en eigenaarschap blijven samen leesbaar in een scanbare werkvoorraad.', alt: 'Velvoix meldingenlijst', ...slideFraming.worklist },
      { id: 'notifications', label: 'Notificaties', title: 'Nieuwe signalen zonder werkruis', text: 'Het notificatiepaneel laat nieuwe signalen zien zonder de werkvoorraad uit balans te trekken.', alt: 'Velvoix notificaties en snelle opvolging', ...slideFraming.notifications },
      { id: 'event-detail', label: 'Eventdetail', title: 'Waarom, context en actie bijeen', text: 'Aanleiding, transcript, triage en actieadvies blijven samen leesbaar op een rustig eventscherm.', alt: 'Velvoix eventdetail', ...slideFraming['event-detail'] },
      { id: 'resolve', label: 'Afhandeling', title: 'Afronden met expliciete uitkomst', text: 'Afhandelen blijft bestuurbaar met een duidelijke uitkomst, reden en toelichting voor latere reconstructie.', alt: 'Velvoix afhandel dialoog', ...slideFraming.resolve },
      { id: 'assign', label: 'Toewijzen', title: 'Snel de juiste collega koppelen', text: 'Toewijzen koppelt het event snel aan de juiste collega zonder contextverlies.', alt: 'Velvoix toewijzen dialoog', ...slideFraming.assign },
      { id: 'handover', label: 'Overdracht', title: 'Overdragen met traceerbaarheid', text: 'Overdracht houdt reden, eigenaar en vervolg duidelijk navolgbaar.', alt: 'Velvoix overdracht dialoog', ...slideFraming.handover },
      { id: 'resident-overview', label: 'Clientbeeld', title: 'Actuele status direct in beeld', text: 'Clientidentiteit, koppelingen en recente meldingen komen samen in een rustig overzicht.', alt: 'Velvoix clientoverzicht', ...slideFraming['resident-overview'] },
      { id: 'resident-history', label: 'Historie', title: 'Historie per client die navolgbaar blijft', text: 'Recente meldingen en afhandeling blijven direct terug te zien per client.', alt: 'Velvoix clienthistorie', ...slideFraming['resident-history'] },
      { id: 'resident-context', label: 'Context', title: 'Triagecontext dicht bij de workflow', text: 'Triagecontext, privacy en teamafspraken blijven direct beschikbaar bij de opvolging.', alt: 'Velvoix clientcontext', ...slideFraming['resident-context'] },
      { id: 'resident-statistics', label: 'Statistiek', title: 'Patronen per client zonder dashboardruis', text: 'Trend, urgentiemix en respons blijven zichtbaar zonder de workflow te verlaten.', alt: 'Velvoix clientstatistieken', ...slideFraming['resident-statistics'] },
      { id: 'care-operations', label: 'Dagsturing', title: 'Dagelijkse operatie in een heldere managementflow', text: 'Druk, prioriteit en SLA-risico worden zichtbaar in een rustig teamoverzicht.', alt: 'Velvoix dagelijks zorgoverzicht', ...slideFraming['care-operations'] },
      { id: 'quality-response', label: 'Kwaliteit', title: 'Responskwaliteit in een uitlegbare laag', text: 'Kwaliteit en respons worden bestuurbaar in timing, kanaalverdeling en validatie.', alt: 'Velvoix kwaliteit en respons overzicht', ...slideFraming['quality-response'] },
    ],
  },
  en: {
    eyebrow: 'Product Tour',
    title: 'A controlled view into the platform',
    description:
      'Thirteen selected screens show how Velvoix organises signals, resident context, follow-up and team steering.',
    supporting:
      'Open the product tour for a calm view of the key operational screens, from event detail to resident context and quality steering.',
    cta: 'Open product tour',
    previewLabel: 'Selected screen',
    previewTitle: 'Event detail with context and action',
    previewBody:
      'One example of how reason, triage and next actions come together on one controlled operational screen.',
    overlayLabel: 'Product Tour',
    closeLabel: 'Close',
    previousLabel: 'Previous',
    nextLabel: 'Next',
    railLabel: 'Product tour sections',
    curatedViewsLabel: 'selected screens',
    interactionHint: 'Scroll to zoom, drag to move, press 0 to reset.',
    slides: [
      { id: 'login', label: 'Start', title: 'A calm entry point', text: 'The entry keeps access to the platform calm, recognisable and controlled.', alt: 'Velvoix login screen', ...slideFraming.login },
      { id: 'worklist', label: 'Worklist', title: 'Signals in one manageable list', text: 'Urgency, status and ownership stay readable together in one scannable worklist.', alt: 'Velvoix worklist', ...slideFraming.worklist },
      { id: 'notifications', label: 'Notifications', title: 'New signals without workflow noise', text: 'The notification panel surfaces new signals without pulling the worklist out of balance.', alt: 'Velvoix notifications and quick follow-up', ...slideFraming.notifications },
      { id: 'event-detail', label: 'Event Detail', title: 'Why, context and action together', text: 'Reason, transcript, triage and action guidance remain readable together on one calm event screen.', alt: 'Velvoix event detail', ...slideFraming['event-detail'] },
      { id: 'resolve', label: 'Resolve', title: 'Closing with an explicit outcome', text: 'Resolution stays manageable with a clear outcome, reason and note for later reconstruction.', alt: 'Velvoix resolution dialog', ...slideFraming.resolve },
      { id: 'assign', label: 'Assign', title: 'Link the right colleague quickly', text: 'Assignment links the event to the right colleague without losing context.', alt: 'Velvoix assignment dialog', ...slideFraming.assign },
      { id: 'handover', label: 'Handover', title: 'Transfer with traceability', text: 'Handover keeps reason, owner and follow-up clearly traceable.', alt: 'Velvoix handover dialog', ...slideFraming.handover },
      { id: 'resident-overview', label: 'Resident View', title: 'Current status in one calm summary', text: 'Identity, linked devices and recent signals come together in one resident view.', alt: 'Velvoix resident overview', ...slideFraming['resident-overview'] },
      { id: 'resident-history', label: 'History', title: 'Resident history that stays reviewable', text: 'Recent signals and follow-up remain easy to review for each resident.', alt: 'Velvoix resident history', ...slideFraming['resident-history'] },
      { id: 'resident-context', label: 'Context', title: 'Triage context close to the workflow', text: 'Triage context, privacy and team agreements remain close to day-to-day follow-up.', alt: 'Velvoix resident context', ...slideFraming['resident-context'] },
      { id: 'resident-statistics', label: 'Statistics', title: 'Resident patterns without dashboard noise', text: 'Trend, urgency mix and response patterns remain visible without leaving the workflow.', alt: 'Velvoix resident statistics', ...slideFraming['resident-statistics'] },
      { id: 'care-operations', label: 'Operations', title: 'Daily operations in one clear management flow', text: 'Pressure, priorities and SLA risk become visible in one calm team overview.', alt: 'Velvoix daily care operations overview', ...slideFraming['care-operations'] },
      { id: 'quality-response', label: 'Quality', title: 'Response quality in one explainable layer', text: 'Quality and response become steerable through timing, channel mix and validation.', alt: 'Velvoix quality and response overview', ...slideFraming['quality-response'] },
    ],
  },
  de: {
    eyebrow: 'Produkttour',
    title: 'Ein kontrollierter Einblick in die Plattform',
    description:
      'Dreizehn ausgewaehlte Ansichten zeigen, wie Velvoix Signale, Bewohnerkontext, Nachverfolgung und Teamsteuerung ordnet.',
    supporting:
      'Oeffnen Sie die Produkttour fuer einen ruhigen Blick auf die wichtigsten operativen Ansichten, von Eventdetail bis Bewohnerkontext und Qualitaetssteuerung.',
    cta: 'Produkttour oeffnen',
    previewLabel: 'Ausgewaehlte Ansicht',
    previewTitle: 'Eventdetail mit Kontext und Aktion',
    previewBody:
      'Ein Beispiel dafuer, wie Grund, Triage und naechste Schritte auf einer kontrollierten operativen Ansicht zusammenkommen.',
    overlayLabel: 'Produkttour',
    closeLabel: 'Schliessen',
    previousLabel: 'Zurueck',
    nextLabel: 'Weiter',
    railLabel: 'Bereiche der Produkttour',
    curatedViewsLabel: 'ausgewaehlte Ansichten',
    interactionHint: 'Scrollen zum Zoomen, ziehen zum Verschieben, 0 zum Zuruecksetzen.',
    slides: [
      { id: 'login', label: 'Start', title: 'Ruhiger Einstieg', text: 'Der Einstieg haelt den Zugang zur Plattform ruhig, klar und kontrolliert.', alt: 'Velvoix Login', ...slideFraming.login },
      { id: 'worklist', label: 'Arbeitsvorrat', title: 'Signale in einer steuerbaren Liste', text: 'Dringlichkeit, Status und Verantwortung bleiben in einem scanbaren Arbeitsvorrat zusammen lesbar.', alt: 'Velvoix Arbeitsvorrat', ...slideFraming.worklist },
      { id: 'notifications', label: 'Benachrichtigungen', title: 'Neue Signale ohne Arbeitsrauschen', text: 'Das Benachrichtigungsfeld zeigt neue Signale, ohne den Arbeitsvorrat aus dem Gleichgewicht zu bringen.', alt: 'Velvoix Benachrichtigungen und schnelle Nachverfolgung', ...slideFraming.notifications },
      { id: 'event-detail', label: 'Eventdetail', title: 'Warum, Kontext und Aktion zusammen', text: 'Grund, Transkript, Triage und Handlungshinweis bleiben auf einer ruhigen Eventansicht zusammen lesbar.', alt: 'Velvoix Eventdetail', ...slideFraming['event-detail'] },
      { id: 'resolve', label: 'Abschluss', title: 'Abschliessen mit klarem Ergebnis', text: 'Der Abschluss bleibt steuerbar mit eindeutiger Auskunft, Grund und Notiz fuer die spaetere Rekonstruktion.', alt: 'Velvoix Abschlussdialog', ...slideFraming.resolve },
      { id: 'assign', label: 'Zuweisen', title: 'Schnell die richtige Person koppeln', text: 'Die Zuweisung verbindet das Event mit der passenden Kollegin oder dem passenden Kollegen, ohne Kontext zu verlieren.', alt: 'Velvoix Zuweisungsdialog', ...slideFraming.assign },
      { id: 'handover', label: 'Uebergabe', title: 'Uebergeben mit Nachvollziehbarkeit', text: 'Die Uebergabe haelt Grund, Verantwortliche und weiteren Verlauf klar nachvollziehbar.', alt: 'Velvoix Uebergabedialog', ...slideFraming.handover },
      { id: 'resident-overview', label: 'Bewohnerbild', title: 'Aktueller Status in einer ruhigen Uebersicht', text: 'Identitaet, gekoppelte Geraete und letzte Signale kommen in einer Bewohneransicht zusammen.', alt: 'Velvoix Bewohneruebersicht', ...slideFraming['resident-overview'] },
      { id: 'resident-history', label: 'Historie', title: 'Bewohnerhistorie, die reviewbar bleibt', text: 'Aktuelle Signale und Nachverfolgung bleiben je Bewohner direkt rueckverfolgbar.', alt: 'Velvoix Bewohnerhistorie', ...slideFraming['resident-history'] },
      { id: 'resident-context', label: 'Kontext', title: 'Triagekontext nah an der Workflow', text: 'Triagekontext, Datenschutz und Teamabsprachen bleiben nah an der operativen Nachverfolgung.', alt: 'Velvoix Bewohnerkontext', ...slideFraming['resident-context'] },
      { id: 'resident-statistics', label: 'Statistik', title: 'Bewohnermuster ohne Dashboard-Rauschen', text: 'Trend, Dringlichkeitsmix und Reaktionsmuster bleiben sichtbar, ohne den Workflow zu verlassen.', alt: 'Velvoix Bewohnerstatistik', ...slideFraming['resident-statistics'] },
      { id: 'care-operations', label: 'Tagessteuerung', title: 'Taegliche Operation in klarem Managementfluss', text: 'Druck, Prioritaeten und SLA-Risiko werden in einer ruhigen Teamansicht sichtbar.', alt: 'Velvoix taegliche Pflegeoperationen', ...slideFraming['care-operations'] },
      { id: 'quality-response', label: 'Qualitaet', title: 'Reaktionsqualitaet in erklaerbarer Form', text: 'Qualitaet und Reaktion werden ueber Timing, Kanalverteilung und Validierung steuerbar.', alt: 'Velvoix Qualitaets- und Reaktionsuebersicht', ...slideFraming['quality-response'] },
    ],
  },
  es: {
    eyebrow: 'Recorrido del producto',
    title: 'Una vista controlada de la plataforma',
    description:
      'Trece pantallas seleccionadas muestran como Velvoix organiza senales, contexto del residente, seguimiento y direccion del equipo.',
    supporting:
      'Abra el recorrido del producto para ver con calma las pantallas operativas clave, desde el detalle del evento hasta el contexto del residente y la calidad de respuesta.',
    cta: 'Abrir recorrido',
    previewLabel: 'Pantalla seleccionada',
    previewTitle: 'Detalle del evento con contexto y accion',
    previewBody:
      'Un ejemplo de como motivo, triaje y siguientes acciones se reunen en una vista operativa controlada.',
    overlayLabel: 'Recorrido del producto',
    closeLabel: 'Cerrar',
    previousLabel: 'Anterior',
    nextLabel: 'Siguiente',
    railLabel: 'Secciones del recorrido',
    curatedViewsLabel: 'pantallas seleccionadas',
    interactionHint: 'Desplace para ampliar, arrastre para mover, pulse 0 para reiniciar.',
    slides: [
      { id: 'login', label: 'Inicio', title: 'Entrada serena', text: 'La entrada mantiene el acceso a la plataforma sereno, reconocible y controlado.', alt: 'Pantalla de acceso de Velvoix', ...slideFraming.login },
      { id: 'worklist', label: 'Bandeja', title: 'Senales en una lista gobernable', text: 'Urgencia, estado y responsabilidad siguen siendo legibles dentro de una bandeja escaneable.', alt: 'Lista de trabajo de Velvoix', ...slideFraming.worklist },
      { id: 'notifications', label: 'Notificaciones', title: 'Nuevas senales sin ruido operativo', text: 'El panel de notificaciones muestra nuevas senales sin desequilibrar la bandeja de trabajo.', alt: 'Notificaciones y seguimiento rapido en Velvoix', ...slideFraming.notifications },
      { id: 'event-detail', label: 'Detalle', title: 'Motivo, contexto y accion juntos', text: 'Motivo, transcripcion, triaje y accion recomendada permanecen juntos en una vista serena del evento.', alt: 'Detalle del evento de Velvoix', ...slideFraming['event-detail'] },
      { id: 'resolve', label: 'Cierre', title: 'Cerrar con resultado explicito', text: 'El cierre sigue siendo gobernable con un resultado claro, motivo y nota para la reconstruccion posterior.', alt: 'Dialogo de cierre de Velvoix', ...slideFraming.resolve },
      { id: 'assign', label: 'Asignar', title: 'Vincular rapido a la persona adecuada', text: 'La asignacion conecta el evento con la persona adecuada sin perder contexto.', alt: 'Dialogo de asignacion de Velvoix', ...slideFraming.assign },
      { id: 'handover', label: 'Transferencia', title: 'Transferir con trazabilidad', text: 'La transferencia mantiene claro el motivo, la persona responsable y el siguiente paso.', alt: 'Dialogo de transferencia de Velvoix', ...slideFraming.handover },
      { id: 'resident-overview', label: 'Residente', title: 'Estado actual en un resumen sereno', text: 'Identidad, dispositivos vinculados y senales recientes se reunen en una vista unica del residente.', alt: 'Resumen del residente en Velvoix', ...slideFraming['resident-overview'] },
      { id: 'resident-history', label: 'Historial', title: 'Historial del residente que sigue siendo revisable', text: 'Senales recientes y seguimiento quedan visibles por residente sin perder claridad.', alt: 'Historial del residente en Velvoix', ...slideFraming['resident-history'] },
      { id: 'resident-context', label: 'Contexto', title: 'Contexto de triaje cerca del workflow', text: 'Contexto de triaje, privacidad y acuerdos del equipo permanecen cerca del seguimiento operativo.', alt: 'Contexto del residente en Velvoix', ...slideFraming['resident-context'] },
      { id: 'resident-statistics', label: 'Estadisticas', title: 'Patrones del residente sin ruido de dashboard', text: 'Tendencia, mezcla de urgencia y respuesta permanecen visibles sin salir del workflow.', alt: 'Estadisticas del residente en Velvoix', ...slideFraming['resident-statistics'] },
      { id: 'care-operations', label: 'Operacion', title: 'Operacion diaria en un flujo de gestion claro', text: 'Presion, prioridades y riesgo SLA se vuelven visibles en una vista serena del equipo.', alt: 'Vista diaria de operaciones asistenciales en Velvoix', ...slideFraming['care-operations'] },
      { id: 'quality-response', label: 'Calidad', title: 'Calidad de respuesta en una capa explicable', text: 'La calidad y la respuesta se vuelven gobernables por timing, mezcla de canales y validacion.', alt: 'Vista de calidad y respuesta en Velvoix', ...slideFraming['quality-response'] },
    ],
  },
};
