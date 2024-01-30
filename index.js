const dosen_kaprodiNIDN = 1102020; // Ganti dengan NIDN yang akan di edit

const updatedData = {
  nama: "Paka Somantri",
  gender: "l",
  kaprodi: "TI",
  alamat: "Sukabumi",
};

fetch(`http://localhost:3000/mahasiswa/${mahasiswaNim}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(updatedData),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
