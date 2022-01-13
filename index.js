const namen =['Pippi Longstocking', 'Bartholomew Roberts', 'Hans Holbein the Younger', 'Altaha', 'Mazen'];

namen.sort();

const result = namen.filter((checkNamen) => checkNamen.length <= 15);
const result2 = namen.filter((checkNamen) => checkNamen.length > 15);




console.log("Länge kleiner oder gleich 15 ist.", result);
console.log("länger als 15 Zeichen.", result2);
