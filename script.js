const namen = ['Pippi Longstocking', 'Bartholomew Roberts', 'Hans Holbein the Younger', 'Baschir', "Tom"];

const array1 = namen.filter((item) => {
return item.length <= 15;
});


const array2 = namen.filter((item) => {
  return item.length >= 15;
});

console.log(array1);
console.log(array2);
