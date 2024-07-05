<?php
  $jenisBensin = $_POST["jenisBensin"];
  $jumlahUang = $_POST["jumlahUang"];
  $uangDiterima = $_POST["uangDiterima"];

  if ($jenisBensin == "Pertamax") {
    $hargaPerLiter = 12000;
  } elseif ($jenisBensin == "Pertalite") {
    $hargaPerLiter = 10000;
  } else {
    echo "Invalid jenis bensin";
    exit;
  }

  $jumlahLiter = number_format($jumlahUang / $hargaPerLiter, 2);
  $hargaTotal = $jumlahLiter * $hargaPerLiter;
  $kembalian = ($uangDiterima - $hargaTotal);

  $data = "$jenisBensin|$jumlahLiter|$hargaPerLiter|$hargaTotal|$uangDiterima|$kembalian\n";

  $file = fopen("../transactions.txt", "a");
  fwrite($file, $data);
  fclose($file);

  echo "Transaction recorded successfully!";
?>