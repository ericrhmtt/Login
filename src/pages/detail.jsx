import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function Detail() {
  const {id} = useParams();
  const [makanan, setMakanan] = useState([]);



  useEffect(() => {
    const getData = () => {
      axios
        .get("http://localhost:5000/minumans/" + id)
        .then((data) => setMakanan(data.data))
        .catch((error) => console.log(error));
    };
    getData();
  }, []);

  return (
    <div>
      <h3>
        <span>{makanan.id}</span> {makanan.produk}
      </h3>
      <p>{makanan.harga}</p>
      <p>{makanan.deskripsi}</p>

    </div>
  );
}

export default Detail;
