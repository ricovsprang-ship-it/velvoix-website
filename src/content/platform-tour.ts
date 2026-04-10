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
    title: 'Korte productbeelden van duidelijke opvolging',
    description:
      'Gerichte voorbeelden laten zien hoe Velvoix duidelijkheid, opvolging en beheersing zichtbaar maakt.',
    supporting:
      'Geen marketingmockups, maar een gecontroleerde inkijk in de belangrijkste productschermen.',
    cta: 'Open producttour',
    previewLabel: 'Geselecteerd scherm',
    previewTitle: 'Duidelijke actie met context en opvolging',
    previewBody:
      'Een voorbeeld van hoe aanleiding, prioriteit en vervolgactie samen zichtbaar blijven met minder interpretatielast.',
    overlayLabel: 'Producttour',
    closeLabel: 'Sluiten',
    previousLabel: 'Vorige',
    nextLabel: 'Volgende',
    railLabel: 'Onderdelen van de producttour',
    curatedViewsLabel: 'geselecteerde schermen',
    interactionHint: 'Pinch of scroll om te zoomen, sleep om te verplaatsen, 0 om te resetten.',
    slides: [
      { id: 'login', label: 'Start', title: 'Rustige toegang', text: 'De instap houdt toegang tot het platform rustig en herkenbaar, zodat teams zonder extra frictie aan de werkdag beginnen.', alt: 'Velvoix login scherm', ...slideFraming.login },
      { id: 'worklist', label: 'Werkvoorraad', title: 'Meldingen in een duidelijke lijst', text: 'Urgentie, status en verantwoordelijkheid blijven samen leesbaar, zodat open opvolging niet over losse signalen versnippert.', alt: 'Velvoix meldingenlijst', ...slideFraming.worklist },
      { id: 'notifications', label: 'Notificaties', title: 'Nieuwe signalen zonder werkruis', text: 'Nieuwe signalen vallen op zonder dat de hele workflow verdrinkt in ruis.', alt: 'Velvoix notificaties en snelle opvolging', ...slideFraming.notifications },
      { id: 'event-detail', label: 'Detail', title: 'Waarom, context en actie bijeen', text: 'Aanleiding, context en aanbevolen actie blijven samen zichtbaar, zodat snelle beoordeling minder interpretatielast vraagt.', alt: 'Velvoix eventdetail', ...slideFraming['event-detail'] },
      { id: 'resolve', label: 'Afhandeling', title: 'Afronden met expliciete uitkomst', text: 'Afhandelen dwingt een expliciete uitkomst af, zodat afsluiting en latere reconstructie niet vaag blijven.', alt: 'Velvoix afhandel dialoog', ...slideFraming.resolve },
      { id: 'assign', label: 'Toewijzen', title: 'Snel de juiste collega koppelen', text: 'Toewijzen maakt verantwoordelijkheid direct zichtbaar, zodat signalen niet tussen collega\'s blijven hangen.', alt: 'Velvoix toewijzen dialoog', ...slideFraming.assign },
      { id: 'handover', label: 'Overdracht', title: 'Overdragen met traceerbaarheid', text: 'Overdracht houdt reden, eigenaar en vervolg bij elkaar, zodat context tussen diensten niet wegvalt.', alt: 'Velvoix overdracht dialoog', ...slideFraming.handover },
      { id: 'resident-overview', label: 'Clientbeeld', title: 'Actuele status direct in beeld', text: 'Clientidentiteit, koppelingen en recente meldingen staan samen in beeld, zodat basiscontext niet over losse schermen gezocht hoeft te worden.', alt: 'Velvoix clientoverzicht', ...slideFraming['resident-overview'] },
      { id: 'resident-history', label: 'Historie', title: 'Historie per client die navolgbaar blijft', text: 'Recente meldingen en afhandeling blijven per client terug te zien, zodat evaluatie niet op geheugen of losse notities leunt.', alt: 'Velvoix clienthistorie', ...slideFraming['resident-history'] },
      { id: 'resident-context', label: 'Context', title: 'Context dicht bij de opvolging', text: 'Context, privacy en teamafspraken blijven dicht bij de opvolging, zodat belangrijke informatie niet buiten de workflow verdwijnt.', alt: 'Velvoix clientcontext', ...slideFraming['resident-context'] },
      { id: 'resident-statistics', label: 'Statistiek', title: 'Patronen per client zonder dashboardruis', text: 'Trend, urgentiemix en respons blijven zichtbaar, zodat patronen per client bespreekbaar worden zonder dashboardoverlast.', alt: 'Velvoix clientstatistieken', ...slideFraming['resident-statistics'] },
      { id: 'care-operations', label: 'Dagsturing', title: 'Dagelijkse operatie in een heldere managementflow', text: 'Druk, prioriteit en SLA-risico worden in een rustig teamoverzicht zichtbaar, zodat dagsturing sneller kan bijsturen.', alt: 'Velvoix dagelijks zorgoverzicht', ...slideFraming['care-operations'] },
      { id: 'quality-response', label: 'Kwaliteit', title: 'Responskwaliteit in een uitlegbare laag', text: 'Kwaliteit en respons worden navolgbaar, zodat verbeterpunten bespreekbaar blijven op basis van echte signalen.', alt: 'Velvoix kwaliteit en respons overzicht', ...slideFraming['quality-response'] },
    ],
  },
  en: {
    eyebrow: 'Product Tour',
    title: 'Short product views of clear follow-up',
    description:
      'Focused examples show how Velvoix brings clarity, follow-up and control together.',
    supporting:
      'Not marketing mockups, but a controlled view of the product screens that matter most in practice.',
    cta: 'Open product tour',
    previewLabel: 'Selected screen',
    previewTitle: 'Clear action with context and follow-up',
    previewBody:
      'One example of how reason, priority and next action remain visible together with less interpretation burden.',
    overlayLabel: 'Product Tour',
    closeLabel: 'Close',
    previousLabel: 'Previous',
    nextLabel: 'Next',
    railLabel: 'Product tour sections',
    curatedViewsLabel: 'selected screens',
    interactionHint: 'Pinch or scroll to zoom, drag to move, press 0 to reset.',
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
    title: 'Kurze Produktansichten klarer Nachverfolgung',
    description:
      'Gezielte Beispiele zeigen, wie Velvoix Klarheit, Nachverfolgung und Kontrolle sichtbar macht.',
    supporting:
      'Keine Marketing-Mockups, sondern ein kontrollierter Einblick in die wichtigsten Produktschirme.',
    cta: 'Produkttour öffnen',
    previewLabel: 'Ausgewählter Bildschirm',
    previewTitle: 'Klare Handlung mit Kontext und Nachverfolgung',
    previewBody:
      'Ein Beispiel dafür, wie Anlass, Priorität und nächster Schritt gemeinsam sichtbar bleiben und weniger Interpretationslast erzeugen.',
    overlayLabel: 'Produkttour',
    closeLabel: 'Schließen',
    previousLabel: 'Zurück',
    nextLabel: 'Weiter',
    railLabel: 'Bereiche der Produkttour',
    curatedViewsLabel: 'ausgewählte Ansichten',
    interactionHint: 'Mit zwei Fingern oder dem Mausrad zoomen, zum Verschieben ziehen, mit 0 zurücksetzen.',
    slides: [
      { id: 'login', label: 'Start', title: 'Ruhiger Einstieg', text: 'Der Einstieg hält den Zugang ruhig und klar, damit Teams ohne zusätzliche Reibung in den Arbeitstag starten.', alt: 'Velvoix Login', ...slideFraming.login },
      { id: 'worklist', label: 'Arbeitsvorrat', title: 'Signale in einer steuerbaren Liste', text: 'Dringlichkeit, Status und Verantwortung bleiben zusammen sichtbar, damit offene Nachverfolgung nicht über einzelne Signale zerfällt.', alt: 'Velvoix Arbeitsvorrat', ...slideFraming.worklist },
      { id: 'notifications', label: 'Benachrichtigungen', title: 'Neue Signale ohne Arbeitsrauschen', text: 'Das Benachrichtigungsfeld macht neue Signale sichtbar, ohne den gesamten Workflow im Rauschen untergehen zu lassen.', alt: 'Velvoix Benachrichtigungen und schnelle Nachverfolgung', ...slideFraming.notifications },
      { id: 'event-detail', label: 'Detail', title: 'Warum, Kontext und Handlung zusammen', text: 'Anlass, Transkript, Priorisierung und Handlungshinweis bleiben zusammen sichtbar, damit eine schnelle Bewertung weniger Interpretationslast erzeugt.', alt: 'Velvoix Detailansicht einer Meldung', ...slideFraming['event-detail'] },
      { id: 'resolve', label: 'Abschluss', title: 'Abschließen mit klarem Ergebnis', text: 'Der Abschluss erzwingt ein klares Ergebnis, damit Abschluss und spätere Rekonstruktion nicht unklar bleiben.', alt: 'Velvoix Abschlussdialog', ...slideFraming.resolve },
      { id: 'assign', label: 'Zuweisen', title: 'Schnell die richtige Person zuordnen', text: 'Die Zuweisung macht Verantwortung sofort sichtbar, damit Signale nicht zwischen Kolleginnen und Kollegen hängen bleiben.', alt: 'Velvoix Zuweisungsdialog', ...slideFraming.assign },
      { id: 'handover', label: 'Übergabe', title: 'Übergeben mit Nachvollziehbarkeit', text: 'Die Übergabe hält Anlass, Verantwortung und nächsten Schritt zusammen, damit Kontext zwischen Diensten nicht verloren geht.', alt: 'Velvoix Übergabedialog', ...slideFraming.handover },
      { id: 'resident-overview', label: 'Bewohnerbild', title: 'Aktueller Status in einer ruhigen Übersicht', text: 'Identität, gekoppelte Geräte und letzte Signale stehen zusammen, damit Grundkontext nicht über mehrere Ansichten gesucht werden muss.', alt: 'Velvoix Bewohnerübersicht', ...slideFraming['resident-overview'] },
      { id: 'resident-history', label: 'Historie', title: 'Bewohnerhistorie, die überprüfbar bleibt', text: 'Aktuelle Signale und Nachverfolgung bleiben je Bewohner sichtbar, damit Auswertung nicht auf Erinnerung oder lose Notizen angewiesen ist.', alt: 'Velvoix Bewohnerhistorie', ...slideFraming['resident-history'] },
      { id: 'resident-context', label: 'Kontext', title: 'Kontext nah an der Nachverfolgung', text: 'Triagekontext, Datenschutz und Teamabsprachen bleiben an der Nachverfolgung, damit wichtige Einordnung nicht außerhalb des Workflows verschwindet.', alt: 'Velvoix Bewohnerkontext', ...slideFraming['resident-context'] },
      { id: 'resident-statistics', label: 'Statistik', title: 'Bewohnermuster ohne Dashboard-Rauschen', text: 'Trend, Dringlichkeitsmix und Reaktionsmuster bleiben sichtbar, damit Muster pro Bewohner besprechbar bleiben, ohne das Dashboard zu überladen.', alt: 'Velvoix Bewohnerstatistik', ...slideFraming['resident-statistics'] },
      { id: 'care-operations', label: 'Tagessteuerung', title: 'Tägliche Steuerung in einer klaren Managementansicht', text: 'Druck, Prioritäten und SLA-Risiko werden in einer ruhigen Teamansicht sichtbar, damit die Tagessteuerung früher nachsteuern kann.', alt: 'Velvoix tägliche Pflegeübersicht', ...slideFraming['care-operations'] },
      { id: 'quality-response', label: 'Qualität', title: 'Reaktionsqualität in erklärbarer Form', text: 'Qualität und Reaktion bleiben nachvollziehbar, damit Verbesserungen auf Basis echter Signale besprochen werden können.', alt: 'Velvoix Qualitäts- und Reaktionsübersicht', ...slideFraming['quality-response'] },
    ],
  },
  es: {
    eyebrow: 'Recorrido del producto',
    title: 'Vistas breves del producto con seguimiento claro',
    description:
      'Ejemplos concretos muestran cómo Velvoix aporta claridad, seguimiento y control.',
    supporting:
      'No son maquetas de marketing, sino una vista controlada de las pantallas del producto que más importan en la práctica.',
    cta: 'Abrir recorrido',
    previewLabel: 'Pantalla seleccionada',
    previewTitle: 'Acción clara con contexto y seguimiento',
    previewBody:
      'Un ejemplo de cómo motivo, prioridad y siguiente acción permanecen visibles juntos con menos carga interpretativa.',
    overlayLabel: 'Recorrido del producto',
    closeLabel: 'Cerrar',
    previousLabel: 'Anterior',
    nextLabel: 'Siguiente',
    railLabel: 'Secciones del recorrido',
    curatedViewsLabel: 'pantallas seleccionadas',
    interactionHint: 'Pellizque o desplace para ampliar, arrastre para mover, pulse 0 para reiniciar.',
    slides: [
      { id: 'login', label: 'Inicio', title: 'Entrada serena', text: 'La entrada mantiene el acceso sereno y reconocible para que el equipo comience la jornada sin fricción innecesaria.', alt: 'Pantalla de acceso de Velvoix', ...slideFraming.login },
      { id: 'worklist', label: 'Bandeja', title: 'Señales en una lista gobernable', text: 'La urgencia, el estado y la responsabilidad permanecen juntos para que el seguimiento abierto no se fragmente entre señales separadas.', alt: 'Lista de trabajo de Velvoix', ...slideFraming.worklist },
      { id: 'notifications', label: 'Notificaciones', title: 'Nuevas señales sin ruido operativo', text: 'El panel de notificaciones hace visibles las nuevas señales sin dejar que el flujo general se hunda en ruido.', alt: 'Notificaciones y seguimiento rápido en Velvoix', ...slideFraming.notifications },
      { id: 'event-detail', label: 'Detalle', title: 'Motivo, contexto y acción juntos', text: 'Motivo, transcripción, priorización y acción recomendada permanecen juntos para que la evaluación rápida exija menos interpretación.', alt: 'Detalle del evento de Velvoix', ...slideFraming['event-detail'] },
      { id: 'resolve', label: 'Cierre', title: 'Cerrar con un resultado explícito', text: 'El cierre obliga a registrar un resultado explícito para que el cierre y la reconstrucción posterior no queden ambiguos.', alt: 'Diálogo de cierre de Velvoix', ...slideFraming.resolve },
      { id: 'assign', label: 'Asignar', title: 'Vincular rápido a la persona adecuada', text: 'La asignación hace visible la responsabilidad para que las señales no queden entre varias personas.', alt: 'Diálogo de asignación de Velvoix', ...slideFraming.assign },
      { id: 'handover', label: 'Transferencia', title: 'Transferir con trazabilidad', text: 'La transferencia mantiene juntos motivo, responsable y siguiente paso para que el contexto no se pierda entre turnos o colegas.', alt: 'Diálogo de transferencia de Velvoix', ...slideFraming.handover },
      { id: 'resident-overview', label: 'Residente', title: 'Estado actual en un resumen sereno', text: 'La identidad, los dispositivos vinculados y las señales recientes aparecen juntos para que el contexto básico no tenga que buscarse en varias pantallas.', alt: 'Resumen del residente en Velvoix', ...slideFraming['resident-overview'] },
      { id: 'resident-history', label: 'Historial', title: 'Historial del residente que sigue siendo revisable', text: 'Las señales recientes y el seguimiento permanecen visibles por residente para que la evaluación no dependa de la memoria o de notas sueltas.', alt: 'Historial del residente en Velvoix', ...slideFraming['resident-history'] },
      { id: 'resident-context', label: 'Contexto', title: 'Contexto cerca del seguimiento', text: 'El contexto de triaje, la privacidad y los acuerdos del equipo permanecen junto al seguimiento para que la interpretación importante no salga del flujo de trabajo.', alt: 'Contexto del residente en Velvoix', ...slideFraming['resident-context'] },
      { id: 'resident-statistics', label: 'Estadísticas', title: 'Patrones del residente sin ruido de paneles', text: 'La tendencia, la mezcla de urgencia y la respuesta siguen visibles para que los patrones por residente puedan comentarse sin sobrecargar los paneles.', alt: 'Estadísticas del residente en Velvoix', ...slideFraming['resident-statistics'] },
      { id: 'care-operations', label: 'Operación', title: 'Operación diaria en una vista de gestión clara', text: 'La presión, las prioridades y el riesgo SLA se vuelven visibles en una vista serena del equipo para que la operación diaria pueda corregirse antes.', alt: 'Vista diaria de operaciones asistenciales en Velvoix', ...slideFraming['care-operations'] },
      { id: 'quality-response', label: 'Calidad', title: 'Calidad de respuesta en una capa explicable', text: 'La calidad y la respuesta siguen siendo revisables para que los puntos de mejora se discutan sobre señales reales.', alt: 'Vista de calidad y respuesta en Velvoix', ...slideFraming['quality-response'] },
    ],
  },
};
