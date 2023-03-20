import React, { useState } from "react";
import RowMahasiswa from "./components/RowMahasiswa";
import RowTambahMahasiswa from "./components/RowTambahMahasiswa";

const arrMahasiswas = [
  {
    nim: "18010245",
    nama: "Eka Putra",
    jurusan: "Teknik Informatika",
    asalProvinsi: "DKI Jakarta",
  },
];

const App = () => {
  const [mahasiswas, setMahasiswas] = useState(arrMahasiswas);

  const handleTambahMahasiswa = (data) => {
    const newMahasiswas = [...mahasiswas, data];
    setMahasiswas(newMahasiswas);
  };

  const handleEditMahasiswa = (data) => {
    const result = mahasiswas.findIndex(
      (mahasiswa) => mahasiswa.nim === data.nim
    );

    const newMahasiswas = mahasiswas;
    newMahasiswas.splice(result, 1, data);
    setMahasiswas([...newMahasiswas]);
  };
  
  const handleHapusMahasiswa = (e) => {
    
    const result = mahasiswas.findIndex(
      (mahasiswa) => mahasiswa.nim === e.target.id
    );

    const newMahasiswas = mahasiswas;
    newMahasiswas.splice(result, 1);
    setMahasiswas([...newMahasiswas]);

  };

  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col">
          <h1 className="text-center">Tabel Mahasiswa</h1>

          <table className="table mt-4">
            <thead>
              <tr>
                <th>NIM</th>
                <th>Nama</th>
                <th>Jurusan</th>
                <th>Asal Provinsi</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {mahasiswas.map((mahasiswa) => (
                <RowMahasiswa
                  key={mahasiswa.nim}
                  mahasiswa={mahasiswa}
                  onEditMahasiswa={handleEditMahasiswa}
                  onHapusMahasiswa={handleHapusMahasiswa}
                />
              ))}
              <RowTambahMahasiswa
                mahasiswas={mahasiswas}
                onTambahMahasiswa={handleTambahMahasiswa}
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
