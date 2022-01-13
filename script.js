const names = ["Pippi Longstocking", "Bartholomew Roberts", "Hans Holbein the Younger", "helena", "Bob" ,"Sham Alhakim"];
names.sort();

const newNames = names.filter((name) => name.length <= 15);
const newNames2 = names.filter((name) => name.length > 15);

console.log("ArrayNames less than 15 Letters:", `${newNames}`);
console.log("ArrayNames more than 15 Letters:", `${newNames2}`);