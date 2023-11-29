const { sum } = require('lodash');


function rataRataLodash(arr) {

  const jumlah = sum(arr);


  const rataRata = jumlah ;


  return rataRata;
}


const nilaiArray = [10, 15, 20, 30, 5, 25, 30, 100, 80, 70, 15];
const rataRataHasil = rataRataLodash(nilaiArray);

console.log("Rata-rata :", rataRataHasil);