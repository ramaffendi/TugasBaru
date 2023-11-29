function rataRataManual(nilai) {
  let jumlah = 0;

  for (let i = 0; i < nilai.length; i++) {
    jumlah = jumlah + nilai[i];
  }

  const rataRata = jumlah 

  return rataRata;
}

const nilaiArray = [10, 15, 20, 30, 5, 25, 30, 100, 80, 70, 15];
const rataRataHasil = rataRataManual(nilaiArray);

// console.log('Rata-rata:', rataRataHasil);
const angkaDibagi = rataRataHasil / nilaiArray.length
console.log(angkaDibagi);