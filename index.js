const person = ["Martina Navratilova", "Bartolomeu "," Lonstocking", "Robert de Nero","Julia Roberts" , "Hans Holbein the Younger"];
const longestName = person.filter ((long)=> long.length<= 15);

const filter = person.filter ((longest)=> longest.length>=15);
console.log("Namen Länge kleiner oder gleich 15 ist:",longestName);
console.log("Namen länger als 15 Zeichen :",filter);