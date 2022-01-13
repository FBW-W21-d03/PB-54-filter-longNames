
const personen =["Pippi Longstocking","molala","rabana","halala","Bartholomew Roberts","'Hans Holbein the Younger","kawan Azad abas","lana gourg hansmann","wilan broud kameil"];

const langNamen= personen.filter((item)=> item.length >15);
const kurzNamen= personen.filter((item)=> item.length <15);



console.log(langNamen);
console.log(kurzNamen);