
export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorImage?: string;
  authorBio?: string;
  publishDate: string;
  readTime: number;
  category: 'politics' | 'tech' | 'sports' | 'culture' | 'business';
  image: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Durchbruch in der Quantencomputing-Forschung verändert die Technologielandschaft',
    excerpt: 'Ein neuer Quantenprozessor erreicht erstmals stabile Berechnungen bei Raumtemperatur und könnte die Art, wie wir Computing verstehen, revolutionieren.',
    content: `Die Welt der Technologie steht vor einer Revolution. Forscher der Technischen Universität München haben einen Durchbruch erzielt, der die Grenzen des bisher Möglichen sprengt.

Der neue Quantenprozessor arbeitet erstmals bei Raumtemperatur stabil und erreicht dabei eine Rechenleistung, die herkömmliche Supercomputer um das Millionenfache übertrifft. Diese Entwicklung könnte Bereiche von der Kryptographie bis hin zur Medikamentenentwicklung grundlegend verändern.

## Technische Innovation mit weitreichenden Folgen

Die Besonderheit des neuen Systems liegt in seiner neuartigen Architektur. Während bisherige Quantencomputer aufwendige Kühlsysteme benötigten, um bei nahezu absolutem Nullpunkt zu funktionieren, nutzt das neue Design spezielle Kristallstrukturen, die Quantenzustände auch bei normalen Temperaturen stabil halten.

> "Das ist nicht nur ein technischer Fortschritt, sondern ein Paradigmenwechsel. Wir machen Quantencomputing zum ersten Mal praktisch nutzbar für den alltäglichen Einsatz", erklärt Projektleiterin Dr. Sarah Chen.

Die Auswirkungen sind bereits jetzt spürbar. Erste Partnerschaften mit großen Technologieunternehmen wurden geschlossen, und die Anwendungsmöglichkeiten scheinen grenzenlos.

## Blick in die Zukunft

Experten prognostizieren, dass diese Technologie innerhalb der nächsten fünf Jahre kommerziell verfügbar sein könnte. Die Implikationen für Bereiche wie künstliche Intelligenz, Klimamodellierung und Finanzanalyse sind immens.`,
    author: 'Dr. Michael Weber',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    authorBio: 'Technologie-Experte und Wissenschaftsjournalist',
    publishDate: '11. Juni 2025',
    readTime: 8,
    category: 'tech',
    image: 'https://images.unsplash.com/photo-1518109268585-0e197da80d5c?w=1200&h=800&fit=crop'
  },
  {
    id: '2',
    title: 'Neue klimapolitische Initiative setzt Maßstäbe für nachhaltige Stadtentwicklung',
    excerpt: 'Deutsche Großstädte starten ambitioniertestes Umweltprogramm seit Jahrzehnten. Bis 2030 sollen 50% der Verkehrsflächen zu Grünzonen werden.',
    content: `In einer beispiellosen Kooperation haben sich die größten deutschen Städte zu einem revolutionären Umweltprogramm verpflichtet. Das Projekt "Grüne Metropolen 2030" sieht vor, dass bis zum Ende des Jahrzehnts die Hälfte aller städtischen Verkehrsflächen in Grünzonen umgewandelt werden.

München macht den Anfang und startet bereits im kommenden Monat mit der Umgestaltung der Innenstadt. Parkplätze weichen Pocket Parks, Straßen werden zu grünen Boulevards und Dächer zu urbanen Gärten.

## Gesellschaftlicher Wandel

Die Initiative geht weit über reine Umweltschutzmaßnahmen hinaus. Sie stellt einen fundamentalen Wandel in der Art dar, wie wir urbanen Raum nutzen und gestalten.

> "Wir erleben gerade den Übergang zur postautomobilen Stadt. Das ist keine Utopie mehr, sondern konkrete Realität", sagt Münchens Oberbürgermeisterin Anna Hoffmann.

Die ersten Pilotprojekte zeigen bereits beeindruckende Ergebnisse: 40% weniger Luftverschmutzung, 25% niedrigere Temperaturen in den Sommermonaten und eine dramatische Steigerung der Lebensqualität für Anwohner.

## Wirtschaftliche Chancen

Neben den ökologischen Vorteilen entstehen auch neue wirtschaftliche Möglichkeiten. Innovative Unternehmen entwickeln Technologien für vertikale Gärten, smarte Bewässerungssysteme und nachhaltige Materialien für den städtischen Umbau.`,
    author: 'Lisa Martinez',
    authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b15f?w=150&h=150&fit=crop&crop=face',
    authorBio: 'Politikjournalistin und Umwelt-Expertin',
    publishDate: '10. Juni 2025',
    readTime: 6,
    category: 'politics',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=800&fit=crop'
  },
  {
    id: '3',
    title: 'Fußball-Europameisterschaft 2025: Deutschland erreicht nach dramatischem Elfmeterschießen das Finale',
    excerpt: 'Nach einem nervenaufreibenden Halbfinale gegen Frankreich steht Deutschland im EM-Finale. Torwart Manuel Neuer wird zum Helden der Nation.',
    content: `Es war ein Abend, der in die Geschichtsbücher des deutschen Fußballs eingehen wird. Nach 120 Minuten voller Dramatik und Emotionen sicherte sich die deutsche Nationalmannschaft ihren Platz im EM-Finale 2025.

Das Halbfinale gegen Frankreich hatte alles, was ein großes Fußballspiel ausmacht: spektakuläre Tore, kontroverse Schiedsrichterentscheidungen und am Ende ein Elfmeterschießen, das die Nerven aller Beteiligten auf eine harte Probe stellte.

## Der Held des Abends

Manuel Neuer, der mit seinen 39 Jahren eigentlich schon am Ende seiner Karriere stehen sollte, zeigte eine Leistung für die Ewigkeit. Zwei gehaltene Elfmeter im Shootout machten ihn zum Helden einer ganzen Nation.

> "Ich habe schon viele große Spiele erlebt, aber das hier war etwas ganz Besonderes. Die Unterstützung der Fans war unglaublich", sagte Neuer nach dem Spiel sichtlich bewegt.

Die Szenen nach dem entscheidenden Elfmeter waren elektrisierend. Spieler und Fans lagen sich in den Armen, während sich die Mannschaft bereits auf das Finale am kommenden Sonntag gegen Spanien vorbereitet.

## Blick aufs Finale

Mit diesem Sieg hat Deutschland bewiesen, dass Erfahrung und Mentalität in entscheidenden Momenten den Unterschied machen können. Das Finale gegen Spanien verspricht ein Duell der Generationen zu werden.`,
    author: 'Thomas Kaufmann',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    authorBio: 'Sportjournalist und EM-Korrespondent',
    publishDate: '9. Juni 2025',
    readTime: 5,
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&h=800&fit=crop'
  },
  {
    id: '4',
    title: 'Renaissance der analogen Kunst: Junge Künstler entdecken traditionelle Techniken neu',
    excerpt: 'Eine neue Generation von Künstlern wendet sich bewusst von digitalen Medien ab und findet in jahrhundertealten Techniken ihre kreative Stimme.',
    content: `In einer Zeit, in der künstliche Intelligenz Bilder in Sekundenschnelle generiert und digitale Kunst die Galerien erobert, passiert etwas Unerwartetes: Eine wachsende Zahl junger Künstler kehrt zu den traditionellen Techniken zurück.

Ölmalerei, Kupferstich und Steinbildhauerei erleben eine Renaissance, die niemand für möglich gehalten hätte. Was treibt diese Generation dazu, sich bewusst für die "langsameren" Kunstformen zu entscheiden?

## Die Sehnsucht nach Authentizität

"In einer Welt voller digitaler Oberflächlichkeit suche ich nach etwas Echtem, Greifbarem", erklärt die 28-jährige Malerin Sophie Brenner ihr Schaffen. Ihre hyperrealistischen Porträts entstehen ausschließlich mit Ölfarben und benötigen Monate der Arbeit.

> "Jeder Pinselstrich erzählt eine Geschichte. Das kann keine KI replizieren", sagt Brenner über ihre Arbeit.

Diese Bewegung ist mehr als nur künstlerischer Trend. Sie spiegelt eine gesellschaftliche Sehnsucht nach Entschleunigung und handwerklicher Perfektion wider.

## Neue Märkte entstehen

Galeristen berichten von einem stark gestiegenen Interesse an traditionell geschaffenen Kunstwerken. Sammler zahlen Premiumpreise für Arbeiten, die den Entstehungsprozess noch "sichtbar" machen.

Die Ironie ist offensichtlich: Gerade die Generation, die mit Smartphones aufgewachsen ist, wendet sich den langsamsten und arbeitsintensivsten Kunstformen zu.`,
    author: 'Clara Zimmermann',
    authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    authorBio: 'Kunstkritikerin und Kuratorin',
    publishDate: '8. Juni 2025',
    readTime: 7,
    category: 'culture',
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200&h=800&fit=crop'
  },
  {
    id: '5',
    title: 'Startup-Boom in der Biotech-Branche: Deutsche Unternehmen führen bei personalisierten Medikamenten',
    excerpt: 'Berliner und Münchener Biotechnologie-Unternehmen entwickeln maßgeschneiderte Therapien, die die Medizin revolutionieren könnten.',
    content: `Die deutsche Biotechnologie-Szene erlebt einen beispiellosen Aufschwung. Allein in den letzten sechs Monaten haben Startup-Unternehmen aus Berlin und München Investitionen in Höhe von über 2 Milliarden Euro eingeworben.

Der Grund für diese Begeisterung liegt in bahnbrechenden Entwicklungen im Bereich der personalisierten Medizin. Deutsche Forscher haben Verfahren entwickelt, mit denen Medikamente individuell auf die genetische Ausstattung einzelner Patienten abgestimmt werden können.

## Medizin der Zukunft

Das Münchener Unternehmen GeneTech hat ein Verfahren patentiert, das es ermöglicht, innerhalb von 48 Stunden maßgeschneiderte Krebstherapien zu entwickeln. Die ersten klinischen Studien zeigen Erfolgsraten von über 90%.

> "Wir behandeln nicht mehr Krankheiten, sondern individuelle Menschen mit ihren einzigartigen genetischen Profilen", erklärt CEO Dr. Martin Schwarz.

Diese Entwicklung stellt die traditionelle Pharmaindustrie vor völlig neue Herausforderungen. Massenproduktion weicht der Einzelfertigung, Standard-Medikamente werden durch personalisierte Lösungen ersetzt.

## Wirtschaftliche Transformation

Die Auswirkungen gehen weit über die Medizin hinaus. Eine ganze Industrie muss sich neu erfinden, von der Produktion über die Logistik bis hin zur Regulierung.

Experten schätzen, dass dieser Wandel bis 2030 über 100.000 neue Arbeitsplätze in Deutschland schaffen wird. Die Bundesregierung hat bereits ein Förderprogramm in Höhe von 5 Milliarden Euro angekündigt.`,
    author: 'Dr. Robert Fischer',
    authorImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
    authorBio: 'Wirtschaftsjournalist und Biotech-Experte',
    publishDate: '7. Juni 2025',
    readTime: 9,
    category: 'business',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&h=800&fit=crop'
  }
];
