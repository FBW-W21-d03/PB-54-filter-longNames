const namen = ["pippi","Lonstocking","Bartholomew","Roberts","Hans the Younger"];

const array = namen.filter((item) => {
return item.length <= 15;
});

const array2 = namen.filter((item) => {
  return item.length >= 15;
});
console.log(namen);
console.log("Array",array);
console.log("Array2",array2);

