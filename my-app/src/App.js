import React, { useState } from "react";

// Data awal tabel mahasiswa
const arrMahasiswa = [
  {
    nim: "18010245",
    nama: "Eka Putra",
    jurusan: "Teknik Informatika",
    asalProvinsi: "DKI Jakarta",
  },
  {
    nim: "19010214",
    nama: "Lisa Permata",
    jurusan: "Sistem Informasi",
    asalProvinsi: "Sumatera Barat",
  },
  {
    nim: "20010710",
    nama: "Rudi Setiawan",
    jurusan: "Ilmu Komputer",
    asalProvinsi: "Jawa Tengah",
  },
  {
    nim: "20010790",
    nama: "Friska Ramadhani",
    jurusan: "Ilmu Komputer",
    asalProvinsi: "Kalimantan Barat",
  },
];

const App = () => {
  const [mahasiswas, setMahasiswas] = useState(arrMahasiswa);

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
                <tr key={mahasiswa.nim}>
                  <td>{mahasiswa.nim}</td>
                  <td>{mahasiswa.nama}</td>
                  <td>{mahasiswa.jurusan}</td>
                  <td>{mahasiswa.asalProvinsi}</td>
                  <td>
                    <button className="btn btn-secondary me-2">Edit</button>
                    <button className="btn btn-danger">Hapus</button>
                  </td>
                </tr>
              ))}

              <tr>
                <td colSpan="5">
                  <form>
                    <div className="row row-cols-5 g-3">
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          name="nim"
                          placeholder="search"
                          autoComplete="off"
                        />
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          name="nama"
                          autoComplete="off"
                          placeholder="search"
                        />
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          name="jurusan"
                          placeholder="search"
                          autoComplete="off"
                        />
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          name="asalProvinsi"
                          placeholder="search"
                          autoComplete="off"
                        />
                      </div>
                      <div className="col">
                        <button type="submit" className="btn btn-primary">
                          Tambah
                        </button>
                      </div>
                    </div>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
