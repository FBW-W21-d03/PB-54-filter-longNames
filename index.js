// javaScript-filter-longNames
// Aufgabenstellung - Teil 1
const array = ['Pippi Longstocking', 'Bartholomew Roberts' , 'Hans Holbein the Younger' , 'Peter' , 'Claudia'];
// Aufgabenstellung - Teil 2
const arrayFiltered = array.filter((nameLength) => nameLength.length <= 15);
console.log(arrayFiltered);
// Aufgabenstellung - Teil 3
const arrayFiltered2 = array.filter((nameLength) => nameLength.length > 15);
console.log(arrayFiltered2);