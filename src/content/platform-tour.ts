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
  'workload-hotspots': { image: '/products/platformtour/workload-hotspots.webp', ...defaultFraming },
  'facility-linking': { image: '/products/platformtour/facility-linking.webp', ...defaultFraming },
  'access-control': { image: '/products/platformtour/access-control.webp', ...defaultFraming },
  'audit-log': { image: '/products/platformtour/audit-log.webp', ...defaultFraming },
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
      'Een voorbeeld van hoe aanleiding, prioriteit en vervolgactie samen zichtbaar blijven, met minder interpretatieruis.',
    overlayLabel: 'Producttour',
    closeLabel: 'Sluiten',
    previousLabel: 'Vorige',
    nextLabel: 'Volgende',
    railLabel: 'Onderdelen van de producttour',
    curatedViewsLabel: 'geselecteerde schermen',
    interactionHint: 'Gebruik twee vingers of het scrollwiel om te zoomen, sleep om te verplaatsen en druk op 0 om de weergave te resetten.',
    slides: [
      { id: 'login', label: 'Start', title: 'Rustige start', text: 'De start houdt toegang tot het platform rustig en herkenbaar, zodat teams zonder extra drempels aan de werkdag beginnen.', alt: 'Velvoix inlogscherm', ...slideFraming.login },
      { id: 'worklist', label: 'Werkvoorraad', title: 'Meldingen in een duidelijke lijst', text: 'Urgentie, status en verantwoordelijkheid blijven samen leesbaar, zodat open opvolging niet versnipperd raakt.', alt: 'Velvoix meldingenlijst', ...slideFraming.worklist },
      { id: 'notifications', label: 'Notificaties', title: 'Nieuwe signalen zonder werkruis', text: 'Nieuwe signalen vallen op zonder dat de hele workflow verdrinkt in ruis.', alt: 'Velvoix notificaties en snelle opvolging', ...slideFraming.notifications },
      { id: 'event-detail', label: 'Detail', title: 'Waarom, context en actie bijeen', text: 'Aanleiding, context en aanbevolen actie blijven samen zichtbaar, zodat snelle beoordeling minder interpretatieruis geeft.', alt: 'Velvoix signaaldetail', ...slideFraming['event-detail'] },
      { id: 'resolve', label: 'Afhandeling', title: 'Afronden met duidelijke uitkomst', text: 'Bij het afronden wordt een duidelijke uitkomst vastgelegd, zodat afsluiting en latere reconstructie helder blijven.', alt: 'Velvoix venster voor afronding', ...slideFraming.resolve },
      { id: 'assign', label: 'Toewijzen', title: 'Snel de juiste collega koppelen', text: 'Toewijzen maakt verantwoordelijkheid direct zichtbaar, zodat signalen niet tussen collega\'s blijven hangen.', alt: 'Velvoix venster voor toewijzing', ...slideFraming.assign },
      { id: 'handover', label: 'Overdracht', title: 'Overdragen met duidelijke context', text: 'Overdracht houdt reden, eigenaar en vervolg bij elkaar, zodat context tussen diensten niet wegvalt.', alt: 'Velvoix venster voor overdracht', ...slideFraming.handover },
      { id: 'resident-overview', label: 'Clientbeeld', title: 'Actuele status direct in beeld', text: 'Clientidentiteit, koppelingen en recente meldingen staan samen in beeld, zodat basiscontext niet over losse schermen gezocht hoeft te worden.', alt: 'Velvoix clientoverzicht', ...slideFraming['resident-overview'] },
      { id: 'resident-history', label: 'Historie', title: 'Historie per client die overzichtelijk blijft', text: 'Recente meldingen en afhandeling blijven per client terug te zien, zodat evaluatie niet op geheugen of losse notities leunt.', alt: 'Velvoix clienthistorie', ...slideFraming['resident-history'] },
      { id: 'resident-context', label: 'Context', title: 'Context dicht bij de opvolging', text: 'Context, privacy en teamafspraken blijven dicht bij de opvolging, zodat belangrijke informatie niet buiten het werkproces verdwijnt.', alt: 'Velvoix clientcontext', ...slideFraming['resident-context'] },
      { id: 'resident-statistics', label: 'Statistiek', title: 'Patronen per client zonder dashboardruis', text: 'Trend, urgentiemix en respons blijven zichtbaar, zodat patronen per client bespreekbaar worden zonder extra dashboardruis.', alt: 'Velvoix clientstatistieken', ...slideFraming['resident-statistics'] },
      { id: 'care-operations', label: 'Dagsturing', title: 'Dagelijkse operatie in een helder teamoverzicht', text: 'Druk, prioriteit en SLA-risico worden in een rustig teamoverzicht zichtbaar, zodat teams sneller kunnen bijsturen.', alt: 'Velvoix dagelijks zorgoverzicht', ...slideFraming['care-operations'] },
      { id: 'workload-hotspots', label: 'Werkdruk', title: 'Werkdruk en hotspots sneller in beeld', text: 'Volume, herhaling en locaties met meldingsdruk worden samen zichtbaar, zodat teams eerder zien waar extra sturing nodig is.', alt: 'Velvoix werkdruk en hotspots', ...slideFraming['workload-hotspots'] },
      { id: 'quality-response', label: 'Kwaliteit', title: 'Responskwaliteit in een uitlegbare laag', text: 'Kwaliteit en respons worden navolgbaar, zodat verbeterpunten bespreekbaar blijven op basis van echte signalen.', alt: 'Velvoix kwaliteit en respons overzicht', ...slideFraming['quality-response'] },
      { id: 'facility-linking', label: 'Koppelingen', title: 'Koppelingen rustig beheren', text: 'Bewoners, kamers en boxen blijven in één beheerlaag koppelbaar, zodat basisinrichting niet versnipperd raakt.', alt: 'Velvoix koppelingen en beheer', ...slideFraming['facility-linking'] },
      { id: 'access-control', label: 'Toegang', title: 'Accounts en rollen beheersbaar houden', text: 'Accounts, rollen en toegang blijven overzichtelijk, zodat beheer duidelijk blijft per locatie en team.', alt: 'Velvoix accounts en toegang', ...slideFraming['access-control'] },
      { id: 'audit-log', label: 'Audit', title: 'Auditlog direct terug te lezen', text: 'Wijzigingen, statusacties en systeemgebeurtenissen blijven terug te lezen, zodat evaluatie en verantwoording niet op losse notities leunen.', alt: 'Velvoix auditlog', ...slideFraming['audit-log'] },
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
      'One example of how the reason, priority and next action stay visible together, with less interpretation work.',
    overlayLabel: 'Product Tour',
    closeLabel: 'Close',
    previousLabel: 'Previous',
    nextLabel: 'Next',
    railLabel: 'Product tour sections',
    curatedViewsLabel: 'selected screens',
    interactionHint: 'Pinch or scroll to zoom. Drag to move. Press 0 to reset.',
    slides: [
      { id: 'login', label: 'Start', title: 'A calm entry point', text: 'The sign-in experience stays calm and familiar so teams can start the day without extra friction.', alt: 'Velvoix login screen', ...slideFraming.login },
      { id: 'worklist', label: 'Worklist', title: 'Signals in one manageable list', text: 'Urgency, status and ownership stay visible together so open follow-up does not fragment across separate signals.', alt: 'Velvoix worklist', ...slideFraming.worklist },
      { id: 'notifications', label: 'Notifications', title: 'New signals without workflow noise', text: 'The notification panel surfaces new signals without letting the wider workflow drown in noise.', alt: 'Velvoix notifications and quick follow-up', ...slideFraming.notifications },
      { id: 'event-detail', label: 'Event Detail', title: 'Why, context and action together', text: 'Reason, transcript, triage and action guidance stay together so rapid assessment takes less interpretation.', alt: 'Velvoix event detail', ...slideFraming['event-detail'] },
      { id: 'resolve', label: 'Resolve', title: 'Closing with an explicit outcome', text: 'Resolution forces an explicit outcome so closure and later reconstruction do not remain vague.', alt: 'Velvoix resolution dialog', ...slideFraming.resolve },
      { id: 'assign', label: 'Assign', title: 'Link the right colleague quickly', text: 'Assignment makes ownership explicit so signals do not drift between colleagues.', alt: 'Velvoix assignment dialog', ...slideFraming.assign },
      { id: 'handover', label: 'Handover', title: 'Handover with traceability', text: 'Handover keeps reason, owner and next step together so context is not lost between shifts or colleagues.', alt: 'Velvoix handover dialog', ...slideFraming.handover },
      { id: 'resident-overview', label: 'Resident View', title: 'Current status in one calm summary', text: 'Identity, connected equipment and recent signals sit together so basic context does not require searching across separate screens.', alt: 'Velvoix resident overview', ...slideFraming['resident-overview'] },
      { id: 'resident-history', label: 'History', title: 'Resident history that stays reviewable', text: 'Recent signals and follow-up remain visible per resident so evaluation does not depend on memory or loose notes.', alt: 'Velvoix resident history', ...slideFraming['resident-history'] },
      { id: 'resident-context', label: 'Context', title: 'Triage context close to the workflow', text: 'Triage context, privacy and team agreements stay close to follow-up so important context does not drift outside the workflow.', alt: 'Velvoix resident context', ...slideFraming['resident-context'] },
      { id: 'resident-statistics', label: 'Statistics', title: 'Resident patterns without dashboard noise', text: 'Trend, urgency mix and response patterns remain visible so resident-level patterns can be discussed without extra dashboard clutter.', alt: 'Velvoix resident statistics', ...slideFraming['resident-statistics'] },
      { id: 'care-operations', label: 'Operations', title: 'Daily operations in one clear team overview', text: 'Pressure, priorities and SLA risk become visible in one calm overview so teams can step in earlier.', alt: 'Velvoix daily care operations overview', ...slideFraming['care-operations'] },
      { id: 'workload-hotspots', label: 'Hotspots', title: 'Workload hotspots in view', text: 'Volume, repeats and high-pressure locations become visible together so teams can see earlier where extra steering is needed.', alt: 'Velvoix workload and hotspots overview', ...slideFraming['workload-hotspots'] },
      { id: 'quality-response', label: 'Quality', title: 'Response quality in one explainable layer', text: 'Quality and response remain reviewable so improvement points can be discussed on the basis of actual signals.', alt: 'Velvoix quality and response overview', ...slideFraming['quality-response'] },
      { id: 'facility-linking', label: 'Linking', title: 'Manage resident linking in one place', text: 'Residents, rooms and boxes stay linkable in one management layer so core setup does not become fragmented.', alt: 'Velvoix resident linking and control', ...slideFraming['facility-linking'] },
      { id: 'access-control', label: 'Access', title: 'Keep accounts and roles manageable', text: 'Accounts, roles and access controls stay organised so administration remains clear across locations and teams.', alt: 'Velvoix accounts and access control', ...slideFraming['access-control'] },
      { id: 'audit-log', label: 'Audit', title: 'Audit trail easy to review', text: 'Changes, status actions and system events remain easy to review so evaluation and accountability do not rely on loose notes.', alt: 'Velvoix audit trail', ...slideFraming['audit-log'] },
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
    previewLabel: 'Ausgewählte Ansicht',
    previewTitle: 'Klare Handlung mit Kontext und Nachverfolgung',
    previewBody:
      'Ein Beispiel dafür, wie Anlass, Priorität und nächster Schritt zusammen sichtbar bleiben, damit weniger Interpretationsaufwand entsteht.',
    overlayLabel: 'Produkttour',
    closeLabel: 'Schließen',
    previousLabel: 'Zurück',
    nextLabel: 'Weiter',
    railLabel: 'Bereiche der Produkttour',
    curatedViewsLabel: 'ausgewählte Ansichten',
    interactionHint: 'Mit zwei Fingern oder dem Mausrad zoomen. Zum Verschieben ziehen. Mit 0 zurücksetzen.',
    slides: [
      { id: 'login', label: 'Start', title: 'Ruhiger Einstieg', text: 'Der Einstieg wirkt ruhig und klar, damit Teams ohne zusätzliche Reibung in den Arbeitstag starten.', alt: 'Velvoix Login', ...slideFraming.login },
      { id: 'worklist', label: 'Arbeitsliste', title: 'Signale in einer klaren Arbeitsliste', text: 'Dringlichkeit, Status und Verantwortung bleiben zusammen sichtbar, damit offene Nachverfolgung nicht in einzelne Signale zerfällt.', alt: 'Velvoix Arbeitsliste', ...slideFraming.worklist },
      { id: 'notifications', label: 'Benachrichtigungen', title: 'Neue Signale ohne unnötiges Rauschen', text: 'Das Benachrichtigungsfeld macht neue Signale sichtbar, ohne dass der gesamte Ablauf im Rauschen untergeht.', alt: 'Velvoix Benachrichtigungen und schnelle Nachverfolgung', ...slideFraming.notifications },
      { id: 'event-detail', label: 'Detail', title: 'Warum, Kontext und Handlung zusammen', text: 'Anlass, Transkript, Priorisierung und Handlungshinweis bleiben zusammen sichtbar, damit eine schnelle Einschätzung weniger Interpretationsaufwand erfordert.', alt: 'Velvoix Detailansicht einer Meldung', ...slideFraming['event-detail'] },
      { id: 'resolve', label: 'Abschluss', title: 'Abschließen mit klarem Ergebnis', text: 'Der Abschluss erzwingt ein klares Ergebnis, damit Abschluss und spätere Rekonstruktion nicht unklar bleiben.', alt: 'Velvoix Abschlussdialog', ...slideFraming.resolve },
      { id: 'assign', label: 'Zuweisen', title: 'Schnell die richtige Person zuordnen', text: 'Die Zuweisung macht Verantwortung sofort sichtbar, damit Signale nicht zwischen Kolleginnen und Kollegen hängen bleiben.', alt: 'Velvoix Zuweisungsdialog', ...slideFraming.assign },
      { id: 'handover', label: 'Übergabe', title: 'Übergeben mit klarem Anschluss', text: 'Die Übergabe hält Anlass, Verantwortung und nächsten Schritt zusammen, damit Kontext zwischen Diensten nicht verloren geht.', alt: 'Velvoix Übergabedialog', ...slideFraming.handover },
      { id: 'resident-overview', label: 'Bewohnerübersicht', title: 'Aktueller Status in einer ruhigen Übersicht', text: 'Identität, gekoppelte Geräte und letzte Signale stehen zusammen, damit Grundkontext nicht über mehrere Ansichten gesucht werden muss.', alt: 'Velvoix Bewohnerübersicht', ...slideFraming['resident-overview'] },
      { id: 'resident-history', label: 'Historie', title: 'Bewohnerhistorie, die überprüfbar bleibt', text: 'Aktuelle Signale und Nachverfolgung bleiben je Bewohner sichtbar, damit Auswertung nicht auf Erinnerung oder lose Notizen angewiesen ist.', alt: 'Velvoix Bewohnerhistorie', ...slideFraming['resident-history'] },
      { id: 'resident-context', label: 'Kontext', title: 'Kontext nah am nächsten Schritt', text: 'Triagekontext, Datenschutz und Teamabsprachen bleiben nah an der Nachverfolgung, damit wichtige Einordnung nicht außerhalb des Ablaufs verschwindet.', alt: 'Velvoix Bewohnerkontext', ...slideFraming['resident-context'] },
      { id: 'resident-statistics', label: 'Statistik', title: 'Bewohnermuster ohne Dashboard-Rauschen', text: 'Trend, Dringlichkeitsmix und Reaktionsmuster bleiben sichtbar, damit Muster pro Bewohner besprechbar bleiben, ohne das Dashboard zu überladen.', alt: 'Velvoix Bewohnerstatistik', ...slideFraming['resident-statistics'] },
      { id: 'care-operations', label: 'Tagessteuerung', title: 'Tagesgeschäft in einer klaren Teamübersicht', text: 'Druck, Prioritäten und SLA-Risiko werden in einer ruhigen Teamansicht sichtbar, damit Teams früher nachsteuern können.', alt: 'Velvoix tägliche Pflegeübersicht', ...slideFraming['care-operations'] },
      { id: 'workload-hotspots', label: 'Hotspots', title: 'Arbeitsdruck und Hotspots schneller im Blick', text: 'Volumen, Wiederholungen und meldungsstarke Bereiche werden gemeinsam sichtbar, damit Teams früher sehen, wo zusätzliche Steuerung nötig ist.', alt: 'Velvoix Arbeitsdruck und Hotspots', ...slideFraming['workload-hotspots'] },
      { id: 'quality-response', label: 'Qualität', title: 'Reaktionsqualität nachvollziehbar im Blick', text: 'Qualität und Reaktion bleiben nachvollziehbar, damit Verbesserungen auf Basis echter Signale besprochen werden können.', alt: 'Velvoix Qualitäts- und Reaktionsübersicht', ...slideFraming['quality-response'] },
      { id: 'facility-linking', label: 'Verknüpfung', title: 'Verknüpfungen ruhig verwalten', text: 'Bewohner, Zimmer und Boxen bleiben in einer Verwaltungsebene verknüpfbar, damit die Grundeinrichtung nicht zersplittert.', alt: 'Velvoix Verknüpfungen und Verwaltung', ...slideFraming['facility-linking'] },
      { id: 'access-control', label: 'Zugang', title: 'Konten und Rollen beherrschbar halten', text: 'Konten, Rollen und Zugriffssteuerung bleiben übersichtlich, damit die Verwaltung je Standort und Team klar bleibt.', alt: 'Velvoix Konten und Zugänge', ...slideFraming['access-control'] },
      { id: 'audit-log', label: 'Audit', title: 'Auditlog direkt nachvollziehen', text: 'Änderungen, Statusaktionen und Systemereignisse bleiben nachvollziehbar, damit Auswertung und Verantwortung nicht von losen Notizen abhängen.', alt: 'Velvoix Auditlog', ...slideFraming['audit-log'] },
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
      'Un ejemplo de cómo el motivo, la prioridad y la siguiente acción permanecen visibles a la vez, con menos esfuerzo de interpretación.',
    overlayLabel: 'Recorrido del producto',
    closeLabel: 'Cerrar',
    previousLabel: 'Anterior',
    nextLabel: 'Siguiente',
    railLabel: 'Secciones del recorrido',
    curatedViewsLabel: 'pantallas seleccionadas',
    interactionHint: 'Use dos dedos o la rueda para ampliar, arrastre para mover y pulse 0 para restablecer la vista.',
    slides: [
      { id: 'login', label: 'Inicio', title: 'Entrada serena', text: 'La entrada mantiene el acceso sereno y reconocible para que el equipo empiece la jornada sin fricción innecesaria.', alt: 'Pantalla de acceso de Velvoix', ...slideFraming.login },
      { id: 'worklist', label: 'Bandeja', title: 'Señales en una lista clara', text: 'La urgencia, el estado y la responsabilidad permanecen juntos para que el seguimiento abierto no se fragmente entre señales aisladas.', alt: 'Lista de trabajo de Velvoix', ...slideFraming.worklist },
      { id: 'notifications', label: 'Notificaciones', title: 'Nuevas señales sin ruido operativo', text: 'El panel de notificaciones hace visibles las nuevas señales sin dejar que el flujo general se hunda en ruido.', alt: 'Notificaciones y seguimiento rápido en Velvoix', ...slideFraming.notifications },
      { id: 'event-detail', label: 'Detalle', title: 'Motivo, contexto y acción en un mismo lugar', text: 'Motivo, transcripción, priorización y acción recomendada permanecen juntos para que la evaluación rápida exija menos interpretación.', alt: 'Detalle del evento de Velvoix', ...slideFraming['event-detail'] },
      { id: 'resolve', label: 'Cierre', title: 'Cerrar con un resultado explícito', text: 'El cierre obliga a registrar un resultado explícito para que el cierre y la reconstrucción posterior no queden ambiguos.', alt: 'Diálogo de cierre de Velvoix', ...slideFraming.resolve },
      { id: 'assign', label: 'Asignar', title: 'Asignar rápido a la persona adecuada', text: 'La asignación hace visible la responsabilidad para que las señales no queden entre varias personas.', alt: 'Diálogo de asignación de Velvoix', ...slideFraming.assign },
      { id: 'handover', label: 'Transferencia', title: 'Transferir sin perder el hilo', text: 'La transferencia mantiene juntos motivo, responsable y siguiente paso para que el contexto no se pierda entre turnos o colegas.', alt: 'Diálogo de transferencia de Velvoix', ...slideFraming.handover },
      { id: 'resident-overview', label: 'Residente', title: 'Estado actual en un resumen sereno', text: 'La identidad, los dispositivos vinculados y las señales recientes aparecen juntos para que el contexto básico no tenga que buscarse en varias pantallas.', alt: 'Resumen del residente en Velvoix', ...slideFraming['resident-overview'] },
      { id: 'resident-history', label: 'Historial', title: 'Historial del residente que sigue siendo revisable', text: 'Las señales recientes y el seguimiento permanecen visibles por residente para que la evaluación no dependa de la memoria o de notas sueltas.', alt: 'Historial del residente en Velvoix', ...slideFraming['resident-history'] },
      { id: 'resident-context', label: 'Contexto', title: 'Contexto cerca del seguimiento', text: 'El contexto de triaje, la privacidad y los acuerdos del equipo permanecen junto al seguimiento para que la información importante no salga del flujo de trabajo.', alt: 'Contexto del residente en Velvoix', ...slideFraming['resident-context'] },
      { id: 'resident-statistics', label: 'Estadísticas', title: 'Patrones del residente sin ruido de paneles', text: 'La tendencia, la mezcla de urgencia y la respuesta siguen visibles para que los patrones por residente puedan comentarse sin sobrecargar los paneles.', alt: 'Estadísticas del residente en Velvoix', ...slideFraming['resident-statistics'] },
      { id: 'care-operations', label: 'Operación', title: 'Operación diaria en una vista clara del equipo', text: 'La presión, las prioridades y el riesgo SLA se vuelven visibles en una vista serena del equipo para poder corregir antes el rumbo diario.', alt: 'Vista diaria de operaciones asistenciales en Velvoix', ...slideFraming['care-operations'] },
      { id: 'workload-hotspots', label: 'Hotspots', title: 'Carga y focos de presión a la vista', text: 'El volumen, las repeticiones y las ubicaciones con mayor presión de señales se vuelven visibles a la vez para que los equipos detecten antes dónde hace falta más dirección.', alt: 'Velvoix carga y focos de presión', ...slideFraming['workload-hotspots'] },
      { id: 'quality-response', label: 'Calidad', title: 'Calidad de respuesta en una vista explicable', text: 'La calidad y la respuesta siguen siendo revisables para que los puntos de mejora se discutan sobre señales reales.', alt: 'Vista de calidad y respuesta en Velvoix', ...slideFraming['quality-response'] },
      { id: 'facility-linking', label: 'Vinculación', title: 'Gestionar vinculaciones con calma', text: 'Residentes, habitaciones y boxes pueden vincularse desde una misma capa de gestión para que la configuración básica no se disperse.', alt: 'Velvoix vinculaciones y gestión', ...slideFraming['facility-linking'] },
      { id: 'access-control', label: 'Acceso', title: 'Mantener cuentas y roles bajo control', text: 'Las cuentas, los roles y los controles de acceso siguen organizados para que la administración permanezca clara por centro y equipo.', alt: 'Velvoix cuentas y accesos', ...slideFraming['access-control'] },
      { id: 'audit-log', label: 'Auditoría', title: 'Registro de auditoría fácil de revisar', text: 'Los cambios, las acciones de estado y los eventos del sistema siguen siendo revisables para que la evaluación y la responsabilidad no dependan de notas sueltas.', alt: 'Velvoix registro de auditoría', ...slideFraming['audit-log'] },
    ],
  },
};
