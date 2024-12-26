import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

function Edit() {
  const history = useHistory();
  const {id} = useParams(); // mengambil nilai parameter yg ada di URL browser
  const [produk, setProduk] = useState("");
  const [harga, setHarga] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [gambar, setGambar] = useState("");

  // function get Id
  useEffect(() => {
    axios
      .get("http://localhost:5000/minumans/" + id)
      .then((response) => {
        const drink = response.data;
        setProduk(drink.produk);
        setDeskripsi(drink.deskripsi);
        setHarga(drink.harga);
        setGambar(drink.gambar);
      })
      .catch((error) => {
        alert("terjadi kesalahan sir" + error);
      });
  }, []);

 const edit = async (e) => {
  e.preventDefault();

  try {
    await axios.put("http://localhost:5000/minumans/" + id , {
      produk,
      deskripsi,
      harga,
      gambar,
    });

    history.push("/data");
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
 };

  return (
    <div style={{ padding: "50px" }}>
      <h1>Form Edit Data</h1>

      <Form onSubmit={edit}>
        <Form.Group className="mb-3">
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

        <Form.Group className="mb-3">
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
        <Form.Group className="mb-3">
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
        <Form.Group className="mb-3">
          <Form.Label>Link Gambar</Form.Label>
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

export default Edit;
