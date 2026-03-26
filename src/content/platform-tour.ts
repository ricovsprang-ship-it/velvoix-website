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
      'Dertien geselecteerde schermen laten zien hoe Velvoix signalen, clientcontext en opvolging ordent.',
    supporting:
      'Open de producttour voor een rustig overzicht van de belangrijkste operationele schermen.',
    cta: 'Open producttour',
    previewLabel: 'Geselecteerd scherm',
    previewTitle: 'Eventdetail met context en aanpak',
    previewBody:
      'Een voorbeeld van hoe aanleiding, triage en vervolgacties samenkomen met minder interpretatielast.',
    overlayLabel: 'Producttour',
    closeLabel: 'Sluiten',
    previousLabel: 'Vorige',
    nextLabel: 'Volgende',
    railLabel: 'Onderdelen van de producttour',
    curatedViewsLabel: 'geselecteerde schermen',
    interactionHint: 'Scroll om te zoomen, sleep om te verplaatsen, 0 om te resetten.',
    slides: [
      { id: 'login', label: 'Start', title: 'Rustige toegang', text: 'De instap houdt toegang tot het platform rustig en herkenbaar, zodat teams zonder extra frictie aan de werkdag beginnen.', alt: 'Velvoix login scherm', ...slideFraming.login },
      { id: 'worklist', label: 'Werkvoorraad', title: 'Meldingen in een bestuurbare lijst', text: 'Urgentie, status en eigenaarschap blijven samen leesbaar, zodat open opvolging niet over losse signalen versnippert.', alt: 'Velvoix meldingenlijst', ...slideFraming.worklist },
      { id: 'notifications', label: 'Notificaties', title: 'Nieuwe signalen zonder werkruis', text: 'Het notificatiepaneel laat nieuwe signalen opvallen zonder dat de hele workflow verdrinkt in ruis.', alt: 'Velvoix notificaties en snelle opvolging', ...slideFraming.notifications },
      { id: 'event-detail', label: 'Eventdetail', title: 'Waarom, context en actie bijeen', text: 'Aanleiding, transcript, triage en actieadvies blijven samen zichtbaar, zodat snelle beoordeling minder interpretatielast vraagt.', alt: 'Velvoix eventdetail', ...slideFraming['event-detail'] },
      { id: 'resolve', label: 'Afhandeling', title: 'Afronden met expliciete uitkomst', text: 'Afhandelen dwingt een expliciete uitkomst af, zodat afsluiting en latere reconstructie niet vaag blijven.', alt: 'Velvoix afhandel dialoog', ...slideFraming.resolve },
      { id: 'assign', label: 'Toewijzen', title: 'Snel de juiste collega koppelen', text: 'Toewijzen maakt eigenaarschap direct zichtbaar, zodat signalen niet tussen collega\'s blijven hangen.', alt: 'Velvoix toewijzen dialoog', ...slideFraming.assign },
      { id: 'handover', label: 'Overdracht', title: 'Overdragen met traceerbaarheid', text: 'Overdracht houdt reden, eigenaar en vervolg bij elkaar, zodat context tussen diensten niet wegvalt.', alt: 'Velvoix overdracht dialoog', ...slideFraming.handover },
      { id: 'resident-overview', label: 'Clientbeeld', title: 'Actuele status direct in beeld', text: 'Clientidentiteit, koppelingen en recente meldingen staan samen in beeld, zodat basiscontext niet over losse schermen gezocht hoeft te worden.', alt: 'Velvoix clientoverzicht', ...slideFraming['resident-overview'] },
      { id: 'resident-history', label: 'Historie', title: 'Historie per client die navolgbaar blijft', text: 'Recente meldingen en afhandeling blijven per client terug te zien, zodat evaluatie niet op geheugen of losse notities leunt.', alt: 'Velvoix clienthistorie', ...slideFraming['resident-history'] },
      { id: 'resident-context', label: 'Context', title: 'Triagecontext dicht bij de workflow', text: 'Triagecontext, privacy en teamafspraken blijven bij de workflow, zodat belangrijke duiding niet buiten de opvolging verdwijnt.', alt: 'Velvoix clientcontext', ...slideFraming['resident-context'] },
      { id: 'resident-statistics', label: 'Statistiek', title: 'Patronen per client zonder dashboardruis', text: 'Trend, urgentiemix en respons blijven zichtbaar, zodat patronen per client bespreekbaar worden zonder dashboardoverlast.', alt: 'Velvoix clientstatistieken', ...slideFraming['resident-statistics'] },
      { id: 'care-operations', label: 'Dagsturing', title: 'Dagelijkse operatie in een heldere managementflow', text: 'Druk, prioriteit en SLA-risico worden in een rustig teamoverzicht zichtbaar, zodat dagsturing sneller kan bijsturen.', alt: 'Velvoix dagelijks zorgoverzicht', ...slideFraming['care-operations'] },
      { id: 'quality-response', label: 'Kwaliteit', title: 'Responskwaliteit in een uitlegbare laag', text: 'Kwaliteit en respons worden navolgbaar, zodat verbeterpunten bespreekbaar blijven op basis van echte signalen.', alt: 'Velvoix kwaliteit en respons overzicht', ...slideFraming['quality-response'] },
    ],
  },
  en: {
    eyebrow: 'Product Tour',
    title: 'A controlled view into the platform',
    description:
      'Thirteen selected screens show how Velvoix organises signals, resident context and follow-up.',
    supporting:
      'Open the product tour for a calm view of the key operational screens.',
    cta: 'Open product tour',
    previewLabel: 'Selected screen',
    previewTitle: 'Event detail with context and action',
    previewBody:
      'One example of how reason, triage and next actions come together with less interpretation.',
    overlayLabel: 'Product Tour',
    closeLabel: 'Close',
    previousLabel: 'Previous',
    nextLabel: 'Next',
    railLabel: 'Product tour sections',
    curatedViewsLabel: 'selected screens',
    interactionHint: 'Scroll to zoom, drag to move, press 0 to reset.',
    slides: [
      { id: 'login', label: 'Start', title: 'A calm entry point', text: 'The entry keeps access calm and recognisable so teams can start the day without extra friction.', alt: 'Velvoix login screen', ...slideFraming.login },
      { id: 'worklist', label: 'Worklist', title: 'Signals in one manageable list', text: 'Urgency, status and ownership stay visible together so open follow-up does not fragment across separate signals.', alt: 'Velvoix worklist', ...slideFraming.worklist },
      { id: 'notifications', label: 'Notifications', title: 'New signals without workflow noise', text: 'The notification panel surfaces new signals without letting the wider workflow drown in noise.', alt: 'Velvoix notifications and quick follow-up', ...slideFraming.notifications },
      { id: 'event-detail', label: 'Event Detail', title: 'Why, context and action together', text: 'Reason, transcript, triage and action guidance stay together so rapid assessment requires less interpretation.', alt: 'Velvoix event detail', ...slideFraming['event-detail'] },
      { id: 'resolve', label: 'Resolve', title: 'Closing with an explicit outcome', text: 'Resolution forces an explicit outcome so closure and later reconstruction do not remain vague.', alt: 'Velvoix resolution dialog', ...slideFraming.resolve },
      { id: 'assign', label: 'Assign', title: 'Link the right colleague quickly', text: 'Assignment makes ownership explicit so signals do not drift between colleagues.', alt: 'Velvoix assignment dialog', ...slideFraming.assign },
      { id: 'handover', label: 'Handover', title: 'Transfer with traceability', text: 'Handover keeps reason, owner and next step together so context is not lost between shifts or colleagues.', alt: 'Velvoix handover dialog', ...slideFraming.handover },
      { id: 'resident-overview', label: 'Resident View', title: 'Current status in one calm summary', text: 'Identity, linked devices and recent signals sit together so basic context does not require searching across separate screens.', alt: 'Velvoix resident overview', ...slideFraming['resident-overview'] },
      { id: 'resident-history', label: 'History', title: 'Resident history that stays reviewable', text: 'Recent signals and follow-up remain visible per resident so evaluation does not depend on memory or loose notes.', alt: 'Velvoix resident history', ...slideFraming['resident-history'] },
      { id: 'resident-context', label: 'Context', title: 'Triage context close to the workflow', text: 'Triage context, privacy and team agreements stay close to follow-up so important interpretation does not leave the workflow.', alt: 'Velvoix resident context', ...slideFraming['resident-context'] },
      { id: 'resident-statistics', label: 'Statistics', title: 'Resident patterns without dashboard noise', text: 'Trend, urgency mix and response patterns remain visible so resident-level patterns can be discussed without dashboard overload.', alt: 'Velvoix resident statistics', ...slideFraming['resident-statistics'] },
      { id: 'care-operations', label: 'Operations', title: 'Daily operations in one clear management flow', text: 'Pressure, priorities and SLA risk become visible in one calm overview so day steering can intervene earlier.', alt: 'Velvoix daily care operations overview', ...slideFraming['care-operations'] },
      { id: 'quality-response', label: 'Quality', title: 'Response quality in one explainable layer', text: 'Quality and response remain reviewable so improvement points can be discussed on the basis of actual signals.', alt: 'Velvoix quality and response overview', ...slideFraming['quality-response'] },
    ],
  },
  de: {
    eyebrow: 'Produkttour',
    title: 'Ein kontrollierter Einblick in die Plattform',
    description:
      'Dreizehn ausgewaehlte Ansichten zeigen, wie Velvoix Signale, Bewohnerkontext und Nachverfolgung ordnet.',
    supporting:
      'Oeffnen Sie die Produkttour fuer einen ruhigen Blick auf die wichtigsten operativen Ansichten.',
    cta: 'Produkttour oeffnen',
    previewLabel: 'Ausgewaehlte Ansicht',
    previewTitle: 'Eventdetail mit Kontext und Aktion',
    previewBody:
      'Ein Beispiel dafuer, wie Grund, Triage und naechste Schritte mit weniger Interpretationslast zusammenkommen.',
    overlayLabel: 'Produkttour',
    closeLabel: 'Schliessen',
    previousLabel: 'Zurueck',
    nextLabel: 'Weiter',
    railLabel: 'Bereiche der Produkttour',
    curatedViewsLabel: 'ausgewaehlte Ansichten',
    interactionHint: 'Scrollen zum Zoomen, ziehen zum Verschieben, 0 zum Zuruecksetzen.',
    slides: [
      { id: 'login', label: 'Start', title: 'Ruhiger Einstieg', text: 'Der Einstieg haelt den Zugang ruhig und klar, damit Teams ohne zusaetzliche Reibung in den Arbeitstag starten.', alt: 'Velvoix Login', ...slideFraming.login },
      { id: 'worklist', label: 'Arbeitsvorrat', title: 'Signale in einer steuerbaren Liste', text: 'Dringlichkeit, Status und Verantwortung bleiben zusammen sichtbar, damit offene Nachverfolgung nicht ueber einzelne Signale zerfaellt.', alt: 'Velvoix Arbeitsvorrat', ...slideFraming.worklist },
      { id: 'notifications', label: 'Benachrichtigungen', title: 'Neue Signale ohne Arbeitsrauschen', text: 'Das Benachrichtigungsfeld macht neue Signale sichtbar, ohne den gesamten Workflow im Rauschen untergehen zu lassen.', alt: 'Velvoix Benachrichtigungen und schnelle Nachverfolgung', ...slideFraming.notifications },
      { id: 'event-detail', label: 'Eventdetail', title: 'Warum, Kontext und Aktion zusammen', text: 'Grund, Transkript, Triage und Handlungshinweis bleiben zusammen sichtbar, damit schnelle Bewertung weniger Interpretationslast erzeugt.', alt: 'Velvoix Eventdetail', ...slideFraming['event-detail'] },
      { id: 'resolve', label: 'Abschluss', title: 'Abschliessen mit klarem Ergebnis', text: 'Der Abschluss erzwingt ein klares Ergebnis, damit Abschluss und spaetere Rekonstruktion nicht unklar bleiben.', alt: 'Velvoix Abschlussdialog', ...slideFraming.resolve },
      { id: 'assign', label: 'Zuweisen', title: 'Schnell die richtige Person koppeln', text: 'Die Zuweisung macht Verantwortung sofort sichtbar, damit Signale nicht zwischen Kolleginnen und Kollegen haengen bleiben.', alt: 'Velvoix Zuweisungsdialog', ...slideFraming.assign },
      { id: 'handover', label: 'Uebergabe', title: 'Uebergeben mit Nachvollziehbarkeit', text: 'Die Uebergabe haelt Grund, Verantwortung und naechsten Schritt zusammen, damit Kontext zwischen Diensten nicht verloren geht.', alt: 'Velvoix Uebergabedialog', ...slideFraming.handover },
      { id: 'resident-overview', label: 'Bewohnerbild', title: 'Aktueller Status in einer ruhigen Uebersicht', text: 'Identitaet, gekoppelte Geraete und letzte Signale stehen zusammen, damit Grundkontext nicht ueber mehrere Ansichten gesucht werden muss.', alt: 'Velvoix Bewohneruebersicht', ...slideFraming['resident-overview'] },
      { id: 'resident-history', label: 'Historie', title: 'Bewohnerhistorie, die reviewbar bleibt', text: 'Aktuelle Signale und Nachverfolgung bleiben je Bewohner sichtbar, damit Auswertung nicht auf Erinnerung oder lose Notizen angewiesen ist.', alt: 'Velvoix Bewohnerhistorie', ...slideFraming['resident-history'] },
      { id: 'resident-context', label: 'Kontext', title: 'Triagekontext nah am Workflow', text: 'Triagekontext, Datenschutz und Teamabsprachen bleiben an der Nachverfolgung, damit wichtige Einordnung nicht ausserhalb des Workflows verschwindet.', alt: 'Velvoix Bewohnerkontext', ...slideFraming['resident-context'] },
      { id: 'resident-statistics', label: 'Statistik', title: 'Bewohnermuster ohne Dashboard-Rauschen', text: 'Trend, Dringlichkeitsmix und Reaktionsmuster bleiben sichtbar, damit Muster pro Bewohner besprechbar bleiben ohne Dashboard-Ueberlastung.', alt: 'Velvoix Bewohnerstatistik', ...slideFraming['resident-statistics'] },
      { id: 'care-operations', label: 'Tagessteuerung', title: 'Taegliche Operation in klarem Managementfluss', text: 'Druck, Prioritaeten und SLA-Risiko werden in einer ruhigen Teamansicht sichtbar, damit Tagessteuerung frueher nachsteuern kann.', alt: 'Velvoix taegliche Pflegeoperationen', ...slideFraming['care-operations'] },
      { id: 'quality-response', label: 'Qualitaet', title: 'Reaktionsqualitaet in erklaerbarer Form', text: 'Qualitaet und Reaktion bleiben nachvollziehbar, damit Verbesserungen auf Basis echter Signale besprochen werden koennen.', alt: 'Velvoix Qualitaets- und Reaktionsuebersicht', ...slideFraming['quality-response'] },
    ],
  },
  es: {
    eyebrow: 'Recorrido del producto',
    title: 'Una vista controlada de la plataforma',
    description:
      'Trece pantallas seleccionadas muestran como Velvoix organiza senales, contexto del residente y seguimiento.',
    supporting:
      'Abra el recorrido del producto para ver con calma las pantallas operativas clave.',
    cta: 'Abrir recorrido',
    previewLabel: 'Pantalla seleccionada',
    previewTitle: 'Detalle del evento con contexto y accion',
    previewBody:
      'Un ejemplo de como motivo, triaje y siguientes acciones se reunen con menos interpretacion.',
    overlayLabel: 'Recorrido del producto',
    closeLabel: 'Cerrar',
    previousLabel: 'Anterior',
    nextLabel: 'Siguiente',
    railLabel: 'Secciones del recorrido',
    curatedViewsLabel: 'pantallas seleccionadas',
    interactionHint: 'Desplace para ampliar, arrastre para mover, pulse 0 para reiniciar.',
    slides: [
      { id: 'login', label: 'Inicio', title: 'Entrada serena', text: 'La entrada mantiene el acceso sereno y reconocible para que el equipo comience la jornada sin friccion innecesaria.', alt: 'Pantalla de acceso de Velvoix', ...slideFraming.login },
      { id: 'worklist', label: 'Bandeja', title: 'Senales en una lista gobernable', text: 'Urgencia, estado y responsabilidad permanecen juntas para que el seguimiento abierto no se fragmente entre senales separadas.', alt: 'Lista de trabajo de Velvoix', ...slideFraming.worklist },
      { id: 'notifications', label: 'Notificaciones', title: 'Nuevas senales sin ruido operativo', text: 'El panel de notificaciones hace visibles las nuevas senales sin dejar que el flujo general se hunda en ruido.', alt: 'Notificaciones y seguimiento rapido en Velvoix', ...slideFraming.notifications },
      { id: 'event-detail', label: 'Detalle', title: 'Motivo, contexto y accion juntos', text: 'Motivo, transcripcion, triaje y accion recomendada permanecen juntos para que la evaluacion rapida exija menos interpretacion.', alt: 'Detalle del evento de Velvoix', ...slideFraming['event-detail'] },
      { id: 'resolve', label: 'Cierre', title: 'Cerrar con resultado explicito', text: 'El cierre fuerza un resultado explicito para que el cierre y la reconstruccion posterior no queden ambiguos.', alt: 'Dialogo de cierre de Velvoix', ...slideFraming.resolve },
      { id: 'assign', label: 'Asignar', title: 'Vincular rapido a la persona adecuada', text: 'La asignacion hace visible la responsabilidad para que las senales no queden entre varias personas.', alt: 'Dialogo de asignacion de Velvoix', ...slideFraming.assign },
      { id: 'handover', label: 'Transferencia', title: 'Transferir con trazabilidad', text: 'La transferencia mantiene juntos motivo, responsable y siguiente paso para que el contexto no se pierda entre turnos o colegas.', alt: 'Dialogo de transferencia de Velvoix', ...slideFraming.handover },
      { id: 'resident-overview', label: 'Residente', title: 'Estado actual en un resumen sereno', text: 'Identidad, dispositivos vinculados y senales recientes aparecen juntos para que el contexto basico no tenga que buscarse en varias pantallas.', alt: 'Resumen del residente en Velvoix', ...slideFraming['resident-overview'] },
      { id: 'resident-history', label: 'Historial', title: 'Historial del residente que sigue siendo revisable', text: 'Senales recientes y seguimiento permanecen visibles por residente para que la evaluacion no dependa de memoria o notas sueltas.', alt: 'Historial del residente en Velvoix', ...slideFraming['resident-history'] },
      { id: 'resident-context', label: 'Contexto', title: 'Contexto de triaje cerca del workflow', text: 'Contexto de triaje, privacidad y acuerdos del equipo permanecen junto al seguimiento para que la interpretacion importante no salga del workflow.', alt: 'Contexto del residente en Velvoix', ...slideFraming['resident-context'] },
      { id: 'resident-statistics', label: 'Estadisticas', title: 'Patrones del residente sin ruido de dashboard', text: 'Tendencia, mezcla de urgencia y respuesta siguen visibles para que los patrones por residente puedan hablarse sin sobrecarga de dashboard.', alt: 'Estadisticas del residente en Velvoix', ...slideFraming['resident-statistics'] },
      { id: 'care-operations', label: 'Operacion', title: 'Operacion diaria en un flujo de gestion claro', text: 'Presion, prioridades y riesgo SLA se vuelven visibles en una vista serena del equipo para que la operacion diaria pueda corregir antes.', alt: 'Vista diaria de operaciones asistenciales en Velvoix', ...slideFraming['care-operations'] },
      { id: 'quality-response', label: 'Calidad', title: 'Calidad de respuesta en una capa explicable', text: 'La calidad y la respuesta siguen siendo revisables para que los puntos de mejora se discutan sobre senales reales.', alt: 'Vista de calidad y respuesta en Velvoix', ...slideFraming['quality-response'] },
    ],
  },
};
