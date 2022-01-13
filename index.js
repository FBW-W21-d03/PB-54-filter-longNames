// 1 )
const array = ['Pippi Longstocking', 'Bartholomew Roberts', 
'Hans Holbein the Younger', 'Hayat Alkheder', 'Lilith','Rodi Ibrahim','lalash']
// 2 )
const arrayFilltered = array.filter((namen) => namen.length <= 15);
console.log(arrayFilltered);
// 3 )
const arrayFilltered2 = array.filter((namen) => namen.length > 15);
console.log(arrayFilltered2);


