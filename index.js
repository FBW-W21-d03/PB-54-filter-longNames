const namen = ["Pippi Longstocking",
 "Bartholomew Roberts",
"Hans Holbein the Younger",
"Alexandera Müller",
"Rajwinder"
];

const longName = namen.filter((long) => long.length <= 15);

const longestName = namen.filter((longest) => longest.length >= 15);
console.log("Names are under 15 characters:", longName);
console.log("Names are more than 15 characters :", longestName);