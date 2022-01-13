// Wir wollen alle Namen verwerfen, deren Länge den Wert von 15 Zeichen übersteigt.

// ## Aufgabenstellung - Teil 1
// Schreibe ein Array mit mindestens fünf Namen und folgenden Personen: 'Pippi Longstocking', 'Bartholomew Roberts' und 'Hans Holbein the Younger'.
const namen = ['Pippi Longstocking', 'Bartholomew Roberts', 'Hans Holbein the Younger', 'Bartholomew', "Aladin"];
namen.sort();
// ## Aufgabenstellung - Teil 2
// Wende nun die filter()-Methode auf das Array an, um nur Namen zu filtern, deren Länge kleiner oder gleich 15 ist.
const aufgabenstellung = namen.filter((item) => {
return item.length <= 15;
});

// ## Aufgabenstellung - Teil 3
// Versuche nun den Gegensatz - Nur Namen länger als 15 Zeichen.
const aufgabenstellung1 = namen.filter((item) => {
  return item.length >= 15;
});
console.log("Kleiner als 15: ", aufgabenstellung);
console.log("Länger als 15: ",aufgabenstellung1);