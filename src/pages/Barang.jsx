import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

function Data() {
  const [makanan, setMakanan] = useState([]); // State berfungsi untuk menyimpan data sementara

  const getAll = () => {
    axios // axios berfungsi untuk request data melalui http
      .get(`http://localhost:2026/barang`) // mengambil data dari link tersebut
      .then((res) => {
        setMakanan(res.data);
      })
      .catch((error) => {
        alert("Terjadi kesalahan: " + error);
      });
  };

  const deleteUser = async (id) => {
    axios
      .delete("http://localhost:2026/barang/" + id)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div style={{ padding: "50px" }}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{ width: "20px" }}>No</th>
            <th>Nama Produk</th>
            <th>Harga</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {makanan.map((row, index) => (
            <tr key={row.id}>
              <td>{index + 1}</td>
              <td>{row.produk}</td>
              <td>{row.harga}</td>
              <td className="action">
                <a href={"/edit/" + row.id}>
                  <button
                    style={{
                      backgroundColor: "#8EC3B0",
                      border: "none",
                      color: "white",
                    }}
                    className="mx-1"
                  >
                    Edit
                  </button>
                </a>
                <button
                  style={{
                    backgroundColor: "#FC3C3C",
                    border: "none",
                    color: "white",
                  }}
                  className="mx-1"
                  onClick={() => deleteUser(row.id)}
                >
                  Hapus
                </button>
                <a href={"/detail/" + row.id}>
                  <button
                    style={{
                      backgroundColor: "#B47B84",
                      border: "none",
                      color: "white",
                    }}
                    className="mx-1"
                  >
                    Detail
                  </button>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Data;
