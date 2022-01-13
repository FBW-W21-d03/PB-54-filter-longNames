// Wir wollen alle Namen verwerfen, deren Länge den Wert von 15 Zeichen übersteigt.

// ## Aufgabenstellung - Teil 1
// Schreibe ein Array mit mindestens fünf Namen und folgenden Personen: 'Pippi Longstocking', 'Bartholomew Roberts' und 'Hans Holbein the Younger'.
const namen = ['Pippi Longstocking', 'Bartholomew Roberts', 'Hans Holbein the Younger'];
const aufgabenstellung = namen.filter(long => long.length);
// ## Aufgabenstellung - Teil 2
// Wende nun die filter()-Methode auf das Array an, um nur Namen zu filtern, deren Länge kleiner oder gleich 15 ist.
function filter(long) { 
    return long.length <= 15;

}

// ## Aufgabenstellung - Teil 3
// Versuche nun den Gegensatz - Nur Namen länger als 15 Zeichen.

console.log(aufgabenstellung);