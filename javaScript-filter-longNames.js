const employees = ['Pippi Longstocking', 'Bartholomew Roberts', 'Hans Holbein the Younger'];
console.log("Aufgabe 1: \n", employees);

const kleine15 = employees.filter((zahl) => zahl.length < 15);
console.log("Aufgabe 2: \n", kleine15);

const gröser15 = employees.filter((zahl) => zahl.length > 15);
console.log("Aufgabe 3: \n", gröser15);
