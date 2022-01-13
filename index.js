"use strict";

const namen = [
  "pippi",
  "Lonstocking",
  "Bartholomew",
  "Roberts",
  "Hans the Younger",
  "Fix",
  "Foxi",
];

const weniger = namen.filter((item) => {
  return item.length <= 8; /* Weniger als 8 */
});

const mehr = namen.filter((item) => {
  return item.length >= 16; /* Mehr als 16 */
});
console.log(namen);
console.log("weniger als:", weniger);
console.log("mehr als:", mehr);
