const people= ["Jessy Jess", "Bartolomeu Anderson", 'Pippi Longstocking', 'Bartholomew Roberts' , 'Hans Holbein the Younger'];
const longestName = people.filter((long)=> long.length<= 15);
//3
const newResult = people.filter ((longest)=> longest.length>=15);
console.log("Names unter 15:",longestName);
console.log("Names more 15 are :",newResult);