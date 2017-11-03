# ShotGun
Inlämningsuppgift till Javascript 1 - Nackademin

Inlämningsuppgift 2: Skapa ett spel -Shotgun
Beskrivning
Uppgiften handlar om att skapa spelet Shotgun. Ni skall bygga ett program där användaren
spelar mot datorn. Datorn väljer sitt drag slumpmässigt. Shotgun påminner en del om "sten,
sax och påse", men låter spelaren välja mellan att "Skjuta", "Ladda" och "Blocka". För att
vinna en spelomgång gäller det att “skjuta” samtidigt som motspelaren “blockar”. Varje
spelare börjar utan skott, och för att få fler skott måste du “Ladda”. Varje gång du laddar får
du ett nytt skott. Skjuta mot Skjuta resulterar i att båda spelarna förlorar ett skott, men ingen
vinner. Då en spelare samlat på sig tre skott kan denne använda sig av “Shotgun”, vilket
vinner även om motspelaren “blockar” eller “skjuter”. Gränssnittet till applikationen skall
skapas på en webbsida.
Nedan listas alla tänkbara scenarion:
Ladda mot ladda: Båda spelarna får ett skott
Ladda mot blocka: Spelaren som laddar får ett skott
Blocka mot blocka: Ingenting händer
Skjuta mot blocka: Spelaren som skjuter förlorar ett skott
Skjuta mot skjuta: Båda spelarna förlorar ett skott
Skjuta mot ladda: Spelaren som skjuter vinner spelet
Krav för att uppgiften skall bli godkänd:
- Det ska tydligt framgå hur många skott varje spelare har.
- Det ska inte vara möjligt att skjuta om man inte har några skott
- Datorspelaren ska inte heller kunna skjuta om den inte har några skott.
- Det ska framgå när någon av spelarna vunnit och man ska kunna välja att spela igen.
- Möjligheten att använda “Shotgun” ska bara finnas så länge användaren har minst tre
skott.
- Koden skall fungera och skrivas objektorienterat dvs. ni skall använda det vi har gått
igenom på lektionerna kring objektorientering. Applikationen skall gå att köra utan fel.
