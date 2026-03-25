README - Person Search
Beskrivelse

Dette er en enkel og stilfull person-søk-applikasjon laget med HTML, CSS og JavaScript. Applikasjonen lar brukeren søke etter personer i en forhåndsdefinert liste basert på fornavn, etternavn eller fulltnavn. Ved søk vises detaljer som navn, posisjon, beskrivelse, bilde og telefonnummer (privat og jobb).

Designet har et mørkt tema med røde neon-effekter som gir et futuristisk og lettlest grensesnitt.

Funksjonalitet
Søkefelt hvor du kan skrive inn et navn (fornavn, etternavn eller begge deler).
Søket er case-insensitivt og sjekker om søketeksten finnes i fornavn, etternavn eller fulltnavn.
Viser en liste over alle matchende personer med:
Profilbilde
Fullt navn
Posisjon/tittel
Kort info
Telefonnummer privat og jobb
Hvis ingen treff, vises meldingen: "No people found."
Søket trigges både ved trykk på søkeknappen og ved å trykke Enter i søkefeltet.
Søket nullstilles etter gjennomført søk for enklere ny søking.


Filstruktur
/ (rot)
|-- index.html          # HTML-strukturen for siden
|-- style.css           # Styling for siden, inkludert layout, farger og animasjoner
|-- js.js               # JavaScript for søkefunksjonalitet og DOM-manipulering
|-- Images/             # Mappe med alle bilde-filer som vises i søkeresultatene
    |-- Untitled3.jpg
    |-- Untitled2.jpg
    |-- Untitled1.jpg
    |-- images.jpg
    |-- images0.jpg
    |-- Erwin_Smith_(Anime)_character_image.webp

    
Teknologier brukt
HTML: Grunnstruktur og inputfelt for søk
CSS: Styling med fokus på mørkt tema og neon-rød effekt
JavaScript: Søkefunksjon, filtrering av data, dynamisk opprettelse av resultater i DOM
Hvordan bruke applikasjonen
Åpne index.html i en nettleser.
Skriv inn et navn eller del av et navn i søkefeltet.
Klikk på "Search"-knappen eller trykk Enter.
Se søkeresultatene dukke opp under søkefeltet.
Hvis det ikke finnes noen treff, vises en feilmelding.
Søkefeltet tømmes automatisk for å kunne skrive et nytt søk.
Dataformat (people-array)

Applikasjonen bruker et JavaScript-array kalt people, hvor hver person er et objekt med følgende egenskaper:

{
  firstName: "Eren",
  lastName: "Jaeger",
  position: "Soldier",
  info: "Member of the Scout Regiment.",
  image: "Images/Untitled3.jpg",
  phone: {
    private: "12345678",
    work: "87654321"
  }
}
Mulige forbedringer
Legge til søk på stillingsbeskrivelse eller info-tekst.
Implementere autofullfør eller forslag under søkefeltet.
Gjøre grensesnittet mer responsivt og mobilvennlig.
Legge til paginering for store datamengder.
Mulighet for å sortere resultater etter navn eller posisjon.
Lisens

Denne koden er fri til bruk, modifisering og distribusjon.
