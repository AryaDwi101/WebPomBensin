fetch("../transactions.txt")
  .then((response) => response.text())
  .then((data) => {
    const transactions = data.split("\n");
    transactions.forEach((transaction) => {
      const [jenisBensin, jumlahLiter, hargaPerLiter, hargaTotal, uangDiterima, kembalian] = transaction.split("|");
      const tableRow = `
        <tr>
          <td>${jenisBensin}</td>
          <td>${jumlahLiter}</td>
          <td>Rp ${hargaPerLiter}</td>
          <td>Rp ${hargaTotal}</td>
          <td>Rp ${uangDiterima}</td>
          <td>Rp ${kembalian}</td>
        </tr>
      `;
      document.getElementById("transaction-list").innerHTML += tableRow;
    });
  });
