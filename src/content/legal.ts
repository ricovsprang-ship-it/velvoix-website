import type { Locale } from './site';

import { normalizePublicContactCopy } from './contact-addresses';

export interface LegalMetaContent {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
}

export interface LegalSection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface LegalPageContent {
  eyebrow: string;
  title: string;
  intro: string;
  updatedLabel: string;
  lastUpdated: string;
  tocLabel: string;
  meta: LegalMetaContent;
  sections: LegalSection[];
}

export interface LegalLocaleContent {
  privacy: LegalPageContent;
  cookies: LegalPageContent;
  terms: LegalPageContent;
}

type LegalBaseLocale = 'nl' | 'en';

type LocalizedLegalSectionConfig = {
  paragraphs?: string[];
  bullets?: string[];
};

type LocalizedLegalPageConfig = {
  eyebrow: string;
  title: string;
  intro: string;
  updatedLabel: string;
  lastUpdated: string;
  tocLabel: string;
  meta: LegalMetaContent;
  sectionTitles: Record<string, string>;
  sections?: Record<string, LocalizedLegalSectionConfig>;
};

function localizeLegalPage(base: LegalPageContent, config: LocalizedLegalPageConfig): LegalPageContent {
  return {
    ...base,
    eyebrow: config.eyebrow,
    title: config.title,
    intro: config.intro,
    updatedLabel: config.updatedLabel,
    lastUpdated: config.lastUpdated,
    tocLabel: config.tocLabel,
    meta: config.meta,
    sections: base.sections.map((section) => {
      const sectionConfig = config.sections?.[section.id];
      const bullets = sectionConfig?.bullets ?? section.bullets;

      return {
        ...section,
        title: config.sectionTitles[section.id] ?? section.title,
        paragraphs: sectionConfig?.paragraphs ?? section.paragraphs,
        ...(bullets ? { bullets } : {}),
      };
    }),
  };
}

function localizeLegalContent(
  base: LegalLocaleContent,
  config: {
    privacy: LocalizedLegalPageConfig;
    cookies: LocalizedLegalPageConfig;
    terms: LocalizedLegalPageConfig;
  },
): LegalLocaleContent {
  return {
    privacy: localizeLegalPage(base.privacy, config.privacy),
    cookies: localizeLegalPage(base.cookies, config.cookies),
    terms: localizeLegalPage(base.terms, config.terms),
  };
}

function normalizeLegalSection(section: LegalSection): LegalSection {
  const normalizedBullets = section.bullets?.map(normalizePublicContactCopy);

  return {
    ...section,
    paragraphs: section.paragraphs.map(normalizePublicContactCopy),
    ...(normalizedBullets
      ? {
          bullets: normalizedBullets.filter((bullet, index) => normalizedBullets.indexOf(bullet) === index),
        }
      : {}),
  };
}

function normalizeLegalPage(page: LegalPageContent): LegalPageContent {
  return {
    ...page,
    intro: normalizePublicContactCopy(page.intro),
    sections: page.sections.map(normalizeLegalSection),
  };
}

function normalizeLegalLocale(content: LegalLocaleContent): LegalLocaleContent {
  return {
    privacy: normalizeLegalPage(content.privacy),
    cookies: normalizeLegalPage(content.cookies),
    terms: normalizeLegalPage(content.terms),
  };
}

const legalBaseContent: Record<LegalBaseLocale, LegalLocaleContent> = {
  nl: {
    privacy: {
      eyebrow: 'Juridische informatie',
      title: 'Privacyverklaring',
      intro:
        'Deze privacyverklaring legt uit hoe Velvoix persoonsgegevens verwerkt in verband met de website, contactaanvragen, pilotverkenningen, samenwerkingen en het gebruik van aan Velvoix gerelateerde diensten of platforms.',
      updatedLabel: 'Laatste update',
      lastUpdated: '24 maart 2026',
      tocLabel: 'Op deze pagina',
      meta: {
        title: 'Velvoix | Privacyverklaring',
        description:
          'Privacyverklaring van Velvoix voor websitegebruik, contactaanvragen, pilots, samenwerkingen en aan Velvoix gerelateerde diensten of platforms.',
        ogTitle: 'Velvoix | Privacyverklaring',
        ogDescription:
          'Lees hoe Velvoix persoonsgegevens verwerkt in verband met websitegebruik, contactaanvragen, pilots en samenwerkingen.',
      },
      sections: [
        {
          id: 'wie-wij-zijn',
          title: '1. Wie wij zijn',
          paragraphs: [
            'Velvoix Holding B.V, handelend onder de naam Velvoix, is in beginsel de verwerkingsverantwoordelijke voor de persoonsgegevens waarop deze privacyverklaring ziet.',
            'Velvoix is bereikbaar via founder@velvoix.com en voor privacygerelateerde vragen via support@velvoix.com.',
          ],
          bullets: [
            'Juridische entiteit: Velvoix Holding B.V',
            'Handelsnaam: Velvoix',
            'Postcode / plaats / land: 2313 NS, Leiden, The Netherlands',
            'Algemeen contact: founder@velvoix.com',
            'Privacycontact: support@velvoix.com',
            'Telefoonnummer: 0031610222775',
          ],
        },
        {
          id: 'toepassing',
          title: '2. Op wie deze privacyverklaring van toepassing is',
          paragraphs: [
            'Deze privacyverklaring is van toepassing op websitebezoekers, personen die contact met Velvoix opnemen, personen die een pilot of samenwerking verkennen en vertegenwoordigers van zorgorganisaties, partners of andere zakelijke relaties.',
            'Voor zover relevant geldt deze verklaring ook voor gebruikers van demo-omgevingen, pilots of zakelijke Velvoix-omgevingen, tenzij daarvoor een meer specifieke privacyregeling, verwerkersafspraak of contractuele documentatie geldt.',
          ],
          bullets: [
            'Websitebezoekers',
            'Inzenders van contactformulieren',
            'Pilot- en samenwerkingscontacten',
            'Vertegenwoordigers van zorgorganisaties en partners',
            'Gebruikers van demo\'s, pilots of zakelijke omgevingen, voor zover van toepassing',
          ],
        },
        {
          id: 'welke-gegevens',
          title: '3. Welke persoonsgegevens wij kunnen verwerken',
          paragraphs: [
            'Afhankelijk van de relatie met Velvoix kunnen wij persoonsgegevens verwerken zoals naam, functie, organisatie, e-mailadres, telefoonnummer, inhoud van berichten, communicatiehistorie, website- en apparaatgegevens, loggegevens en gegevens die nodig zijn voor accountbeheer, demo\'s, pilots of projectcoordinatie.',
            'Velvoix is niet bedoeld om via algemene websiteformulieren onnodig gevoelige patientgegevens, medische informatie of andere bijzondere persoonsgegevens aan te leveren. Tenzij dit uitdrukkelijk is afgesproken en passend beveiligd gebeurt, vragen wij om dergelijke gegevens niet via algemene contactkanalen te versturen.',
          ],
          bullets: [
            'Naam en contactgegevens',
            'Functie, organisatie en zakelijke rol',
            'E-mailverkeer, berichten en communicatiehistorie',
            'IP-adres, browsergegevens, apparaatgegevens en loggegevens',
            'Gebruik van de website, demo-omgeving of pilotomgeving',
            'Gegevens die nodig zijn voor accountbeheer, projectafstemming of pilotcoordinatie',
            'Gegevens die door organisaties of gebruikers zelf aan Velvoix worden verstrekt',
          ],
        },
        {
          id: 'doeleinden',
          title: '4. Voor welke doeleinden wij persoonsgegevens gebruiken',
          paragraphs: [
            'Velvoix gebruikt persoonsgegevens voor zakelijke en operationele doeleinden die passen bij de website, pilots, samenwerkingen en aan Velvoix gerelateerde diensten.',
          ],
          bullets: [
            'Het beantwoorden van contactaanvragen en informatieverzoeken',
            'Het plannen, voorbereiden en opvolgen van pilotgesprekken',
            'Het beoordelen en bespreken van samenwerkingen en partnerrelaties',
            'Het uitvoeren van klant-, implementatie- en partnercommunicatie',
            'Het beheren van accounts, demo\'s, pilots of zakelijke omgevingen',
            'Het verbeteren van website, dienstverlening, prestaties en veiligheid',
            'Het voldoen aan wettelijke verplichtingen en complianceverzoeken',
            'Het voorkomen van misbruik, beveiligingsincidenten of ongeoorloofd gebruik',
          ],
        },
        {
          id: 'rechtsgronden',
          title: '5. Rechtsgronden voor verwerking',
          paragraphs: [
            'De toepasselijke rechtsgrond kan verschillen per verwerkingsdoel. Velvoix kan persoonsgegevens onder meer verwerken op basis van toestemming, voor het uitvoeren van een overeenkomst of precontractuele stappen, op grond van een gerechtvaardigd belang of omdat een wettelijke verplichting dat vereist.',
            'Wanneer toestemming de grondslag is, kan deze in beginsel worden ingetrokken. Wanneer verwerking noodzakelijk is voor contractuele of precontractuele stappen, kan het zijn dat Velvoix zonder bepaalde gegevens een verzoek, pilot of dienstverlening niet goed kan uitvoeren.',
          ],
        },
        {
          id: 'cookies',
          title: '6. Cookies, analytics en vergelijkbare technieken',
          paragraphs: [
            'Velvoix gebruikt op de publieke website functionele browsertechnieken om basiswerking, taalvoorkeur, contactafhandeling en beveiliging te ondersteunen.',
            'Aanvullende analytische metingen worden alleen ingezet wanneer die expliciet zijn ingericht, juridisch passend zijn en ook in dit beleid zijn verwerkt.',
          ],
          bullets: [
            'Functionele technieken voor basiswerking, beveiliging en taalvoorkeur',
            'Technieken rond contactformulieren, mailafhandeling en misbruikpreventie',
            'Analytische metingen alleen wanneer deze expliciet live staan en in dit beleid zijn verwerkt',
          ],
        },
        {
          id: 'delen',
          title: '7. Met wie wij gegevens kunnen delen',
          paragraphs: [
            'Velvoix kan persoonsgegevens delen met dienstverleners of partijen die nodig zijn voor hosting, infrastructuur, websitebeheer, communicatie, CRM, support, implementatie of samenwerking, voor zover dat nodig is voor de betreffende verwerking.',
            'Velvoix verkoopt persoonsgegevens niet. Indien relevant kan een overzicht van subverwerkers of betrokken dienstverleners op verzoek beschikbaar worden gesteld.',
          ],
          bullets: [
            'Hosting- en infrastructuurproviders',
            'Analytics- en websiteproviders',
            'E-mail- en communicatiedienstverleners',
            'CRM-, support- of samenwerkingsplatformen',
            'Implementatie- of samenwerkingspartners waar relevant',
            'Bevoegde autoriteiten wanneer dit wettelijk vereist is',
          ],
        },
        {
          id: 'internationale-doorgiften',
          title: '8. Internationale doorgiften',
          paragraphs: [
            'Indien persoonsgegevens buiten de Europese Economische Ruimte worden verwerkt of toegankelijk zijn, gebeurt dat alleen met passende waarborgen, zoals een adequaatheidsbesluit of passende contractuele maatregelen.',
            'Velvoix beoordeelt per verwerking of aanvullende organisatorische of contractuele waarborgen nodig zijn om het beschermingsniveau passend te houden.',
          ],
        },
        {
          id: 'bewaartermijnen',
          title: '9. Bewaartermijnen',
          paragraphs: [
            'Velvoix bewaart persoonsgegevens niet langer dan nodig is voor het doel waarvoor zij zijn verzameld, tenzij een langere bewaartermijn wettelijk verplicht is of aantoonbaar nodig is voor een gerechtvaardigd belang, zoals beveiliging, contractbeheer of geschilafhandeling.',
            'Bewaartermijnen kunnen verschillen per categorie gegevens, bijvoorbeeld voor contactaanvragen, pilot- of samenwerkingscommunicatie, accountgegevens, gebruikslogs of wettelijke administratieverplichtingen. Waar nadere afspraken nodig zijn, legt Velvoix die vast in contractdocumentatie of projectafspraken.',
          ],
          bullets: [
            'Contact- en informatieverzoeken: zolang nodig voor opvolging en redelijke archivering',
            'Pilot- en samenwerkingscommunicatie: zolang nodig voor verkenning, uitvoering en evaluatie',
            'Accounts en gebruikslogs: zolang nodig voor beheer, beveiliging en troubleshooting',
            'Gegevens waarvoor wettelijke bewaarplichten gelden: overeenkomstig die verplichting',
          ],
        },
        {
          id: 'beveiliging',
          title: '10. Beveiliging',
          paragraphs: [
            'Velvoix neemt passende technische en organisatorische maatregelen om persoonsgegevens te beveiligen. Denk hierbij aan toegangsbeperking, logging, beveiligde verbindingen, rolgebaseerde toegang waar relevant en andere maatregelen die passen bij de fase, aard en context van de dienstverlening.',
            'Omdat geen enkele omgeving absoluut veilig kan worden gemaakt, blijft het belangrijk dat organisaties en gebruikers zorgvuldig omgaan met toegangsgegevens, communicatiekanalen en het delen van informatie.',
          ],
        },
        {
          id: 'rechten',
          title: '11. Rechten van betrokkenen',
          paragraphs: [
            'Afhankelijk van de toepasselijke wetgeving kunnen betrokkenen rechten hebben met betrekking tot hun persoonsgegevens. Velvoix behandelt dergelijke verzoeken zorgvuldig en binnen de toepasselijke wettelijke termijnen.',
          ],
          bullets: [
            'Recht op informatie over de verwerking',
            'Recht op inzage in persoonsgegevens',
            'Recht op rectificatie van onjuiste gegevens',
            'Recht op verwijdering, waar toepasselijk',
            'Recht op beperking van verwerking',
            'Recht op overdraagbaarheid van gegevens',
            'Recht van bezwaar tegen bepaalde verwerkingen',
            'Recht om toestemming in te trekken, waar toestemming de grondslag is',
            'Recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens',
          ],
        },
        {
          id: 'verzoeken',
          title: '12. Hoe iemand een verzoek kan indienen',
          paragraphs: [
            'Een privacyverzoek kan worden gestuurd naar support@velvoix.com. Om misbruik te voorkomen kan Velvoix om aanvullende informatie of verificatie vragen voordat een verzoek inhoudelijk wordt afgehandeld.',
            'Velvoix behandelt verzoeken in overeenstemming met de toepasselijke wetgeving en laat weten wanneer aanvullende context, verificatie of contractuele afstemming nodig is.',
          ],
        },
        {
          id: 'externe-links',
          title: '13. Links naar andere websites',
          paragraphs: [
            'De website van Velvoix kan links bevatten naar externe websites of diensten. Dergelijke externe omgevingen vallen onder hun eigen privacy- en cookiebeleid. Velvoix is niet verantwoordelijk voor de inhoud of verwerking door derden, tenzij de wet anders bepaalt.',
          ],
        },
        {
          id: 'wijzigingen',
          title: '14. Wijzigingen in deze privacyverklaring',
          paragraphs: [
            'Velvoix kan deze privacyverklaring aanpassen wanneer de website, dienstverlening, wetgeving of verwerking verandert. De meest recente versie wordt op deze pagina gepubliceerd.',
            'Laatste update: 24 maart 2026.',
          ],
        },
        {
          id: 'contact',
          title: '15. Contact',
          paragraphs: [
            'Voor vragen over deze privacyverklaring of over de manier waarop Velvoix persoonsgegevens verwerkt, kan contact worden opgenomen via onderstaande contactgegevens.',
          ],
          bullets: [
            'Velvoix Holding B.V',
            '2313 NS, Leiden, The Netherlands',
            'founder@velvoix.com',
            'support@velvoix.com',
            '0031610222775',
          ],
        },
      ],
    },
    cookies: {
      eyebrow: 'Juridische informatie',
      title: 'Cookiebeleid',
      intro:
        'Dit cookiebeleid legt uit hoe Velvoix cookies en vergelijkbare technieken gebruikt op de website, welke categorieen cookies kunnen worden ingezet en hoe voorkeuren kunnen worden beheerd.',
      updatedLabel: 'Laatste update',
      lastUpdated: '24 maart 2026',
      tocLabel: 'Op deze pagina',
      meta: {
        title: 'Velvoix | Cookiebeleid',
        description:
          'Cookiebeleid van Velvoix voor functionele cookies, analytics, voorkeuren en eventuele aanvullende webtechnieken.',
        ogTitle: 'Velvoix | Cookiebeleid',
        ogDescription:
          'Lees hoe Velvoix cookies en vergelijkbare technieken gebruikt en hoe voorkeuren kunnen worden beheerd.',
      },
      sections: [
        {
          id: 'wat-zijn-cookies',
          title: '1. Wat zijn cookies en vergelijkbare technieken',
          paragraphs: [
            'Cookies zijn kleine tekstbestanden die via een website op een apparaat kunnen worden geplaatst. Vergelijkbare technieken kunnen worden gebruikt om voorkeuren, sessies, beveiliging of gebruiksinformatie te ondersteunen.',
            'Velvoix gebruikt deze technieken alleen voor doelen die passen bij een professionele, rustige en betrouwbare website-ervaring.',
          ],
        },
        {
          id: 'welke-categorieen',
          title: '2. Welke categorieen Velvoix kan gebruiken',
          paragraphs: [
            'De publieke website gebruikt op dit moment vooral functionele browsertechnieken voor basiswerking, taalvoorkeur en contactafhandeling. Aanvullende analytische metingen of andere categorieen worden alleen toegevoegd wanneer die daadwerkelijk live staan en passend zijn ingericht.',
          ],
          bullets: [
            'Functionele technieken voor basiswerking, beveiliging en voorkeuren',
            'Browseropslag voor taalkeuze en vergelijkbare functionele voorkeuren',
            'Analytische metingen alleen wanneer deze expliciet zijn ingeschakeld en in dit beleid zijn verwerkt',
          ],
        },
        {
          id: 'waarvoor',
          title: '3. Waarvoor deze technieken worden gebruikt',
          paragraphs: [
            'Velvoix gebruikt deze technieken om de website goed te laten functioneren, taalkeuzes vast te houden, formulieren werkbaar te houden, misbruik te beperken en waar relevant prestaties of gebruik te begrijpen.',
          ],
          bullets: [
            'Websitefunctionaliteit en sessiebeheer',
            'Taalvoorkeur en andere functionele instellingen',
            'Beveiliging en misbruikpreventie',
            'Prestatie- en foutanalyse',
            'Gebruiksinzichten voor verbetering van de website',
          ],
        },
        {
          id: 'tooling',
          title: '4. Tooling en leveranciers',
          paragraphs: [
            'De publieke website gebruikt browseropslag voor taalvoorkeur en de website- en mailinrichting van Velvoix voor contactafhandeling. Aanvullende analytics- of consenttooling wordt pas benoemd zodra die daadwerkelijk live staat.',
          ],
          bullets: [
            'Browseropslag voor functionele taalvoorkeuren op de publieke site',
            'Website- en mailinfrastructuur voor contactverwerking en misbruikbeperking',
            'Hosting- en infrastructuurleveranciers worden waar nodig contractueel ingezet',
          ],
        },
        {
          id: 'voorkeuren',
          title: '5. Voorkeuren beheren',
          paragraphs: [
            'De huidige publieke website biedt geen apart voorkeurencentrum. Browserinstellingen kunnen wel worden gebruikt om cookies, lokale opslag of vergelijkbare browsergegevens te blokkeren of te verwijderen.',
            'Het uitschakelen van functionele technieken kan gevolgen hebben voor de werking, taalkeuze of gebruikservaring van de website.',
          ],
        },
        {
          id: 'wijzigingen',
          title: '6. Wijzigingen in dit cookiebeleid',
          paragraphs: [
            'Velvoix kan dit cookiebeleid aanpassen wanneer de website, de gebruikte tooling of wettelijke vereisten veranderen. De meest actuele versie wordt op deze pagina gepubliceerd.',
            'Laatste update: 24 maart 2026.',
          ],
        },
        {
          id: 'contact',
          title: '7. Contact',
          paragraphs: [
            'Voor vragen over dit cookiebeleid of over de manier waarop websitegegevens worden verwerkt, kan contact worden opgenomen via onderstaande contactgegevens.',
          ],
          bullets: [
            'Velvoix Holding B.V',
            'founder@velvoix.com',
            'support@velvoix.com',
          ],
        },
      ],
    },
    terms: {
      eyebrow: 'Juridische informatie',
      title: 'Algemene voorwaarden',
      intro:
        'Deze algemene voorwaarden beschrijven op hoofdlijnen onder welke voorwaarden de website van Velvoix wordt gebruikt en hoe zakelijke interacties, demo\'s, pilots en overige trajecten rondom Velvoix worden benaderd.',
      updatedLabel: 'Laatste update',
      lastUpdated: '24 maart 2026',
      tocLabel: 'Op deze pagina',
      meta: {
        title: 'Velvoix | Algemene voorwaarden',
        description:
          'Algemene voorwaarden van Velvoix voor websitegebruik, zakelijke orientatie, demo\'s, pilots en andere interacties rondom het platform.',
        ogTitle: 'Velvoix | Algemene voorwaarden',
        ogDescription:
          'Lees de algemene voorwaarden van Velvoix voor websitegebruik, zakelijke orientatie, demo\'s en pilots.',
      },
      sections: [
        {
          id: 'toepasselijkheid',
          title: '1. Toepasselijkheid en wie wij zijn',
          paragraphs: [
            'Velvoix Holding B.V, handelend onder de naam Velvoix, gebruikt deze voorwaarden voor het gebruik van de website en, waar relevant, voor informatieverzoeken, demo\'s, pilotverkenningen en overige zakelijke interacties rondom Velvoix.',
            'Wanneer afzonderlijke offertes, overeenkomsten, pilotovereenkomsten, serviceafspraken of verwerkersafspraken worden gesloten, hebben die voorrang voor zover dat uitdrukkelijk is afgesproken.',
          ],
        },
        {
          id: 'omschrijving',
          title: '2. Omschrijving van Velvoix',
          paragraphs: [
            'Velvoix biedt technologie en diensten gericht op zorgsignalen, triage, dashboardworkflow, beheer, device-input en gerelateerde operationele ondersteuning binnen zorgomgevingen of zorggerelateerde contexten.',
            'De website is primair bedoeld voor informatieve en zakelijke orientatie. Verdere levering, implementatie of inzet van Velvoix kan afhankelijk zijn van afzonderlijke afspraken, technische voorwaarden, beveiligingsafspraken en organisatorische inrichting.',
          ],
        },
        {
          id: 'gebruik-website',
          title: '3. Gebruik van de website',
          paragraphs: [
            'De website mag alleen rechtmatig, zorgvuldig en in overeenstemming met deze voorwaarden worden gebruikt. Het is niet toegestaan de website te gebruiken op een manier die de werking, beschikbaarheid, beveiliging of integriteit van Velvoix of derden schaadt.',
          ],
          bullets: [
            'Geen misbruik of ongeoorloofde belasting van de website',
            'Geen pogingen tot verstoring, omzeiling of ongeautoriseerde toegang',
            'Geen scraping, extractie of geautomatiseerd kopieren waar dat niet is toegestaan',
            'Geen verspreiding van schadelijke code of misleidende inhoud',
          ],
        },
        {
          id: 'informatie-beschikbaarheid',
          title: '4. Informatie en beschikbaarheid',
          paragraphs: [
            'Velvoix streeft naar actuele en zorgvuldige informatie op de website, maar garandeert niet dat alle inhoud altijd volledig, foutloos of ononderbroken beschikbaar is.',
            'De website, teksten, voorbeelden, demo\'s, pilots, previews en productomschrijvingen kunnen van tijd tot tijd worden aangepast, uitgebreid, beperkt of verwijderd.',
          ],
        },
        {
          id: 'geen-medisch-advies',
          title: '5. Geen medisch advies / professionele verantwoordelijkheid',
          paragraphs: [
            'Velvoix is geen vervanging voor professioneel zorgoordeel, klinische besluitvorming of organisatorische verantwoordelijkheid in de zorgpraktijk. Website-informatie en productvoorbeelden zijn niet bedoeld als medisch advies.',
            'Eventuele uitkomsten, voorbeelden of productdemonstraties moeten altijd worden gebruikt binnen een passende professionele, organisatorische en contractuele context, met beoordeling door bevoegde professionals en organisaties.',
          ],
        },
        {
          id: 'demos-pilots',
          title: '6. Demo\'s, pilots en samenwerkingen',
          paragraphs: [
            'Demo- en pilotomgevingen kunnen een beperkte, evoluerende of contextafhankelijke versie van Velvoix tonen. Functionaliteit, scope en beschikbaarheid kunnen afwijken van een latere productie-inzet.',
            'Verantwoordelijkheden, beveiliging, support, evaluatie, scope, acceptatie en eventuele productie-inzet worden waar relevant vastgelegd in aparte afspraken of overeenkomsten.',
          ],
        },
        {
          id: 'intellectueel-eigendom',
          title: '7. Intellectueel eigendom',
          paragraphs: [
            'Alle rechten op de website, merkuitingen, teksten, vormgeving, software, dashboards, concepten, documentatie en overige materialen berusten bij Velvoix of diens licentiegevers, tenzij uitdrukkelijk anders is vermeld.',
            'Gebruik is beperkt tot toegestane zakelijke orientatie en, waar van toepassing, contractueel overeengekomen inzet. Ongeoorloofde kopie, openbaarmaking, reverse engineering of afgeleide exploitatie is niet toegestaan voor zover de wet dit toelaat.',
          ],
        },
        {
          id: 'vertrouwelijkheid',
          title: '8. Vertrouwelijkheid',
          paragraphs: [
            'Informatie die als vertrouwelijk wordt verstrekt of redelijkerwijs als vertrouwelijk moet worden beschouwd, dient vertrouwelijk te worden behandeld. Dit geldt in het bijzonder voor informatie die wordt gedeeld in pilot-, demo- of partnershipgesprekken.',
          ],
        },
        {
          id: 'aansprakelijkheid',
          title: '9. Aansprakelijkheid',
          paragraphs: [
            'De website wordt voor informatieve doeleinden aangeboden op een as-is en as-available basis. Velvoix beperkt aansprakelijkheid voor zover wettelijk toegestaan.',
            'Voor zover juridisch toegestaan, is Velvoix niet aansprakelijk voor indirecte schade, gevolgschade, winstderving, gemiste kansen, reputatieschade of schade als gevolg van websitegebruik, tenzij sprake is van opzet, bewuste roekeloosheid of aansprakelijkheid die niet wettelijk kan worden uitgesloten.',
            'Niets in deze voorwaarden beperkt aansprakelijkheid voor zover beperking of uitsluiting volgens toepasselijk recht niet is toegestaan.',
          ],
        },
        {
          id: 'derden-links',
          title: '10. Derde partijen en links',
          paragraphs: [
            'De website kan verwijzen naar websites, diensten of materialen van derden. Dergelijke externe omgevingen vallen onder hun eigen voorwaarden, beleid en beschikbaarheid.',
            'Velvoix is niet verantwoordelijk voor de inhoud, juistheid of werking van externe websites of diensten, tenzij dwingend recht anders voorschrijft.',
          ],
        },
        {
          id: 'privacy',
          title: '11. Privacy en gegevensbescherming',
          paragraphs: [
            'Voor de manier waarop Velvoix persoonsgegevens verwerkt, verwijst Velvoix naar de privacyverklaring op de website. Waar aanvullende contractuele afspraken over gegevensbescherming nodig zijn, kunnen die apart worden vastgelegd.',
          ],
        },
        {
          id: 'wijzigingen',
          title: '12. Wijzigingen in deze voorwaarden',
          paragraphs: [
            'Velvoix kan deze voorwaarden van tijd tot tijd wijzigen. De meest actuele versie wordt op de website gepubliceerd en voorzien van een datum van laatste update.',
            'Laatste update: 24 maart 2026.',
          ],
        },
        {
          id: 'toepasselijk-recht',
          title: '13. Toepasselijk recht en bevoegde rechter',
          paragraphs: [
            'Op deze voorwaarden is Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter in Nederland, tenzij dwingend recht anders vereist.',
          ],
        },
        {
          id: 'contact',
          title: '14. Contact',
          paragraphs: [
            'Voor vragen over deze voorwaarden of zakelijke interacties rondom Velvoix kan contact worden opgenomen via onderstaande contactgegevens.',
          ],
          bullets: [
            'Velvoix Holding B.V',
            '2313 NS, Leiden, The Netherlands',
            'founder@velvoix.com',
            '0031610222775',
          ],
        },
      ],
    },
  },
  en: {
    privacy: {
      eyebrow: 'Legal information',
      title: 'Privacy Policy',
      intro:
        'This privacy policy explains how Velvoix processes personal data in connection with the website, contact requests, pilot explorations, partnerships, and the use of Velvoix-related services or platforms.',
      updatedLabel: 'Last updated',
      lastUpdated: '24 March 2026',
      tocLabel: 'On this page',
      meta: {
        title: 'Velvoix | Privacy Policy',
        description:
          'Privacy Policy of Velvoix for website use, contact requests, pilot explorations, partnerships and Velvoix-related services or platforms.',
        ogTitle: 'Velvoix | Privacy Policy',
        ogDescription:
          'Read how Velvoix processes personal data in connection with website use, contact requests, pilots and partnerships.',
      },
      sections: [
        {
          id: 'who-we-are',
          title: '1. Who we are',
          paragraphs: [
            'Velvoix Holding B.V, trading under the name Velvoix, is generally the controller for the personal data covered by this privacy policy.',
            'Velvoix can be contacted via founder@velvoix.com and for privacy-related questions via support@velvoix.com.',
          ],
          bullets: [
            'Legal entity: Velvoix Holding B.V',
            'Trade name: Velvoix',
            'Postal code / city / country: 2313 NS, Leiden, The Netherlands',
            'General contact: founder@velvoix.com',
            'Privacy contact: support@velvoix.com',
            'Phone number: 0031610222775',
          ],
        },
        {
          id: 'scope',
          title: '2. Who this privacy policy applies to',
          paragraphs: [
            'This privacy policy applies to website visitors, people contacting Velvoix, people exploring a pilot or partnership, and representatives of healthcare organisations, partners or other business relations.',
            'Where relevant, it also applies to users of demos, pilots or business Velvoix environments, unless a more specific privacy notice, processor arrangement or contract document applies.',
          ],
          bullets: [
            'Website visitors',
            'People submitting contact forms',
            'Pilot and partnership contacts',
            'Representatives of healthcare organisations and partners',
            'Users of demos, pilots or business environments, where applicable',
          ],
        },
        {
          id: 'data-we-may-process',
          title: '3. Which personal data we may process',
          paragraphs: [
            'Depending on the relationship with Velvoix, we may process personal data such as name, role, organisation, email address, phone number, message content, communication history, website and device data, log data, and data needed for account management, demos, pilots or project coordination.',
            'Velvoix website pages and general contact flows are not intended for sending unnecessary sensitive patient data, medical data or other special categories of personal data. Unless expressly agreed and appropriately secured, such data should not be submitted through general website forms or general contact channels.',
          ],
          bullets: [
            'Name and contact details',
            'Role, organisation and business context',
            'Emails, messages and communication history',
            'IP address, browser data, device data and log data',
            'Website, demo or pilot usage data',
            'Data needed for account management, project coordination or pilot planning',
            'Data provided directly by organisations or users',
          ],
        },
        {
          id: 'purposes',
          title: '4. The purposes for which we use personal data',
          paragraphs: [
            'Velvoix uses personal data for business and operational purposes that fit the website, pilots, partnerships and Velvoix-related services.',
          ],
          bullets: [
            'Responding to contact requests and information requests',
            'Planning, preparing and following up pilot conversations',
            'Assessing and discussing partnerships and collaboration opportunities',
            'Handling customer, implementation and partner communication',
            'Managing accounts, demos, pilots or business environments',
            'Improving the website, services, performance and security',
            'Complying with legal obligations and compliance requests',
            'Protecting against misuse, security incidents or unauthorised use',
          ],
        },
        {
          id: 'legal-bases',
          title: '5. Legal bases for processing',
          paragraphs: [
            'The applicable legal basis may differ per processing purpose. Velvoix may process personal data based on consent, where relevant, for the performance of a contract or pre-contractual steps, on the basis of legitimate interests, or because this is necessary to comply with a legal obligation.',
            'Where consent is the legal basis, it can generally be withdrawn. Where processing is necessary for contractual or pre-contractual reasons, certain requests, pilots or services may not be possible without the relevant data.',
          ],
        },
        {
          id: 'cookies',
          title: '6. Cookies, analytics and similar technologies',
          paragraphs: [
            'Velvoix uses functional browser technologies on the public website to support core operation, language preference, contact handling and security.',
            'Additional analytics measurement is only introduced where it has been explicitly configured, is legally appropriate and is reflected in this policy.',
          ],
          bullets: [
            'Functional technologies for core operation, security and language preference',
            'Technologies related to contact forms, mail handling and misuse prevention',
            'Analytics measurement only where it is explicitly live and described in this policy',
          ],
        },
        {
          id: 'sharing',
          title: '7. With whom we may share data',
          paragraphs: [
            'Velvoix may share personal data with service providers or parties needed for hosting, infrastructure, website management, communication, CRM, support, implementation or collaboration, where this is necessary for the relevant purpose.',
            'Velvoix does not sell personal data. Where relevant, an overview of subprocessors or service providers may be made available on request.',
          ],
          bullets: [
            'Hosting and infrastructure providers',
            'Analytics and website providers',
            'Email and communication service providers',
            'CRM, support or collaboration tooling',
            'Implementation or collaboration partners where relevant',
            'Competent authorities where legally required',
          ],
        },
        {
          id: 'international-transfers',
          title: '8. International transfers',
          paragraphs: [
            'If personal data is processed outside the European Economic Area or made accessible there, this will only happen with appropriate safeguards in place, such as an adequacy decision or appropriate contractual measures.',
            'Velvoix assesses per processing activity whether additional organisational or contractual safeguards are needed to maintain an appropriate level of protection.',
          ],
        },
        {
          id: 'retention',
          title: '9. Retention periods',
          paragraphs: [
            'Velvoix does not keep personal data longer than necessary for the purpose for which it was collected, unless a longer retention period is required by law or demonstrably necessary for a legitimate interest such as security, contract management or dispute handling.',
            'Retention periods may differ per category of data, for example for contact requests, pilot or partnership communication, account data, usage logs or statutory recordkeeping obligations. Where further detail is needed, Velvoix records this in contract documentation or project arrangements.',
          ],
          bullets: [
            'Contact and information requests: as long as needed for follow-up and reasonable archive purposes',
            'Pilot and partnership communication: as long as needed for exploration, execution and evaluation',
            'Accounts and usage logs: as long as needed for management, security and troubleshooting',
            'Data subject to statutory retention obligations: in accordance with the applicable requirement',
          ],
        },
        {
          id: 'security',
          title: '10. Security',
          paragraphs: [
            'Velvoix applies appropriate technical and organisational measures to protect personal data. These may include access restriction, logging, secure connections, role-based access where relevant and other measures that fit the phase, nature and context of the services.',
            'Because no environment can be made absolutely secure, organisations and users should also handle credentials, communication channels and information sharing with due care.',
          ],
        },
        {
          id: 'rights',
          title: '11. Data subject rights',
          paragraphs: [
            'Depending on applicable law, individuals may have rights regarding their personal data. Velvoix handles such requests carefully and within applicable legal timelines.',
          ],
          bullets: [
            'Right to information about processing',
            'Right of access',
            'Right to rectification',
            'Right to erasure, where applicable',
            'Right to restriction of processing',
            'Right to data portability',
            'Right to object to certain processing activities',
            'Right to withdraw consent, where consent is the legal basis',
            'Right to lodge a complaint with the Dutch Data Protection Authority',
          ],
        },
        {
          id: 'requests',
          title: '12. How to submit a request',
          paragraphs: [
            'A privacy-related request can be sent to support@velvoix.com. To prevent misuse, Velvoix may ask for additional information or verification before handling a request in substance.',
            'Velvoix handles requests in accordance with applicable law and will indicate where additional context, verification or contractual alignment is required.',
          ],
        },
        {
          id: 'external-links',
          title: '13. Links to other websites',
          paragraphs: [
            'The Velvoix website may contain links to external websites or services. Those external environments are governed by their own privacy and cookie policies. Velvoix is not responsible for the content or processing performed by third parties unless the law requires otherwise.',
          ],
        },
        {
          id: 'changes',
          title: '14. Changes to this privacy policy',
          paragraphs: [
            'Velvoix may update this privacy policy when the website, services, law or processing activities change. The most recent version will be published on this page.',
            'Last updated: 24 March 2026.',
          ],
        },
        {
          id: 'contact',
          title: '15. Contact',
          paragraphs: [
            'For questions about this privacy policy or the way Velvoix processes personal data, the contact details below can be used.',
          ],
          bullets: [
            'Velvoix Holding B.V',
            '2313 NS, Leiden, The Netherlands',
            'founder@velvoix.com',
            'support@velvoix.com',
            '0031610222775',
          ],
        },
      ],
    },
    cookies: {
      eyebrow: 'Legal information',
      title: 'Cookie Policy',
      intro:
        'This cookie policy explains how Velvoix uses cookies and similar technologies on the website, which categories may be used and how preferences can be managed.',
      updatedLabel: 'Last updated',
      lastUpdated: '24 March 2026',
      tocLabel: 'On this page',
      meta: {
        title: 'Velvoix | Cookie Policy',
        description:
          'Cookie Policy of Velvoix for functional cookies, analytics, preferences and related website technologies.',
        ogTitle: 'Velvoix | Cookie Policy',
        ogDescription:
          'Read how Velvoix uses cookies and similar technologies and how preferences can be managed.',
      },
      sections: [
        {
          id: 'what-are-cookies',
          title: '1. What cookies and similar technologies are',
          paragraphs: [
            'Cookies are small text files that may be placed on a device through a website. Similar technologies may be used to support preferences, sessions, security or usage insight.',
            'Velvoix uses these technologies only for purposes that fit a professional, calm and reliable website experience.',
          ],
        },
        {
          id: 'categories',
          title: '2. Which categories Velvoix may use',
          paragraphs: [
            'The public website currently relies primarily on functional browser technologies for core operation, language preference and contact handling. Additional analytics measurement or other categories are only added where they are actually live and appropriately configured.',
          ],
          bullets: [
            'Functional technologies for core operation, security and preferences',
            'Browser storage for language choice and similar functional preferences',
            'Analytics measurement only where it has been explicitly enabled and reflected in this policy',
          ],
        },
        {
          id: 'purposes',
          title: '3. The purposes for which these technologies are used',
          paragraphs: [
            'Velvoix uses these technologies to keep the website functioning properly, retain language choices, keep forms workable, reduce misuse and, where relevant, understand performance or usage.',
          ],
          bullets: [
            'Website functionality and session handling',
            'Language preference and similar functional settings',
            'Security and misuse prevention',
            'Performance and error analysis',
            'Usage insight to improve the website',
          ],
        },
        {
          id: 'tooling',
          title: '4. Tooling and providers',
          paragraphs: [
            'The public website uses browser storage for language preference and Velvoix website and mail infrastructure for contact handling. Additional analytics or consent tooling will only be named once it is actually live.',
          ],
          bullets: [
            'Browser storage for functional language preferences on the public site',
            'Website and mail infrastructure for contact processing and misuse reduction',
            'Hosting and infrastructure providers are engaged contractually where required',
          ],
        },
        {
          id: 'preferences',
          title: '5. Managing preferences',
          paragraphs: [
            'The current public website does not offer a separate preference centre. Browser settings can still be used to block or remove cookies, local storage or similar browser data.',
            'Disabling functional technologies may affect the functionality, language selection or user experience of the website.',
          ],
        },
        {
          id: 'changes',
          title: '6. Changes to this cookie policy',
          paragraphs: [
            'Velvoix may update this cookie policy when the website, tooling or legal requirements change. The most current version will be published on this page.',
            'Last updated: 24 March 2026.',
          ],
        },
        {
          id: 'contact',
          title: '7. Contact',
          paragraphs: [
            'For questions about this cookie policy or about the processing of website-related data, the contact details below can be used.',
          ],
          bullets: [
            'Velvoix Holding B.V',
            'founder@velvoix.com',
            'support@velvoix.com',
          ],
        },
      ],
    },
    terms: {
      eyebrow: 'Legal information',
      title: 'Terms & Conditions',
      intro:
        'These terms and conditions describe at a high level the conditions under which the Velvoix website is used and how business interactions, demos, pilots and related trajectories around Velvoix are approached.',
      updatedLabel: 'Last updated',
      lastUpdated: '24 March 2026',
      tocLabel: 'On this page',
      meta: {
        title: 'Velvoix | Terms & Conditions',
        description:
          'Terms & Conditions of Velvoix for website use, business orientation, demos, pilots and other interactions around the platform.',
        ogTitle: 'Velvoix | Terms & Conditions',
        ogDescription:
          'Read the Terms & Conditions of Velvoix for website use, demos, pilots and business interactions.',
      },
      sections: [
        {
          id: 'scope',
          title: '1. Applicability and who we are',
          paragraphs: [
            'Velvoix Holding B.V, trading under the name Velvoix, uses these terms for the use of the website and, where relevant, for information requests, demos, pilot explorations and other business interactions around Velvoix.',
            'Where separate quotations, agreements, pilot agreements, service arrangements or processor agreements are concluded, those documents prevail where expressly agreed.',
          ],
        },
        {
          id: 'description',
          title: '2. Description of Velvoix',
          paragraphs: [
            'Velvoix provides technology and services aimed at care signals, triage, dashboard workflow, management, device input and related operational support within healthcare or healthcare-related environments.',
            'The website is intended primarily for information and business orientation. Any actual delivery, implementation or use of Velvoix may depend on separate agreements, technical conditions, security arrangements and organisational setup.',
          ],
        },
        {
          id: 'website-use',
          title: '3. Use of the website',
          paragraphs: [
            'The website may only be used lawfully, carefully and in accordance with these terms. It is not permitted to use the website in a way that harms the operation, availability, security or integrity of Velvoix or third parties.',
          ],
          bullets: [
            'No misuse or unauthorised strain on the website',
            'No attempts to disrupt, bypass or gain unauthorised access',
            'No scraping, extraction or automated copying where not permitted',
            'No distribution of harmful code or misleading content',
          ],
        },
        {
          id: 'availability',
          title: '4. Information and availability',
          paragraphs: [
            'Velvoix aims to provide current and careful information on the website, but does not guarantee that all content will always be complete, error-free or uninterrupted.',
            'The website, texts, examples, demos, pilots, previews and product descriptions may be changed, expanded, limited or removed from time to time.',
          ],
        },
        {
          id: 'no-medical-advice',
          title: '5. No medical advice / professional responsibility',
          paragraphs: [
            'Velvoix is not a substitute for professional care judgement, clinical decision-making or organisational responsibility in healthcare practice. Website information and product examples are not intended as medical advice.',
            'Any outputs, examples or product demonstrations should always be used within an appropriate professional, organisational and contractual context, with assessment by competent professionals and organisations.',
          ],
        },
        {
          id: 'demos-pilots',
          title: '6. Demos, pilots and partnerships',
          paragraphs: [
            'Demo and pilot environments may present a limited, evolving or context-dependent version of Velvoix. Functionality, scope and availability may differ from a later production deployment.',
            'Responsibilities, security, support, evaluation, scope, acceptance and any production use are documented where relevant in separate agreements or arrangements.',
          ],
        },
        {
          id: 'ip',
          title: '7. Intellectual property',
          paragraphs: [
            'All rights in the website, branding, texts, design, software, dashboards, concepts, documentation and other materials belong to Velvoix or its licensors unless expressly stated otherwise.',
            'Use is limited to permitted business orientation and, where applicable, contractually agreed use. Unauthorised copying, disclosure, reverse engineering or derivative exploitation is not permitted to the extent allowed by law.',
          ],
        },
        {
          id: 'confidentiality',
          title: '8. Confidentiality',
          paragraphs: [
            'Information that is provided as confidential, or that should reasonably be understood as confidential, must be treated as confidential. This applies in particular to information shared in pilot, demo or partnership discussions.',
          ],
        },
        {
          id: 'liability',
          title: '9. Liability',
          paragraphs: [
            'The website is provided on an as-is and as-available basis for informational purposes. Velvoix limits liability to the extent permitted by law.',
            'To the extent legally permitted, Velvoix is not liable for indirect damage, consequential damage, loss of profit, lost opportunities, reputational damage or damage resulting from website use, unless there is intent, deliberate recklessness or liability that cannot be excluded by law.',
            'Nothing in these terms excludes or limits liability where such exclusion or limitation is not permitted by applicable law.',
          ],
        },
        {
          id: 'third-parties',
          title: '10. Third parties and links',
          paragraphs: [
            'The website may refer to third-party websites, services or materials. Those external environments are governed by their own terms, policies and availability.',
            'Velvoix is not responsible for the content, accuracy or operation of external websites or services unless mandatory law requires otherwise.',
          ],
        },
        {
          id: 'privacy',
          title: '11. Privacy and data protection',
          paragraphs: [
            'For the way Velvoix processes personal data, Velvoix refers to the Privacy Policy on the website. Where additional contractual data protection arrangements are required, these may be documented separately.',
          ],
        },
        {
          id: 'changes',
          title: '12. Changes to these terms',
          paragraphs: [
            'Velvoix may amend these terms from time to time. The most current version will be published on the website and marked with a last updated date.',
            'Last updated: 24 March 2026.',
          ],
        },
        {
          id: 'law',
          title: '13. Governing law and competent court',
          paragraphs: [
            'These terms are governed by Dutch law. Disputes are submitted to the competent court in the Netherlands, unless mandatory law requires otherwise.',
          ],
        },
        {
          id: 'contact',
          title: '14. Contact',
          paragraphs: [
            'For questions about these terms or business interactions around Velvoix, the contact details below can be used.',
          ],
          bullets: [
            'Velvoix Holding B.V',
            '2313 NS, Leiden, The Netherlands',
            'founder@velvoix.com',
            '0031610222775',
          ],
        },
      ],
    },
  },
};

const deLegalContent = localizeLegalContent(legalBaseContent.en, {
  privacy: {
    eyebrow: 'Rechtliche Hinweise',
    title: 'Datenschutzerklärung',
    intro:
      'Diese Datenschutzerklärung erläutert, wie Velvoix personenbezogene Daten im Zusammenhang mit der Website, Kontaktanfragen, Pilotprüfungen, Kooperationen und der Nutzung von Velvoix-bezogenen Diensten oder Plattformen verarbeitet.',
    updatedLabel: 'Zuletzt aktualisiert',
    lastUpdated: '24. März 2026',
    tocLabel: 'Auf dieser Seite',
    meta: {
      title: 'Velvoix | Datenschutzerklärung',
      description:
        'Datenschutzerklärung von Velvoix für die Website, Kontaktanfragen, Pilotverläufe, Kooperationen und weitere plattformbezogene Interaktionen.',
      ogTitle: 'Velvoix | Datenschutzerklärung',
      ogDescription:
        'Lesen Sie, wie Velvoix personenbezogene Daten rund um die Website, Kontaktanfragen, Piloten und Kooperationen verarbeitet.',
    },
    sectionTitles: {
      'who-we-are': '1. Wer wir sind',
      scope: '2. Für wen diese Datenschutzerklärung gilt',
      'data-we-may-process': '3. Welche personenbezogenen Daten wir verarbeiten können',
      purposes: '4. Zwecke der Verarbeitung',
      'legal-bases': '5. Rechtsgrundlagen der Verarbeitung',
      cookies: '6. Cookies, Analytics und ähnliche Technologien',
      sharing: '7. Mit wem wir Daten teilen können',
      'international-transfers': '8. Internationale Übermittlungen',
      retention: '9. Aufbewahrungsfristen',
      security: '10. Sicherheit',
      rights: '11. Rechte betroffener Personen',
      requests: '12. Wie eine Anfrage eingereicht werden kann',
      'external-links': '13. Links zu anderen Websites',
      changes: '14. Änderungen dieser Datenschutzerklärung',
      contact: '15. Kontakt',
    },
    sections: {
      'who-we-are': {
        paragraphs: [
          'Velvoix Holding B.V., handelnd unter dem Namen Velvoix, ist grundsätzlich Verantwortliche für die personenbezogenen Daten, auf die sich diese Datenschutzerklärung bezieht.',
          'Velvoix ist unter founder@velvoix.com erreichbar; für datenschutzbezogene Fragen kann support@velvoix.com genutzt werden.',
        ],
        bullets: [
          'Rechtliche Einheit: Velvoix Holding B.V.',
          'Handelsname: Velvoix',
          'Postleitzahl / Ort / Land: 2313 NS, Leiden, The Netherlands',
          'Allgemeiner Kontakt: founder@velvoix.com',
          'Datenschutzkontakt: support@velvoix.com',
          'Telefonnummer: 0031610222775',
        ],
      },
      scope: {
        paragraphs: [
          'Diese Datenschutzerklärung gilt für Besucherinnen und Besucher der Website, Personen, die Velvoix kontaktieren, Personen, die einen Piloten oder eine Zusammenarbeit prüfen, sowie Vertreterinnen und Vertreter von Pflegeorganisationen, Partnern oder anderen geschäftlichen Beziehungen.',
          'Soweit relevant gilt sie auch für Nutzerinnen und Nutzer von Demos, Piloten oder geschäftlichen Velvoix-Umgebungen, sofern dafür keine speziellere Datenschutzregelung, Auftragsverarbeitungsvereinbarung oder Vertragsdokumentation gilt.',
        ],
        bullets: [
          'Besucherinnen und Besucher der Website',
          'Personen, die Kontaktformulare absenden',
          'Pilot- und Kooperationskontakte',
          'Vertreterinnen und Vertreter von Pflegeorganisationen und Partnern',
          'Nutzerinnen und Nutzer von Demos, Piloten oder geschäftlichen Umgebungen, soweit anwendbar',
        ],
      },
      'data-we-may-process': {
        paragraphs: [
          'Je nach Beziehung zu Velvoix können wir personenbezogene Daten wie Name, Rolle, Organisation, E-Mail-Adresse, Telefonnummer, Nachrichteninhalt, Kommunikationshistorie, Website- und Gerätedaten, Protokolldaten sowie Daten verarbeiten, die für Accountverwaltung, Demos, Piloten oder Projektkoordination erforderlich sind.',
          'Die Website und allgemeinen Kontaktwege von Velvoix sind nicht dafür vorgesehen, unnötige sensible Patientendaten, medizinische Daten oder andere besondere Kategorien personenbezogener Daten zu übermitteln. Sofern dies nicht ausdrücklich vereinbart und angemessen abgesichert wurde, sollten solche Daten nicht über allgemeine Website-Formulare oder allgemeine Kontaktkanäle eingereicht werden.',
        ],
        bullets: [
          'Name und Kontaktdaten',
          'Rolle, Organisation und geschäftlicher Kontext',
          'E-Mails, Nachrichten und Kommunikationshistorie',
          'IP-Adresse, Browserdaten, Gerätedaten und Protokolldaten',
          'Nutzungsdaten der Website, Demo- oder Pilotumgebung',
          'Daten, die für Accountverwaltung, Projektkoordination oder Pilotplanung erforderlich sind',
          'Daten, die von Organisationen oder Nutzerinnen und Nutzern direkt bereitgestellt werden',
        ],
      },
      purposes: {
        paragraphs: [
          'Velvoix nutzt personenbezogene Daten für geschäftliche und operative Zwecke, die zur Website, zu Piloten, Kooperationen und zu Velvoix-bezogenen Diensten passen.',
        ],
        bullets: [
          'Beantwortung von Kontaktanfragen und Informationsersuchen',
          'Planung, Vorbereitung und Nachverfolgung von Pilotgesprächen',
          'Bewertung und Besprechung von Partnerschaften und Kooperationsmöglichkeiten',
          'Bearbeitung von Kunden-, Implementierungs- und Partnerkommunikation',
          'Verwaltung von Accounts, Demos, Piloten oder geschäftlichen Umgebungen',
          'Verbesserung der Website, der Dienste, der Performance und der Sicherheit',
          'Erfüllung gesetzlicher Pflichten und Compliance-Anforderungen',
          'Schutz vor Missbrauch, Sicherheitsvorfällen oder unbefugter Nutzung',
        ],
      },
      'legal-bases': {
        paragraphs: [
          'Die anwendbare Rechtsgrundlage kann je nach Verarbeitungszweck unterschiedlich sein. Velvoix kann personenbezogene Daten unter anderem auf Grundlage einer Einwilligung, zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen, auf Grundlage berechtigter Interessen oder zur Erfüllung einer gesetzlichen Verpflichtung verarbeiten.',
          'Soweit die Einwilligung die Rechtsgrundlage ist, kann sie grundsätzlich widerrufen werden. Soweit die Verarbeitung für vertragliche oder vorvertragliche Zwecke erforderlich ist, können bestimmte Anfragen, Piloten oder Dienste ohne die betreffenden Daten möglicherweise nicht durchgeführt werden.',
        ],
      },
      cookies: {
        paragraphs: [
          'Velvoix nutzt auf der öffentlichen Website funktionale Browsertechnologien, um den Kernbetrieb, die Sprachpräferenz, die Kontaktabwicklung und die Sicherheit zu unterstützen.',
          'Zusätzliche Analytik wird nur eingesetzt, wenn sie tatsächlich eingerichtet, rechtlich passend und in dieser Erklärung beschrieben ist.',
        ],
        bullets: [
          'Funktionale Technologien für Kernbetrieb, Sicherheit und Sprachpräferenz',
          'Technologien im Zusammenhang mit Kontaktformularen, Mailverarbeitung und Missbrauchsprävention',
          'Analytik nur dann, wenn sie tatsächlich live ist und in dieser Erklärung beschrieben wird',
        ],
      },
      sharing: {
        paragraphs: [
          'Velvoix kann personenbezogene Daten an Dienstleister oder Parteien weitergeben, die für Hosting, Infrastruktur, Websiteverwaltung, Kommunikation, CRM, Support, Implementierung oder Zusammenarbeit erforderlich sind, soweit dies für den jeweiligen Zweck notwendig ist.',
          'Velvoix verkauft keine personenbezogenen Daten. Soweit relevant, kann eine Übersicht über Subverarbeiter oder beteiligte Dienstleister auf Anfrage bereitgestellt werden.',
        ],
        bullets: [
          'Hosting- und Infrastrukturanbieter',
          'Analytics- und Website-Anbieter',
          'E-Mail- und Kommunikationsdienstleister',
          'CRM-, Support- oder Kollaborationstools',
          'Implementierungs- oder Kooperationspartner, soweit relevant',
          'Zuständige Behörden, wenn dies gesetzlich erforderlich ist',
        ],
      },
      'international-transfers': {
        paragraphs: [
          'Wenn personenbezogene Daten außerhalb des Europäischen Wirtschaftsraums verarbeitet oder dort zugänglich gemacht werden, geschieht dies nur mit angemessenen Schutzmaßnahmen, etwa auf Grundlage eines Angemessenheitsbeschlusses oder geeigneter vertraglicher Maßnahmen.',
          'Velvoix prüft je Verarbeitungstätigkeit, ob zusätzliche organisatorische oder vertragliche Schutzmaßnahmen erforderlich sind, um ein angemessenes Schutzniveau aufrechtzuerhalten.',
        ],
      },
      retention: {
        paragraphs: [
          'Velvoix speichert personenbezogene Daten nicht länger als für den Zweck erforderlich, für den sie erhoben wurden, es sei denn, eine längere Aufbewahrungsfrist ist gesetzlich vorgeschrieben oder nachweisbar für ein berechtigtes Interesse wie Sicherheit, Vertragsmanagement oder Streitbeilegung erforderlich.',
          'Aufbewahrungsfristen können je nach Datenkategorie unterschiedlich sein, etwa bei Kontaktanfragen, Pilot- oder Kooperationskommunikation, Accountdaten, Nutzungsprotokollen oder gesetzlichen Aufbewahrungspflichten. Soweit weitere Details erforderlich sind, dokumentiert Velvoix dies in Vertragsunterlagen oder Projektvereinbarungen.',
        ],
        bullets: [
          'Kontakt- und Informationsanfragen: solange dies für Nachverfolgung und angemessene Archivierung erforderlich ist',
          'Pilot- und Kooperationskommunikation: solange dies für Prüfung, Durchführung und Auswertung erforderlich ist',
          'Accounts und Nutzungsprotokolle: solange dies für Verwaltung, Sicherheit und Fehlersuche erforderlich ist',
          'Daten mit gesetzlichen Aufbewahrungspflichten: entsprechend der jeweils anwendbaren Pflicht',
        ],
      },
      security: {
        paragraphs: [
          'Velvoix ergreift geeignete technische und organisatorische Maßnahmen zum Schutz personenbezogener Daten. Dazu können Zugangsbeschränkungen, Protokollierung, sichere Verbindungen, rollenbasierter Zugriff sowie weitere Maßnahmen gehören, die zur Phase, Art und zum Kontext der Dienste passen.',
          'Da keine Umgebung absolut sicher gemacht werden kann, sollten auch Organisationen und Nutzerinnen und Nutzer mit Zugangsdaten, Kommunikationskanälen und dem Teilen von Informationen sorgfältig umgehen.',
        ],
      },
      rights: {
        paragraphs: [
          'Je nach anwendbarem Recht können betroffene Personen Rechte in Bezug auf ihre personenbezogenen Daten haben. Velvoix behandelt solche Anfragen sorgfältig und innerhalb der geltenden gesetzlichen Fristen.',
        ],
        bullets: [
          'Recht auf Information über die Verarbeitung',
          'Recht auf Auskunft',
          'Recht auf Berichtigung',
          'Recht auf Löschung, soweit anwendbar',
          'Recht auf Einschränkung der Verarbeitung',
          'Recht auf Datenübertragbarkeit',
          'Recht auf Widerspruch gegen bestimmte Verarbeitungen',
          'Recht auf Widerruf einer Einwilligung, soweit die Einwilligung die Rechtsgrundlage ist',
          'Recht auf Beschwerde bei der niederländischen Datenschutzbehörde',
        ],
      },
      requests: {
        paragraphs: [
          'Eine datenschutzbezogene Anfrage kann an support@velvoix.com gesendet werden. Zur Vermeidung von Missbrauch kann Velvoix zusätzliche Informationen oder eine Verifizierung verlangen, bevor eine Anfrage inhaltlich bearbeitet wird.',
          'Velvoix bearbeitet Anfragen im Einklang mit dem anwendbaren Recht und weist darauf hin, wenn zusätzlicher Kontext, Verifizierung oder vertragliche Abstimmung erforderlich ist.',
        ],
      },
      'external-links': {
        paragraphs: [
          'Die Velvoix-Website kann Links zu externen Websites oder Diensten enthalten. Für diese externen Umgebungen gelten ihre eigenen Datenschutz- und Cookie-Richtlinien. Velvoix ist nicht für Inhalte oder Verarbeitungen Dritter verantwortlich, sofern das Gesetz nichts anderes zwingend vorschreibt.',
        ],
      },
      changes: {
        paragraphs: [
          'Velvoix kann diese Datenschutzerklärung aktualisieren, wenn sich die Website, die Dienste, die Rechtslage oder Verarbeitungstätigkeiten ändern. Die jeweils aktuelle Version wird auf dieser Seite veröffentlicht.',
          'Zuletzt aktualisiert: 24. März 2026.',
        ],
      },
      contact: {
        paragraphs: [
          'Bei Fragen zu dieser Datenschutzerklärung oder zur Verarbeitung personenbezogener Daten durch Velvoix können die nachstehenden Kontaktdaten verwendet werden.',
        ],
        bullets: [
          'Velvoix Holding B.V.',
          '2313 NS, Leiden, The Netherlands',
          'founder@velvoix.com',
          'support@velvoix.com',
          '0031610222775',
        ],
      },
    },
  },
  cookies: {
    eyebrow: 'Rechtliche Hinweise',
    title: 'Cookie-Richtlinie',
    intro:
      'Diese Cookie-Richtlinie erläutert, wie Velvoix Cookies und ähnliche Technologien auf der Website verwendet, welche Kategorien eingesetzt werden können und wie Präferenzen verwaltet werden können.',
    updatedLabel: 'Zuletzt aktualisiert',
    lastUpdated: '24. März 2026',
    tocLabel: 'Auf dieser Seite',
    meta: {
      title: 'Velvoix | Cookie-Richtlinie',
      description:
        'Cookie-Richtlinie von Velvoix für die öffentliche Website, funktionale Browserpräferenzen und websitebezogene Datenverarbeitung.',
      ogTitle: 'Velvoix | Cookie-Richtlinie',
      ogDescription:
        'Lesen Sie, welche Cookies und browsernahen Technologien Velvoix auf der öffentlichen Website verwenden kann.',
    },
    sectionTitles: {
      'what-are-cookies': '1. Was Cookies und ähnliche Technologien sind',
      categories: '2. Welche Kategorien Velvoix nutzen kann',
      purposes: '3. Wofür diese Technologien verwendet werden',
      tooling: '4. Tooling und Anbieter',
      preferences: '5. Präferenzen verwalten',
      changes: '6. Änderungen dieser Cookie-Richtlinie',
      contact: '7. Kontakt',
    },
    sections: {
      'what-are-cookies': {
        paragraphs: [
          'Cookies sind kleine Textdateien, die über eine Website auf einem Gerät gespeichert werden können. Ähnliche Technologien können eingesetzt werden, um Präferenzen, Sitzungen, Sicherheit oder Nutzungseinblicke zu unterstützen.',
          'Velvoix verwendet diese Technologien ausschließlich für Zwecke, die zu einer professionellen, ruhigen und verlässlichen Website-Erfahrung passen.',
        ],
      },
      categories: {
        paragraphs: [
          'Die öffentliche Website stützt sich derzeit in erster Linie auf funktionale Browsertechnologien für den Kernbetrieb, die Sprachpräferenz und die Kontaktabwicklung. Zusätzliche Analytik oder andere Kategorien werden nur dann ergänzt, wenn sie tatsächlich live und angemessen eingerichtet sind.',
        ],
        bullets: [
          'Funktionale Technologien für Kernbetrieb, Sicherheit und Präferenzen',
          'Browserspeicher für die Sprachauswahl und ähnliche funktionale Präferenzen',
          'Analytik nur dann, wenn sie ausdrücklich aktiviert und in dieser Richtlinie beschrieben ist',
        ],
      },
      purposes: {
        paragraphs: [
          'Velvoix verwendet diese Technologien, um die Website funktionsfähig zu halten, Sprachwahlen zu speichern, Formulare nutzbar zu machen, Missbrauch zu verringern und, soweit relevant, Leistung oder Nutzung besser zu verstehen.',
        ],
        bullets: [
          'Website-Funktionalität und Sitzungsverwaltung',
          'Sprachpräferenz und ähnliche funktionale Einstellungen',
          'Sicherheit und Missbrauchsprävention',
          'Leistungs- und Fehleranalyse',
          'Nutzungseinblicke zur Verbesserung der Website',
        ],
      },
      tooling: {
        paragraphs: [
          'Die öffentliche Website verwendet Browserspeicher für die Sprachpräferenz sowie die Website- und Mail-Infrastruktur von Velvoix für die Kontaktabwicklung. Zusätzliche Analytik- oder Consent-Tools werden erst benannt, wenn sie tatsächlich live sind.',
        ],
        bullets: [
          'Browserspeicher für funktionale Sprachpräferenzen auf der öffentlichen Website',
          'Website- und Mail-Infrastruktur für Kontaktverarbeitung und Missbrauchsreduktion',
          'Hosting- und Infrastrukturanbieter werden, soweit erforderlich, vertraglich eingebunden',
        ],
      },
      preferences: {
        paragraphs: [
          'Die aktuelle öffentliche Website bietet kein separates Präferenzzentrum. Browsereinstellungen können dennoch verwendet werden, um Cookies, Local Storage oder ähnliche Browserdaten zu blockieren oder zu löschen.',
          'Die Deaktivierung funktionaler Technologien kann die Funktionalität, die Sprachauswahl oder die Nutzererfahrung der Website beeinträchtigen.',
        ],
      },
      changes: {
        paragraphs: [
          'Velvoix kann diese Cookie-Richtlinie aktualisieren, wenn sich die Website, das Tooling oder die rechtlichen Anforderungen ändern. Die jeweils aktuelle Version wird auf dieser Seite veröffentlicht.',
          'Zuletzt aktualisiert: 24. März 2026.',
        ],
      },
      contact: {
        paragraphs: [
          'Bei Fragen zu dieser Cookie-Richtlinie oder zur Verarbeitung websitebezogener Daten können die nachstehenden Kontaktdaten verwendet werden.',
        ],
        bullets: [
          'Velvoix Holding B.V.',
          'founder@velvoix.com',
          'support@velvoix.com',
        ],
      },
    },
  },
  terms: {
    eyebrow: 'Rechtliche Hinweise',
    title: 'Allgemeine Geschäftsbedingungen',
    intro:
      'Diese allgemeinen Geschäftsbedingungen beschreiben in groben Zügen, unter welchen Bedingungen die Velvoix-Website genutzt wird und wie geschäftliche Interaktionen, Demos, Piloten und verwandte Vorhaben rund um Velvoix eingeordnet werden.',
    updatedLabel: 'Zuletzt aktualisiert',
    lastUpdated: '24. März 2026',
    tocLabel: 'Auf dieser Seite',
    meta: {
      title: 'Velvoix | Allgemeine Geschäftsbedingungen',
      description:
        'Allgemeine Geschäftsbedingungen von Velvoix für die Nutzung der Website, geschäftliche Orientierung, Demos, Piloten und Kooperationen rund um die Plattform.',
      ogTitle: 'Velvoix | Allgemeine Geschäftsbedingungen',
      ogDescription:
        'Lesen Sie die allgemeinen Geschäftsbedingungen von Velvoix für Website-Nutzung, Demos, Piloten und geschäftliche Interaktionen.',
    },
    sectionTitles: {
      scope: '1. Geltung und wer wir sind',
      description: '2. Beschreibung von Velvoix',
      'website-use': '3. Nutzung der Website',
      availability: '4. Informationen und Verfügbarkeit',
      'no-medical-advice': '5. Kein medizinischer Rat / professionelle Verantwortung',
      'demos-pilots': '6. Demos, Piloten und Kooperationen',
      ip: '7. Geistiges Eigentum',
      confidentiality: '8. Vertraulichkeit',
      liability: '9. Haftung',
      'third-parties': '10. Dritte und externe Links',
      privacy: '11. Datenschutz',
      changes: '12. Änderungen dieser Bedingungen',
      law: '13. Anwendbares Recht und zuständiges Gericht',
      contact: '14. Kontakt',
    },
    sections: {
      scope: {
        paragraphs: [
          'Velvoix Holding B.V., handelnd unter dem Namen Velvoix, verwendet diese Bedingungen für die Nutzung der Website und, soweit relevant, für Informationsanfragen, Demos, Pilotprüfungen und andere geschäftliche Interaktionen rund um Velvoix.',
          'Werden gesonderte Angebote, Verträge, Pilotvereinbarungen, Leistungsvereinbarungen oder Auftragsverarbeitungsvereinbarungen geschlossen, gehen diese Dokumente vor, soweit dies ausdrücklich vereinbart wurde.',
        ],
      },
      description: {
        paragraphs: [
          'Velvoix bietet Technologien und Dienste für Pflegesignale, Triage, Dashboard-Workflows, Management, Geräteeingaben und damit verbundene operative Unterstützung in Gesundheits- oder gesundheitsnahen Umgebungen an.',
          'Die Website dient in erster Linie der Information und geschäftlichen Orientierung. Eine tatsächliche Bereitstellung, Implementierung oder Nutzung von Velvoix kann von gesonderten Vereinbarungen, technischen Voraussetzungen, Sicherheitsabsprachen und organisatorischen Rahmenbedingungen abhängen.',
        ],
      },
      'website-use': {
        paragraphs: [
          'Die Website darf nur rechtmäßig, sorgfältig und im Einklang mit diesen Bedingungen genutzt werden. Es ist nicht zulässig, die Website in einer Weise zu verwenden, die den Betrieb, die Verfügbarkeit, die Sicherheit oder die Integrität von Velvoix oder Dritten beeinträchtigt.',
        ],
        bullets: [
          'Kein Missbrauch und keine unbefugte Belastung der Website',
          'Keine Versuche, den Betrieb zu stören, Schutzmaßnahmen zu umgehen oder unbefugten Zugriff zu erlangen',
          'Kein Scraping, keine Extraktion und keine automatisierte Vervielfältigung, soweit dies nicht erlaubt ist',
          'Keine Verbreitung schädlichen Codes oder irreführender Inhalte',
        ],
      },
      availability: {
        paragraphs: [
          'Velvoix bemüht sich, auf der Website aktuelle und sorgfältige Informationen bereitzustellen, garantiert jedoch nicht, dass sämtliche Inhalte jederzeit vollständig, fehlerfrei oder unterbrechungsfrei verfügbar sind.',
          'Die Website, Texte, Beispiele, Demos, Piloten, Vorschauen und Produktbeschreibungen können von Zeit zu Zeit geändert, erweitert, eingeschränkt oder entfernt werden.',
        ],
      },
      'no-medical-advice': {
        paragraphs: [
          'Velvoix ist kein Ersatz für professionelle pflegerische Beurteilung, klinische Entscheidungsfindung oder organisatorische Verantwortung in der Versorgungspraxis. Informationen auf der Website und Produktbeispiele sind nicht als medizinischer Rat gedacht.',
          'Etwaige Outputs, Beispiele oder Produktdemonstrationen sollten stets nur in einem passenden fachlichen, organisatorischen und vertraglichen Kontext verwendet werden und von zuständigen Fachpersonen und Organisationen bewertet werden.',
        ],
      },
      'demos-pilots': {
        paragraphs: [
          'Demo- und Pilotumgebungen können eine begrenzte, sich entwickelnde oder kontextabhängige Version von Velvoix darstellen. Funktionalität, Umfang und Verfügbarkeit können sich von einer späteren Produktionsumgebung unterscheiden.',
          'Verantwortlichkeiten, Sicherheit, Support, Evaluation, Umfang, Abnahme und eine etwaige produktive Nutzung werden, soweit relevant, in gesonderten Vereinbarungen oder Regelungen dokumentiert.',
        ],
      },
      ip: {
        paragraphs: [
          'Sämtliche Rechte an der Website, der Marke, Texten, dem Design, der Software, den Dashboards, Konzepten, der Dokumentation und sonstigen Materialien liegen bei Velvoix oder dessen Lizenzgebern, sofern nicht ausdrücklich etwas anderes angegeben ist.',
          'Die Nutzung ist auf zulässige geschäftliche Orientierung und, soweit anwendbar, vertraglich vereinbarte Nutzung beschränkt. Unbefugtes Kopieren, Offenlegen, Reverse Engineering oder ableitende Verwertung ist im gesetzlich zulässigen Umfang nicht gestattet.',
        ],
      },
      confidentiality: {
        paragraphs: [
          'Informationen, die als vertraulich bereitgestellt werden oder vernünftigerweise als vertraulich verstanden werden müssen, sind vertraulich zu behandeln. Dies gilt insbesondere für Informationen aus Pilot-, Demo- oder Kooperationsgesprächen.',
        ],
      },
      liability: {
        paragraphs: [
          'Die Website wird zu Informationszwecken auf einer As-is- und As-available-Basis bereitgestellt. Velvoix beschränkt die Haftung im gesetzlich zulässigen Umfang.',
          'Soweit rechtlich zulässig, haftet Velvoix nicht für indirekte Schäden, Folgeschäden, entgangenen Gewinn, entgangene Chancen, Reputationsschäden oder Schäden infolge der Nutzung der Website, es sei denn, es liegt Vorsatz, bewusste Fahrlässigkeit oder eine gesetzlich nicht ausschließbare Haftung vor.',
          'Nichts in diesen Bedingungen schließt eine Haftung aus oder beschränkt sie, soweit ein solcher Ausschluss oder eine solche Beschränkung nach anwendbarem Recht nicht zulässig ist.',
        ],
      },
      'third-parties': {
        paragraphs: [
          'Die Website kann auf Websites, Dienste oder Materialien Dritter verweisen. Für diese externen Umgebungen gelten ihre eigenen Bedingungen, Richtlinien und Verfügbarkeiten.',
          'Velvoix ist nicht für Inhalt, Richtigkeit oder Betrieb externer Websites oder Dienste verantwortlich, sofern zwingendes Recht nichts anderes verlangt.',
        ],
      },
      privacy: {
        paragraphs: [
          'Für die Verarbeitung personenbezogener Daten verweist Velvoix auf die Datenschutzerklärung auf der Website. Soweit zusätzliche vertragliche Datenschutzregelungen erforderlich sind, können diese gesondert dokumentiert werden.',
        ],
      },
      changes: {
        paragraphs: [
          'Velvoix kann diese Bedingungen von Zeit zu Zeit ändern. Die jeweils aktuelle Version wird auf der Website veröffentlicht und mit einem Aktualisierungsdatum versehen.',
          'Zuletzt aktualisiert: 24. März 2026.',
        ],
      },
      law: {
        paragraphs: [
          'Für diese Bedingungen gilt niederländisches Recht. Streitigkeiten werden dem zuständigen Gericht in den Niederlanden vorgelegt, sofern zwingendes Recht nichts anderes verlangt.',
        ],
      },
      contact: {
        paragraphs: [
          'Bei Fragen zu diesen Bedingungen oder zu geschäftlichen Interaktionen rund um Velvoix können die nachstehenden Kontaktdaten genutzt werden.',
        ],
        bullets: [
          'Velvoix Holding B.V.',
          '2313 NS, Leiden, The Netherlands',
          'founder@velvoix.com',
          '0031610222775',
        ],
      },
    },
  },
});

const esLegalContent = localizeLegalContent(legalBaseContent.en, {
  privacy: {
    eyebrow: 'Información legal',
    title: 'Política de privacidad',
    intro:
      'Esta política de privacidad explica cómo Velvoix trata datos personales en relación con el sitio web, las solicitudes de contacto, las exploraciones piloto, las colaboraciones y el uso de servicios o plataformas relacionados con Velvoix.',
    updatedLabel: 'Última actualización',
    lastUpdated: '24 de marzo de 2026',
    tocLabel: 'En esta página',
    meta: {
      title: 'Velvoix | Política de privacidad',
      description:
        'Política de privacidad de Velvoix para el sitio web, formularios de contacto, trayectorias piloto, colaboraciones e interacciones relacionadas con la plataforma.',
      ogTitle: 'Velvoix | Política de privacidad',
      ogDescription:
        'Lea cómo Velvoix trata datos personales en relación con el sitio web, solicitudes de contacto, pilotos y colaboraciones.',
    },
    sectionTitles: {
      'who-we-are': '1. Quiénes somos',
      scope: '2. A quién se aplica esta política de privacidad',
      'data-we-may-process': '3. Qué datos personales podemos tratar',
      purposes: '4. Finalidades para las que utilizamos datos personales',
      'legal-bases': '5. Bases legales del tratamiento',
      cookies: '6. Cookies, analítica y tecnologías similares',
      sharing: '7. Con quién podemos compartir datos',
      'international-transfers': '8. Transferencias internacionales',
      retention: '9. Plazos de conservación',
      security: '10. Seguridad',
      rights: '11. Derechos de las personas interesadas',
      requests: '12. Cómo presentar una solicitud',
      'external-links': '13. Enlaces a otros sitios web',
      changes: '14. Cambios en esta política de privacidad',
      contact: '15. Contacto',
    },
    sections: {
      'who-we-are': {
        paragraphs: [
          'Velvoix Holding B.V., que opera bajo el nombre Velvoix, es en principio el responsable del tratamiento de los datos personales a los que se refiere esta política de privacidad.',
          'Puede contactarse con Velvoix a través de founder@velvoix.com y, para cuestiones relacionadas con la privacidad, a través de support@velvoix.com.',
        ],
        bullets: [
          'Entidad legal: Velvoix Holding B.V.',
          'Nombre comercial: Velvoix',
          'Código postal / ciudad / país: 2313 NS, Leiden, The Netherlands',
          'Contacto general: founder@velvoix.com',
          'Contacto de privacidad: support@velvoix.com',
          'Número de teléfono: 0031610222775',
        ],
      },
      scope: {
        paragraphs: [
          'Esta política de privacidad se aplica a visitantes del sitio web, personas que contactan con Velvoix, personas que exploran un piloto o una colaboración, y representantes de organizaciones asistenciales, socios u otras relaciones comerciales.',
          'Cuando corresponda, también se aplica a usuarios de demos, pilotos o entornos empresariales de Velvoix, salvo que exista un aviso de privacidad, un acuerdo de tratamiento o una documentación contractual más específica.',
        ],
        bullets: [
          'Visitantes del sitio web',
          'Personas que envían formularios de contacto',
          'Contactos de piloto y colaboración',
          'Representantes de organizaciones asistenciales y socios',
          'Usuarios de demos, pilotos o entornos empresariales, cuando corresponda',
        ],
      },
      'data-we-may-process': {
        paragraphs: [
          'Dependiendo de la relación con Velvoix, podemos tratar datos personales como nombre, función, organización, dirección de correo electrónico, número de teléfono, contenido de mensajes, historial de comunicación, datos del sitio web y del dispositivo, datos de registro y datos necesarios para la gestión de cuentas, demos, pilotos o coordinación de proyectos.',
          'Las páginas del sitio web de Velvoix y los flujos de contacto generales no están pensados para enviar datos sensibles de pacientes, datos médicos u otras categorías especiales de datos personales que no sean necesarios. Salvo acuerdo expreso y con las medidas de seguridad adecuadas, dichos datos no deben enviarse a través de formularios generales del sitio ni de canales de contacto generales.',
        ],
        bullets: [
          'Nombre y datos de contacto',
          'Función, organización y contexto comercial',
          'Correos electrónicos, mensajes e historial de comunicación',
          'Dirección IP, datos del navegador, datos del dispositivo y datos de registro',
          'Datos de uso del sitio web, demo o piloto',
          'Datos necesarios para la gestión de cuentas, la coordinación de proyectos o la planificación de pilotos',
          'Datos facilitados directamente por organizaciones o usuarios',
        ],
      },
      purposes: {
        paragraphs: [
          'Velvoix utiliza datos personales para fines empresariales y operativos acordes con el sitio web, los pilotos, las colaboraciones y los servicios relacionados con Velvoix.',
        ],
        bullets: [
          'Responder a solicitudes de contacto y de información',
          'Planificar, preparar y dar seguimiento a conversaciones de piloto',
          'Evaluar y discutir asociaciones y oportunidades de colaboración',
          'Gestionar la comunicación con clientes, implantaciones y socios',
          'Gestionar cuentas, demos, pilotos o entornos empresariales',
          'Mejorar el sitio web, los servicios, el rendimiento y la seguridad',
          'Cumplir obligaciones legales y solicitudes de compliance',
          'Proteger frente a usos indebidos, incidentes de seguridad o uso no autorizado',
        ],
      },
      'legal-bases': {
        paragraphs: [
          'La base jurídica aplicable puede variar según la finalidad del tratamiento. Velvoix puede tratar datos personales sobre la base del consentimiento, cuando proceda, para la ejecución de un contrato o de medidas precontractuales, sobre la base de intereses legítimos o porque sea necesario para cumplir una obligación legal.',
          'Cuando el consentimiento sea la base jurídica, en principio puede retirarse. Cuando el tratamiento sea necesario por razones contractuales o precontractuales, determinadas solicitudes, pilotos o servicios podrían no ser posibles sin los datos correspondientes.',
        ],
      },
      cookies: {
        paragraphs: [
          'Velvoix utiliza tecnologías funcionales del navegador en el sitio público para apoyar el funcionamiento básico, la preferencia de idioma, la gestión de contacto y la seguridad.',
          'La medición analítica adicional solo se introduce cuando está realmente configurada, es jurídicamente adecuada y se refleja en esta política.',
        ],
        bullets: [
          'Tecnologías funcionales para funcionamiento básico, seguridad y preferencia de idioma',
          'Tecnologías relacionadas con formularios de contacto, tratamiento de correo y prevención de abusos',
          'Analítica solo cuando está realmente activa y descrita en esta política',
        ],
      },
      sharing: {
        paragraphs: [
          'Velvoix puede compartir datos personales con proveedores de servicios o con partes necesarias para hosting, infraestructura, gestión del sitio web, comunicación, CRM, soporte, implantación o colaboración, cuando ello sea necesario para la finalidad correspondiente.',
          'Velvoix no vende datos personales. Cuando sea pertinente, puede facilitarse previa solicitud una lista de subencargados o proveedores de servicios implicados.',
        ],
        bullets: [
          'Proveedores de hosting e infraestructura',
          'Proveedores de analítica y del sitio web',
          'Proveedores de correo electrónico y comunicación',
          'Herramientas de CRM, soporte o colaboración',
          'Socios de implantación o colaboración, cuando corresponda',
          'Autoridades competentes cuando la ley lo exija',
        ],
      },
      'international-transfers': {
        paragraphs: [
          'Si los datos personales se tratan fuera del Espacio Económico Europeo o se hacen accesibles allí, ello solo ocurrirá con garantías adecuadas, como una decisión de adecuación o medidas contractuales apropiadas.',
          'Velvoix evalúa para cada actividad de tratamiento si son necesarias salvaguardas organizativas o contractuales adicionales para mantener un nivel de protección adecuado.',
        ],
      },
      retention: {
        paragraphs: [
          'Velvoix no conserva los datos personales más tiempo del necesario para la finalidad para la que fueron recopilados, salvo que un plazo mayor sea exigido por ley o resulte demostrablemente necesario para un interés legítimo como la seguridad, la gestión contractual o la gestión de conflictos.',
          'Los plazos de conservación pueden variar según la categoría de datos, por ejemplo para solicitudes de contacto, comunicación de piloto o colaboración, datos de cuenta, registros de uso u obligaciones legales de conservación. Cuando se necesite mayor detalle, Velvoix lo documentará en la documentación contractual o en acuerdos de proyecto.',
        ],
        bullets: [
          'Solicitudes de contacto e información: mientras sea necesario para el seguimiento y un archivo razonable',
          'Comunicación de piloto y colaboración: mientras sea necesario para la exploración, ejecución y evaluación',
          'Cuentas y registros de uso: mientras sea necesario para la gestión, la seguridad y la resolución de incidencias',
          'Datos sujetos a obligaciones legales de conservación: conforme al requisito aplicable',
        ],
      },
      security: {
        paragraphs: [
          'Velvoix aplica medidas técnicas y organizativas adecuadas para proteger los datos personales. Estas pueden incluir restricción de acceso, registro, conexiones seguras, control de acceso basado en roles cuando corresponda y otras medidas adecuadas para la fase, la naturaleza y el contexto de los servicios.',
          'Dado que ningún entorno puede hacerse absolutamente seguro, las organizaciones y los usuarios también deben manejar con el debido cuidado las credenciales, los canales de comunicación y el intercambio de información.',
        ],
      },
      rights: {
        paragraphs: [
          'Dependiendo de la legislación aplicable, las personas pueden tener derechos respecto de sus datos personales. Velvoix tramita dichas solicitudes con cuidado y dentro de los plazos legales aplicables.',
        ],
        bullets: [
          'Derecho a recibir información sobre el tratamiento',
          'Derecho de acceso',
          'Derecho de rectificación',
          'Derecho de supresión, cuando corresponda',
          'Derecho a la limitación del tratamiento',
          'Derecho a la portabilidad de los datos',
          'Derecho a oponerse a determinadas actividades de tratamiento',
          'Derecho a retirar el consentimiento cuando el consentimiento sea la base jurídica',
          'Derecho a presentar una reclamación ante la Autoridad Holandesa de Protección de Datos',
        ],
      },
      requests: {
        paragraphs: [
          'Puede enviarse una solicitud relacionada con la privacidad a support@velvoix.com. Para evitar abusos, Velvoix puede pedir información adicional o verificación antes de tramitar el fondo de la solicitud.',
          'Velvoix gestiona las solicitudes de acuerdo con la legislación aplicable e indicará cuando se requiera contexto adicional, verificación o alineación contractual.',
        ],
      },
      'external-links': {
        paragraphs: [
          'El sitio web de Velvoix puede contener enlaces a sitios o servicios externos. Esos entornos externos se rigen por sus propias políticas de privacidad y cookies. Velvoix no es responsable del contenido ni del tratamiento realizado por terceros, salvo que la ley disponga lo contrario.',
        ],
      },
      changes: {
        paragraphs: [
          'Velvoix puede actualizar esta política de privacidad cuando cambien el sitio web, los servicios, la normativa o las actividades de tratamiento. La versión más reciente se publicará en esta página.',
          'Última actualización: 24 de marzo de 2026.',
        ],
      },
      contact: {
        paragraphs: [
          'Para preguntas sobre esta política de privacidad o sobre la forma en que Velvoix trata datos personales, pueden utilizarse los datos de contacto indicados a continuación.',
        ],
        bullets: [
          'Velvoix Holding B.V.',
          '2313 NS, Leiden, The Netherlands',
          'founder@velvoix.com',
          'support@velvoix.com',
          '0031610222775',
        ],
      },
    },
  },
  cookies: {
    eyebrow: 'Información legal',
    title: 'Política de cookies',
    intro:
      'Esta política de cookies explica cómo Velvoix utiliza cookies y tecnologías similares en el sitio web, qué categorías pueden emplearse y cómo pueden gestionarse las preferencias.',
    updatedLabel: 'Última actualización',
    lastUpdated: '24 de marzo de 2026',
    tocLabel: 'En esta página',
    meta: {
      title: 'Velvoix | Política de cookies',
      description:
        'Política de cookies de Velvoix para el sitio público, las preferencias funcionales del navegador y el tratamiento de datos relacionado con la web.',
      ogTitle: 'Velvoix | Política de cookies',
      ogDescription:
        'Lea qué cookies y tecnologías del navegador puede utilizar Velvoix en el sitio público.',
    },
    sectionTitles: {
      'what-are-cookies': '1. Qué son las cookies y tecnologías similares',
      categories: '2. Qué categorías puede utilizar Velvoix',
      purposes: '3. Para qué se utilizan estas tecnologías',
      tooling: '4. Herramientas y proveedores',
      preferences: '5. Gestión de preferencias',
      changes: '6. Cambios en esta política de cookies',
      contact: '7. Contacto',
    },
    sections: {
      'what-are-cookies': {
        paragraphs: [
          'Las cookies son pequeños archivos de texto que pueden almacenarse en un dispositivo a través de un sitio web. Tecnologías similares pueden utilizarse para apoyar preferencias, sesiones, seguridad o información de uso.',
          'Velvoix utiliza estas tecnologías solo para fines compatibles con una experiencia web profesional, serena y fiable.',
        ],
      },
      categories: {
        paragraphs: [
          'El sitio público se basa actualmente principalmente en tecnologías funcionales del navegador para el funcionamiento básico, la preferencia de idioma y la gestión de contacto. La analítica adicional u otras categorías solo se añaden cuando están realmente activas y configuradas de forma adecuada.',
        ],
        bullets: [
          'Tecnologías funcionales para funcionamiento básico, seguridad y preferencias',
          'Almacenamiento del navegador para la elección de idioma y preferencias funcionales similares',
          'Analítica solo cuando esté expresamente activada y descrita en esta política',
        ],
      },
      purposes: {
        paragraphs: [
          'Velvoix utiliza estas tecnologías para mantener el sitio funcionando correctamente, conservar la elección de idioma, hacer utilizables los formularios, reducir el uso indebido y, cuando corresponda, comprender mejor el rendimiento o el uso.',
        ],
        bullets: [
          'Funcionamiento del sitio web y gestión de sesión',
          'Preferencia de idioma y ajustes funcionales similares',
          'Seguridad y prevención de abusos',
          'Análisis de rendimiento y errores',
          'Información de uso para mejorar el sitio web',
        ],
      },
      tooling: {
        paragraphs: [
          'El sitio público utiliza almacenamiento del navegador para la preferencia de idioma y la infraestructura web y de correo de Velvoix para la gestión de contacto. Las herramientas adicionales de analítica o consentimiento solo se mencionarán cuando estén realmente activas.',
        ],
        bullets: [
          'Almacenamiento del navegador para preferencias funcionales de idioma en el sitio público',
          'Infraestructura web y de correo para el procesamiento de contacto y la reducción de abusos',
          'Los proveedores de hosting e infraestructura se contratan cuando así se requiere',
        ],
      },
      preferences: {
        paragraphs: [
          'El sitio público actual no ofrece un centro de preferencias independiente. Aun así, la configuración del navegador puede utilizarse para bloquear o eliminar cookies, almacenamiento local u otros datos similares del navegador.',
          'Desactivar tecnologías funcionales puede afectar a la funcionalidad, la selección de idioma o la experiencia de uso del sitio web.',
        ],
      },
      changes: {
        paragraphs: [
          'Velvoix puede actualizar esta política de cookies cuando cambien el sitio web, las herramientas o los requisitos legales. La versión más reciente se publicará en esta página.',
          'Última actualización: 24 de marzo de 2026.',
        ],
      },
      contact: {
        paragraphs: [
          'Para preguntas sobre esta política de cookies o sobre el tratamiento de datos relacionados con el sitio web, pueden utilizarse los datos de contacto indicados a continuación.',
        ],
        bullets: [
          'Velvoix Holding B.V.',
          'founder@velvoix.com',
          'support@velvoix.com',
        ],
      },
    },
  },
  terms: {
    eyebrow: 'Información legal',
    title: 'Términos y condiciones',
    intro:
      'Estos términos y condiciones describen a alto nivel las condiciones bajo las cuales se utiliza el sitio web de Velvoix y cómo se abordan las interacciones comerciales, demos, pilotos y trayectorias relacionadas con Velvoix.',
    updatedLabel: 'Última actualización',
    lastUpdated: '24 de marzo de 2026',
    tocLabel: 'En esta página',
    meta: {
      title: 'Velvoix | Términos y condiciones',
      description:
        'Términos y condiciones de Velvoix para el uso del sitio web, la orientación comercial, demos, pilotos y otras interacciones alrededor de la plataforma.',
      ogTitle: 'Velvoix | Términos y condiciones',
      ogDescription:
        'Lea los términos y condiciones de Velvoix para el uso del sitio, demos, pilotos e interacciones comerciales.',
    },
    sectionTitles: {
      scope: '1. Aplicabilidad y quiénes somos',
      description: '2. Descripción de Velvoix',
      'website-use': '3. Uso del sitio web',
      availability: '4. Información y disponibilidad',
      'no-medical-advice': '5. Sin consejo médico / responsabilidad profesional',
      'demos-pilots': '6. Demos, pilotos y colaboraciones',
      ip: '7. Propiedad intelectual',
      confidentiality: '8. Confidencialidad',
      liability: '9. Responsabilidad',
      'third-parties': '10. Terceros y enlaces externos',
      privacy: '11. Privacidad y protección de datos',
      changes: '12. Cambios en estos términos',
      law: '13. Ley aplicable y tribunal competente',
      contact: '14. Contacto',
    },
    sections: {
      scope: {
        paragraphs: [
          'Velvoix Holding B.V., que opera bajo el nombre Velvoix, utiliza estos términos para el uso del sitio web y, cuando proceda, para solicitudes de información, demos, exploraciones piloto y otras interacciones comerciales alrededor de Velvoix.',
          'Cuando se celebren presupuestos, contratos, acuerdos piloto, acuerdos de servicio o acuerdos de tratamiento separados, esos documentos prevalecerán cuando así se haya acordado expresamente.',
        ],
      },
      description: {
        paragraphs: [
          'Velvoix ofrece tecnología y servicios orientados a señales asistenciales, triaje, workflow de dashboard, gestión, entrada desde dispositivos y soporte operativo relacionado dentro de entornos sanitarios o vinculados a la asistencia.',
          'El sitio web está destinado principalmente a información y orientación comercial. Cualquier entrega, implantación o uso real de Velvoix puede depender de acuerdos separados, condiciones técnicas, medidas de seguridad y configuración organizativa.',
        ],
      },
      'website-use': {
        paragraphs: [
          'El sitio web solo puede utilizarse de forma lícita, cuidadosa y conforme a estos términos. No está permitido utilizar el sitio de manera que perjudique el funcionamiento, la disponibilidad, la seguridad o la integridad de Velvoix o de terceros.',
        ],
        bullets: [
          'Ningún uso indebido ni carga no autorizada sobre el sitio web',
          'Ningún intento de interrumpir, eludir medidas o acceder sin autorización',
          'Ningún scraping, extracción o copia automatizada cuando no esté permitido',
          'Ninguna distribución de código dañino o contenido engañoso',
        ],
      },
      availability: {
        paragraphs: [
          'Velvoix procura ofrecer información actual y cuidada en el sitio web, pero no garantiza que todo el contenido sea siempre completo, esté libre de errores o disponible sin interrupciones.',
          'El sitio web, los textos, los ejemplos, las demos, los pilotos, las vistas previas y las descripciones de producto pueden modificarse, ampliarse, limitarse o retirarse periódicamente.',
        ],
      },
      'no-medical-advice': {
        paragraphs: [
          'Velvoix no sustituye el juicio profesional asistencial, la toma de decisiones clínicas ni la responsabilidad organizativa en la práctica sanitaria. La información del sitio web y los ejemplos de producto no constituyen consejo médico.',
          'Cualquier salida, ejemplo o demostración de producto debe utilizarse siempre dentro de un contexto profesional, organizativo y contractual adecuado, con valoración por parte de profesionales y organizaciones competentes.',
        ],
      },
      'demos-pilots': {
        paragraphs: [
          'Los entornos de demo y piloto pueden presentar una versión limitada, evolutiva o dependiente del contexto de Velvoix. La funcionalidad, el alcance y la disponibilidad pueden diferir de un despliegue posterior en producción.',
          'Las responsabilidades, la seguridad, el soporte, la evaluación, el alcance, la aceptación y cualquier uso en producción se documentarán, cuando corresponda, en acuerdos o disposiciones separadas.',
        ],
      },
      ip: {
        paragraphs: [
          'Todos los derechos sobre el sitio web, la marca, los textos, el diseño, el software, los dashboards, los conceptos, la documentación y otros materiales pertenecen a Velvoix o a sus licenciantes, salvo que se indique expresamente lo contrario.',
          'El uso se limita a la orientación comercial permitida y, cuando corresponda, al uso contractualmente acordado. No se permite copiar, divulgar, hacer ingeniería inversa o explotar derivados sin autorización, en la medida permitida por la ley.',
        ],
      },
      confidentiality: {
        paragraphs: [
          'La información facilitada como confidencial, o que razonablemente deba entenderse como confidencial, debe tratarse como tal. Esto se aplica en particular a la información compartida en conversaciones de piloto, demo o colaboración.',
        ],
      },
      liability: {
        paragraphs: [
          'El sitio web se ofrece con carácter informativo y sobre una base as-is y as-available. Velvoix limita su responsabilidad en la medida permitida por la ley.',
          'En la medida legalmente permitida, Velvoix no es responsable de daños indirectos, daños consecuenciales, pérdida de beneficios, pérdida de oportunidades, daños reputacionales o daños derivados del uso del sitio web, salvo en caso de dolo, negligencia consciente o responsabilidad que no pueda excluirse por ley.',
          'Nada de lo dispuesto en estos términos excluye o limita la responsabilidad cuando dicha exclusión o limitación no esté permitida por la legislación aplicable.',
        ],
      },
      'third-parties': {
        paragraphs: [
          'El sitio web puede remitir a sitios web, servicios o materiales de terceros. Esos entornos externos se rigen por sus propios términos, políticas y disponibilidad.',
          'Velvoix no es responsable del contenido, la exactitud ni el funcionamiento de sitios o servicios externos, salvo que la normativa imperativa disponga lo contrario.',
        ],
      },
      privacy: {
        paragraphs: [
          'Para la forma en que Velvoix trata datos personales, Velvoix remite a la Política de privacidad disponible en el sitio web. Cuando se requieran acuerdos contractuales adicionales de protección de datos, estos podrán documentarse por separado.',
        ],
      },
      changes: {
        paragraphs: [
          'Velvoix puede modificar estos términos periódicamente. La versión más reciente se publicará en el sitio web e incluirá una fecha de última actualización.',
          'Última actualización: 24 de marzo de 2026.',
        ],
      },
      law: {
        paragraphs: [
          'Estos términos se rigen por la legislación neerlandesa. Las controversias se someterán al tribunal competente de los Países Bajos, salvo que una norma imperativa disponga lo contrario.',
        ],
      },
      contact: {
        paragraphs: [
          'Para preguntas sobre estos términos o sobre interacciones comerciales alrededor de Velvoix, pueden utilizarse los datos de contacto indicados a continuación.',
        ],
        bullets: [
          'Velvoix Holding B.V.',
          '2313 NS, Leiden, The Netherlands',
          'founder@velvoix.com',
          '0031610222775',
        ],
      },
    },
  },
});

export const legalContent: Record<Locale, LegalLocaleContent> = {
  nl: normalizeLegalLocale(legalBaseContent.nl),
  en: normalizeLegalLocale(legalBaseContent.en),
  de: normalizeLegalLocale(deLegalContent),
  es: normalizeLegalLocale(esLegalContent),
};



