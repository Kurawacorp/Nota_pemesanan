document.addEventListener("DOMContentLoaded", function () {
  const orderForm = document.getElementById("orderForm");
  const notaCard = document.getElementById("notaCard");
  const downloadButton = document.getElementById("downloadButton");

  orderForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const tanggalElement = document.getElementById("tanggal");
    const tanggal = new Date(tanggalElement.value);
    const bulan = tanggal.toLocaleString("default", { month: "long" });
    const tahun = tanggal.getFullYear();
    const jumlah = document.getElementById("jumlah").value;
    const jenisKain = document.getElementById("jenisKain").value; // Ambil nilai dari select jenisKain
    const KodeKaos = document.getElementById("KodeKaos").value;
    const nomorHp = document.getElementById("nomorHp").value;
    const alamat = document.getElementById("alamat").value;
    const statusPembayaran = document.getElementById("statusPembayaran").value; // Ambil nilai dari select statusPembayaran

    const buktiPembayaranInput = document.getElementById("buktiPembayaran");
    const buktiPembayaranFile = buktiPembayaranInput.files[0];

    document.getElementById("cardNama").textContent = nama;
    document.getElementById(
      "cardTanggal"
    ).textContent = `${tanggal.getDate()} ${bulan} ${tahun}`;
    document.getElementById("cardJumlah").textContent = jumlah;
    document.getElementById("cardJenisKain").textContent = jenisKain;
    document.getElementById("cardKodeKaos").textContent = KodeKaos;
    document.getElementById("cardNomorHp").textContent = nomorHp;
    document.getElementById("cardAlamat").textContent = alamat;
    document.getElementById("cardStatusPembayaran").textContent =
      statusPembayaran; // Tampilkan status pembayaran di kartu

    if (buktiPembayaranFile) {
      const buktiPembayaranURL = URL.createObjectURL(buktiPembayaranFile);
      document
        .getElementById("cardBuktiPembayaran")
        .setAttribute("src", buktiPembayaranURL);
    }

    notaCard.style.backgroundColor = "#fff"; // Set latar belakang putih
    notaCard.style.display = "block"; // Tampilkan kartu

    html2canvas(notaCard).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg");
      downloadButton.style.display = "block";
      downloadButton.onclick = function () {
        notaCard.style.backgroundColor = "#fff"; // Ganti latar belakang saat diunduh
        const a = document.createElement("a");
        a.href = imgData;
        a.download = `${nama}_nota_pesanan.jpg`;
        a.click();
        downloadButton.style.display = "none"; // Sembunyikan tombol unduh
        notaCard.style.backgroundColor = "hsl(0, 0%, 100%)"; // Kembalikan latar belakang
      };
    });
  });
});
