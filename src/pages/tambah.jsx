// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

function Add() {
    const [produk, setProduk] = useState("");
    const [harga, setHarga] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [gambar, setGambar] = useState("");

  const addData = async (e) => {
    e.preventDefault(); // menghindari reload(harus 1 file)

    try {
      await axios.post("http://localhost:5000/minumans", {  //pemanggilan Axios untuk melakukan permintaan HTTP POST ke endpoint yang diberikan
        produk: produk, //di sebalah kiri mengambil dari db.json  // sebelah kanan dari conts diatas
        harga: harga,
        deskripsi: deskripsi,
        gambar: gambar,
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  


  return (
    <div style={{ padding: "50px" }}>
      <h1>Form Tambah Data</h1>

      <Form onSubmit={addData}>
        <Form.Group className="mb-3" >
          <Form.Label>Nama Produk</Form.Label>
          <Form.Control
            name="produk"
            id="produk"
            value={produk}
            onChange={(e) => setProduk(e.target.value)}
            type="text"
            placeholder="nama Produk"
          />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Harga</Form.Label>
          <Form.Control
            type="number"
            name="harga"
            id="harga"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
            placeholder="Harga"
          />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Deskripsi</Form.Label>
          <Form.Control
            type="text"
            name="text"
            id="deskripsi"
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
            placeholder="Deskripsi"
          />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Harga</Form.Label>
          <Form.Control
            type="text"
            name="gambar"
            id="gambar"
            value={gambar}
            onChange={(e) => setGambar(e.target.value)}
            placeholder="Link Gambar"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Add;
