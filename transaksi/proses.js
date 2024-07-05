function tampilkanHargaLiter() {
  const hargaSelect = document.getElementById("harga");
  const jumlahUangInput = document.getElementById("jumlahUang");
  const hargaPerLiterDiv = document.getElementById("hargaPerLiter");
  const hargaTotalDiv = document.getElementById("hargaTotal");
  const jumlahLiterBeliDiv = document.getElementById("jumlahLiterBeli");

  let hargaPerLiter = 0;
  if (hargaSelect.value === "Pertamax") {
    hargaPerLiter = 12000;
  } else if (hargaSelect.value === "Pertalite") {
    hargaPerLiter = 10000;
  }

  hargaPerLiterDiv.classList.add("data");
  hargaTotalDiv.classList.add("data2");

  const jumlahUang = jumlahUangInput.value;
  const jumlahLiterBeli = jumlahUang / hargaPerLiter;
  const hargaTotal = jumlahLiterBeli * hargaPerLiter;

  hargaPerLiterDiv.textContent = `Harga per liter: Rp ${hargaPerLiter}`;
  hargaTotalDiv.textContent = `Harga total: Rp ${hargaTotal.toFixed(2)}`;
  jumlahLiterBeliDiv.textContent = `Jumlah liter beli: ${jumlahLiterBeli.toFixed(2)} liter`;

  document.getElementById("hargaPerLiterHidden").value = hargaPerLiter;
  document.getElementById("hargaTotalHidden").value = hargaTotal;
  document.getElementById("jumlahLiterHidden").value = jumlahLiterBeli;
}

function hitungKembalian() {
  const hargaTotalElement = document.getElementById("hargaTotal");
  const uangDiterimaInput = document.getElementById("uangDiterima");
  const kembalianElement = document.getElementById("kembalian");
  const hargaTotal = parseInt(hargaTotalElement.textContent.replace("Harga total: Rp", "").replace(",", ""));
  const uangDiterima = parseInt(uangDiterimaInput.value);
  kembalianElement.classList.add("data3");

  if (uangDiterima >= hargaTotal) {
    const kembalian = uangDiterima - hargaTotal;
    kembalianElement.textContent = `Kembalian: Rp${kembalian.toLocaleString()}`;
    document.getElementById("hargaPerLiterHidden").value = hargaPerLiter;
    document.getElementById("hargaTotalHidden").value = hargaTotal;
    document.getElementById("kembalianHidden").value = kembalian;
    document.getElementById("jumlahLiterHidden").value = jumlahLiterBeli;
  } else {
    kembalianElement.textContent = "Uang tidak cukup";
    document.getElementById("hargaPerLiterHidden").value = hargaPerLiter;
    document.getElementById("hargaTotalHidden").value = hargaTotal;
    document.getElementById("kembalianHidden").value = 0;
    document.getElementById("jumlahLiterHidden").value = jumlahLiterBeli;
  }
}
