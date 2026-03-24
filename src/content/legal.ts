import type { Locale } from './site';

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

export const legalContent: Record<Locale, LegalLocaleContent> = {
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
            'Handelsnaam: Velvoix / Velvoix',
            'KvK-nummer: -',
            'Btw-nummer: -',
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
            'Velvoix kan functionele cookies en, afhankelijk van de inrichting van de website, analytische cookies of vergelijkbare technieken gebruiken om de website bruikbaar, veilig en inzichtelijk te houden.',
            'Specifieke tooling en instellingen kunnen later nader worden gespecificeerd zodra deze definitief zijn vastgesteld. Indien een cookiebanner of voorkeursinstelling beschikbaar is, kunnen keuzes daar worden beheerd.',
          ],
          bullets: [
            'Functionele cookies voor basiswerking en beveiliging',
            'Analytische cookies of vergelijkbare metingen voor gebruiksinzicht',
            'Aanvullende tooling wordt alleen ingezet en gespecificeerd waar dat daadwerkelijk van toepassing is.',
            'Analytics wordt alleen gebruikt en gespecificeerd waar dat functioneel en juridisch passend is.',
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
            'Bewaartermijnen kunnen verschillen per categorie gegevens, bijvoorbeeld voor contactaanvragen, pilot- of samenwerkingscommunicatie, accountgegevens, gebruikslogs of wettelijke administratieverplichtingen. Exacte categorieen of termijnen kunnen later nader worden ingevuld in aanvullende contractdocumentatie waar dat nodig is.',
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
            'Afhankelijk van de uiteindelijke inrichting van de website kan Velvoix functionele cookies, analytische cookies en, indien later relevant en toegestaan, aanvullende cookiecategorieen gebruiken.',
          ],
          bullets: [
            'Functionele cookies voor basiswerking, beveiliging en voorkeuren',
            'Analytische cookies of vergelijkbare technieken voor gebruiksinzicht',
            'Aanvullende tooling of categorieen worden alleen ingezet en gespecificeerd waar dat daadwerkelijk van toepassing is.',
          ],
        },
        {
          id: 'waarvoor',
          title: '3. Waarvoor deze technieken worden gebruikt',
          paragraphs: [
            'Velvoix kan cookies en vergelijkbare technieken gebruiken om de website goed te laten functioneren, prestaties te meten, formulieren werkbaar te houden, misbruik te beperken en inzicht te krijgen in het gebruik van de website.',
          ],
          bullets: [
            'Websitefunctionaliteit en sessiebeheer',
            'Beveiliging en misbruikpreventie',
            'Prestatie- en foutanalyse',
            'Gebruiksinzichten voor verbetering van de website',
          ],
        },
        {
          id: 'tooling',
          title: '4. Tooling en leveranciers',
          paragraphs: [
            'Specifieke cookie- en analysetooling kan later worden ingevuld of aangepast naarmate de website-inrichting verder wordt uitgewerkt.',
          ],
          bullets: [
            'Cookie- en analysetooling wordt nader gespecificeerd zodra deze definitief is vastgesteld.',
            'Hosting- en infrastructuurleveranciers worden waar nodig contractueel ingezet.',
          ],
        },
        {
          id: 'voorkeuren',
          title: '5. Voorkeuren beheren',
          paragraphs: [
            'Wanneer een cookiebanner, voorkeurencentrum of vergelijkbare instelling beschikbaar is, kunnen keuzes daar worden beheerd. Daarnaast kunnen browsers vaak zo worden ingesteld dat cookies worden geweigerd of verwijderd.',
            'Het uitschakelen van bepaalde cookies kan gevolgen hebben voor de werking of gebruikservaring van de website.',
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
            'Trade name: Velvoix / Velvoix',
            'Chamber of Commerce number: -',
            'VAT number: -',
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
            'Velvoix may use functional cookies and, depending on the website setup, analytics cookies or similar technologies to keep the website usable, secure and measurable.',
            'Specific tooling and settings may be specified later once they are definitively established. Where a cookie banner or preference centre is available, choices can be managed there.',
          ],
          bullets: [
            'Functional cookies for core website operation and security',
            'Analytics cookies or similar measurement tools for website insight',
            'Additional tooling is only used and specified where it is actually relevant.',
            'Analytics is only used and specified where it is functionally and legally appropriate.',
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
            'Retention periods may differ per category of data, for example for contact requests, pilot or partnership communication, account data, usage logs or statutory recordkeeping obligations. Exact categories or periods may be specified later in supplementary contract documentation where needed.',
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
            'Depending on the final website setup, Velvoix may use functional cookies, analytics cookies and, where later relevant and permitted, additional cookie categories.',
          ],
          bullets: [
            'Functional cookies for core operation, security and preferences',
            'Analytics cookies or similar technologies for website insight',
            'Additional tooling or categories are only used and specified where they are actually relevant.',
          ],
        },
        {
          id: 'purposes',
          title: '3. The purposes for which these technologies are used',
          paragraphs: [
            'Velvoix may use cookies and similar technologies to keep the website functioning properly, measure performance, keep forms workable, reduce misuse and understand how the website is used.',
          ],
          bullets: [
            'Website functionality and session handling',
            'Security and misuse prevention',
            'Performance and error analysis',
            'Usage insight to improve the website',
          ],
        },
        {
          id: 'tooling',
          title: '4. Tooling and providers',
          paragraphs: [
            'Specific cookie and analytics tooling may be completed or adjusted as the website setup evolves.',
          ],
          bullets: [
            'Cookie and analytics tooling will be specified once it has been definitively established.',
            'Hosting and infrastructure providers are engaged contractually where required.',
          ],
        },
        {
          id: 'preferences',
          title: '5. Managing preferences',
          paragraphs: [
            'Where a cookie banner, preference centre or similar setting is available, choices can be managed there. In addition, browsers often allow cookies to be blocked or deleted.',
            'Disabling certain cookies may affect the functionality or user experience of the website.',
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



